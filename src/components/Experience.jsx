import { motion } from 'framer-motion';
import { 
    Briefcase, Certificate, TerminalWindow, 
    Code, Globe, Wrench, ShieldCheck, ChartBarHorizontal,
    Factory, UsersThree, ChartLineUp, GraduationCap
} from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';
import { cn } from '../lib/utils';

const Experience = () => {
    const experiences = [
        {
            title: 'Head of Unit',
            company: 'Rumah Susu Indonesia',
            location: 'Tasikmalaya, West Java',
            date: 'Apr 2026 - Present',
            description: 'Leading end-to-end production operations for pasteurized milk (25k cups/batch). Developed SOPs from scratch, managing supply chain coordination with local dairy cooperatives (KPS) and monitoring production efficiency metrics (Reject Rate, Waste, Distribution Efficiency).',
            type: 'leadership',
            icon: <Factory size={20} weight="bold" />
        },
        {
            title: 'Front End Developer',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Bogor, West Java',
            date: 'Sept 2025 - Dec 2025',
            description: 'Engineering high-performance ed-tech platforms. Architecting responsive systems with a focus on atomic design and optimized runtime performance.',
            type: 'developer',
            icon: <Code size={20} weight="bold" />
        },
        {
            title: 'IoT Engineer Intern',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Bogor, West Java',
            date: 'Aug 2024 - Nov 2024',
            description: 'Integrated spectral analysis and environmental sensors into industrial monitoring clusters. Delivered real-time alerting systems via Telegram and Arduino Cloud for ripeness and flood detection.',
            type: 'internship',
            icon: <TerminalWindow size={20} weight="bold" />
        }
    ];

    const certifications = [
        {
            title: 'Hardware Installation Supervisor',
            provider: 'BNSP',
            date: '2025 - 2028',
            description: 'Certified competency in disaster recovery, system analysis, and industrial hardware maintenance.',
            icon: <ShieldCheck size={24} weight="duotone" />
        },
        {
            title: 'Google Analytics Specialist',
            provider: 'Google Skillshop',
            date: '2025 - 2026',
            description: 'Expertise in GA4 data streams, business intelligence collection, and behavioral analytics.',
            icon: <ChartBarHorizontal size={24} weight="duotone" />
        },
        {
            title: 'Junior Network Engineer',
            provider: 'Digital Talent Scholarship',
            date: '2024',
            description: '256 hours of training in IPv4/IPv6 architecture, OSPF routing, and Cisco automation.',
            icon: <GraduationCap size={24} weight="duotone" />
        }
    ];

    return (
        <section className="pt-40 pb-24 bg-background relative overflow-hidden min-h-[calc(100vh-80px)]">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Professional Timeline */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-accent font-mono text-sm tracking-widest uppercase">
                                <Briefcase size={20} weight="bold" />
                                <span>Career Path</span>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tighter text-foreground">
                                PROFESSIONAL <span className="text-zinc-500">EXPERIENCE</span>
                            </h2>
                        </div>

                        <div className="space-y-6 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-px before:bg-white/5">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative pl-10 group">
                                    <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-background border-2 border-white/10 group-hover:border-accent transition-colors z-10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-accent transition-colors"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{exp.date}</span>
                                            {exp.type === 'leadership' && (
                                                <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-[10px] text-accent font-bold uppercase tracking-widest">
                                                    Lead
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{exp.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium">
                                            <span>{exp.company}</span>
                                            <span>•</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-zinc-500 text-sm leading-relaxed max-w-[60ch]">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Sidebar */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-zinc-500 font-mono text-sm tracking-widest uppercase">
                                <Certificate size={20} weight="bold" />
                                <span>Verification</span>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tighter text-foreground">
                                CORE <span className="text-zinc-500">CERTIFIED</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {certifications.map((cert, idx) => (
                                <GlassPanel key={idx} className="flex gap-6 p-6 border-white/5 group hover:border-accent/20 transition-all">
                                    <div className="p-3 bg-white/[0.03] rounded-xl text-zinc-400 group-hover:text-accent group-hover:bg-accent/10 transition-all h-fit">
                                        {cert.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-bold text-foreground group-hover:text-accent transition-colors">{cert.title}</h4>
                                            <span className="text-[10px] font-mono text-zinc-600">{cert.date}</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{cert.provider}</p>
                                        <p className="text-xs text-zinc-600 leading-relaxed">{cert.description}</p>
                                    </div>
                                </GlassPanel>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
