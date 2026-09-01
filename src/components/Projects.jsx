import {
    Globe, Pulse, Database, Factory, Code
} from '@phosphor-icons/react';

const spanMap = {
    0: 'md:col-span-2 md:row-span-2',
    14: 'md:col-span-1 md:row-span-2',
    13: 'md:col-span-1',
    15: 'md:col-span-1',
    16: 'md:col-span-1',
    17: 'md:col-span-2',
    18: 'md:col-span-1',
    19: 'md:col-span-1',
};

const colors = {
    0: { border: 'border-primary/20', text: 'text-primary', bg: 'bg-primary/10' },
    13: { border: 'border-border', text: 'text-text-secondary', bg: 'bg-black/[0.02]' },
    14: { border: 'border-primary/15', text: 'text-primary', bg: 'bg-primary/10' },
    15: { border: 'border-border', text: 'text-text-secondary', bg: 'bg-black/[0.02]' },
    16: { border: 'border-border', text: 'text-text-secondary', bg: 'bg-black/[0.02]' },
    17: { border: 'border-border', text: 'text-text-secondary', bg: 'bg-black/[0.02]' },
    18: { border: 'border-border', text: 'text-text-secondary', bg: 'bg-black/[0.02]' },
    19: { border: 'border-border', text: 'text-text-secondary', bg: 'bg-black/[0.02]' },
};

const Projects = () => {

    const projects = [
        {
            id: 13,
            title: 'Rumah Susu Inventory Dashboard',
            period: 'Apr 2026 - Present',
            association: 'Rumah Susu Indonesia',
            icon: <Database size={28} weight="duotone" />,
            role: 'Head of Unit',
            roleType: 'lead',
            description: 'Real-time inventory dashboard for stock opname monitoring using Google Sheets API integration.',
            responsibilities: [
                'Built Next.js dashboard with TypeScript and Tailwind CSS for real-time inventory tracking.',
                'Integrated Google Sheets as a lightweight API-based database for stock data.',
                'Designed responsive interface for daily stock opname and production monitoring.',
            ],
            skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
            stats: [
                { value: 'Real-time', label: 'Stock Updates' },
                { value: '100%', label: 'Accuracy' },
                { value: 'Team', label: 'Access' }
            ],
            source: 'https://github.com/hafizhmaulidan15/Rumah-Susu-Dashboard',
        },
        {
            id: 14,
            title: 'Milk Quality Prediction',
            period: 'Jun 2026',
            association: 'Personal Project',
            icon: <Pulse size={28} weight="duotone" />,
            role: 'ML Engineer',
            roleType: 'individual',
            description: 'ML model predicting pasteurized milk quality grade (A/B/C/Reject) from 7 production parameters with 0.92 F1 weighted score.',
            responsibilities: [
                'Built Random Forest + XGBoost models achieving 0.92 F1 weighted across all quality grades.',
                'Implemented SHAP explainability for regulatory-grade feature importance analysis.',
                'Developed FastAPI backend with real-time prediction endpoint (<15ms inference time).',
            ],
            skills: ['Python', 'scikit-learn', 'XGBoost', 'SHAP'],
            stats: [
                { value: '0.92 F1', label: 'Score' },
                { value: '7 Params', label: 'Inputs' },
                { value: '<15ms', label: 'Inference' }
            ],
            source: 'https://github.com/hafizhmaulidan15/milk-quality-prediction',
        },
        {
            id: 15,
            title: 'Aussie WHV 2026',
            period: 'May 2026',
            association: 'Personal Project',
            icon: <Globe size={28} weight="duotone" />,
            role: 'Full-Stack Developer',
            roleType: 'individual',
            description: 'Comprehensive resource hub for Australian Working Holiday Visa applicants — visa types, requirements, and living guides.',
            responsibilities: [
                'Built responsive info site with Next.js 14 and TypeScript for structured immigration content.',
                'Designed clean information architecture for complex visa category documentation.',
                'Deployed and maintained on Vercel with automated CI/CD pipeline.'
            ],
            skills: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            stats: [],
            source: 'https://github.com/hafizhmaulidan15/aussie-WHV',
        },
        {
            id: 0,
            title: 'Production Operations SOP',
            period: 'Apr 2026 - Present',
            association: 'Rumah Susu Indonesia',
            icon: <Factory size={28} weight="duotone" />,
            role: 'Head of Unit',
            roleType: 'lead',
            description: 'End-to-end production architecture: milk SOPs, first Mozzarella production run, Processed Cheddar R&D, and distribution loading standards.',
            responsibilities: [
                'Engineered production workflows for 25,000 units per batch, optimizing throughput.',
                'Authored Mozzarella production SOPs, forms, and reporting — hygiene to vacuum sealing.',
                'Led Cheddar R&D through 9 formulation trials; defined maizena-maturation method.',
                'Standardized ratchet loading SOPs per Box Biru & Tray with pre-departure verification.',
                'Developed QC protocols and supplier quality intelligence from Lactoscan data.',
            ],
            skills: ['Ops Strategy', 'Product R&D', 'Cold Chain'],
            stats: [
                { value: '25K', label: 'Batch' },
                { value: '9', label: 'Cheddar Trials' },
                { value: '7.2%', label: 'Mozza Yield' }
            ],
        },
        {
            id: 16,
            title: 'InvoiceKilat',
            period: 'Jun 2026',
            association: 'Personal Project',
            icon: <Database size={28} weight="duotone" />,
            role: 'Full-Stack Developer',
            roleType: 'individual',
            description: 'Fast invoice management app with Supabase backend, PDF export, and dashboard analytics.',
            responsibilities: [
                'Built Next.js invoice CRUD with Supabase auth + real-time row-level security.',
                'Implemented PDF invoice generation with react-pdf for print-ready exports.',
                'Designed dashboard with revenue charts and invoice status tracking.',
            ],
            skills: ['Next.js', 'Supabase', 'Tailwind CSS', 'react-pdf'],
            stats: [
                { value: 'CRUD', label: 'Invoices' },
                { value: 'PDF', label: 'Export' },
                { value: 'RLS', label: 'Auth' }
            ],
            source: 'https://github.com/hafizhmaulidan15/invoicekilat',
        },
        {
            id: 17,
            title: 'Yield Optimizer Keju',
            period: 'May 2026',
            association: 'Personal Project',
            icon: <Pulse size={28} weight="duotone" />,
            role: 'Data Developer',
            roleType: 'individual',
            description: 'Cheese yield optimization tool using production data analysis and interactive visualizations.',
            responsibilities: [
                'Built Next.js dashboard with Recharts for yield trend visualization.',
                'Implemented yield calculation engine from raw production parameters.',
                'Designed responsive UI for mobile field data entry.',
            ],
            skills: ['Next.js', 'Recharts', 'TypeScript', 'Tailwind CSS'],
            stats: [
                { value: 'Yield', label: 'Optimizer' },
                { value: 'Charts', label: 'Recharts' },
                { value: 'Data', label: 'Driven' }
            ],
            source: 'https://github.com/hafizhmaulidan15/yield-optimizer-keju',
        },
        {
            id: 18,
            title: 'Banana Ripeness Detection',
            period: 'May 2026',
            association: 'Personal Project',
            icon: <Factory size={28} weight="duotone" />,
            role: 'Embedded Developer',
            roleType: 'individual',
            description: 'Embedded C++ system for banana ripeness classification using RGB color sensor data on Arduino.',
            responsibilities: [
                'Programmed Arduino-based RGB color sensing for ripeness stage classification.',
                'Implemented threshold-based ripeness detection algorithm (Green → Yellow → Brown).',
                'Designed circuit with color sensor module and serial display output.',
            ],
            skills: ['C++', 'Arduino', 'Embedded', 'Sensor'],
            stats: [
                { value: 'C++', label: 'Firmware' },
                { value: 'RGB', label: 'Sensor' },
                { value: '3-Stage', label: 'Ripeness' }
            ],
            source: 'https://github.com/hafizhmaulidan15/BananaRipness',
        },
        {
            id: 19,
            title: 'filmroll',
            period: 'Jun 2026',
            association: 'Personal Project',
            icon: <Globe size={28} weight="duotone" />,
            role: 'Frontend Developer',
            roleType: 'individual',
            description: 'Movie discovery app with search, ratings, and curated collections — deployed on Vercel.',
            responsibilities: [
                'Built movie browsing interface with search and filter capabilities.',
                'Integrated TMDB API for real-time movie data and ratings.',
                'Deployed on Vercel with responsive design across all devices.',
            ],
            skills: ['Next.js', 'TMDB API', 'Tailwind CSS', 'Vercel'],
            stats: [
                { value: 'Live', label: 'Deployed' },
                { value: 'TMDB', label: 'API' },
                { value: 'Search', label: 'Movies' }
            ],
            source: 'https://github.com/hafizhmaulidan15/filmroll',
        },
    ];

    return (
        <section id="projects" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}} aria-hidden="true"></div>
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-12">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase mb-3">Selected Works — 2024 → Present</p>
                    <h2 className="font-display text-[36px] md:text-[48px] font-[800] tracking-[-0.04em] leading-[0.9] text-foreground text-balance">Built from zero,<br/>measured in yield.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-4" style={{gridAutoFlow:'dense'}}>
                    {projects.map((project) => {
                        const c = colors[project.id];
                        const span = spanMap[project.id] || '';
                        return (
                            <div key={project.id}
                                className={`project-card group bg-surface border ${c.border} p-6 md:p-7 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-[0_8px_32px_rgba(0,0,0,0.24)] ${span}`}>

                                <div className="relative flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-5">
                                        <div className={`w-11 h-11 rounded-lg bg-black/[0.02] flex items-center justify-center border border-border ${c.text} group-hover:scale-105 transition-transform duration-700`}>
                                            {project.icon}
                                        </div>
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest ${c.bg} ${c.text} border ${c.border}`}>
                                            {project.roleType === 'lead' ? 'Lead' : 'Individual'}
                                        </span>
                                    </div>

                                    <div className="space-y-1 mb-3">
                                        <h3 className="font-display text-[18px] md:text-[20px] font-semibold leading-tight tracking-tight text-foreground text-pretty">{project.title}</h3>
                                        <p className="text-[11px] text-text-tertiary font-mono tracking-wide">
                                            {project.association} · {project.period}
                                        </p>
                                    </div>

                                    <p className="text-text-secondary text-[13.5px] leading-relaxed line-clamp-3 mb-4 text-pretty">{project.description}</p>

                                    {project.responsibilities.length > 0 && (
                                        <ul className="space-y-2.5 mb-6">
                                            {project.responsibilities.map((r, i) => (
                                                <li key={i} className="text-sm text-text-tertiary flex items-start gap-3">
                                                    <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bg}`}></span>
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {project.stats.length > 0 && (
                                        <div className="flex gap-6 mb-4 py-3 border-t border-border mt-auto">
                                            {project.stats.map((s, i) => (
                                                <div key={i}>
                                                    <p className="text-[13px] font-bold font-mono tabular-nums text-foreground">{s.value}</p>
                                                    <p className="text-[11px] text-text-muted uppercase tracking-wide">{s.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map(s => (
                                                <span key={s}
                                                    className="px-3 py-1.5 text-xs font-mono text-text-tertiary bg-black/[0.02] rounded-lg border border-border hover:border-white/[0.15] transition-colors">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                        {project.source && (
                                            <a href={project.source} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-tertiary hover:text-primary border border-border hover:border-primary/40 rounded-lg transition-colors flex-shrink-0">
                                                <Code size={14} /> Source
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Projects;
