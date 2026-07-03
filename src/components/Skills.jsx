import { useState } from 'react';
import {
    Brain, CaretDown, ChartBar, ChartPieSlice, ClipboardText,
    Circuitry, Factory, Globe, Pulse, TerminalWindow,
    Truck, UsersThree, Wrench, ArrowUpRight
} from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const sections = [
    {
        title: 'Operations & Production Management',
        accentColor: 'text-accent-blue',
        iconBg: 'bg-accent-blue/10',
        tagColor: 'bg-accent-blue/10 text-accent-blue',
        skills: [
            { name: 'SOP Development', icon: <ClipboardText size={20} weight="duotone" />, context: 'Designed and implemented SOP architecture for pasteurization, QC, cold chain, and peroxide falsification testing at Rumah Susu Indonesia.', project: 'Rumah Susu Indonesia' },
            { name: 'Cold Chain Management', icon: <Truck size={20} weight="duotone" />, context: 'Upgraded cold chain with reinforced belts to prevent box damage. Maintained 2-8°C across cooling, storage, and distribution.', project: 'Rumah Susu Indonesia' },
            { name: 'Production Planning', icon: <Factory size={20} weight="duotone" />, context: 'Managing 2,000-3,500L/week capacity across pasteurized milk and moza cheese production with a lean team of 4.', project: 'Rumah Susu Indonesia' },
            { name: 'Quality Control (QC)', icon: <ChartPieSlice size={20} weight="duotone" />, context: 'Lactoscan analysis, pH/TS/added water monitoring, alcohol & peroxide tests, organoleptic evaluation. Reject rate under 1%.', project: 'Rumah Susu Indonesia' },
            { name: 'Traceability Systems', icon: <Pulse size={20} weight="duotone" />, context: 'Implemented 3-batch sample retention for spoilage traceability from production through delivery.', project: 'Rumah Susu Indonesia' },
            { name: 'Supply Chain Coordination', icon: <Globe size={20} weight="duotone" />, context: 'Raw milk supply coordination with KPS cooperatives, delivery scheduling, and stock reconciliation.', project: 'Rumah Susu Indonesia' },
            { name: 'Team Leadership', icon: <UsersThree size={20} weight="duotone" />, context: 'Leading a 4-person production team at Rumah Susu Indonesia Tasikmalaya across all operational shifts.', project: null },
            { name: 'Quality Prediction Dashboard', icon: <ChartBar size={20} weight="duotone" />, context: 'Built a real-time milk quality prediction tool using Random Forest & XGBoost, predicting grade from 7 production parameters.', project: 'Milk Quality Prediction' },
        ]
    },
    {
        title: 'Engineering & Technical Foundation',
        accentColor: 'text-primary',
        iconBg: 'bg-primary/10',
        tagColor: 'bg-primary/10 text-primary',
        skills: [
            { name: 'IoT & Embedded Systems', icon: <Circuitry size={20} weight="duotone" />, context: 'ESP32/Arduino firmware development, sensor integration, MQTT communication — deployed in 5+ monitoring and automation projects.', project: 'Flood Detection & Monitoring System' },
            { name: 'Data Analysis & ML', icon: <Brain size={20} weight="duotone" />, context: 'Python (Pandas, NumPy), Random Forest, XGBoost for milk quality prediction and market screening across 660+ companies.', project: 'IDX Market Screener' },
            { name: 'Web Development', icon: <TerminalWindow size={20} weight="duotone" />, context: 'React, JavaScript, HTML/CSS for portfolio, company profiles, educational platforms, and internal dashboards.', project: 'DR.MATT Company Profile' },
            { name: 'Networking', icon: <Globe size={20} weight="duotone" />, context: 'Certified Junior Network Engineer (Kominfo DTS) — VLAN, OSPF, IPv4/IPv6, Cisco automation.', project: null },
            { name: 'IT Support & Hardware', icon: <Wrench size={20} weight="duotone" />, context: 'BNSP-certified Hardware Installation Supervisor. PC assembly, troubleshooting, and on-site installation.', project: null },
        ]
    },
];

const Skills = () => {
    const [expanded, setExpanded] = useState(new Set());

    const toggle = (id) => {
        setExpanded(prev => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    return (
        <section id="skills" className="py-12 md:py-[72px] bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] space-y-8 md:space-y-12">
                {sections.map((section, si) => (
                    <div key={si} className="space-y-4 md:space-y-6">
                        <div className="section-title space-y-2 text-center">
                            <h3 className={`text-[18px] font-semibold tracking-tight ${section.accentColor}`}>
                                {section.title}
                            </h3>
                            <div className="bg-primary/20 h-px w-8 mx-auto"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                            {section.skills.map((skill, ski) => {
                                const id = `${si}-${ski}`;
                                const open = expanded.has(id);
                                return (
                                    <GlassPanel
                                        key={id}
                                        variant="borderless"
                                        noHover
                                        className={`skill-card cursor-pointer transition-all duration-200 w-full sm:w-[calc(50%-4px)] lg:w-[calc(33.333%-8px)]`}
                                        onClick={() => toggle(id)}
                                    >
                                        <div className="flex items-center gap-3 p-3">
                                            <div className={`p-2 ${section.iconBg} rounded-sm ${section.accentColor} transition-transform`}>
                                                {skill.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-text-secondary font-medium text-[14px] truncate">
                                                        {skill.name}
                                                    </span>
                                                    <CaretDown
                                                        size={14}
                                                        className={`text-text-tertiary flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                                                        weight="bold"
                                                    />
                                                </div>
                                                <span className={`inline-block text-[10px] px-1.5 py-0.5 rounded-sm ${section.tagColor} mt-0.5`}>
                                                    {section.title}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="px-3 pb-4 pt-3 space-y-2.5">
                                                <p className="text-text-tertiary text-[12.5px] leading-relaxed">{skill.context}</p>
                                                {skill.project && (
                                                    <div className="flex items-center gap-1.5 text-primary text-[12px] font-medium">
                                                        <ArrowUpRight size={14} weight="bold" />
                                                        <span>{skill.project}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </GlassPanel>
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