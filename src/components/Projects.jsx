import { useState } from 'react';
import { 
    Globe, Pulse, 
    Database,
    Factory,
    ChartBar, ChartPieSlice, UserCheck
} from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';
import { cn } from '../lib/utils';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
        {
            id: 13,
            title: 'Rumah Susu Inventory Dashboard',
            period: 'Apr 2026 - Present',
            association: 'Rumah Susu Indonesia',
            icon: <Database size={28} weight="duotone" />,
            role: 'Head of Unit',
            roleType: 'lead',
            category: 'ops',
            description: 'Real-time inventory dashboard for stock opname monitoring using Google Sheets API integration.',
            responsibilities: [
                'Built Next.js dashboard with TypeScript and Tailwind CSS for real-time inventory tracking.',
                'Integrated Google Sheets as a lightweight API-based database for stock data.',
                'Designed responsive interface for daily stock opname and production monitoring.',
                'Enabled team-wide access to inventory data without complex backend infrastructure.'
            ],
            impact: 'Alternative solution for production stock monitoring using spreadsheet API, eliminating the need for dedicated database setup.',
            skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Google Sheets API'],
            color: 'text-accent-blue',
            link: 'https://rumah-susu-tasik-dashboard.vercel.app',
            stats: [
                { value: 'Real-time', label: 'Stock Updates' },
                { value: '100%', label: 'Data Accuracy' },
                { value: 'Team-wide', label: 'Access' }
            ]
        },
        {
            id: 14,
            title: 'Milk Quality Prediction',
            period: 'Jun 2026',
            association: 'Personal Project',
            icon: <Pulse size={28} weight="duotone" />,
            role: 'ML Engineer',
            roleType: 'individual',
            category: 'data',
            description: 'ML model predicting pasteurized milk quality grade (A/B/C/Reject) from 7 production parameters with 0.92 F1 weighted score.',
            responsibilities: [
                'Built Random Forest + XGBoost models achieving 0.92 F1 weighted across all quality grades.',
                'Implemented SHAP explainability for regulatory-grade feature importance analysis.',
                'Developed FastAPI backend with real-time prediction endpoint (<15ms inference time).',
                'Built Next.js dashboard with interactive visualization, prediction history, and actionable recommendations.'
            ],
            impact: 'First ML-driven quality prediction system for dairy — combining data science with food safety in Indonesian dairy context.',
            skills: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'FastAPI', 'Next.js', 'Docker'],
            color: 'text-primary',
            link: 'https://milk-quality-prediction.vercel.app',
            stats: [
                { value: '0.92 F1', label: 'Weighted Score' },
                { value: '7 Params', label: 'Production Inputs' },
                { value: '<15ms', label: 'Inference Time' }
            ]
        },
        {
            id: 15,
            title: 'Aussie WHV 2026',
            period: 'May 2026',
            association: 'Personal Project',
            icon: <Globe size={28} weight="duotone" />,
            role: 'Full-Stack Developer',
            roleType: 'individual',
            category: 'web',
            description: 'Comprehensive resource hub for Australian Working Holiday Visa applicants — visa types, requirements, and living guides.',
            responsibilities: [
                'Built responsive info site with Next.js 14 and TypeScript for structured immigration content.',
                'Designed clean information architecture for complex visa category documentation.',
                'Deployed and maintained on Vercel with automated CI/CD pipeline.'
            ],
            impact: 'Accessible reference for Indonesian WHV aspirants navigating Australian visa pathways.',
            skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
            color: 'text-accent-blue',
            link: 'https://aussie-whv-2026.vercel.app'
        },
        {
            id: 0,
            title: 'Production Operations SOP',
            period: 'Apr 2026 - Present',
            association: 'Rumah Susu Indonesia',
            icon: <Factory size={28} weight="duotone" />,
            role: 'Head of Unit',
            roleType: 'lead',
            category: 'ops',
            description: 'Orchestrating end-to-end production architecture and SOPs for dairy processing.',
            responsibilities: [
                'Engineered production workflows for 25,000 units per batch, optimizing throughput.',
                'Developed comprehensive QC protocols and supply chain management strategies.',
                'Led cross-functional coordination between production and local cooperatives.',
                'Strategized distribution logistics and sustainable waste management.'
            ],
            impact: 'Pivoted engineering precision into operational leadership, managing high-capacity industrial systems.',
            skills: ['Operational Strategy', 'QCMilk', 'Cold Chain', 'SOP Architecture'],
            color: 'text-accent-blue',
            stats: [
                { value: '25K', label: 'Batch Capacity' },
                { value: '100%', label: 'SOP Compliance' },
                { value: 'Cross-team', label: 'Coordination' }
            ]
        },
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-12 md:py-[72px] bg-background relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/4 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 mb-8 md:mb-12">
                    <div className="space-y-2 md:space-y-3">
                        <div className="flex items-center gap-2 md:gap-3 text-primary font-mono text-xs md:text-sm tracking-widest uppercase">
                            <span>// Portfolio</span>
                        </div>
                        <h2 className="text-[24px] md:text-[26px] lg:text-[28px] font-semibold tracking-tight text-foreground">
                            Strategic <span className="text-gradient-primary">execution</span>
                        </h2>
                        <p className="text-text-secondary max-w-[55ch] text-[15px] md:text-[16px] leading-relaxed">
                            A portfolio of precision, orchestrating the intersection of Operations, Engineering, and Data.
                        </p>
                    </div>

                    <div className="flex bg-surface/50 p-1 gap-1 rounded overflow-x-auto w-full sm:w-auto">
                        {['all', 'ops', 'web', 'data'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-3 sm:px-3 py-1.5 sm:py-2 rounded-sm text-xs sm:text-[11px] font-medium uppercase tracking-widest transition-all duration-200 shrink-0",
                                    activeCategory === cat 
                                        ? "bg-primary text-foreground" 
                                        : "text-text-tertiary hover:text-foreground"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {filteredProjects.map((project) => (
                        <GlassPanel 
                            key={project.id} 
                            variant="overlap"
                            overflowVisible
                            className="flex flex-col h-full group p-5 sm:p-6"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <div className="inline-flex p-3 rounded-sm bg-primary/10 text-primary">
                                    {project.icon}
                                </div>
                            </div>

                            {/* Title + Period */}
                            <div className="space-y-2 mb-3">
                                <h3 className="text-[17px] sm:text-[18px] font-semibold tracking-tight text-foreground leading-tight">{project.title}</h3>
                                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-text-tertiary">
                                    <span className="px-2 py-0.5 rounded-sm bg-primary/10 text-primary/80">
                                        {project.period}
                                    </span>
                                </div>
                            </div>

                            {/* Role · Type + Published badge */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-xs sm:text-sm font-mono text-text-tertiary">
                                    {project.role} · {project.roleType === 'individual' ? 'Personal' : project.roleType === 'lead' ? 'Lead' : 'Team'} Project
                                </span>
                                {project.published && (
                                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-sm bg-success/10 text-success text-xs font-medium uppercase tracking-widest">
                                        Published
                                    </span>
                                )}
                            </div>

                            {/* Stats Mini Cards */}
                            {project.stats && project.stats.length > 0 && (
                                <div className="grid grid-cols-3 gap-2 sm:gap-2 mb-4 sm:mb-4">
                                    {project.stats.map((stat, i) => (
                                        <div key={i} className="bg-primary/5 rounded-sm p-2 sm:p-2 text-center">
                                            <div className="text-xs sm:text-sm font-semibold text-foreground">{stat.value}</div>
                                            <div className="text-[9px] sm:text-[10px] font-mono text-text-tertiary uppercase tracking-wider mt-0.5">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Description */}
                            <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed mb-4">
                                {project.description}
                            </p>

                            {/* Bullet Points (first 3) */}
                            <div className="space-y-1.5 sm:space-y-2 mb-5 flex-grow">
                                {project.responsibilities.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-start gap-2 text-[13px] sm:text-sm text-text-tertiary leading-relaxed">
                                        <span className="text-primary/50 mt-1 flex-shrink-0">•</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Skills */}
                            <div className="pt-3 flex flex-wrap gap-1.5 sm:gap-2 gap-y-1.5 items-center">
                                {project.skills.slice(0, 4).map((skill) => (
                                    <span key={skill} className="px-2 sm:px-2 py-0.5 sm:py-1 rounded-sm bg-primary/5 text-text-secondary text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">
                                        {skill}
                                    </span>
                                ))}
                                {project.skills.length > 4 && (
                                    <span className="text-[10px] sm:text-[11px] font-mono text-text-muted">
                                        +{project.skills.length - 4}
                                    </span>
                                )}
                            </div>
                        </GlassPanel>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
