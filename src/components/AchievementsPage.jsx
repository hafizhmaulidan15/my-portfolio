import { achievements } from '../data/achievements';
import { Link } from 'react-router-dom';

const AchievementsPage = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent min-h-screen">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="max-w-[720px] mb-12">
          <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase">Milestones  Proven wins, not claims</p>
          <h1 className="mt-3 font-display text-[36px] md:text-[48px] font-[800] tracking-[-0.04em] leading-[0.9] text-balance">Achievements <span className="font-[300] italic text-gradient-foreground">& Milestones</span></h1>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary max-w-[60ch] text-pretty">Record professional wins, metrics improved, and impact delivered  code-based, no DB. Full detail, not truncated.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            {achievements.map((a) => (
              <div key={a.id} className="p-6 rounded-xl border border-border bg-surface hover:border-primary/15 transition-colors">
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${a.category === 'QUALITY' ? 'bg-blue-500/10 text-blue-600 border-blue-500/15' : 'bg-amber-500/10 text-amber-600 border-amber-500/15'}`}>{a.category}</span>
                  <span className="font-mono text-[11px] text-text-tertiary">{new Date(a.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
                <h2 className="font-display text-[18px] md:text-[20px] font-semibold leading-tight mt-3 text-balance">{a.title}</h2>
                <p className="text-[14px] leading-[1.7] text-text-secondary mt-3 text-pretty">{a.description}</p>
                <div className="mt-4 p-4 rounded-lg bg-primary/5 border-l-2 border-primary">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-primary">Impact</p>
                  <p className="text-sm leading-relaxed mt-1.5 text-text-secondary">{a.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-display text-sm font-semibold">How this page works</h3>
              <p className="text-sm leading-relaxed text-text-secondary mt-2">This is a dedicated, route-based page (<code className="font-mono text-xs bg-black/[0.04] px-1 py-0.5 rounded">/achievements</code>)  not an embedded section. Data hardcode di <code className="font-mono text-xs bg-black/[0.04] px-1 py-0.5 rounded">src/data/achievements.js</code>.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link to="/experience" className="px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-medium hover:border-primary/20">← Experience</Link>
                <Link to="/impact" className="px-3 py-1.5 rounded-full bg-primary text-white text-xs font-medium">View Impact →</Link>
              </div>
            </div>
            <div className="p-5 rounded-xl border border-primary/15 bg-primary/[0.04]">
              <h3 className="font-display text-sm font-semibold flex items-center gap-2"><span className="w-1 h-5 bg-primary rounded-full"></span>Quick navigation</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link to="/experience#leadership-journal" className="text-primary hover:underline">Leadership Journal →</Link></li>
                <li><Link to="/impact#achievements-timeline" className="text-primary hover:underline">Impact Achievements →</Link></li>
                <li><Link to="/impact" className="text-primary hover:underline">Impact Overview →</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AchievementsPage;
