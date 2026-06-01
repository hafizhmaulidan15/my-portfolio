import { motion } from 'framer-motion';
import { 
    Briefcase, Certificate, TerminalWindow, 
    Code, Globe, Wrench, ShieldCheck, ChartBarHorizontal,
    Factory, ChartLineUp, GraduationCap, Circle, Student
} from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Experience = () => {
    const experiences = [
        {
            title: 'Head of Unit',
            company: 'Rumah Susu Indonesia',
            location: 'Tasikmalaya, West Java',
            date: 'Apr 2026 - Present',
            description: 'Leading end-to-end production operations for pasteurized milk (25k cups/batch). Developed SOPs from scratch, managing supply chain coordination with local dairy cooperatives (KPS). Implemented digital inventory systems with 100% accuracy and real-time production monitoring.',
            type: 'leadership',
            icon: <Factory size={18} weight="bold" />,
            color: 'accent-orange',
            highlights: ['25K units/batch production', 'SOP Development', 'Supply Chain Management', 'Digital Inventory']
        },
        {
            title: 'Frontend Developer',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Bogor, West Java',
            date: 'Sep 2025 - Jan 2026',
            description: 'Developed automation-focused educational platform (nanorobotic.co.id). End-to-end development from concept to deployment. Integrated WhatsApp API for customer communication. Led small technical team and coordinated with cross-functional stakeholders.',
            type: 'developer',
            icon: <Code size={18} weight="bold" />,
            color: 'primary',
            highlights: ['nanorobotic.co.id', 'WhatsApp API Integration', 'Team Leadership', 'Frontend Development']
        },
        {
            title: 'IoT Engineer Intern',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Bogor, West Java',
            date: 'Aug 2024 - Nov 2024',
            description: 'Designed and implemented IoT-based automation monitoring systems with 24/7 reliability requirements. Reduced system downtime by 40% through proactive debugging, calibration, and preventive maintenance. Performed field installation of sensors, controllers (ESP32), and actuators.',
            type: 'internship',
            icon: <TerminalWindow size={18} weight="bold" />,
            color: 'accent-teal',
            highlights: ['40% Downtime Reduction', '99% System Uptime', 'Field Installation', 'Firmware Development (C++)']
        },
        {
            title: 'Web Developer Intern',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Bogor, West Java',
            date: 'Aug 2024 - Nov 2024',
            description: 'Developed and maintained corporate website (drmatt.id) showcasing IoT and automation products. Integrated IoT-based data visualization dashboards for real-time sensor monitoring. Optimized frontend components for cross-device compatibility.',
            type: 'internship',
            icon: <Globe size={18} weight="bold" />,
            color: 'primary',
            highlights: ['drmatt.id', 'IoT Dashboards', 'Real-time Data', 'Responsive Design']
        }
    ];

    const certifications = [
        {
            title: 'Hardware Installation Supervisor',
            provider: 'BNSP',
            date: '2025 - 2028',
            description: 'Certified competency in disaster recovery, system analysis, and industrial hardware maintenance.',
            icon: <ShieldCheck size={20} weight="duotone" />,
            color: 'accent-orange'
        },
        {
            title: 'Google Analytics Specialist',
            provider: 'Google Skillshop',
            date: '2025 - 2026',
            description: 'Expertise in GA4 data streams, business intelligence collection, and behavioral analytics.',
            icon: <ChartBarHorizontal size={20} weight="duotone" />,
            color: 'primary'
        },
        {
            title: 'Junior Network Engineer',
            provider: 'Digital Talent Scholarship - Kominfo',
            date: '2024',
            description: '256 hours of training in IPv4/IPv6 architecture, OSPF routing, and Cisco automation.',
            icon: <GraduationCap size={20} weight="duotone" />,
            color: 'accent-teal'
        },
        {
            title: 'SEAMEO TVET Student Exchange',
            provider: 'Politeknik Mersing, Malaysia',
            date: '2022',
            description: 'Selected from 800+ candidates for international program focused on Network Security and Wireshark.',
            icon: <Globe size={20} weight="duotone" />,
            color: 'accent-orange'
        }
    ];

    const achievements = [
        {
            title: 'Star Energy Geothermal Scholarship',
            provider: 'PT Star Energy Geothermal',
            description: 'Recipient of prestigious scholarship program.',
            icon: <ChartLineUp size={20} weight="duotone" />,
            color: 'primary'
        },
        {
            title: 'Hafidz Al-Quran (30 Juz)',
            provider: 'Personal Achievement',
            description: 'Completed Quran memorization 2018-2020. Demonstrates discipline, focus, and integrity.',
            icon: <Circle size={20} weight="duotone" />,
            color: 'success'
        },
    ];

    const getColorClasses = (color) => {
        const colors = {
            'accent-orange': { bg: 'bg-accent-orange/10', border: 'border-accent-orange/30', text: 'text-accent-orange', glow: 'group-hover:shadow-[0_0_30px_rgba(240,81,0,0.12)]', line: 'from-accent-orange/50' },
            'primary': { bg: 'bg-primary/10', border: 'border-primary/30', text: 'text-primary', glow: 'group-hover:shadow-[0_0_30px_rgba(20,71,230,0.12)]', line: 'from-primary/50' },
            'accent-teal': { bg: 'bg-accent-teal/10', border: 'border-accent-teal/30', text: 'text-accent-teal', glow: 'group-hover:shadow-[0_0_30px_rgba(0,149,136,0.12)]', line: 'from-accent-teal/50' },
            'success': { bg: 'bg-success/10', border: 'border-success/30', text: 'text-success', glow: 'group-hover:shadow-[0_0_30px_rgba(0,187,127,0.12)]', line: 'from-success/50' },
        };
        return colors[color] || colors.primary;
    };

    return (
        <section id="experience" className="py-[72px] px-6 bg-background relative overflow-hidden">
            <div className="absolute top-1/3 -left-32 w-64 h-64 bg-accent-orange/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-accent-teal/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-primary/4 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-primary font-mono text-sm tracking-widest uppercase">
                                <Briefcase size={18} weight="bold" />
                                <span>Career path</span>
                            </div>
                            <h2 className="text-[24px] font-semibold tracking-tight text-foreground">
                                Professional <span className="text-gradient-primary">experience</span>
                            </h2>
                        </div>

                        <div className="space-y-6 relative">
                            <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-accent-teal/30 to-transparent"></div>
                            
                            {experiences.map((exp, idx) => {
                                const colors = getColorClasses(exp.color);
                                return (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.15 }}
                                        viewport={{ once: true }}
                                        className="relative pl-10 group"
                                    >
                                        <div className={`absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-background border-2 ${colors.border} transition-all z-10 flex items-center justify-center`}>
                                            <div className={`w-2 h-2 rounded-full ${colors.bg.replace('/10', '/50')} ${colors.text} transition-colors`}></div>
                                        </div>
                                        <div className="space-y-2 p-4 rounded-md bg-surface/50 group-hover:bg-surface transition-all border border-transparent group-hover:border-border">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest">{exp.date}</span>
                                                {exp.type === 'leadership' && (
                                                    <span className={`px-2 py-0.5 rounded-sm text-[10px] font-medium uppercase tracking-widest ${colors.bg} ${colors.text} border ${colors.border}`}>
                                                        Lead
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className={`text-[18px] font-semibold transition-colors ${colors.text}`}>{exp.title}</h3>
                                            <div className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                                                <span>{exp.company}</span>
                                                <span>•</span>
                                                <span>{exp.location}</span>
                                            </div>
                                            <p className="text-text-tertiary text-sm leading-relaxed">{exp.description}</p>
                                            {exp.highlights && (
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {exp.highlights.map((highlight, hIdx) => (
                                                        <span key={hIdx} className="text-[10px] px-2 py-1 rounded-sm bg-interactive-button text-text-tertiary border border-border">
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-text-tertiary font-mono text-sm tracking-widest uppercase">
                                <Certificate size={18} weight="bold" />
                                <span>Verification</span>
                            </div>
                            <h2 className="text-[24px] font-semibold tracking-tight text-foreground">
                                Core <span className="text-gradient-warm">certified</span>
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {certifications.map((cert, idx) => {
                                const colors = getColorClasses(cert.color);
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <GlassPanel className={`flex gap-4 p-4 ${colors.glow} transition-all`}>
                                            <div className={`p-2.5 ${colors.bg} rounded-sm ${colors.text} group-hover:scale-105 transition-transform`}>
                                                {cert.icon}
                                            </div>
                                            <div className="space-y-1.5">
                                                <div className="flex justify-between items-start">
                                                    <h4 className={`font-semibold text-[16px] ${colors.text}`}>{cert.title}</h4>
                                                    <span className="text-[10px] font-mono text-text-tertiary">{cert.date}</span>
                                                </div>
                                                <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider">{cert.provider}</p>
                                                <p className="text-xs text-text-tertiary leading-relaxed">{cert.description}</p>
                                            </div>
                                        </GlassPanel>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="pt-6">
                            <div className="flex items-center gap-3 text-text-tertiary font-mono text-sm tracking-widest uppercase mb-4">
                                <ChartLineUp size={18} weight="bold" />
                                <span>Achievements</span>
                            </div>
                            <div className="space-y-3">
                                {achievements.map((ach, idx) => {
                                    const colors = getColorClasses(ach.color);
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <GlassPanel className={`flex gap-3 p-3 ${colors.glow} transition-all`}>
                                                <div className={`p-2 ${colors.bg} rounded-sm ${colors.text}`}>
                                                    {ach.icon}
                                                </div>
                                                <div>
                                                    <h4 className={`font-semibold text-sm ${colors.text}`}>{ach.title}</h4>
                                                    <p className="text-xs text-text-tertiary">{ach.description}</p>
                                                </div>
                                            </GlassPanel>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
