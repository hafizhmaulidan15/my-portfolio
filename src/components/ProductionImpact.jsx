import { motion } from 'framer-motion';
import { ChartBar, Factory, CircleNotch, WarningCircle, Flask } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';
import { useProductionImpact } from '../hooks/useProductionData';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

function formatNumber(n) {
  if (!n && n !== 0) return '—';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toLocaleString();
}

function MetricCard({ icon, label, value, subtitle, color, bg, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <GlassPanel className={`flex flex-col gap-3 p-5 border-l-[3px] ${accent} h-full`}>
        <div className={`p-2 rounded-sm w-fit ${bg} ${color}`}>
          {icon}
        </div>
        <div className="font-mono text-xl font-bold tracking-tighter text-foreground leading-tight">
          {value}
        </div>
        <div className="space-y-0.5">
          <div className="text-[10px] text-text-tertiary uppercase tracking-widest font-medium">{label}</div>
          {subtitle && <div className="text-[9px] text-text-tertiary/60 italic">{subtitle}</div>}
        </div>
      </GlassPanel>
    </motion.div>
  );
}

function ChartTooltip({ active, payload, label, unit }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface border border-border rounded-sm px-3 py-2 shadow-floating">
      <div className="text-[10px] text-text-tertiary font-mono">{label}</div>
      <div className="text-sm font-mono font-bold text-foreground">{payload[0].value.toLocaleString()} {unit}</div>
    </div>
  );
}

function ProductionBarChart({ data, title, icon, color, unit }) {
  if (!data || data.length === 0) {
    return (
      <GlassPanel className="p-5 h-full">
        <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className={color}>{icon}</span>
          {title}
        </h3>
        <div className="flex items-center justify-center h-[180px] text-text-tertiary text-xs">
          No data available
        </div>
      </GlassPanel>
    );
  }

  return (
    <GlassPanel className="p-5 h-full">
      <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className={color}>{icon}</span>
        {title}
      </h3>
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
            <XAxis
              dataKey="date"
              tick={{ fill: '#9CA3AF', fontSize: 9, fontFamily: 'Fira Code, monospace' }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fill: '#9CA3AF', fontSize: 9, fontFamily: 'Fira Code, monospace' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={v => v >= 1000 ? (v/1000).toFixed(0) + 'K' : v}
              width={30}
            />
            <Tooltip content={<ChartTooltip unit={unit} />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
            <Bar
              dataKey="value"
              fill={color === 'text-primary' ? '#1447E6' : '#2DD4BF'}
              radius={[3, 3, 0, 0]}
              barCategoryGap="20%"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </GlassPanel>
  );
}

const ProductionImpact = () => {
  const { data, error } = useProductionImpact();

  const showContent = data && !error;

  return (
    <section id="impact" className="py-[72px] px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-teal/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary/5 border border-primary/10 text-primary text-xs font-medium tracking-widest uppercase mb-4">
            <ChartBar size={14} weight="bold" />
            <span>Live from production floor</span>
          </div>
          <h2 className="text-[24px] md:text-[28px] font-bold tracking-tighter text-foreground">
            Production <span className="text-gradient-primary">Impact</span>
          </h2>
        </motion.div>

        {!showContent ? (
          <div className="flex items-center justify-center py-16">
            <CircleNotch size={20} className="text-text-tertiary animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <MetricCard
                icon={<Factory size={18} weight="duotone" />}
                label="Total Produced"
                value={formatNumber(data.totalProduction) + ' L'}
                subtitle={'Avg ' + formatNumber(data.avgPerBatch) + ' L/batch · ' + data.distributionCities.join(' · ')}
                color="text-primary"
                bg="bg-primary/10"
                accent="border-l-primary"
              />
              <MetricCard
                icon={<WarningCircle size={18} weight="duotone" />}
                label="Reject Rate"
                value={data.rejectRate + '%'}
                subtitle="from cup 130 ml production"
                color="text-accent-orange"
                bg="bg-accent-orange/10"
                accent="border-l-accent-orange"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group"
              >
                <GlassPanel className="flex flex-col gap-3 p-5 border-l-[3px] border-l-white/[0.08] h-full opacity-60">
                  <div className="p-2 rounded-sm w-fit bg-white/[0.04] text-text-tertiary">
                    <Flask size={18} weight="duotone" />
                  </div>
                  <div className="font-mono text-xl font-bold tracking-tighter text-text-tertiary leading-tight">
                    Coming Soon
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] text-text-tertiary uppercase tracking-widest font-medium">Cheese Production</div>
                    <div className="text-[9px] text-text-tertiary/40 italic">in development</div>
                  </div>
                </GlassPanel>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ProductionBarChart
                  data={data.cupTrend}
                  title="Cup Production"
                  icon={<ChartBar size={14} weight="bold" />}
                  color="text-primary"
                  unit="Units"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ProductionBarChart
                  data={data.susuTrend}
                  title="Raw Milk Processed"
                  icon={<Factory size={14} weight="bold" />}
                  color="text-accent-teal"
                  unit="L"
                />
              </motion.div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductionImpact;
