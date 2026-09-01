import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Envelope, ArrowUpRight, Factory, Lightning, ChartBar } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Hero = () => {
    const staggerRef = useRef(null);

    useEffect(() => {
        const el = staggerRef.current;
        if (!el) return;
        const timer = setTimeout(() => el.classList.add('is-shown'), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-x-hidden w-full max-w-full">
        <section id="home" className="hero-speakable relative min-h-dvh flex items-center justify-center overflow-hidden bg-background py-24 md:py-32">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]"></div>
            </div>
            
            <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/[0.06] blur-[160px] rounded-full pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
                    
                    <div className="lg:col-span-6 space-y-4 md:space-y-6 animate-slide-in-left">
                        <div className="font-mono text-[11px] tracking-[0.2em] text-text-tertiary uppercase flex items-center gap-3">
                            <span className="h-px w-8 bg-text-tertiary/40 hidden sm:block" aria-hidden="true"></span>
                            Tasikmalaya — Dairy Operations • Since Mar 2026
                        </div>

                        <div className="t-stagger" ref={staggerRef}>
                            <h1 className="t-stagger-line font-display text-[clamp(2.4rem,6vw,4.4rem)] font-[800] tracking-[-0.04em] leading-[0.85] text-foreground max-w-5xl text-balance">
                                MUHAMMAD <span className="text-primary">HAFIZH</span> <span className="text-text-secondary font-[600]">MAULIDAN</span>
                            </h1>

                            <p className="t-stagger-line t-stagger-line--2 text-sm sm:text-[15px] md:text-base text-text-secondary leading-relaxed mt-2 sm:mt-3">
                                <span className="text-foreground font-semibold">Head of Unit at Rumah Susu Indonesia</span> | Operations & Production Management | Dairy Manufacturing & Process Optimization
                            </p>

                            <p className="t-stagger-line t-stagger-line--3 text-xs sm:text-sm md:text-[15px] text-text-secondary max-w-[60ch] leading-relaxed mt-2 sm:mt-3">
                                Operations leader building systems end-to-end in dairy manufacturing — from the first commercial Mozzarella production run and Processed Cheddar R&D to quality dashboards and process optimization.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-3">
                            <Link 
                                to="/contact"
                                className="group inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 bg-primary text-white text-sm font-medium rounded-full border border-primary transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-primary-hover active:scale-[0.98]"
                            >
                                <span>Connect now</span>
                                <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 transition-transform duration-500">
                                    <Envelope size={14} weight="bold" />
                                </span>
                            </Link>
                            <Link 
                                to="/projects"
                                className="px-5 py-3 bg-transparent text-foreground text-sm font-medium flex items-center gap-2 underline decoration-foreground/20 underline-offset-4 hover:decoration-foreground transition-all duration-200"
                            >
                                View works
                                <ArrowUpRight size={14} weight="bold" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8 pt-2 sm:pt-4">
                            <div>
                                <div className="text-xl md:text-2xl lg:text-[28px] font-bold font-mono tracking-tighter text-foreground">
                                    Up to <span className="t-digit-group is-animating">
                                        <span className="t-digit">2</span>
                                        <span className="t-digit">5</span>
                                        <span className="t-digit" data-stagger="1">K</span>
                                    </span>
                                </div>
                                <div className="text-xs md:text-sm text-text-tertiary uppercase tracking-widest mt-1">Units/Batch</div>
                            </div>
                            <div>
                                <div className="text-xl md:text-2xl lg:text-[28px] font-bold font-mono tracking-tighter text-accent-blue">
                                    <span className="t-digit-group is-animating">
                                        <span className="t-digit">3</span>
                                        <span className="t-digit" data-stagger="1">.</span>
                                        <span className="t-digit" data-stagger="2">3</span>
                                        <span className="t-digit" data-stagger="3">3</span>
                                    </span>
                                </div>
                                <div className="text-xs md:text-sm text-text-tertiary uppercase tracking-widest mt-1">GPA</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 grid grid-cols-2 auto-rows-fr gap-3 sm:gap-4 md:gap-4 justify-items-stretch animate-slide-in-right" style={{gridAutoFlow:'dense'}}>
                        <Link to="/experience" className="group block w-full col-span-2 sm:col-span-1 sm:row-span-2 overflow-hidden">
                            <div className="p-1.5 bg-black/[0.04] ring-1 ring-black/5 rounded-[1.75rem] h-full">
                            <GlassPanel variant="plain" className="h-full flex flex-col gap-2 sm:gap-3 md:gap-4 p-4 sm:p-5 md:p-6 lg:p-7 rounded-[1.25rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden">
                                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                                    <div className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-sm text-primary">
                                        <Factory size={20} weight="duotone" className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]" />
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-success"></div>
                                        <span className="text-[10px] sm:text-[11px] md:text-xs font-mono text-success uppercase tracking-wider">Active</span>
                                    </div>
                                </div>
                                <h2 className="text-sm sm:text-[15px] md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">Production Leadership</h2>
                                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-3 mt-auto">
                                    <div>
                                        <div className="text-xs sm:text-sm md:text-[15px] font-bold font-mono text-primary">25K</div>
                                        <div className="text-[9px] sm:text-[10px] md:text-xs text-text-tertiary uppercase tracking-wider">Batch</div>
                                    </div>
                                    <div>
                                        <div className="text-xs sm:text-sm md:text-[15px] font-bold font-mono text-accent-blue">7.2%</div>
                                        <div className="text-[9px] sm:text-[10px] md:text-xs text-text-tertiary uppercase tracking-wider">Mozza Yield</div>
                                    </div>
                                </div>
                            </GlassPanel>
                            </div>
                        </Link>

                        <Link to="/skills" className="group block w-full overflow-hidden">
                            <div className="p-1.5 bg-black/[0.04] ring-1 ring-black/5 rounded-[1.75rem] h-full">
                            <GlassPanel variant="plain" className="h-full flex flex-col gap-2 sm:gap-3 md:gap-4 p-4 sm:p-5 md:p-6 lg:p-7 rounded-[1.25rem] overflow-hidden">
                                <div className="p-2 sm:p-2.5 md:p-3 bg-accent-blue/10 rounded-sm text-accent-blue w-fit">
                                    <ChartBar size={20} weight="duotone" className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]" />
                                </div>
                                <h2 className="text-sm sm:text-[15px] md:text-base font-semibold text-foreground group-hover:text-accent-blue transition-colors">Operations Management</h2>
                                <div className="flex flex-wrap gap-1.5 sm:gap-1.5 md:gap-2 mt-auto">
                                    {['SOP Dev', 'QC', 'Supply Chain', 'Team Lead'].map((s) => (
                                        <span key={s} className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 bg-accent-blue/10 text-accent-blue text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-wider">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </GlassPanel>
                            </div>
                        </Link>

                        <Link to="/certifications" className="group block w-full col-span-2 overflow-hidden">
                            <div className="p-1.5 bg-black/[0.04] ring-1 ring-black/5 rounded-[1.75rem] h-full">
                            <GlassPanel variant="plain" className="flex flex-col gap-2 sm:gap-3 md:gap-4 p-4 sm:p-5 md:p-6 lg:p-7 rounded-[1.25rem] overflow-hidden">
                                <div className="p-2 sm:p-2.5 md:p-3 bg-accent-blue/10 rounded-sm text-accent-blue w-fit">
                                    <Lightning size={20} weight="duotone" className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]" />
                                </div>
                                <h2 className="text-sm sm:text-[15px] md:text-base font-semibold text-foreground group-hover:text-accent-blue transition-colors">Core Competencies</h2>
                                <div className="flex flex-wrap gap-1.5 sm:gap-1.5 md:gap-2 mt-auto">
                                    {['Prod Planning', 'Process Opt', 'BPOM', 'Cold Chain'].map((s) => (
                                        <span key={s} className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 bg-accent-blue/10 text-accent-blue text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-wider">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </GlassPanel>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
        </div>
    );
};

export default Hero;
