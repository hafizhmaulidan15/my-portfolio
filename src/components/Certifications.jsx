import { motion } from 'framer-motion';
import { Trophy, Star, Globe, GraduationCap } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Certifications = () => {
    const achievements = [
        {
            title: 'Student Exchange Programme SEA',
            organization: 'Politeknik Mersing, Malaysia',
            date: 'June 2022',
            icon: <Globe size={32} weight="duotone" />,
            description: 'Selected from 800+ candidates for SEAMEO TVET. Focused on cybersecurity, Wireshark analysis, and international systems collaboration.',
        },
        {
            title: 'Junior Network Engineer',
            organization: 'Kementerian Kominfo',
            date: 'June 2024',
            icon: <GraduationCap size={32} weight="duotone" />,
            description: 'Completed 256 hours of Cisco automation, IPv6 architecture, and OSPF routing protocols under Digital Talent Scholarship.',
        },
    ];

    return (
        <section className="pt-40 pb-24 bg-background relative overflow-hidden min-h-[calc(100vh-80px)]">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="space-y-4">
                        <div className="h-1 w-12 bg-accent"></div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                            NOTABLE <span className="text-zinc-500">ACHIEVEMENTS</span>
                        </h2>
                        <p className="text-zinc-400 max-w-[50ch] text-lg">
                            Global recognition and technical milestones.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                        <GlassPanel key={index} className="flex flex-col md:flex-row gap-8 p-8 border-white/5 hover:border-accent/20 transition-all group">
                            <div className="p-4 bg-white/[0.03] rounded-2xl text-accent h-fit shrink-0 group-hover:scale-110 transition-transform">
                                {achievement.icon}
                            </div>
                            <div className="space-y-3">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                                        <Trophy size={18} weight="fill" className="text-accent" />
                                    </div>
                                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{achievement.organization}</p>
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed">{achievement.description}</p>
                                <div className="pt-4 flex items-center gap-2">
                                    <span className="text-[10px] font-mono text-zinc-600 px-2 py-1 rounded bg-white/5 border border-white/5 uppercase">
                                        Verified {achievement.date}
                                    </span>
                                </div>
                            </div>
                        </GlassPanel>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
