import { useState, useEffect, useRef, useCallback } from 'react';
import { PRODUCTION_API } from '../data/production-config';

const CACHE_KEY = 'rsi-production-impact';
const CACHE_TTL = 15 * 60 * 1000;
const RETRY_MAX = 3;
const RETRY_BASE_DELAY = 400;
const FETCH_TIMEOUT = 7000;

const FALLBACK_DATA = {
  totalProduction: 53200,
  rejectRate: 0.85,
  avgPerBatch: 2120,
  totalMoza: 84.4,
  avgMoza: 42.2,
  cupTrend: [],
  susuTrend: [],
  mozaTrend: [],
  distributionCities: ['Bogor', 'Sukabumi', 'Lampung'],
};

function fetchWithTimeout(url, signal, timeout = FETCH_TIMEOUT) {
  const ctrl = new AbortController();
  const onAbort = () => ctrl.abort();
  if (signal) signal.addEventListener('abort', onAbort);
  const timer = setTimeout(() => ctrl.abort(), timeout);
  return fetch(url, { signal: ctrl.signal }).finally(() => {
    clearTimeout(timer);
    if (signal) signal.removeEventListener('abort', onAbort);
  });
}

function fetchWithRetry(url, signal, retries = RETRY_MAX) {
  const attempt = (n) =>
    fetchWithTimeout(url, signal).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    }).catch((err) => {
      if (signal?.aborted) throw err;
      if (err.name === 'AbortError') throw err;
      if (n >= retries) throw err;
      const delay = RETRY_BASE_DELAY * 2 ** n;
      return new Promise((r) => setTimeout(r, delay)).then(() => attempt(n + 1));
    });
  return attempt(0);
}

async function fetchJsonSafe(res) {
  const text = await res.text();
  if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
    throw new Error('Apps Script error — sheet not found or script error');
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error('Invalid JSON from Apps Script');
  }
}

async function fetchSheet(sheetName, signal) {
  const url = `${PRODUCTION_API.URL}?sheet=${encodeURIComponent(sheetName)}`;
  const res = await fetchWithRetry(url, signal);
  return fetchJsonSafe(res);
}

async function fetchMozaWithFallback(signal) {
  for (const name of PRODUCTION_API.SHEETS.MOZA_ALTS) {
    try {
      const data = await fetchSheet(name, signal);
      if (Array.isArray(data) && data.length > 0) {
        return { data, sheetUsed: name };
      }
      // empty array still counts as found, but try next if completely empty and we want to try others? keep first successful
      if (Array.isArray(data)) return { data, sheetUsed: name };
    } catch (e) {
      // try next alt name
      continue;
    }
  }
  return { data: [], sheetUsed: null };
}

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch { return null; }
}

function writeCache(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data })); } catch {}
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

function parseMozaTrend(rows) {
  // Moza sheet expected columns: Tgl, Keluar/Out/Qty, Keterangan, etc. Try common fields
  if (!Array.isArray(rows) || rows.length === 0) return { trend: [], total: 0 };
  // try to detect quantity field: Qty, Jumlah, Keluar, Out, Berat, Kg
  const sample = rows[0] || {};
  const keys = Object.keys(sample);
  const qtyKey = keys.find(k => /qty|jumlah|keluar|out|berat|kg|pcs/i.test(k)) || 'Qty';
  const trend = parseSheetTrend(rows, qtyKey, 10);
  let total = 0;
  rows.forEach(row => {
    const ket = (row.Keterangan || row.keterangan || '').toString().toLowerCase();
    if (ket.includes('test')) return;
    const d = parseDate(row.Tgl || row.tgl);
    if (!d) return;
    total += cleanNum(row[qtyKey] || row[qtyKey.toLowerCase()] || 0);
  });
  return { trend, total };
}

export function useProductionImpact() {
  const cached = readCache();
  const initial = cached || FALLBACK_DATA;
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(!cached);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);
  const fetchingRef = useRef(false);
  const dataRef = useRef(initial);
  useEffect(() => { dataRef.current = data; }, [data]);

  const fetchData = useCallback(async ({ background = false } = {}) => {
    if (fetchingRef.current) return;
    fetchingRef.current = true;
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    if (!background) setError(null);
    try {
      // Fetch core sheets in parallel with individual error handling — summary failure should not block trends
      const [summarySettled, cupSettled, susuSettled] = await Promise.allSettled([
        fetchWithRetry(`${PRODUCTION_API.URL}?action=summary`, ctrl.signal).then(fetchJsonSafe),
        fetchWithRetry(`${PRODUCTION_API.URL}?sheet=${encodeURIComponent(PRODUCTION_API.SHEETS.CUP)}`, ctrl.signal).then(fetchJsonSafe),
        fetchWithRetry(`${PRODUCTION_API.URL}?sheet=${encodeURIComponent(PRODUCTION_API.SHEETS.SUSU)}`, ctrl.signal).then(fetchJsonSafe),
      ]);

      if (ctrl.signal.aborted) return;

      const summary = summarySettled.status === 'fulfilled' && Array.isArray(summarySettled.value) ? summarySettled.value : null;
      const cupRows = cupSettled.status === 'fulfilled' && Array.isArray(cupSettled.value) ? cupSettled.value : [];
      const susuRows = susuSettled.status === 'fulfilled' && Array.isArray(susuSettled.value) ? susuSettled.value : [];

      const susuSummary = summary ? summary.find((s) => s.name === 'susu') : null;
      const totalProduction = susuSummary ? (susuSummary.totalIn || 0) : dataRef.current?.totalProduction || FALLBACK_DATA.totalProduction;

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
      const rejectRate = totalCupOut > 0 ? Math.round((rejectTotal / totalCupOut) * 10000) / 100 : dataRef.current?.rejectRate || FALLBACK_DATA.rejectRate;

      const susuTrend = Array.isArray(susuRows) ? parseSheetTrend(susuRows, 'In', 800) : [];
      const batchCount = susuTrend.length;
      const avgPerBatch = batchCount > 0 ? Math.round(totalProduction / batchCount) : dataRef.current?.avgPerBatch || FALLBACK_DATA.avgPerBatch;

      // Moza — optional, never block core metrics
      let mozaTrend = [];
      let totalMoza = 0;
      let avgMoza = 0;
      try {
        const { data: mozaRows } = await fetchMozaWithFallback(ctrl.signal);
        if (Array.isArray(mozaRows) && mozaRows.length > 0) {
          const parsed = parseMozaTrend(mozaRows);
          mozaTrend = parsed.trend;
          totalMoza = parsed.total;
          avgMoza = mozaTrend.length ? Math.round(totalMoza / mozaTrend.length) : 0;
        }
      } catch {
        // keep fallback
      }

      const next = {
        totalProduction: totalProduction || dataRef.current?.totalProduction || FALLBACK_DATA.totalProduction,
        rejectRate: rejectRate || dataRef.current?.rejectRate || FALLBACK_DATA.rejectRate,
        avgPerBatch: avgPerBatch || dataRef.current?.avgPerBatch || FALLBACK_DATA.avgPerBatch,
        totalMoza: totalMoza || dataRef.current?.totalMoza || FALLBACK_DATA.totalMoza,
        avgMoza: avgMoza || dataRef.current?.avgMoza || FALLBACK_DATA.avgMoza,
        cupTrend: cupTrend.length ? cupTrend : dataRef.current?.cupTrend || [],
        susuTrend: susuTrend.length ? susuTrend : dataRef.current?.susuTrend || [],
        mozaTrend: mozaTrend.length ? mozaTrend : dataRef.current?.mozaTrend || [],
        distributionCities: ['Bogor', 'Sukabumi', 'Lampung'],
      };
      setData(next);
      writeCache(next);
      setError(null);
    } catch (err) {
      if (err.name === 'AbortError') return;
      if (!dataRef.current || dataRef.current === FALLBACK_DATA) {
        setData(FALLBACK_DATA);
      }
      if (!background || !dataRef.current || dataRef.current === FALLBACK_DATA) {
        setError(err.message || 'Failed to fetch production data');
      }
    } finally {
      fetchingRef.current = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData({ background: !!cached });
    const interval = setInterval(() => fetchData({ background: true }), 300000);
    return () => {
      abortRef.current?.abort();
      clearInterval(interval);
    };
  }, [fetchData, cached]);

  return { data, loading, error, refetch: () => fetchData({ background: false }) };
}
