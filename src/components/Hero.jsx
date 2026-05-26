import { motion } from 'framer-motion';
import { Envelope, TerminalWindow, Cpu, WifiHigh, ArrowUpRight, Factory, Lightning } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[100dvh] flex items-center justify-center py-[72px] px-6 overflow-hidden bg-background">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]"></div>
            </div>
            
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <motion.div 
                animate={{ 
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"
            ></motion.div>
            <motion.div 
                animate={{ 
                    x: [0, -20, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent-teal/10 blur-[120px] rounded-full pointer-events-none"
            ></motion.div>
            <motion.div 
                animate={{ 
                    x: [0, 15, 0],
                    y: [0, -15, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-orange/5 blur-[100px] rounded-full pointer-events-none"
            ></motion.div>

            <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-accent-orange text-sm font-medium">
                            <Factory size={16} weight="bold" />
                            <span className="tracking-wide">HEAD OF UNIT & SYSTEMS ARCHITECT</span>
                        </div>

                        <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold tracking-tighter leading-[1.1] text-foreground">
                            MUHAMMAD <br />
                            <span className="text-gradient-primary">HAFIZH</span> <span className="text-text-secondary">MAULIDAN</span>
                        </h1>

                        <p className="text-[16px] md:text-[18px] text-text-secondary max-w-[55ch] leading-relaxed">
                            Bridging industrial operations with digital intelligence. Leading 
                            <span className="text-foreground font-medium"> large-scale dairy production</span> while 
                            architecting <span className="text-foreground font-medium">IoT & automation systems</span> for real-world impact.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <motion.a 
                                href="#contact"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-6 py-3 bg-primary text-foreground font-body rounded border border-primary shadow-primary-btn flex items-center gap-2 overflow-hidden transition-all duration-200 hover:bg-primary-hover hover:shadow-primary-btn-hover"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Envelope size={18} weight="bold" />
                                    Connect now
                                </span>
                            </motion.a>
                            <motion.a 
                                href="#projects"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-6 py-3 bg-interactive-button border border-border-light text-foreground font-body rounded shadow-raised flex items-center gap-2 overflow-hidden transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.25]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View works
                                    <ArrowUpRight size={18} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </span>
                            </motion.a>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/[0.06]">
                            <div>
                                <div className="text-[24px] font-bold font-mono tracking-tighter text-foreground">25K</div>
                                <div className="text-xs text-text-tertiary uppercase tracking-widest mt-1">Units/Batch</div>
                            </div>
                            <div>
                                <div className="text-[24px] font-bold font-mono tracking-tighter text-accent-teal">4+</div>
                                <div className="text-xs text-text-tertiary uppercase tracking-widest mt-1">Years Exp</div>
                            </div>
                            <div>
                                <div className="text-[24px] font-bold font-mono tracking-tighter text-accent-orange">3.33</div>
                                <div className="text-xs text-text-tertiary uppercase tracking-widest mt-1">GPA</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="lg:col-span-5 grid grid-cols-2 gap-4 h-full"
                    >
                        <GlassPanel className="col-span-2 aspect-[16/9] flex flex-col justify-between group border-glow-top-primary p-6">
                             <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-primary/10 rounded-sm text-primary">
                                        <Factory size={28} weight="duotone" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                                            <span className="text-xs font-mono text-success uppercase tracking-wider">Active</span>
                                        </div>
                                        <span className="text-xs text-text-tertiary font-mono">Rumah Susu Indonesia</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 px-2 py-1 rounded-sm bg-interactive-button border border-border">
                                    <TerminalWindow size={12} className="text-accent-teal" />
                                    <span className="text-[10px] font-mono text-text-tertiary">v2.6.0</span>
                                </div>
                             </div>

                             <div className="space-y-3">
                                <h3 className="text-[20px] font-semibold text-foreground">Production Leadership</h3>
                                <p className="text-text-tertiary text-sm leading-relaxed max-w-[50ch]">Managing complex end-to-end dairy supply chains and operational SOPs.</p>
                             </div>

                             <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.06]">
                                <div>
                                    <div className="text-[18px] font-bold font-mono tracking-tighter text-primary">25K</div>
                                    <div className="text-[10px] text-text-tertiary uppercase tracking-wider mt-0.5">Units/Batch</div>
                                </div>
                                <div>
                                    <div className="text-[18px] font-bold font-mono tracking-tighter text-accent-teal">100%</div>
                                    <div className="text-[10px] text-text-tertiary uppercase tracking-wider mt-0.5">Inventory Acc.</div>
                                </div>
                                <div>
                                    <div className="text-[18px] font-bold font-mono tracking-tighter text-accent-orange">24/7</div>
                                    <div className="text-[10px] text-text-tertiary uppercase tracking-wider mt-0.5">Monitoring</div>
                                </div>
                             </div>
                        </GlassPanel>

                        <GlassPanel className="aspect-square flex flex-col justify-between p-5 hover:border-primary/30 transition-colors border-glow-top-teal">
                            <div className="p-2.5 bg-accent-teal/10 rounded-sm text-accent-teal w-fit">
                                <Cpu size={24} weight="duotone" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-sm font-semibold text-foreground">Embedded Systems</span>
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-text-tertiary">ESP32</span>
                                        <span className="text-accent-teal font-mono">Expert</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                                        <div className="h-full bg-accent-teal rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-text-tertiary">C/C++</span>
                                        <span className="text-accent-teal font-mono">Advanced</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                                        <div className="h-full bg-accent-teal rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </GlassPanel>

                        <GlassPanel className="aspect-square flex flex-col justify-between p-5 hover:border-accent-orange/30 transition-colors overflow-hidden relative border-glow-top-orange">
                             <div className="flex justify-between items-start">
                                <span className="text-xs font-mono text-accent-orange uppercase tracking-wider">Tech Stack</span>
                                <Lightning size={16} className="text-accent-orange" />
                             </div>
                             <motion.div 
                                animate={{ y: [0, -120] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="flex flex-col gap-1.5"
                             >
                                {['Ops SOP', 'Supply Chain', 'QC Control', 'IoT Systems', 'Python', 'React', 'C++', 'Arduino'].map((skill) => (
                                    <div key={skill} className="px-3 py-1.5 bg-interactive-button rounded-sm border border-border text-[10px] font-mono font-medium">
                                        {skill}
                                    </div>
                                ))}
                             </motion.div>
                             <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none"></div>
                        </GlassPanel>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
