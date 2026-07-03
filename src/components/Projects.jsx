import {
    Globe, Pulse, Database, Factory, Code
} from '@phosphor-icons/react';

const colors = {
    13: { from: 'from-blue-500/20', via: 'via-blue-500/5', border: 'border-blue-500/20', text: 'text-blue-400', bg: 'bg-blue-500/10' },
    14: { from: 'from-emerald-500/20', via: 'via-emerald-500/5', border: 'border-emerald-500/20', text: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    15: { from: 'from-sky-500/20', via: 'via-sky-500/5', border: 'border-sky-500/20', text: 'text-sky-400', bg: 'bg-sky-500/10' },
    0: { from: 'from-violet-500/20', via: 'via-violet-500/5', border: 'border-violet-500/20', text: 'text-violet-400', bg: 'bg-violet-500/10' },
    16: { from: 'from-amber-500/20', via: 'via-amber-500/5', border: 'border-amber-500/20', text: 'text-amber-400', bg: 'bg-amber-500/10' },
    17: { from: 'from-orange-500/20', via: 'via-orange-500/5', border: 'border-orange-500/20', text: 'text-orange-400', bg: 'bg-orange-500/10' },
    18: { from: 'from-yellow-500/20', via: 'via-yellow-500/5', border: 'border-yellow-500/20', text: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    19: { from: 'from-rose-500/20', via: 'via-rose-500/5', border: 'border-rose-500/20', text: 'text-rose-400', bg: 'bg-rose-500/10' },
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
            description: 'Orchestrating end-to-end production architecture and SOPs for dairy processing.',
            responsibilities: [
                'Engineered production workflows for 25,000 units per batch, optimizing throughput.',
                'Developed comprehensive QC protocols and supply chain management strategies.',
                'Led cross-functional coordination between production and local cooperatives.',
            ],
            skills: ['Ops Strategy', 'QCMilk', 'Cold Chain'],
            stats: [
                { value: '25K', label: 'Batch' },
                { value: '100%', label: 'SOPs' },
                { value: 'Team', label: 'Coord' }
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
        <section id="projects" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <h2 className="text-5xl font-bold mb-20 tracking-tighter">Selected Works.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => {
                        const c = colors[project.id];
                        return (
                            <div key={project.id}
                                className={`project-card bg-white/[0.02] border ${c.border} p-8 rounded-3xl transition-all duration-300 hover:bg-white/[0.04] relative`}>

                                <div className="relative">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.from} ${c.via} flex items-center justify-center border ${c.border} ${c.text}`}>
                                            {project.icon}
                                        </div>
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest ${c.bg} ${c.text} border ${c.border}`}>
                                            {project.roleType === 'lead' ? 'Lead' : 'Individual'}
                                        </span>
                                    </div>

                                    <div className="space-y-1 mb-3">
                                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                                        <p className="text-xs text-text-tertiary font-mono">
                                            {project.association} &middot; {project.period}
                                        </p>
                                    </div>

                                    <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>

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
                                        <div className="flex gap-8 mb-6 py-4 border-t border-white/[0.06]">
                                            {project.stats.map((s, i) => (
                                                <div key={i}>
                                                    <p className="text-base font-bold text-foreground">{s.value}</p>
                                                    <p className="text-xs text-text-muted mt-0.5">{s.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map(s => (
                                                <span key={s}
                                                    className="px-3 py-1.5 text-xs font-mono text-text-tertiary bg-white/[0.03] rounded-lg border border-white/[0.06] hover:border-white/[0.15] transition-colors">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                        {project.source && (
                                            <a href={project.source} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-tertiary hover:text-primary border border-white/[0.08] hover:border-primary/40 rounded-lg transition-colors flex-shrink-0">
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
