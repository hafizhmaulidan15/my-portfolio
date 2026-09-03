const steps = [
  { n: '01', title: 'Clarity in Sourcing', desc: 'Decisions anchored on supplier data  not assumptions.', icon: <i className="bi bi-droplet text-[16px]"></i> },
  { n: '02', title: 'Discipline in Process', desc: 'Standards that hold under pressure  time, temperature, hygiene.', icon: <i className="bi bi-thermometer-half text-[16px]"></i> },
  { n: '03', title: 'Learning through Trials', desc: 'Trials as learning  taste, texture, and yield inform the next batch.', icon: <i className="bi bi-flask text-[16px]"></i> },
  { n: '04', title: 'Reliability in Delivery', desc: 'Verification before dispatch  every batch, every time.', icon: <i className="bi bi-truck text-[16px]"></i> },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-transparent relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}} aria-hidden="true"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10">
          {/* Left editorial */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-[14px] overflow-hidden ring-1 ring-white/10 bg-surface">
                <img src="/profile-avatar.png" alt="Muhammad Hafizh Maulidan" width="64" height="64" loading="lazy" decoding="async" className="w-full h-full object-cover object-[center_30%]" onError={(e)=>{e.target.src="https://ui-avatars.com/api/?name=Hafizh+Maulidan&background=E8E0D5&color=1A1E23&size=128"}} />
              </div>
              <div>
                <div className="font-display text-[17px] font-semibold leading-none">Muhammad Hafizh Maulidan</div>
                <div className="font-mono text-[11px] tracking-[0.14em] text-text-tertiary uppercase">S.Tr.Kom  IPB University • GPA 3.33</div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-[32px] md:text-[38px] font-[800] tracking-[-0.04em] leading-[0.9] text-foreground text-balance">
                Data-driven,<br /><span className="font-[300] italic text-gradient-foreground">field-proven.</span>
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.7] text-text-secondary max-w-[52ch] text-pretty">
                <p>
                  Operating from Tasikmalaya  aligning <span className="text-foreground font-medium">raw milk quality</span> with product vision. Every batch reflects supplier clarity and process discipline.
                </p>
                <p>
                  Focus: <span className="text-foreground font-medium">minimize waste</span> through proactive checks and <span className="text-foreground font-medium">lead with clarity</span>  from intake to cold chain.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border max-w-[420px]">
              <div><div className="font-display text-xl font-bold tabular-nums">12</div><div className="font-mono text-[10px] tracking-wide uppercase text-text-tertiary">SOPs & Forms</div></div>
              <div><div className="font-display text-xl font-bold tabular-nums">3</div><div className="font-mono text-[10px] tracking-wide uppercase text-text-tertiary">KPS Network</div></div>
              <div><div className="font-display text-xl font-bold tabular-nums">3</div><div className="font-mono text-[10px] tracking-wide uppercase text-text-tertiary">Cities Served</div></div>
            </div>
          </div>

          {/* Right timeline */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="p-1.5 bg-gradient-icon ring-1 ring-primary/10 rounded-[1.75rem]">
              <div className="bg-surface rounded-[1.25rem] border border-black/[0.06] p-6 md:p-7">
                <div className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase mb-6">Principles in Practice</div>
                <div className="relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border hidden sm:block" aria-hidden="true"></div>
                  <div className="space-y-7">
                    {steps.map((s) => (
                      <div key={s.n} className="relative flex gap-4">
                        <div className="hidden sm:flex w-[22px] h-[22px] rounded-full bg-transparent border border-border items-center justify-center shrink-0 z-10">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground/60"></span>
                        </div>
                        <div className="flex-1 min-w-0 pb-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-[11px] tracking-wide text-text-tertiary">{s.n}</span>
                            <span className="w-6 h-px bg-border hidden sm:block" aria-hidden="true"></span>
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wide px-2 py-1 rounded-full bg-gradient-icon border border-primary/10 text-text-secondary">{s.icon} {s.title}</span>
                          </div>
                          <p className="text-sm leading-relaxed text-text-secondary text-pretty">{s.desc}</p>
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
