import { motion } from 'framer-motion';
import { Envelope, GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Contact = () => {
    return (
        <section className="pt-48 pb-32 bg-background relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
            <div className="container mx-auto px-6 max-w-[1400px] text-center">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-bold tracking-widest uppercase">
                        <PaperPlaneTilt size={16} weight="bold" />
                        <span>Ready to collaborate</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground leading-[0.9]">
                        LET'S BUILD THE <br />
                        <span className="text-zinc-500 underline decoration-accent/30 underline-offset-8">NEXT FRONTIER</span>
                    </h2>

                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-[50ch] mx-auto">
                        I am currently seeking opportunities to apply my expertise in IoT and systems engineering. 
                        Whether you have a specific inquiry or just want to connect, my inbox is open.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <motion.a
                            href="mailto:mhafizh.maulidan@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-10 py-5 bg-accent text-background font-black rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,245,255,0.2)] hover:shadow-[0_0_50px_rgba(0,245,255,0.4)] transition-all"
                        >
                            <Envelope size={24} weight="bold" />
                            SECURE CONNECTION
                        </motion.a>
                    </div>

                    <div className="pt-24 space-y-6">
                        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Peripheral Links</p>
                        <div className="flex justify-center gap-6">
                            <motion.a
                                href="https://github.com/hafizhmaulidan15"
                                target="_blank"
                                whileHover={{ y: -5, color: '#00f5ff' }}
                                className="text-zinc-500 transition-colors"
                            >
                                <GithubLogo size={32} weight="duotone" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/hafizhmaulidan/"
                                target="_blank"
                                whileHover={{ y: -5, color: '#00f5ff' }}
                                className="text-zinc-500 transition-colors"
                            >
                                <LinkedinLogo size={32} weight="duotone" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
