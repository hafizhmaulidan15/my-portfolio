import { motion } from 'framer-motion';
import { Envelope, TerminalWindow, Cpu, WifiHigh, ArrowUpRight, Factory } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
            {/* Background Grain/Noise */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            {/* Ambient Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium">
                            <Factory size={16} weight="bold" />
                            <span className="tracking-wide">OPERATIONS HEAD & SYSTEMS ENGINEER</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-foreground">
                            MUHAMMAD <br />
                            <span className="text-accent">HAFIZH</span> MAULIDAN
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-400 max-w-[55ch] leading-relaxed">
                            Engineering the intersection of industrial operations and digital intelligence. 
                            Bridging the gap between <span className="text-foreground font-medium">complex IoT systems</span> and 
                            <span className="text-foreground font-medium"> large-scale production leadership</span>.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <motion.a 
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-accent text-background font-bold rounded-2xl flex items-center gap-2 transition-shadow hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]"
                            >
                                <Envelope size={20} weight="bold" />
                                CONNECT NOW
                            </motion.a>
                            <motion.a 
                                href="#projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-white/5 border border-white/10 text-foreground font-bold rounded-2xl flex items-center gap-2 hover:bg-white/10 transition-colors"
                            >
                                VIEW WORKS
                                <ArrowUpRight size={20} weight="bold" />
                            </motion.a>
                        </div>

                        {/* Quick Metrics */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                            <div>
                                <div className="text-3xl font-bold font-mono tracking-tighter">25K</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Capacity/Batch</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold font-mono tracking-tighter">SMC</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">System Control</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold font-mono tracking-tighter">3.33</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Engineering GPA</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Bento Visualizer */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="lg:col-span-5 grid grid-cols-2 gap-4 h-full"
                    >
                        <GlassPanel className="col-span-2 aspect-[16/9] flex flex-col justify-between group">
                             <div className="flex justify-between items-start">
                                <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                                    <Factory size={32} weight="duotone" />
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                </div>
                             </div>
                             <div>
                                <h3 className="text-2xl font-bold tracking-tight">Production Leadership</h3>
                                <p className="text-zinc-500 mt-2 text-sm">Managing complex end-to-end dairy supply chains and operational SOPs.</p>
                             </div>
                        </GlassPanel>

                        <GlassPanel className="aspect-square flex flex-col justify-center items-center text-center gap-4 hover:border-accent/30 transition-colors">
                            <Cpu size={48} weight="duotone" className="text-accent" />
                            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Embedded</span>
                        </GlassPanel>

                        <GlassPanel className="aspect-square flex flex-col justify-center items-center text-center gap-4 hover:border-accent/30 transition-colors overflow-hidden relative">
                             <motion.div 
                                animate={{ y: [0, -120] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="flex flex-col gap-2"
                             >
                                {['Ops SOP', 'Supply Chain', 'QC Control', 'IoT Systems', 'Python', 'React', 'C++', 'Arduino'].map((skill) => (
                                    <div key={skill} className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-xs font-mono font-bold">
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
