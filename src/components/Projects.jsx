import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Globe, Code, Cpu, Drop, Pulse, 
    Plant, Lightbulb, ChartBar, Database, 
    TrendUp, ArrowUpRight, CaretDown, CaretUp,
    IdentificationBadge, Users, User,
    Factory, ClipboardText
} from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';
import { cn } from '../lib/utils';

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
        {
            id: 0,
            title: 'Production Operations SOP',
            period: 'Apr 2026 - Present',
            association: 'Rumah Susu Indonesia',
            icon: <Factory size={32} weight="duotone" />,
            role: 'Head of Unit',
            roleType: 'lead',
            category: 'ops',
            description: 'Architecting end-to-end production systems and SOPs for industrial-scale dairy processing.',
            responsibilities: [
                'Designed production workflows for 25,000 units per batch.',
                'Implemented QC protocols from reception to distribution.',
                'Managed supply chain coordination with local cooperatives.',
                'Optimized distribution efficiency and waste management.'
            ],
            impact: 'Bridged engineering methodologies with real-world operational leadership in food processing.',
            skills: ['SOP Development', 'QC', 'Supply Chain', 'Operations'],
            color: 'text-orange-400'
        },
        {
            id: 1,
            title: 'DR.MATT Company Profile',
            period: 'Aug 2024 - Nov 2024',
            association: 'PT Matra Kreasi Mandiri',
            icon: <Globe size={32} weight="duotone" />,
            role: 'Frontend Developer',
            roleType: 'developer',
            category: 'web',
            description: 'Architected a high-performance company profile for an Industry 4.0 technology platform.',
            responsibilities: [
                'Developed responsive interfaces ensuring brand consistency.',
                'Collaborated with design teams to refine UI/UX flow.',
                'Optimized page performance using modern web technologies.',
                'Troubleshot and resolved complex UI/UX bottlenecks.'
            ],
            impact: 'Strengthened system management control in a real-world Industry 4.0 development environment.',
            skills: ['React', 'JavaScript', 'Tailwind', 'Git', 'UI/UX'],
            color: 'text-cyan-400',
            link: 'https://drmatt.id/'
        },
        {
            id: 3,
            title: 'Advanced Ripeness Detection',
            period: 'Oct 2024 - Nov 2024',
            association: 'UIN Jakarta',
            icon: <Cpu size={32} weight="duotone" />,
            role: 'IoT Developer',
            roleType: 'team',
            category: 'iot',
            description: 'IoT-based spectral analysis system for agricultural quality control.',
            responsibilities: [
                'Utilized TCS34725 sensors for RGB-based ripeness classification.',
                'Built real-time monitoring via ESP32 & Arduino IoT Cloud.',
                'Integrated J5019 modules for localized LCD status feedback.'
            ],
            impact: 'Successfully bridged spectral sensor data with cloud-based visualization.',
            skills: ['ESP32', 'C++', 'IoT Cloud', 'Embedded Systems'],
            color: 'text-emerald-400'
        },
        {
            id: 9,
            title: 'IDX Market Screener',
            period: 'Dec 2025',
            association: 'Personal Project',
            icon: <TrendUp size={32} weight="duotone" />,
            role: 'ML Developer',
            roleType: 'individual',
            category: 'data',
            description: 'Machine learning system screening 660+ IDX companies for breakout signals.',
            responsibilities: [
                'Built volume surge detection with 1.2x multiplier tracking.',
                'Implemented RandomForestClassifier for movement prediction.',
                'Developed ATR-based volatility calculators for Stop-Loss levels.'
            ],
            impact: 'Automated complex technical analysis for high-probability trade setups.',
            skills: ['Python', 'Pandas', 'Scikit-Learn', 'ML'],
            color: 'text-accent'
        }
    ];

    const getRoleIcon = (roleType) => {
        switch (roleType) {
            case 'lead': return <IdentificationBadge size={16} weight="bold" />;
            case 'team': return <Users size={16} weight="bold" />;
            default: return <User size={16} weight="bold" />;
        }
    };

    const toggleProject = (id) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section className="pt-40 pb-24 bg-background relative min-h-[calc(100vh-80px)]">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="space-y-4">
                        <div className="h-1 w-12 bg-accent"></div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                            SYSTEMS <span className="text-zinc-500">EXHIBITION</span>
                        </h2>
                        <p className="text-zinc-400 max-w-[50ch] text-lg leading-relaxed">
                            A showcase of precision across Operations, IoT, Web, and Data.
                        </p>
                    </div>

                    <div className="flex bg-white/[0.03] border border-white/10 p-1 rounded-2xl backdrop-blur-xl">
                        {['all', 'ops', 'iot', 'web', 'data'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                                    activeCategory === cat 
                                        ? "bg-accent text-background shadow-[0_0_20px_rgba(0,245,255,0.3)]" 
                                        : "text-zinc-500 hover:text-zinc-300"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProjects.map((project) => (
                        <GlassPanel 
                            key={project.id} 
                            className="flex flex-col h-full border-white/5 hover:border-accent/20 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className={cn("p-4 rounded-2xl bg-white/[0.03] transition-colors group-hover:bg-accent/10", project.color)}>
                                    {project.icon}
                                </div>
                                {project.link && (
                                    <motion.a 
                                        href={project.link}
                                        target="_blank"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="p-2 text-zinc-500 hover:text-accent transition-colors"
                                    >
                                        <ArrowUpRight size={24} weight="bold" />
                                    </motion.a>
                                )}
                            </div>

                            <div className="space-y-2 mb-6">
                                <h3 className="text-2xl font-bold tracking-tight text-foreground leading-tight">{project.title}</h3>
                                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500">
                                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 whitespace-nowrap">
                                        {project.period}
                                    </span>
                                    <span className="whitespace-nowrap">{project.association}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest">
                                    {getRoleIcon(project.roleType)}
                                    {project.role}
                                </div>
                            </div>

                            <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                {project.skills.slice(0, 4).map((skill) => (
                                    <span key={skill} className="text-[10px] font-mono text-zinc-500 uppercase">
                                        #{skill}
                                    </span>
                                ))}
                            </div>

                            <button 
                                onClick={() => toggleProject(project.id)}
                                className="mt-6 flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest hover:opacity-70 transition-opacity"
                            >
                                {expandedProject === project.id ? <CaretUp weight="bold" /> : <CaretDown weight="bold" />}
                                {expandedProject === project.id ? 'Hide Specs' : 'View Specs'}
                            </button>

                            <AnimatePresence>
                                {expandedProject === project.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-6 space-y-6">
                                            <div className="space-y-3">
                                                <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Strategic Focus</h4>
                                                <ul className="space-y-2">
                                                    {project.responsibilities.map((resp, i) => (
                                                        <li key={i} className="text-sm text-zinc-300 flex items-start gap-3">
                                                            <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0"></div>
                                                            {resp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Systems Impact</h4>
                                                <p className="text-sm text-zinc-300 leading-relaxed italic border-l-2 border-accent/20 pl-4">
                                                    "{project.impact}"
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </GlassPanel>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
