// @ts-check
import { memo } from 'react';
import { useProductionImpact } from '../hooks/useProductionData';
import { PointsChart } from '@/components/ui/points-chart';
import { LoaderBars } from '@/components/ui/loaders-bars';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import MeasuredChartGate from '@/components/ui/MeasuredChartGate';

function formatNumber(n) {
 if (!n && n !== 0) return '';
 return Number(n).toLocaleString('en-US');
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
    <div className="p-1.5 bg-gradient-icon ring-1 ring-primary/10 rounded-[1.5rem] opacity-60">
      <div className="bg-surface rounded-[1.1rem] border border-border p-6">
        <h3 className="font-medium text-sm mb-6 tracking-wide">{title}</h3>
        <div className="w-full h-[260px] flex items-center justify-center">
          <LoaderBars barWidth={8} barHeight={64} gap={6} count={5} color="var(--primary)" />
        </div>
      </div>
    </div>
  );
 }
  return (
    <div className="p-1.5 bg-gradient-icon ring-1 ring-primary/10 rounded-[1.5rem]">
      <div className="bg-surface rounded-[1.1rem] border border-border p-6">
        <h3 className="font-medium text-sm mb-6 tracking-wide">{title}</h3>
        <div className="w-full h-[260px]">
   <MeasuredChartGate>
   <BarChart data={data} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
     <XAxis dataKey="date" tick={{ fill: '#8FA0B8', fontSize: 11, fontFamily: 'Geist, monospace' }} tickLine={false} axisLine={{ stroke: 'rgba(232,238,246,0.08)' }} interval="preserveStartEnd" />
     <YAxis tick={{ fill: '#8FA0B8', fontSize: 11, fontFamily: 'Geist, monospace' }} tickLine={false} axisLine={false} tickFormatter={v => v >= 1000 ? (v/1000).toFixed(0) + 'K' : v} width={34} />
    <Tooltip content={<ChartTooltip unit={unit} />} cursor={{ fill: 'rgba(232,238,246,0.04)' }} />
    <Bar dataKey="value" fill="#5B8DD1" radius={[6, 6, 0, 0]} barCategoryGap="22%" />
   </BarChart>
   </MeasuredChartGate>
  </div>
  </div>
 </div>
 );
});

const demoPointsData = [
 { date: "Mon", total: 320, change: 0 },
 { date: "Tue", total: 450, change: 130 },
 { date: "Wed", total: 610, change: 160 },
 { date: "Thu", total: 780, change: 170 },
 { date: "Fri", total: 920, change: 140 },
 { date: "Sat", total: 1100, change: 180 },
 { date: "Sun", total: 1280, change: 180 },
];

const ProductionImpact = () => {
 const { data, error } = useProductionImpact();
 const showContent = data && !error;

 return (
 <section id="impact" className="py-24 md:py-32 bg-transparent border-t border-border relative overflow-hidden">
  <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
  <div className="max-w-[720px]">
   <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase">Live from production floor Google Sheets API</p>
   <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-[800] tracking-[-0.04em] leading-[0.9] text-balance">Production <span className="font-[300] italic text-gradient-foreground">impact.</span></h2>
   <p className="mt-3 text-[15px] leading-relaxed text-text-secondary max-w-[60ch] text-pretty">Real output, reject, and raw milk trends not placeholders. Updated every 5 minutes with SWR cache and retry.</p>
  </div>

  {!showContent ? (
   <>
   <div className="mt-10 grid grid-cols-3 gap-4">
    <div className="h-[140px] rounded-xl bg-surface border border-border animate-pulse"></div>
    <div className="h-[140px] rounded-xl bg-surface border border-border animate-pulse"></div>
    <div className="h-[140px] rounded-xl bg-surface border border-border animate-pulse"></div>
   </div>
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
     <div className="lg:col-span-7 p-1.5 bg-surface border border-border rounded-[1.5rem] h-[260px] flex items-center justify-center">
     <LoaderBars barWidth={10} barHeight={90} gap={8} count={5} color="var(--primary)" />
     </div>
     <div className="lg:col-span-5 p-1.5 bg-surface border border-border rounded-[1.5rem] h-[260px] flex items-center justify-center">
     <LoaderBars barWidth={10} barHeight={90} gap={8} count={5} color="var(--primary)" />
     </div>
     <div className="lg:col-span-12 p-1.5 bg-surface border border-border rounded-[1.5rem] h-[260px] flex items-center justify-center">
     <LoaderBars barWidth={10} barHeight={90} gap={8} count={5} color="var(--primary)" />
     </div>
    </div>
   </>
  ) : (
   <>
   <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4">
    <div className="md:col-span-5 p-6 rounded-xl bg-foreground text-background">
    <div className="font-mono text-[11px] tracking-wide uppercase opacity-60">Total Produced</div>
    <div className="mt-2 font-display text-[42px] font-[800] leading-none tracking-[-0.03em] tabular-nums">{formatNumber(data.totalProduction)} <span className="text-[18px] font-medium">L</span></div>
    <div className="mt-2 text-sm opacity-70">Avg {formatNumber(data.avgPerBatch)} L/batch {data.distributionCities.join(' -> ')}</div>
    </div>
    <div className="md:col-span-3 p-6 rounded-xl bg-surface border border-border">
    <div className="font-mono text-[11px] tracking-wide uppercase text-text-tertiary">Reject Rate</div>
    <div className="mt-2 font-display text-[32px] font-bold tabular-nums">{data.rejectRate}%</div>
    <div className="text-sm text-text-tertiary">cup 130 ml target &lt;1%</div>
    </div>
    <div className="md:col-span-4 p-6 rounded-xl bg-surface border border-border flex flex-col justify-between">
     <div className="font-mono text-[11px] tracking-wide uppercase text-text-tertiary">Mozzarella Live</div>
     <div className="mt-3">
      <div className="font-display text-[28px] font-bold tabular-nums leading-none">{data.totalMoza ? formatNumber(data.totalMoza) : ''} <span className="text-base font-medium">pcs</span></div>
       <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-text-tertiary">Total produced</div>
     </div>
     <div className="mt-3 pt-3 border-t border-border/60">
      <div className="font-display text-[18px] font-semibold tabular-nums leading-none">{data.latestMoza ? formatNumber(data.latestMoza) : ''} <span className="text-xs font-medium">pcs</span> <span className="text-text-tertiary font-normal text-xs">10% yield</span></div>
      <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-text-tertiary">Latest batch</div>
     </div>
     </div>
   </div>

             <motion.div
               className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6"
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, margin: "-80px" }}
               variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
             >
               <motion.div className="lg:col-span-7" variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }}>
                 <ProductionBarChart data={data.cupTrend} title="Cup Production Out Trend" unit="Units" />
               </motion.div>
               <motion.div className="lg:col-span-5" variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }}>
                 <ProductionBarChart data={data.susuTrend} title="Raw Milk Processed In Trend" unit="L" />
               </motion.div>
               <motion.div className="lg:col-span-12" variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }}>
                 <ProductionBarChart data={data.mozaTrend} title="Mozzarella Production" unit="pcs" />
               </motion.div>
             </motion.div>
            <div className="mt-8">
    <PointsChart
    title="Weekly Quality Points Demo"
    data={demoPointsData}
    levels={[
     { value: 500, color: "#5B8DD1" },
     { value: 900, color: "#3A9E7B" },
    ]}
    yAxisLabel="Points"
    headerRight={<span className="text-xs font-mono text-text-tertiary">Levels: 500 900</span>}
    />
   </div>
   </>
  )}

  </div>
 </section>
 );
};

export default ProductionImpact;
