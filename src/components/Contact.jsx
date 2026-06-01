import { motion } from 'framer-motion';
import { Envelope, GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Contact = () => {
    return (
        <section id="contact" className="py-[72px] px-6 bg-background relative overflow-hidden min-h-[calc(100dvh-80px)] flex items-center">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-teal/6 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-orange/4 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1400px] text-center relative z-10">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary/5 border border-primary/10 text-primary text-xs font-medium tracking-widest uppercase">
                        <PaperPlaneTilt size={14} weight="bold" />
                        <span>Ready to collaborate</span>
                    </div>

                    <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold tracking-tighter text-foreground leading-[1.1]">
                        Let's build the <br />
                        <span className="text-gradient-primary">next frontier</span>
                    </h2>

                    <p className="text-text-secondary text-[16px] md:text-[18px] leading-relaxed max-w-[50ch] mx-auto">
                        I am currently seeking opportunities to apply my expertise in operations management and production leadership. 
                        Whether you have a specific inquiry or just want to connect, my inbox is open.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <motion.a
                            href="mailto:mhafizh.maulidan@gmail.com?subject=Collaboration%20Opportunity&body=Halo%20Hafizh%2C%0D%0A%0D%0ASaya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20...%5Bisi%20topik%5D%0D%0A%0D%0ATerima%20kasih"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-6 py-3 bg-primary text-foreground font-body rounded border border-primary shadow-primary-btn flex items-center justify-center gap-2 hover:bg-primary-hover hover:shadow-primary-btn-hover transition-all duration-200"
                        >
                            <Envelope size={18} weight="bold" />
                            Send Email
                        </motion.a>
                    </div>

                    <div className="pt-16 space-y-4">
                        <p className="text-[10px] font-mono text-text-tertiary uppercase tracking-[0.2em]">Peripheral links</p>
                        <div className="flex justify-center gap-4">
                            <motion.a
                                href="https://github.com/hafizhmaulidan15"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4 }}
                                className="text-text-tertiary hover:text-primary transition-colors p-2"
                                aria-label="GitHub Profile"
                            >
                                <GithubLogo size={28} weight="duotone" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/hafizhmaulidan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4 }}
                                className="text-text-tertiary hover:text-primary transition-colors p-2"
                                aria-label="LinkedIn Profile"
                            >
                                <LinkedinLogo size={28} weight="duotone" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
