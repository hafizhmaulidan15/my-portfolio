import { Users, ClipboardCheck, TrendingUp, ShieldCheck } from 'lucide-react';

const steps = [
  { n: '01', title: 'Alignment', desc: 'Clear SOPs and shift ownership. Everyone knows the standard, no guesswork.', icon: <Users size={16} /> },
  { n: '02', title: 'Accountability', desc: 'Discipline in execution. Time, temperature, hygiene logged and owned.', icon: <ClipboardCheck size={16} /> },
  { n: '03', title: 'Improvement', desc: 'Trials as learning loops. Taste, texture, yield feed the next SOP revision.', icon: <TrendingUp size={16} /> },
  { n: '04', title: 'Reliability', desc: 'Verification before dispatch. Quality and cold-chain checks, every batch.', icon: <ShieldCheck size={16} /> },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-transparent relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}} aria-hidden="true"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left editorial */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[18px] overflow-hidden ring-1 ring-white/10 bg-surface shadow-[0_4px_24px_rgba(0,0,0,0.08)] shrink-0">
                <img src="/profile-avatar.png" alt="Muhammad Hafizh Maulidan headshot, Head of Unit, Rumah Susu Indonesia" width="96" height="96" loading="lazy" decoding="async" className="w-full h-full object-cover object-[center_30%]" onError={(e)=>{e.target.src="https://ui-avatars.com/api/?name=Hafizh+Maulidan&background=E8E0D5&color=1A1E23&size=256"}} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-[20px] md:text-[22px] font-bold leading-none tracking-[-0.02em]">Muhammad Hafizh Maulidan</div>
                <div className="font-mono text-[11px] md:text-xs tracking-[0.14em] text-text-tertiary uppercase mt-1.5">Head of Unit · Operations Lead</div>
                <div className="font-mono text-[11px] tracking-wide text-text-tertiary mt-1">Rumah Susu Indonesia · Tasikmalaya</div>
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="font-display text-[36px] md:text-[42px] font-[800] tracking-[-0.04em] leading-[0.9] text-foreground text-balance">
                Leadership with<br /><span className="font-[300] italic text-gradient-foreground">operational rigor.</span>
              </h2>
              <div className="space-y-4 text-[16px] md:text-[17px] leading-[1.75] text-text-secondary max-w-[56ch] text-pretty">
                <p>
                  Managing Tasikmalaya operations, <span className="inline-flex items-baseline gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/15 text-foreground font-semibold text-[14px] md:text-[15px]">people · process · product</span> aligned. From supplier clarity to cold-chain reliability, every decision ties to repeatable scale.
                </p>
                <p className="text-[15px] md:text-[16px] leading-[1.7]">
                  Focus on <span className="underline decoration-primary/30 underline-offset-4 decoration-2 font-semibold text-foreground">clarity in alignment</span>, <span className="underline decoration-primary/30 underline-offset-4 decoration-2 font-semibold text-foreground">accountability in execution</span>, and <span className="underline decoration-primary/30 underline-offset-4 decoration-2 font-semibold text-foreground">continuous improvement</span> through trials and team feedback.
                </p>
              </div>
            </div>
          </div>

          {/* Right managerial principles */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="p-1.5 bg-white/[0.04] ring-1 ring-white/10 rounded-[1.75rem]">
              <div className="bg-surface rounded-[1.25rem] border border-border p-6 md:p-7">
                <div className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase mb-6">Managerial Principles</div>
                <div className="relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border hidden sm:block" aria-hidden="true"></div>
                  <div className="space-y-7">
                    {steps.map((s) => (
                      <div key={s.n} className="relative flex gap-4">
                        <div className="hidden sm:flex w-[22px] h-[22px] rounded-full bg-background border border-border items-center justify-center shrink-0 z-10">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        </div>
                        <div className="flex-1 min-w-0 pb-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="font-mono text-[11px] tracking-wide text-text-tertiary">{s.n}</span>
                            <span className="w-6 h-px bg-border hidden sm:block" aria-hidden="true"></span>
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary/10 border border-primary/15 text-primary font-medium">{s.icon} {s.title}</span>
                          </div>
                          <p className="text-[14px] leading-relaxed text-text-secondary text-pretty">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
