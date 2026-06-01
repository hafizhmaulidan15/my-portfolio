import { motion } from 'framer-motion';
import { ShieldCheck, ChartBar, GraduationCap, Globe, Code, Network, Certificate, Student } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const certData = [
    { title: 'Integrated Speaking English', org: 'Language Center', date: 'Nov 2025', icon: <Globe size={16} />, color: 'text-accent-orange', bg: 'bg-accent-orange/10' },
    { title: 'Hardware Installation Supervisor', org: 'BNSP', date: 'Sep 2025', icon: <ShieldCheck size={16} />, color: 'text-primary', bg: 'bg-primary/10' },
    { title: 'Google Analytics Certification', org: 'Google', date: 'Aug 2025', icon: <ChartBar size={16} />, color: 'text-accent-teal', bg: 'bg-accent-teal/10' },
    { title: 'Data Science & Analytics', org: 'HP LIFE', date: 'Aug 2025', icon: <ChartBar size={16} />, color: 'text-accent-orange', bg: 'bg-accent-orange/10' },
    { title: 'Data Visualization Basics', org: 'Dicoding Academy', date: 'May 2025', icon: <ChartBar size={16} />, color: 'text-primary', bg: 'bg-primary/10' },
    { title: 'Understanding AI and LLMs as a Network Engineer', org: 'Cisco', date: 'Apr 2025', icon: <Network size={16} />, color: 'text-accent-teal', bg: 'bg-accent-teal/10' },
    { title: 'Advance Python', org: 'Skilvul', date: 'Jan 2025', icon: <Code size={16} />, color: 'text-accent-orange', bg: 'bg-accent-orange/10' },
    { title: 'Algorithm & Data Structures with Python', org: 'Skilvul', date: 'Sep 2024', icon: <Code size={16} />, color: 'text-primary', bg: 'bg-primary/10' },
    { title: 'Python Essentials 1', org: 'Cisco', date: 'May 2024', icon: <Code size={16} />, color: 'text-accent-teal', bg: 'bg-accent-teal/10' },
    { title: 'Networking Basics', org: 'Cisco', date: 'Apr 2024', icon: <Network size={16} />, color: 'text-accent-orange', bg: 'bg-accent-orange/10' },
    { title: 'Junior Network Engineer', org: 'Kominfo', date: 'Feb 2024', icon: <GraduationCap size={16} />, color: 'text-primary', bg: 'bg-primary/10' },
    { title: 'CCNA: Introduction to Networks', org: 'Cisco', date: 'Jun 2022', icon: <Network size={16} />, color: 'text-accent-teal', bg: 'bg-accent-teal/10' },
    { title: '7 Habits of Highly Effective', org: 'FranklinCovey', date: 'Aug 2021', icon: <Certificate size={16} />, color: 'text-accent-orange', bg: 'bg-accent-orange/10' },
    { title: 'SEAMEO TVET Student Exchange', org: 'Politeknik Mersing', date: 'Jun 2022', icon: <Student size={16} />, color: 'text-primary', bg: 'bg-primary/10' },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-[72px] px-6 bg-background relative overflow-hidden">
            <div className="absolute top-1/3 -right-32 w-80 h-80 bg-accent-teal/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/3 -left-32 w-72 h-72 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="space-y-3 mb-10">
                    <div className="h-0.5 w-10 bg-gradient-to-r from-accent-orange to-warning"></div>
                    <h2 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-foreground">
                        Certified <span className="text-gradient-warm">competencies</span>
                    </h2>
                    <p className="text-text-secondary max-w-[50ch] text-[16px]">
                        Industry-recognized credentials across data, network, and programming domains.
                    </p>
                </div>

                <GlassPanel className="overflow-hidden border-border/50">
                    <div className="divide-y divide-white/[0.04]">
                        {certData.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 px-5 py-3 hover:bg-interactive-button/50 transition-colors group"
                            >
                                <div className={`p-2 rounded-sm ${cert.bg} ${cert.color} shrink-0 group-hover:scale-105 transition-transform`}>
                                    {cert.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium text-foreground truncate">{cert.title}</h4>
                                    <p className="text-[11px] text-text-tertiary font-mono uppercase tracking-wider">{cert.org}</p>
                                </div>
                                <span className="text-[10px] font-mono text-text-tertiary px-2 py-1 rounded-sm bg-interactive-button border border-border uppercase shrink-0">
                                    {cert.date}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </GlassPanel>
            </div>
        </section>
    );
};

export default Certifications;
