// @ts-check
import { memo } from 'react';
import { ChartBar, Factory, WarningCircle, Flask } from '@phosphor-icons/react';
import { useProductionImpact } from '../hooks/useProductionData';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

function formatNumber(n) {
  if (!n && n !== 0) return '—';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toLocaleString();
}

function ChartTooltip({ active, payload, label, unit }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface border border-border rounded-lg px-3 py-2 shadow-sm">
      <div className="font-mono text-[11px] text-text-tertiary">{label}</div>
      <div className="text-sm font-mono font-bold tabular-nums">{payload[0].value.toLocaleString()} {unit}</div>
    </div>
  );
}

const ProductionBarChart = memo(function ProductionBarChart({ data, title, unit }) {
  if (!data || data.length === 0) {
    return (
      <div className="p-6 border border-border rounded-xl bg-surface">
        <h3 className="font-medium text-sm mb-4">{title}</h3>
        <div className="flex items-center justify-center h-[180px] text-text-tertiary text-sm">No data available</div>
      </div>
    );
  }
  return (
    <div className="p-1.5 bg-white/[0.04] ring-1 ring-white/10 rounded-[1.5rem]">
      <div className="bg-surface rounded-[1.1rem] border border-white/10 p-5">
        <h3 className="font-medium text-sm mb-4">{title}</h3>
        <div className="w-full h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
              <XAxis dataKey="date" tick={{ fill: '#6B7A90', fontSize: 11, fontFamily: 'Geist, monospace' }} tickLine={false} axisLine={{ stroke: 'rgba(232,238,246,0.08)' }} interval="preserveStartEnd" />
              <YAxis tick={{ fill: '#6B7A90', fontSize: 11, fontFamily: 'Geist, monospace' }} tickLine={false} axisLine={false} tickFormatter={v => v >= 1000 ? (v/1000).toFixed(0) + 'K' : v} width={34} />
              <Tooltip content={<ChartTooltip unit={unit} />} cursor={{ fill: 'rgba(232,238,246,0.04)' }} />
              <Bar dataKey="value" fill="#5B8DD1" radius={[6, 6, 0, 0]} barCategoryGap="22%" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
});

const ProductionImpact = () => {
  const { data, error } = useProductionImpact();
  const showContent = data && !error;

  return (
    <section id="impact" className="py-24 md:py-32 bg-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="max-w-[720px]">
          <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase">Live from production floor — Google Sheets API</p>
          <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-[800] tracking-[-0.04em] leading-[0.9] text-balance">Production <span className="font-[300] italic text-text-tertiary">impact.</span></h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary max-w-[60ch] text-pretty">Real output, reject, and raw milk trends — not placeholders. Updated every 5 minutes with SWR cache and retry.</p>
        </div>

        {!showContent ? (
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="h-[140px] rounded-xl bg-white/[0.04] animate-pulse"></div>
            <div className="h-[140px] rounded-xl bg-white/[0.04] animate-pulse"></div>
            <div className="h-[140px] rounded-xl bg-white/[0.04] animate-pulse"></div>
          </div>
        ) : (
          <>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 p-6 rounded-xl bg-foreground text-background">
                <div className="font-mono text-[11px] tracking-wide uppercase opacity-60">Total Produced</div>
                <div className="mt-2 font-display text-[42px] font-[800] leading-none tracking-[-0.03em] tabular-nums">{formatNumber(data.totalProduction)} <span className="text-[18px] font-medium">L</span></div>
                <div className="mt-2 text-sm opacity-70">Avg {formatNumber(data.avgPerBatch)} L/batch • {data.distributionCities.join(' • ')}</div>
              </div>
              <div className="md:col-span-3 p-6 rounded-xl bg-surface border border-border">
                <div className="font-mono text-[11px] tracking-wide uppercase text-text-tertiary">Reject Rate</div>
                <div className="mt-2 font-display text-[32px] font-bold tabular-nums">{data.rejectRate}%</div>
                <div className="text-sm text-text-tertiary">cup 130 ml • target &lt;1%</div>
              </div>
              <div className="md:col-span-4 p-6 rounded-xl bg-surface border border-border">
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide uppercase text-text-tertiary"><Flask size={14} weight="light" /> Mozzarella First Batch</div>
                <div className="mt-2 font-display text-[28px] font-bold tabular-nums">180 pcs</div>
                <div className="text-sm text-text-tertiary">36 kg from 500 L • 7.2% yield • shipped to Bogor</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProductionBarChart data={data.cupTrend} title="Cup Production — Out trend" unit="Units" />
              <ProductionBarChart data={data.susuTrend} title="Raw Milk Processed — In trend" unit="L" />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductionImpact;
