import { Trophy, Star, Globe, GraduationCap, ShieldCheck, ChartBar } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Certifications = () => {
    const achievements = [
        {
            title: 'Hardware Installation Supervisor',
            organization: 'BNSP (Badan Nasional Sertifikasi Profesi)',
            date: '2025 - 2028',
            icon: <ShieldCheck size={28} weight="duotone" />,
            description: 'Certified competency in disaster recovery, system analysis, and industrial hardware maintenance.',
            credential: 'BNSP-C-2025-001234',
            color: 'text-accent-orange',
            bg: 'bg-accent-orange/10'
        },
        {
            title: 'Google Analytics Specialist',
            organization: 'Google Skillshop',
            date: '2025 - 2026',
            icon: <ChartBar size={28} weight="duotone" />,
            description: 'Expertise in GA4 data streams, business intelligence collection, and behavioral analytics.',
            color: 'text-primary',
            bg: 'bg-primary/10'
        },
        {
            title: 'Junior Network Engineer',
            organization: 'Kementerian Kominfo - Digital Talent Scholarship',
            date: 'June 2024',
            icon: <GraduationCap size={28} weight="duotone" />,
            description: 'Completed 256 hours of Cisco automation, IPv6 architecture, and OSPF routing protocols.',
            color: 'text-accent-teal',
            bg: 'bg-accent-teal/10'
        },
        {
            title: 'Student Exchange Programme SEA',
            organization: 'Politeknik Mersing, Malaysia - SEAMEO TVET',
            date: 'June 2022',
            icon: <Globe size={28} weight="duotone" />,
            description: 'Selected from 800+ candidates. Focused on cybersecurity, Wireshark analysis, and international systems collaboration.',
            color: 'text-accent-orange',
            bg: 'bg-accent-orange/10'
        },
        {
            title: 'Fuzzy Logic Classification System',
            organization: 'IPB University - Research',
            date: 'May 2024',
            icon: <Trophy size={28} weight="duotone" />,
            description: 'Developed Automated Predictive Classification System achieving 73.33% accuracy for rice production prediction.',
            color: 'text-success',
            bg: 'bg-success/10'
        },
    ];

    return (
        <section className="py-[72px] px-6 bg-background relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent-orange/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-3">
                        <div className="h-0.5 w-10 bg-gradient-to-r from-accent-orange to-warning"></div>
                        <h2 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-foreground">
                            Notable <span className="text-gradient-warm">achievements</span>
                        </h2>
                        <p className="text-text-secondary max-w-[50ch] text-[16px]">
                            Global recognition and technical milestones.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                        <GlassPanel key={index} className="flex flex-col md:flex-row gap-6 p-5 border-border/50 hover:border-primary/20 transition-all group">
                            <div className={`p-3 ${achievement.bg} rounded-sm ${achievement.color} h-fit shrink-0 group-hover:scale-105 transition-transform`}>
                                {achievement.icon}
                            </div>
                            <div className="space-y-2">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-[18px] font-semibold text-foreground">{achievement.title}</h3>
                                        <Trophy size={16} weight="fill" className={achievement.color} />
                                    </div>
                                    <p className="text-sm font-medium text-text-tertiary uppercase tracking-wider">{achievement.organization}</p>
                                </div>
                                <p className="text-text-secondary text-sm leading-relaxed">{achievement.description}</p>
                                <div className="pt-3 flex items-center gap-2">
                                    <span className="text-[10px] font-mono text-text-tertiary px-2 py-1 rounded-sm bg-interactive-button border border-border uppercase">
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
