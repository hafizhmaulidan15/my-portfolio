import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Envelope, ArrowUpRight, Factory, Lightning, ChartBar } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const MotionLink = motion(Link);

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[100dvh] flex items-center justify-center py-[72px] px-6 overflow-hidden bg-background">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]"></div>
            </div>
            
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent-teal/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-orange/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 space-y-6 md:space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-accent-orange text-xs md:text-sm font-medium">
                            <Factory size={16} weight="bold" />
                            <span className="tracking-wide">HEAD OF UNIT & PRODUCTION LEADER</span>
                        </div>

                        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold tracking-tighter leading-[1.1] text-foreground">
                            MUHAMMAD <br />
                            <span className="text-gradient-primary">HAFIZH</span> <span className="text-text-secondary">MAULIDAN</span>
                        </h1>

                        <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                            <span className="text-foreground font-semibold">Head of Unit at Rumah Susu Indonesia</span> | Operations & Production Management | Dairy Manufacturing & Process Optimization
                        </p>

                        <p className="text-sm md:text-base lg:text-lg text-text-secondary max-w-[60ch] leading-relaxed">
                            Operations & Production Leader specializing in end-to-end dairy manufacturing, process optimization, and quality systems and currently serving as <span className="text-foreground font-medium">Head of Unit at Rumah Susu Indonesia</span>.
                        </p>

                        <p className="text-xs md:text-sm text-text-tertiary max-w-[60ch] leading-relaxed font-mono tracking-wide">
                            Proven track record scaling dairy production from scratch to 53K+ liters through repeatable operational systems
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <MotionLink 
                                to="/contact"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-6 py-3 bg-primary text-foreground font-body rounded border border-primary shadow-primary-btn flex items-center gap-2 overflow-hidden transition-all duration-200 hover:bg-primary-hover hover:shadow-primary-btn-hover"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Envelope size={18} weight="bold" />
                                    Connect now
                                </span>
                            </MotionLink>
                            <MotionLink 
                                to="/projects"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-6 py-3 bg-interactive-button border border-border-light text-foreground font-body rounded shadow-raised flex items-center gap-2 overflow-hidden transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.25]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View works
                                    <ArrowUpRight size={18} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </span>
                            </MotionLink>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6 border-t border-white/[0.06]">
                            <div>
                                <div className="text-xl md:text-2xl lg:text-[28px] font-bold font-mono tracking-tighter text-foreground">Up to 25K</div>
                                <div className="text-[10px] md:text-xs text-text-tertiary uppercase tracking-widest mt-1">Units/Batch</div>
                            </div>
                            <div>
                                <div className="text-xl md:text-2xl lg:text-[28px] font-bold font-mono tracking-tighter text-accent-orange">3.33</div>
                                <div className="text-[10px] md:text-xs text-text-tertiary uppercase tracking-widest mt-1">GPA</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 justify-items-start"
                    >
                        <Link to="/experience" className="group block w-full">
                            <GlassPanel className="h-full flex flex-col gap-4 md:gap-5 lg:gap-6 p-5 md:p-6 lg:p-8 border-glow-top-primary hover:border-primary/40 transition-all">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="p-2.5 md:p-3 lg:p-4 bg-primary/10 rounded-sm text-primary">
                                        <Factory size={20} weight="duotone" className="md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-success animate-pulse"></div>
                                        <span className="text-[9px] md:text-[10px] lg:text-xs font-mono text-success uppercase tracking-wider">Active</span>
                                    </div>
                                </div>
                                <h2 className="text-sm md:text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Production Leadership</h2>
                                <div className="grid grid-cols-2 gap-4 pt-4 mt-auto border-t border-white/[0.06]">
                                    <div>
                                        <div className="text-xs md:text-sm lg:text-base font-bold font-mono text-blue-400">25K</div>
                                        <div className="text-[8px] md:text-[9px] lg:text-[10px] text-text-tertiary uppercase tracking-wider">Batch</div>
                                    </div>
                                    <div>
                                        <div className="text-xs md:text-sm lg:text-base font-bold font-mono text-accent-orange">E2E</div>
                                        <div className="text-[8px] md:text-[9px] lg:text-[10px] text-text-tertiary uppercase tracking-wider">Chain</div>
                                    </div>
                                </div>
                            </GlassPanel>
                        </Link>

                        <Link to="/skills" className="group block w-full">
                            <GlassPanel className="h-full flex flex-col gap-4 md:gap-5 lg:gap-6 p-5 md:p-6 lg:p-8 border-glow-top-teal hover:border-accent-teal/40 transition-all">
                                <div className="p-2.5 md:p-3 lg:p-4 bg-accent-teal/10 rounded-sm text-accent-teal w-fit">
                                    <ChartBar size={20} weight="duotone" className="md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]" />
                                </div>
                                <h2 className="text-sm md:text-base lg:text-lg font-semibold text-foreground group-hover:text-accent-teal transition-colors">Operations Management</h2>
                                <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-3 mt-auto">
                                    {['SOP Dev', 'QC', 'Supply Chain', 'Team Lead'].map((s) => (
                                        <span key={s} className="px-2 md:px-3 py-1 md:py-1.5 bg-interactive-button border border-border rounded-sm text-[8px] md:text-[9px] lg:text-xs font-mono text-text-secondary uppercase tracking-wider">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </GlassPanel>
                        </Link>

                        <Link to="/certifications" className="group block w-full sm:col-span-2 justify-self-center max-w-md">
                            <GlassPanel className="flex flex-col gap-4 md:gap-5 lg:gap-6 p-5 md:p-6 lg:p-8 border-glow-top-orange hover:border-accent-orange/40 transition-all">
                                <div className="p-2.5 md:p-3 lg:p-4 bg-accent-orange/10 rounded-sm text-accent-orange w-fit">
                                    <Lightning size={20} weight="duotone" className="md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]" />
                                </div>
                                <h2 className="text-sm md:text-base lg:text-lg font-semibold text-foreground group-hover:text-accent-orange transition-colors">Core Competencies</h2>
                                <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-3 mt-auto">
                                    {['Prod Planning', 'Process Opt', 'BPOM', 'Cold Chain'].map((s) => (
                                        <span key={s} className="px-2 md:px-3 py-1 md:py-1.5 bg-interactive-button border border-border rounded-sm text-[8px] md:text-[9px] lg:text-xs font-mono text-text-secondary uppercase tracking-wider">
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
