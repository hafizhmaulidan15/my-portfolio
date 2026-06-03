import { useState, useEffect } from 'react';
import { PRODUCTION_API } from '../data/production-config';

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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const [summaryRes, cupRes, susuRes] = await Promise.all([
          fetch(`${PRODUCTION_API.URL}?action=summary`),
          fetch(`${PRODUCTION_API.URL}?sheet=cup 130 ml`),
          fetch(`${PRODUCTION_API.URL}?sheet=susu`),
        ]);

        if (!summaryRes.ok || !cupRes.ok || !susuRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [summary, cupRows, susuRows] = await Promise.all([
          summaryRes.json(),
          cupRes.json(),
          susuRes.json(),
        ]);

        if (!mounted) return;
        if (!Array.isArray(summary)) throw new Error('Invalid summary format');

        // Only milk volume in liters
        const susuSummary = summary.find(s => s.name === 'susu');
        const totalProduction = susuSummary ? (susuSummary.totalIn || 0) : 0;

        // Cup 130 ml trend (Out = actual production usage) + reject rate
        const cupTrend = Array.isArray(cupRows) ? parseSheetTrend(cupRows, 'Out', 4000) : [];
        let rejectTotal = 0;
        let totalCupOut = 0;
        if (Array.isArray(cupRows)) {
          cupRows.forEach(row => {
            const outVal = cleanNum(row.Out || row.out);
            const ket = (row.Keterangan || row.keterangan || '').toString().toLowerCase();
            if (ket.includes('test') || ket.includes('testing') || ket.includes('silinder')) return;
            totalCupOut += outVal;
            if (ket.includes('reject') || ket.includes('afkir')) {
              rejectTotal += outVal;
            }
          });
        }
        const rejectRate = totalCupOut > 0
          ? Math.round((rejectTotal / totalCupOut) * 10000) / 100
          : 0;

        // Susu trend + batch count from susu sheet
        const susuTrend = Array.isArray(susuRows) ? parseSheetTrend(susuRows, 'In', 800) : [];
        const batchCount = susuTrend.length;
        const avgPerBatch = batchCount > 0 ? Math.round(totalProduction / batchCount) : 0;

        setData({
          totalProduction,
          rejectRate,
          avgPerBatch,
          cupTrend,
          susuTrend,
          distributionCities: ['Bogor', 'Sukabumi', 'Lampung'],
        });
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 300000);
    return () => { mounted = false; clearInterval(interval); };
  }, []);

  return { data, loading, error };
}
