import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChartBar,
    Globe, Wrench, Circuitry, TerminalWindow,
    Factory, ChartPieSlice, Truck, ClipboardText, UsersThree, Pulse,
    Brain, CaretDown, ArrowUpRight
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
            title: 'Operations & Production Management',
            accentColor: 'text-accent-blue',
            iconBg: 'bg-accent-blue/10',
            borderColor: 'hover:border-accent-blue/30',
            glow: 'hover:shadow-[0_0_20px_rgba(80,186,255,0.08)]',
            tagColor: 'bg-accent-blue/10 text-accent-blue',
            gradient: 'from-accent-blue to-primary',
            skills: [
                { 
                    name: 'SOP Development', 
                    icon: <ClipboardText size={20} weight="duotone" />,
                    context: 'Designed and implemented SOP architecture for pasteurization, QC, cold chain, and peroxide falsification testing at Rumah Susu Indonesia.',
                    project: 'Rumah Susu Indonesia'
                },
                { 
                    name: 'Cold Chain Management', 
                    icon: <Truck size={20} weight="duotone" />,
                    context: 'Upgraded cold chain with reinforced belts to prevent box damage. Maintained 2–8°C across cooling, storage, and distribution.',
                    project: 'Rumah Susu Indonesia'
                },
                { 
                    name: 'Production Planning', 
                    icon: <Factory size={20} weight="duotone" />,
                    context: 'Managing 2,000–3,500L/week capacity across pasteurized milk and moza cheese production with a lean team of 4.',
                    project: 'Rumah Susu Indonesia'
                },
                { 
                    name: 'Quality Control (QC)', 
                    icon: <ChartPieSlice size={20} weight="duotone" />,
                    context: 'Lactoscan analysis, pH/TS/added water monitoring, alcohol & peroxide tests, organoleptic evaluation. Reject rate under 1%.',
                    project: 'Rumah Susu Indonesia'
                },
                { 
                    name: 'Traceability Systems', 
                    icon: <Pulse size={20} weight="duotone" />,
                    context: 'Implemented 3-batch sample retention for spoilage traceability from production through delivery.',
                    project: 'Rumah Susu Indonesia'
                },
                { 
                    name: 'Supply Chain Coordination', 
                    icon: <Globe size={20} weight="duotone" />,
                    context: 'Raw milk supply coordination with KPS cooperatives, delivery scheduling, and stock reconciliation.',
                    project: 'Rumah Susu Indonesia'
                },
                { 
                    name: 'Team Leadership', 
                    icon: <UsersThree size={20} weight="duotone" />,
                    context: 'Leading a 4-person production team at Rumah Susu Indonesia Tasikmalaya across all operational shifts.',
                    project: null
                },
                { 
                    name: 'Quality Prediction Dashboard', 
                    icon: <ChartBar size={20} weight="duotone" />,
                    context: 'Built a real-time milk quality prediction tool using Random Forest & XGBoost, predicting grade from 7 production parameters.',
                    project: 'Milk Quality Prediction'
                },
            ]
        },
        {
            title: 'Engineering & Technical Foundation',
            accentColor: 'text-primary',
            iconBg: 'bg-primary/10',
            borderColor: 'hover:border-primary/30',
            glow: 'hover:shadow-[0_0_20px_rgba(17,129,255,0.08)]',
            tagColor: 'bg-primary/10 text-primary',
            gradient: 'from-primary to-accent-blue',
            skills: [
                { 
                    name: 'IoT & Embedded Systems', 
                    icon: <Circuitry size={20} weight="duotone" />,
                    context: 'ESP32/Arduino firmware development, sensor integration, MQTT communication — deployed in 5+ monitoring and automation projects.',
                    project: 'Flood Detection & Monitoring System'
                },
                { 
                    name: 'Data Analysis & ML', 
                    icon: <Brain size={20} weight="duotone" />,
                    context: 'Python (Pandas, NumPy), Random Forest, XGBoost for milk quality prediction and market screening across 660+ companies.',
                    project: 'IDX Market Screener'
                },
                { 
                    name: 'Web Development', 
                    icon: <TerminalWindow size={20} weight="duotone" />,
                    context: 'React, JavaScript, HTML/CSS for portfolio, company profiles, educational platforms, and internal dashboards.',
                    project: 'DR.MATT Company Profile'
                },
                { 
                    name: 'Networking', 
                    icon: <Globe size={20} weight="duotone" />,
                    context: 'Certified Junior Network Engineer (Kominfo DTS) — VLAN, OSPF, IPv4/IPv6, Cisco automation.',
                    project: null
                },
                { 
                    name: 'IT Support & Hardware', 
                    icon: <Wrench size={20} weight="duotone" />,
                    context: 'BNSP-certified Hardware Installation Supervisor. PC assembly, troubleshooting, and on-site installation.',
                    project: null
                },
            ]
        }
    ];

    return (
        <section id="skills" className="py-12 md:py-[72px] bg-background relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-blue/4 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] space-y-8 md:space-y-12">
                {skillGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-4 md:space-y-6">
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
                            <div className="bg-primary/20 h-px w-8"></div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
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
                                            variant="borderless"
                                            className={`cursor-pointer transition-all duration-200 shadow-floating ${group.glow}`}
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
                                                    <span className={`inline-block text-[10px] px-1.5 py-0.5 rounded-sm ${group.tagColor} mt-0.5`}>
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
