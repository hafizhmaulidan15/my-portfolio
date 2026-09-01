import { useState, useEffect, useRef, useCallback } from 'react';
import { PRODUCTION_API } from '../data/production-config';

const CACHE_KEY = 'rsi-production-impact';
const CACHE_TTL = 5 * 60 * 1000; // 5 min
const RETRY_MAX = 3;
const RETRY_BASE_DELAY = 800;

function fetchWithRetry(url, signal, retries = RETRY_MAX) {
  const attempt = (n) =>
    fetch(url, { signal }).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    }).catch((err) => {
      if (signal.aborted) throw err;
      if (n >= retries) throw err;
      const delay = RETRY_BASE_DELAY * 2 ** n;
      return new Promise((r) => setTimeout(r, delay)).then(() => attempt(n + 1));
    });
  return attempt(0);
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch { return null; }
}

function writeCache(data) {
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data })); } catch { /* quota */ }
}

function parseDate(val) {
  if (!val) return null;
  if (val instanceof Date && !isNaN(val)) return val;
  if (typeof val === 'string') {
    const d = new Date(val);
    if (!isNaN(d)) return d;
  }
  if (typeof val === 'number') {
    const d = new Date(Math.round((val - 25569) * 86400000));
    if (!isNaN(d)) return d;
  }
  return null;
}

function formatLabel(d) {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[d.getMonth()] + ' ' + d.getDate();
}

function cleanNum(val) {
  if (val === null || val === undefined || val === '') return 0;
  const cleaned = val.toString().replace(/,/g, '').replace(/ /g, '');
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}

function parseSheetTrend(rows, field = 'In', minValue = 0) {
  const dateGroups = {};
  rows.forEach(row => {
    const ket = (row.Keterangan || row.keterangan || '').toString().toLowerCase();
    if (ket.includes('test') || ket.includes('testing') || ket.includes('silinder')) return;
    const d = parseDate(row.Tgl || row.tgl);
    if (!d) return;
    const val = cleanNum(row[field] || row[field.toLowerCase()]);
    if (val < minValue) return;
    const dateKey = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    if (!dateGroups[dateKey]) {
      dateGroups[dateKey] = { date: d, value: 0 };
    }
    dateGroups[dateKey].value += val;
  });
  return Object.values(dateGroups)
    .sort((a, b) => a.date - b.date)
    .map(item => ({ date: formatLabel(item.date), value: item.value }))
    .filter(item => item.value > 0);
}

export function useProductionImpact() {
  const cached = readCache();
  const [data, setData] = useState(cached);
  const [loading, setLoading] = useState(!cached);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);
  const fetchingRef = useRef(false);
  const dataRef = useRef(cached);
  useEffect(() => { dataRef.current = data; }, [data]);

  const fetchData = useCallback(async ({ background = false } = {}) => {
    if (fetchingRef.current) return;
    fetchingRef.current = true;
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    if (!background) setError(null);
    try {
      const [summaryRes, cupRes, susuRes] = await Promise.all([
        fetchWithRetry(`${PRODUCTION_API.URL}?action=summary`, ctrl.signal),
        fetchWithRetry(`${PRODUCTION_API.URL}?sheet=cup 130 ml`, ctrl.signal),
        fetchWithRetry(`${PRODUCTION_API.URL}?sheet=susu`, ctrl.signal),
      ]);

      const [summary, cupRows, susuRows] = await Promise.all([
        summaryRes.json(),
        cupRes.json(),
        susuRes.json(),
      ]);

      if (ctrl.signal.aborted) return;
      if (!Array.isArray(summary)) throw new Error('Invalid summary format');

      const susuSummary = summary.find((s) => s.name === 'susu');
      const totalProduction = susuSummary ? (susuSummary.totalIn || 0) : 0;

      const cupTrend = Array.isArray(cupRows) ? parseSheetTrend(cupRows, 'Out', 4000) : [];
      let rejectTotal = 0;
      let totalCupOut = 0;
      if (Array.isArray(cupRows)) {
        cupRows.forEach((row) => {
          const outVal = cleanNum(row.Out || row.out);
          const ket = (row.Keterangan || row.keterangan || '').toString().toLowerCase();
          if (ket.includes('test') || ket.includes('testing') || ket.includes('silinder')) return;
          totalCupOut += outVal;
          if (ket.includes('reject') || ket.includes('afkir')) rejectTotal += outVal;
        });
      }
      const rejectRate = totalCupOut > 0 ? Math.round((rejectTotal / totalCupOut) * 10000) / 100 : 0;

      const susuTrend = Array.isArray(susuRows) ? parseSheetTrend(susuRows, 'In', 800) : [];
      const batchCount = susuTrend.length;
      const avgPerBatch = batchCount > 0 ? Math.round(totalProduction / batchCount) : 0;

      const next = {
        totalProduction,
        rejectRate,
        avgPerBatch,
        cupTrend,
        susuTrend,
        distributionCities: ['Bogor', 'Sukabumi', 'Lampung'],
      };
      setData(next);
      writeCache(next);
      setError(null);
    } catch (err) {
      if (err.name === 'AbortError') return;
      if (!background || !dataRef.current) setError(err.message || 'Failed to fetch production data');
    } finally {
      fetchingRef.current = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // SWR: if cached, revalidate in background
    fetchData({ background: !!cached });
    const interval = setInterval(() => fetchData({ background: true }), 300000);
    return () => {
      abortRef.current?.abort();
      clearInterval(interval);
    };
  }, [fetchData, cached]);

  return { data, loading, error, refetch: () => fetchData({ background: false }) };
}
