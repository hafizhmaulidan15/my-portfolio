import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowUpRight, Factory } from '@phosphor-icons/react';

const Hero = () => {
    const staggerRef = useRef(null);
    useEffect(() => {
        const el = staggerRef.current;
        if (!el) return;
        const t = setTimeout(() => el.classList.add('is-shown'), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <section id="home" className="hero-speakable relative bg-background overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}} aria-hidden="true"></div>

            <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[calc(100dvh-64px)] py-12 lg:py-16">
                    {/* Left editorial — 7 cols */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="font-mono text-[11px] tracking-[0.2em] text-text-tertiary uppercase flex items-center gap-3">
                            <span className="h-px w-8 bg-foreground/15 hidden sm:block" aria-hidden="true"></span>
                            Head of Unit — Rumah Susu Indonesia / Tasikmalaya
                        </div>

                        <div className="t-stagger" ref={staggerRef}>
                            <h1 className="t-stagger-line font-display text-[42px] sm:text-[54px] lg:text-[64px] font-[800] tracking-[-0.045em] leading-[0.85] text-foreground text-balance">
                                Systems that<br />
                                <span className="font-[300] italic tracking-[-0.03em] text-text-tertiary">scale</span> dairy<br />
                                production.
                            </h1>
                            <p className="t-stagger-line t-stagger-line--2 mt-5 text-[16px] lg:text-[18px] leading-[1.6] text-text-secondary max-w-[52ch] text-pretty">
                                I build repeatable operations end-to-end — from <span className="text-foreground font-medium">500 L → 36 kg mozzarella at 7.2% yield</span> and 9-trial cheddar R&D to cold-chain and supplier intelligence. Not overseeing — building.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-1">
                            <Link to="/contact" className="group inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 bg-foreground text-background text-sm font-medium rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-foreground/90 active:scale-[0.98]">
                                <span>Start a conversation</span>
                                <span className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
                                    <ArrowUpRight size={14} weight="bold" />
                                </span>
                            </Link>
                            <Link to="/projects" className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-foreground underline decoration-foreground/15 underline-offset-4 hover:decoration-foreground/40 transition-colors">
                                View case studies
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-6 mt-2 border-t border-border max-w-[480px]">
                            <div>
                                <div className="font-display text-[28px] font-[700] tracking-[-0.03em] text-foreground tabular-nums">25K</div>
                                <div className="font-mono text-[11px] tracking-[0.12em] text-text-tertiary uppercase">units / batch</div>
                                <div className="text-xs text-text-tertiary mt-1"> pasteurized cups</div>
                            </div>
                            <div>
                                <div className="font-display text-[28px] font-[700] tracking-[-0.03em] text-foreground tabular-nums">7.2%</div>
                                <div className="font-mono text-[11px] tracking-[0.12em] text-text-tertiary uppercase">mozza yield</div>
                                <div className="text-xs text-text-tertiary mt-1">180 pcs first run</div>
                            </div>
                            <div>
                                <div className="font-display text-[28px] font-[700] tracking-[-0.03em] text-foreground tabular-nums">&lt;1%</div>
                                <div className="font-mono text-[11px] tracking-[0.12em] text-text-tertiary uppercase">reject rate</div>
                                <div className="text-xs text-text-tertiary mt-1">3-batch retention</div>
                            </div>
                        </div>
                    </div>

                    {/* Right visual — 5 cols, Double-Bezel */}
                    <div className="lg:col-span-5 lg:pl-4">
                        <div className="p-1.5 bg-white/[0.04] ring-1 ring-white/10 rounded-[2rem]">
                            <div className="relative bg-surface rounded-[1.4rem] overflow-hidden border border-black/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_12px_40px_rgba(232,238,246,0.08)]">
                                <div className="aspect-[4/3] relative overflow-hidden bg-[#E8E0D5]">
                                    <img src="https://picsum.photos/seed/dairy-steel-lab/800/600" alt="Dairy steel lab — cold chain" width="800" height="600" loading="eager" decoding="async" fetchPriority="high" className="w-full h-full object-cover grayscale-[0.15] contrast-[1.04]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-mono tracking-wide text-foreground border border-white/10">Tasikmalaya Plant • 2026</span>
                                        <span className="w-2 h-2 rounded-full bg-success animate-pulse border border-white" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center justify-between border-t border-border bg-surface">
                                    <div className="flex items-center gap-2.5">
                                        <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center">
                                            <Factory size={14} weight="bold" />
                                        </span>
                                        <div>
                                            <div className="text-sm font-medium leading-none">Production Ops</div>
                                            <div className="text-xs text-text-tertiary">25K/batch • 4-person lean team</div>
                                        </div>
                                    </div>
                                    <span className="font-mono text-xs px-2 py-1 rounded-full bg-success/10 text-success border border-success/15">Live</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 font-mono text-[11px] tracking-wide text-text-tertiary text-center">Built from zero — SOPs, QC lactoscan, supplier intelligence, distribution ratchet SOPs</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
