import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Globe, Code, Cpu, Drop, Pulse, 
    Plant, Lightbulb, ChartBar, Database, 
    TrendUp, ArrowUpRight,
    Factory, Waves, BookOpen, Lightning, Shield,
    IdentificationBadge, Users, User
} from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';
import { cn } from '../lib/utils';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
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
            color: 'text-accent-orange'
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
            color: 'text-accent-blue'
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
            skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WhatsApp API', 'SEO'],
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
            journal: 'Jurnal Ilmiah Teknik Elektro IPB'
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
            color: 'text-accent-blue'
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

    const getRoleIcon = (roleType) => {
        switch (roleType) {
            case 'lead': return <IdentificationBadge size={14} weight="bold" />;
            case 'team': return <Users size={14} weight="bold" />;
            default: return <User size={14} weight="bold" />;
        }
    };

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section className="py-[72px] px-6 bg-background relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-orange/4 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-3">
                        <div className="h-0.5 w-10 bg-gradient-to-r from-primary to-accent-teal"></div>
                        <h2 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-foreground">
                            Strategic <span className="text-gradient-cool">execution</span>
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
                            overflowVisible
                            className="flex flex-col h-full border-border/50 hover:border-primary/20 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={cn("p-3 rounded-sm bg-interactive-button transition-colors group-hover:bg-primary/10", project.color)}>
                                    {project.icon}
                                </div>
                                {project.link && (
                                    <motion.a 
                                        href={project.link}
                                        target="_blank"
                                        whileHover={{ scale: 1.05 }}
                                        className="p-2 text-text-tertiary hover:text-primary transition-colors"
                                    >
                                        <ArrowUpRight size={20} weight="bold" />
                                    </motion.a>
                                )}
                            </div>

                            <div className="space-y-2 mb-4">
                                <h3 className="text-[18px] font-semibold tracking-tight text-foreground leading-tight">{project.title}</h3>
                                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-text-tertiary">
                                    <span className="px-2 py-0.5 rounded-sm bg-interactive-button border border-border whitespace-nowrap">
                                        {project.period}
                                    </span>
                                    <span className="whitespace-nowrap">{project.association}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-primary/5 border border-primary/10 text-primary text-[10px] font-medium uppercase tracking-widest">
                                    {getRoleIcon(project.roleType)}
                                    {project.role}
                                </div>
                                {project.published && (
                                    <div className="flex items-center gap-1 px-2 py-1 rounded-sm bg-success/10 border border-success/30 text-success text-[10px] font-medium uppercase tracking-widest">
                                        <BookOpen size={10} weight="bold" />
                                        Published
                                    </div>
                                )}
                            </div>

                            <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                                {project.skills.slice(0, 4).map((skill) => (
                                    <span key={skill} className="text-[10px] font-mono text-text-tertiary uppercase">
                                        #{skill}
                                    </span>
                                ))}
                            </div>
                        </GlassPanel>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
