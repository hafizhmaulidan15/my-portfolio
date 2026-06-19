import { useState } from 'react';
import { 
    Globe, Code, Cpu, Drop, Pulse, 
    Plant, Lightbulb, ChartBar, Database, 
    TrendUp,
    Factory, Waves, BookOpen, Lightning, Shield
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
            color: 'text-accent-teal',
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
                'Implemented SHAP explainability for regulatory-grade feature importance analysis (pH & suhu dominant).',
                'Developed FastAPI backend with real-time prediction endpoint (<15ms inference time).',
                'Built Next.js dashboard with interactive visualization, prediction history, and actionable recommendations.',
                'Containerized fullstack application with Docker Compose for production deployment.'
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
            color: 'text-accent-teal',
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
            description: 'Orchestrating end-to-end production architecture and strategic SOPs for industrial-scale dairy processing.',
            responsibilities: [
                'Engineered production workflows for 25,000 units per batch, optimizing throughput.',
                'Developed comprehensive QC protocols and supply chain management strategies.',
                'Led cross-functional coordination between production and local cooperatives.',
                'Strategized distribution logistics and sustainable waste management.'
            ],
            impact: 'Pivoted engineering precision into operational leadership, managing high-capacity industrial systems.',
            skills: ['Operational Strategy', 'Project Lifecycle', 'Supply Chain Management', 'SOP Architecture'],
            color: 'text-accent-teal',
            stats: [
                { value: '25K', label: 'Batch Capacity' },
                { value: '100%', label: 'SOP Compliance' },
                { value: 'Cross-team', label: 'Coordination' }
            ]
        },
        {
            id: 1,
            title: 'DR.MATT Company Profile',
            period: 'Aug 2024 - Nov 2024',
            association: 'PT Matra Kreasi Mandiri',
            icon: <Globe size={28} weight="duotone" />,
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
            color: 'text-primary',
            link: 'https://drmatt.id/'
        },
        {
            id: 2,
            title: 'Flood Detection & Monitoring System',
            period: '2024',
            association: 'PT Matra Kreasi Mandiri',
            icon: <Drop size={28} weight="duotone" />,
            role: 'IoT Developer',
            roleType: 'team',
            category: 'iot',
            description: 'Real-time water level and flow rate tracking with 4-level alert system and automated notifications.',
            responsibilities: [
                'Integrated ESP32 with Ultrasonic and YF-S201 flow sensors.',
                'Built Arduino Cloud dashboard for real-time monitoring.',
                'Implemented 4-level alert system with automated Telegram notifications.',
                'Designed hardware calibration and wiring validation protocols.'
            ],
            impact: 'Deployed operational flood monitoring system with cloud integration for early warning.',
            skills: ['ESP32', 'Arduino', 'Sensors', 'MQTT', 'IoT Cloud'],
            color: 'text-accent-blue',
            stats: [
                { value: '4-Level', label: 'Alert System' },
                { value: 'Real-time', label: 'Cloud Dashboard' },
                { value: 'Auto', label: 'Notifications' }
            ]
        },
        {
            id: 3,
            title: 'Advanced Banana Ripeness Detection',
            period: 'Oct 2024 - Nov 2024',
            association: 'UIN Jakarta',
            icon: <Cpu size={28} weight="duotone" />,
            role: 'IoT Developer',
            roleType: 'team',
            category: 'iot',
            description: 'IoT-based spectral analysis system for agricultural quality control using color sensors.',
            responsibilities: [
                'Utilized TCS34725 sensors for RGB-based ripeness classification.',
                'Built real-time monitoring via ESP32 & Arduino IoT Cloud.',
                'Integrated J5019 modules for localized LCD status feedback.',
                'Developed Fuzzy Logic algorithm for predictive classification.'
            ],
            impact: 'Achieved validated accuracy in automated fruit ripeness classification system.',
            skills: ['ESP32', 'C++', 'IoT Cloud', 'Fuzzy Logic', 'Embedded Systems'],
            color: 'text-warning'
        },
        {
            id: 4,
            title: 'NanoRobotic Website',
            period: 'Sep 2025 - Jan 2026',
            association: 'PT Matra Kreasi Mandiri',
            icon: <Globe size={28} weight="duotone" />,
            role: 'Full-Stack Developer',
            roleType: 'lead',
            category: 'web',
            description: 'End-to-end responsive educational platform with WhatsApp API integration.',
            responsibilities: [
                'Developed responsive landing page from concept to deployment.',
                'Integrated WhatsApp API for contact forms and Join Now features.',
                'Engineered mobile-first interfaces using Bootstrap, HTML5, CSS3.',
                'Implemented SEO strategies with semantic HTML and meta tags.'
            ],
            impact: 'Delivered production-ready ed-tech platform with integrated communication features.',
            skills: ['HTML', 'CSS', 'JavaScript'],
            color: 'text-accent-teal',
            link: 'https://nanorobotic.co.id'
        },
        {
            id: 5,
            title: 'Autonomous Fire-Fighting Robot',
            period: '2023',
            association: 'IPB University',
            icon: <Cpu size={28} weight="duotone" />,
            role: 'Embedded Developer',
            roleType: 'team',
            category: 'iot',
            description: 'Autonomous robot designed for fire detection and automated suppression.',
            responsibilities: [
                'Integrated Arduino UNO with flame and ultrasonic sensors.',
                'Programmed L298N motor driver for autonomous navigation.',
                'Developed automated fire suppression mechanisms.',
                'Tested and calibrated sensor integration for accuracy.'
            ],
            impact: 'Built prototype autonomous system for fire emergency response.',
            skills: ['Arduino UNO', 'C++', 'Sensor Integration', 'Motor Control'],
            color: 'text-accent-red'
        },
        {
            id: 6,
            title: 'Microgreen Cultivation Automation (Admigre)',
            period: '2024',
            association: 'IPB University - Published',
            icon: <Plant size={28} weight="duotone" />,
            role: 'IoT Developer',
            roleType: 'team',
            category: 'iot',
            description: 'IoT-based automated system for optimized microgreen cultivation. Published in Jurnal Ilmiah Teknik Elektro IPB.',
            responsibilities: [
                'Integrated WS2812B LED for automated lighting control based on growth stage.',
                'Connected soil moisture and DHT22 sensors for environmental monitoring.',
                'Developed ESP32-based automated irrigation and climate control.',
                'Achieved 40% increase in growth efficiency through precise environmental control.'
            ],
            impact: 'Published research in Jurnal Ilmiah Teknik Elektro IPB - Contributing to sustainable agriculture technology.',
            skills: ['ESP32', 'WS2812B', 'DHT22', 'IoT', 'Automation', 'Research'],
            color: 'text-success',
            link: null,
            published: true,
            journal: 'Jurnal Ilmiah Teknik Elektro IPB',
            stats: [
                { value: '40%', label: 'Growth Efficiency' },
                { value: 'Automated', label: 'Irrigation' },
                { value: 'Published', label: 'Research' }
            ]
        },
        {
            id: 7,
            title: 'Water Level Detection System',
            period: 'Aug 2024 - Sep 2024',
            association: 'Telkom University',
            icon: <Waves size={28} weight="duotone" />,
            role: 'Lead Developer',
            roleType: 'team',
            category: 'iot',
            description: 'Real-time water level monitoring with Telegram bot integration for instant alerts.',
            responsibilities: [
                'Led full product lifecycle from planning to deployment using Agile methodology.',
                'Utilized three ultrasonic sensors and ESP32 for accurate measurement.',
                'Developed Telegram bot integration for instant notifications on level changes.',
                'Implemented relay control system for automated equipment response.'
            ],
            impact: 'Reduced emergency response time by 40% through instant alert system.',
            skills: ['ESP32', 'Telegram Bot', 'Relay Control', 'Agile', 'Ultrasonic'],
            color: 'text-accent-blue',
            stats: [
                { value: '40%', label: 'Faster Response' },
                { value: '3', label: 'Ultrasonic Sensors' },
                { value: 'Instant', label: 'Telegram Alerts' }
            ]
        },
        {
            id: 8,
            title: 'Curug Cikoneng LED Decoration',
            period: 'Jul 2023 - Oct 2023',
            association: 'Curug Cikoneng Tourist Attraction',
            icon: <Lightbulb size={28} weight="duotone" />,
            role: 'Electrical & Firmware Engineer',
            roleType: 'team',
            category: 'iot',
            description: 'Large-scale programmable LED lighting system for tourist attraction with web dashboard control.',
            responsibilities: [
                'Designed time-based and environment-based LED control using RTC DS3231.',
                'Developed responsive web dashboard for real-time monitoring and control.',
                'Managed power distribution calculation for extensive WS2812B LED arrays.',
                'Executed on-site installation with IP65 weatherproofing compliance.'
            ],
            impact: 'Successfully installed and commissioned outdoor LED system with 24/7 reliability.',
            skills: ['ESP32', 'WS2812B', 'RTC', 'Web Dashboard', 'Power Management', 'Field Installation'],
            color: 'text-warning'
        },
        {
            id: 9,
            title: 'IDX Market Screener',
            period: 'Dec 2025',
            association: 'Personal Project',
            icon: <TrendUp size={28} weight="duotone" />,
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
            color: 'text-primary'
        },
        {
            id: 10,
            title: 'Internal Monitoring Dashboard',
            period: '2024',
            association: 'PT Matra Kreasi Mandiri',
            icon: <Database size={28} weight="duotone" />,
            role: 'Full-Stack Developer',
            roleType: 'team',
            category: 'web',
            description: 'Web-based real-time monitoring dashboard for IoT sensor data with automated alerts.',
            responsibilities: [
                'Developed MySQL database for historical sensor data storage and retrieval.',
                'Utilized Python for backend scripting and data processing.',
                'Integrated real-time data streaming with WebSocket protocol.',
                'Created automated alert system with multi-level triggers.'
            ],
            impact: 'Enabled management to make immediate data-backed decisions with real-time visualization.',
            skills: ['MySQL', 'Python', 'WebSocket', 'Dashboard', 'Data Visualization'],
            color: 'text-primary'
        },
        {
            id: 11,
            title: 'WordPress Security Analysis',
            period: '2024',
            association: 'Security Research',
            icon: <Shield size={28} weight="duotone" />,
            role: 'Security Analyst',
            roleType: 'individual',
            category: 'data',
            description: 'Comprehensive CMS security analysis identifying vulnerabilities and providing mitigation strategies.',
            responsibilities: [
                'Conducted vulnerability assessment using WPScan tool.',
                'Identified SQL Injection and XSS vulnerabilities in WordPress sites.',
                'Documented security findings and recommended mitigation techniques.',
                'Implemented security hardening for protected web administration.'
            ],
            impact: 'Provided comprehensive security recommendations for safe web management practices.',
            skills: ['WPScan', 'SQL Injection', 'XSS', 'Security Analysis', 'Penetration Testing'],
            color: 'text-accent-red'
        }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-[72px] px-6 bg-background relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-teal/4 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-primary font-mono text-sm tracking-widest uppercase">
                            <span>// Portfolio</span>
                        </div>
                        <h2 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-foreground">
                            Strategic <span className="text-gradient-primary">execution</span>
                        </h2>
                        <p className="text-text-secondary max-w-[55ch] text-[16px] leading-relaxed">
                            A portfolio of precision, orchestrating the intersection of Operations, Engineering, and Data.
                        </p>
                    </div>

                    <div className="flex bg-surface border border-border p-1 rounded">
                        {['all', 'ops', 'iot', 'web', 'data'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-sm text-xs font-medium uppercase tracking-widest transition-all duration-200",
                                    activeCategory === cat 
                                        ? "bg-primary text-foreground shadow-raised" 
                                        : "text-text-tertiary hover:text-text-secondary hover:bg-white/[0.05]"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProjects.map((project) => (
                        <GlassPanel 
                            key={project.id} 
                            variant="elevated"
                            overflowVisible
                            className="flex flex-col h-full group"
                        >
                            {/* Icon */}
                            <div className="mb-5">
                                <div className={cn("inline-flex p-4 rounded-sm bg-interactive-button transition-colors group-hover:bg-primary/15", project.color)}>
                                    {project.icon}
                                </div>
                            </div>

                            {/* Title + Period */}
                            <div className="space-y-2 mb-3">
                                <h3 className="text-[18px] font-semibold tracking-tight text-foreground leading-tight">{project.title}</h3>
                                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-text-tertiary">
                                    <span className="px-2 py-0.5 rounded-sm bg-interactive-button border border-border whitespace-nowrap">
                                        {project.period}
                                    </span>
                                </div>
                            </div>

                            {/* Role · Type (combined inline) + Published badge */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[11px] font-mono text-text-tertiary">
                                    {project.role} · {project.roleType === 'individual' ? 'Personal' : project.roleType === 'lead' ? 'Lead' : 'Team'} Project
                                </span>
                                {project.published && (
                                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-sm bg-success/10 border border-success/30 text-success text-[10px] font-medium uppercase tracking-widest">
                                        <BookOpen size={10} weight="bold" />
                                        Published
                                    </span>
                                )}
                            </div>

                            {/* Stats Mini Cards (optional) */}
                            {project.stats && project.stats.length > 0 && (
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {project.stats.map((stat, i) => (
                                        <div key={i} className="bg-interactive-button rounded-sm p-2.5 text-center border border-border/20">
                                            <div className="text-[14px] font-semibold text-foreground">{stat.value}</div>
                                            <div className="text-[9px] font-mono text-text-tertiary uppercase tracking-wider mt-0.5">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Description */}
                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>

                            {/* Bullet Points (first 3) */}
                            <div className="space-y-1.5 mb-5 flex-grow">
                                {project.responsibilities.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-start gap-2 text-[12px] text-text-tertiary leading-relaxed">
                                        <span className="text-primary/50 mt-0.5 flex-shrink-0">•</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Skills */}
                            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-x-2.5 gap-y-1.5 items-center">
                                {project.skills.slice(0, 4).map((skill) => (
                                    <span key={skill} className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider">
                                        #{skill}
                                    </span>
                                ))}
                                {project.skills.length > 4 && (
                                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                                        +{project.skills.length - 4} more
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
