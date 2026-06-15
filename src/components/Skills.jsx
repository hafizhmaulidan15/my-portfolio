import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Cpu, Database, WifiHigh, Lightning, Code, ChartBar,
    Gear, Brain, Globe, Wrench, SquaresFour, Circuitry, Cloud, TerminalWindow,
    Factory, ChartPieSlice, Truck, ClipboardText, UsersThree, Pulse,
    CaretDown, ArrowUpRight
} from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Skills = () => {
    const [expandedSkills, setExpandedSkills] = useState(new Set());

    const toggleSkill = (id) => {
        setExpandedSkills(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const skillGroups = [
        {
            title: 'Operations & Leadership',
            accentColor: 'text-accent-orange',
            iconBg: 'bg-accent-orange/10',
            borderColor: 'hover:border-accent-orange/30',
            glow: 'hover:shadow-[0_0_20px_rgba(240,81,0,0.08)]',
            tagColor: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20',
            gradient: 'from-accent-orange to-warning',
            skills: [
                { 
                    name: 'SOP Development', 
                    icon: <ClipboardText size={20} weight="duotone" />,
                    context: 'Standardized SOP for 25K batch production, cold chain, and QC protocols at Rumah Susu Indonesia.',
                    project: 'Production Operations SOP'
                },
                { 
                    name: 'Supply Chain Management', 
                    icon: <Truck size={20} weight="duotone" />,
                    context: 'Raw milk supply coordination with local KPS dairy cooperatives for daily production.',
                    project: 'Production Operations SOP'
                },
                { 
                    name: 'Production Planning', 
                    icon: <Factory size={20} weight="duotone" />,
                    context: '25K units/batch capacity planning and throughput optimization.',
                    project: 'Production Operations SOP'
                },
                { 
                    name: 'Quality Control (QC)', 
                    icon: <ChartPieSlice size={20} weight="duotone" />,
                    context: 'Pasteurized milk QC protocols from raw material reception to dispatch.',
                    project: 'Production Operations SOP'
                },
                { 
                    name: 'Team Leadership', 
                    icon: <UsersThree size={20} weight="duotone" />,
                    context: 'Leading cross-functional production team at Rumah Susu Indonesia.',
                    project: null
                },
                { 
                    name: 'Project Management', 
                    icon: <Wrench size={20} weight="duotone" />,
                    context: 'End-to-end delivery of IoT automation and web projects using Agile methodology.',
                    project: null
                },
                { 
                    name: 'Digital Inventory Systems', 
                    icon: <Database size={20} weight="duotone" />,
                    context: 'Real-time stock opname monitoring via Google Sheets API dashboard.',
                    project: 'Rumah Susu Inventory Dashboard'
                },
            ]
        },
        {
            title: 'IoT & Embedded Systems',
            accentColor: 'text-accent-teal',
            iconBg: 'bg-accent-teal/10',
            borderColor: 'hover:border-accent-teal/30',
            glow: 'hover:shadow-[0_0_20px_rgba(0,149,136,0.08)]',
            tagColor: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
            gradient: 'from-accent-teal to-primary',
            skills: [
                { 
                    name: 'ESP32 & Arduino', 
                    icon: <Circuitry size={20} weight="duotone" />,
                    context: 'Core MCU across 5+ IoT deployments for monitoring, automation, and control systems.',
                    project: 'Flood Detection & Monitoring System'
                },
                { 
                    name: 'Firmware Dev (C/C++)', 
                    icon: <Cpu size={20} weight="duotone" />,
                    context: 'ESP32 firmware for sensor reading, actuation logic, and MQTT communication.',
                    project: 'Advanced Banana Ripeness Detection'
                },
                { 
                    name: 'Sensor Integration', 
                    icon: <Lightning size={20} weight="duotone" />,
                    context: 'Integrated ultrasonic, DHT22, TCS34725, YF-S201, and flame sensors.',
                    project: 'Flood Detection & Monitoring System'
                },
                { 
                    name: 'RFID, NFC & Ultrasonic', 
                    icon: <WifiHigh size={20} weight="duotone" />,
                    context: 'Distance sensing for water level monitoring and obstacle detection.',
                    project: 'Water Level Detection System'
                },
                { 
                    name: 'MQTT, HTTP & REST API', 
                    icon: <Globe size={20} weight="duotone" />,
                    context: 'IoT cloud communication protocols for real-time data streaming.',
                    project: 'Flood Detection & Monitoring System'
                },
                { 
                    name: 'Real-time Monitoring', 
                    icon: <ChartBar size={20} weight="duotone" />,
                    context: 'Web dashboard for live sensor data visualization with automated alerts.',
                    project: 'Internal Monitoring Dashboard'
                },
                { 
                    name: 'Field Installation & Wiring', 
                    icon: <Wrench size={20} weight="duotone" />,
                    context: 'On-site IP65-rated LED installation at Curug Cikoneng tourist attraction.',
                    project: 'Curug Cikoneng LED Decoration'
                },
            ]
        },
        {
            title: 'Programming & Data',
            accentColor: 'text-primary',
            iconBg: 'bg-primary/10',
            borderColor: 'hover:border-primary/30',
            glow: 'hover:shadow-[0_0_20px_rgba(20,71,230,0.08)]',
            tagColor: 'bg-primary/10 text-primary border-primary/20',
            gradient: 'from-primary to-accent-teal',
            skills: [
                { 
                    name: 'Python (Pandas, NumPy)', 
                    icon: <Code size={20} weight="duotone" />,
                    context: 'Data processing and ML pipeline for stock market screening (660+ companies).',
                    project: 'IDX Market Screener'
                },
                { 
                    name: 'C/C++ for Embedded', 
                    icon: <Cpu size={20} weight="duotone" />,
                    context: 'Arduino/ESP32 firmware across all IoT automation and robotics projects.',
                    project: 'Autonomous Fire-Fighting Robot'
                },
                { 
                    name: 'JavaScript & React', 
                    icon: <TerminalWindow size={20} weight="duotone" />,
                    context: 'Built portfolio, company profile, and educational platform.',
                    project: 'DR.MATT Company Profile'
                },
                { 
                    name: 'Data Analysis & ML', 
                    icon: <Brain size={20} weight="duotone" />,
                    context: 'RandomForestClassifier for movement prediction, ATR volatility analysis.',
                    project: 'IDX Market Screener'
                },
                { 
                    name: 'Fuzzy Logic Systems', 
                    icon: <Brain size={20} weight="duotone" />,
                    context: 'Predictive ripeness classification algorithm for agricultural quality sorting.',
                    project: 'Advanced Banana Ripeness Detection'
                },
                { 
                    name: 'MySQL & Database', 
                    icon: <Database size={20} weight="duotone" />,
                    context: 'Historical sensor data storage, retrieval, and backend scripting.',
                    project: 'Internal Monitoring Dashboard'
                },
                { 
                    name: 'ML Quality Prediction', 
                    icon: <Pulse size={20} weight="duotone" />,
                    context: 'Random Forest & XGBoost predicting pasteurized milk grade (A/B/C/Reject) from 7 production parameters with 0.92 F1. SHAP explainability for feature importance.',
                    project: 'Milk Quality Prediction'
                },
                { 
                    name: 'Networking (VLAN, OSPF)', 
                    icon: <Globe size={20} weight="duotone" />,
                    context: 'Certified Junior Network Engineer — IPv4/IPv6, OSPF routing, Cisco automation.',
                    project: null
                },
            ]
        }
    ];

    return (
        <section id="skills" className="py-[72px] px-6 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-teal/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-orange/4 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1400px] space-y-12">
                {skillGroups.map((group, groupIdx) => (
                    <div key={groupIdx} className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIdx * 0.1 }}
                            className="space-y-2"
                        >
                            <h3 className={`text-[18px] font-semibold tracking-tight ${group.accentColor}`}>
                                {group.title}
                            </h3>
                            <div className={`h-0.5 w-10 bg-gradient-to-r ${group.gradient} rounded-full`}></div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {group.skills.map((skill, skillIdx) => {
                                const skillId = `${groupIdx}-${skillIdx}`;
                                const isExpanded = expandedSkills.has(skillId);
                                return (
                                    <motion.div
                                        key={skillId}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: groupIdx * 0.1 + skillIdx * 0.05 }}
                                    >
                                        <GlassPanel
                                            className={`cursor-pointer transition-all duration-200 border-white/[0.06] ${group.borderColor} ${group.glow}`}
                                            onClick={() => toggleSkill(skillId)}
                                        >
                                            <div className="flex items-center gap-3 p-3">
                                                <div className={`p-2 ${group.iconBg} rounded-sm ${group.accentColor} transition-transform`}>
                                                    {skill.icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-text-secondary font-medium text-[14px] truncate">
                                                            {skill.name}
                                                        </span>
                                                        <CaretDown 
                                                            size={14} 
                                                            className={`text-text-tertiary flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                                            weight="bold"
                                                        />
                                                    </div>
                                                    <span className={`inline-block text-[10px] px-1.5 py-0.5 rounded-sm border ${group.tagColor} mt-0.5`}>
                                                        {group.title}
                                                    </span>
                                                </div>
                                            </div>

                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="border-t border-white/[0.06] mx-3"></div>
                                                        <div className="px-3 pb-4 pt-3 space-y-2.5">
                                                            <p className="text-text-tertiary text-[12.5px] leading-relaxed">
                                                                {skill.context}
                                                            </p>
                                                            {skill.project && (
                                                                <div className="flex items-center gap-1.5 text-primary text-[12px] font-medium">
                                                                    <ArrowUpRight size={14} weight="bold" />
                                                                    <span>{skill.project}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </GlassPanel>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
