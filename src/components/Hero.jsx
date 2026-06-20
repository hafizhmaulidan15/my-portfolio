import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Envelope, ArrowUpRight, Factory, Lightning, ChartBar } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const MotionLink = motion(Link);

const Hero = () => {
    const staggerRef = useRef(null);

    useEffect(() => {
        const el = staggerRef.current;
        if (!el) return;
        const timer = setTimeout(() => el.classList.add('is-shown'), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-background">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]"></div>
            </div>
            
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 space-y-2 sm:space-y-4 md:space-y-5"
                    >
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full bg-surface border border-border text-accent-blue text-[9px] sm:text-[10px] md:text-xs font-medium">
                            <Factory size={12} weight="bold" className="sm:w-[14px] sm:h-[14px]" />
                            <span className="tracking-wide">HEAD OF UNIT & PRODUCTION LEADER</span>
                        </div>

                        <div className="t-stagger" ref={staggerRef}>
                            <h1 className="t-stagger-line text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold tracking-tighter leading-[1.1] text-foreground">
                                MUHAMMAD <br />
                                <span className="text-gradient-primary">HAFIZH</span> <span className="text-text-secondary">MAULIDAN</span>
                            </h1>

                            <p className="t-stagger-line t-stagger-line--2 text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mt-1 sm:mt-3">
                                <span className="text-foreground font-semibold">Head of Unit at Rumah Susu Indonesia</span> | Operations & Production Management | Dairy Manufacturing & Process Optimization
                            </p>

                            <p className="t-stagger-line t-stagger-line--3 text-[11px] sm:text-xs md:text-sm text-text-secondary max-w-[60ch] leading-relaxed mt-1 sm:mt-3">
                                Operations & Production Leader specializing in end-to-end dairy manufacturing, process optimization, and quality systems.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">
                            <MotionLink 
                                to="/contact"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-4 py-2.5 sm:px-6 sm:py-3 bg-primary text-foreground text-xs sm:text-sm font-medium rounded-lg border border-primary flex items-center gap-1.5 sm:gap-2 transition-all duration-200 hover:bg-primary-hover shadow-[0_0_20px_rgba(17,129,255,0.15)] hover:shadow-[0_0_30px_rgba(17,129,255,0.25)]"
                            >
                                <Envelope size={16} weight="bold" className="sm:w-[18px] sm:h-[18px]" />
                                Connect now
                            </MotionLink>
                            <MotionLink 
                                to="/projects"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-4 py-2.5 sm:px-6 sm:py-3 bg-surface border border-border text-foreground text-xs sm:text-sm font-medium rounded-lg flex items-center gap-1.5 sm:gap-2 transition-all duration-200 hover:bg-surface-hover hover:border-border-light shadow-floating"
                            >
                                View works
                                <ArrowUpRight size={16} weight="bold" className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </MotionLink>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 pt-2 sm:pt-4">
                            <div>
                                <div className="text-xl md:text-2xl lg:text-[28px] font-bold font-mono tracking-tighter text-foreground">
                                    Up to <span className="t-digit-group is-animating">
                                        <span className="t-digit">2</span>
                                        <span className="t-digit">5</span>
                                        <span className="t-digit" data-stagger="1">K</span>
                                    </span>
                                </div>
                                <div className="text-[10px] md:text-xs text-text-tertiary uppercase tracking-widest mt-1">Units/Batch</div>
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
                                <div className="text-[10px] md:text-xs text-text-tertiary uppercase tracking-widest mt-1">GPA</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-items-start"
                    >
                        <Link to="/experience" className="group block w-full">
                            <GlassPanel variant="overlap" className="h-full flex flex-col gap-1.5 sm:gap-3 md:gap-4 p-3 sm:p-5 md:p-6 lg:p-7">
                                <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4">
                                    <div className="p-1.5 sm:p-2.5 md:p-3 bg-primary/10 rounded-sm text-primary">
                                        <Factory size={16} weight="duotone" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]" />
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success"></div>
                                        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-success uppercase tracking-wider">Active</span>
                                    </div>
                                </div>
                                <h2 className="text-[11px] sm:text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">Production Leadership</h2>
                                <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-1 sm:pt-3 mt-auto">
                                    <div>
                                        <div className="text-[10px] sm:text-xs md:text-sm font-bold font-mono text-primary">25K</div>
                                        <div className="text-[7px] sm:text-[9px] md:text-[10px] text-text-tertiary uppercase tracking-wider">Batch</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] sm:text-xs md:text-sm font-bold font-mono text-accent-blue">E2E</div>
                                        <div className="text-[7px] sm:text-[9px] md:text-[10px] text-text-tertiary uppercase tracking-wider">Chain</div>
                                    </div>
                                </div>
                            </GlassPanel>
                        </Link>

                        <Link to="/skills" className="group block w-full">
                            <GlassPanel variant="overlap" className="h-full flex flex-col gap-1.5 sm:gap-3 md:gap-4 p-3 sm:p-5 md:p-6 lg:p-7">
                                <div className="p-1.5 sm:p-2.5 md:p-3 bg-accent-blue/10 rounded-sm text-accent-blue w-fit">
                                    <ChartBar size={16} weight="duotone" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]" />
                                </div>
                                <h2 className="text-[11px] sm:text-sm md:text-base font-semibold text-foreground group-hover:text-accent-blue transition-colors">Operations Management</h2>
                                <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mt-auto">
                                    {['SOP Dev', 'QC', 'Supply Chain', 'Team Lead'].map((s) => (
                                        <span key={s} className="px-1 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 bg-accent-blue/10 text-accent-blue text-[7px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </GlassPanel>
                        </Link>

                        <Link to="/certifications" className="group block w-full sm:col-span-2 sm:justify-self-center sm:max-w-md">
                            <GlassPanel variant="overlap" className="flex flex-col gap-1.5 sm:gap-3 md:gap-4 p-3 sm:p-5 md:p-6 lg:p-7">
                                <div className="p-1.5 sm:p-2.5 md:p-3 bg-accent-blue/10 rounded-sm text-accent-blue w-fit">
                                    <Lightning size={16} weight="duotone" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]" />
                                </div>
                                <h2 className="text-[11px] sm:text-sm md:text-base font-semibold text-foreground group-hover:text-accent-blue transition-colors">Core Competencies</h2>
                                <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mt-auto">
                                    {['Prod Planning', 'Process Opt', 'BPOM', 'Cold Chain'].map((s) => (
                                        <span key={s} className="px-1 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 bg-accent-blue/10 text-accent-blue text-[7px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </GlassPanel>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
