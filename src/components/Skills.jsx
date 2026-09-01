import { useState } from 'react';
import {
    Brain, CaretDown, ChartBar, ChartPieSlice, ClipboardText,
    Circuitry, Factory, Flask, Globe, Pulse, TerminalWindow,
    Truck, UsersThree, Wrench, ArrowUpRight
} from '@phosphor-icons/react';

const sections = [
    {
        title: 'Operations & Production Management',
        mono: 'Dairy Floor — Systems',
        accentColor: 'text-primary',
        skills: [
            { name: 'Cheese Production & R&D', icon: <Flask size={18} weight="light" />, context: 'Led first commercial Mozzarella (500 L → 36 kg / 180 pcs, 7.2% yield). Running Cheddar R&D 9 trials, 113.8% yield.', project: 'Rumah Susu Indonesia', featured: true },
            { name: 'SOP Development', icon: <ClipboardText size={18} weight="light" />, context: 'SOP architecture pasteurization, QC, cold chain, peroxide falsification. Mozzarella SOP suite + ratchet loading standards.', project: 'Rumah Susu Indonesia' },
            { name: 'Cold Chain Management', icon: <Truck size={18} weight="light" />, context: 'Reinforced belts, 2–8°C across cooling, storage, distribution to Bogor/Sukabumi/Lampung.', project: 'Rumah Susu Indonesia' },
            { name: 'Production Planning', icon: <Factory size={18} weight="light" />, context: '2,000–3,500L/week, 25K cups/batch, lean team of 4.', project: 'Rumah Susu Indonesia' },
            { name: 'Quality Control', icon: <ChartPieSlice size={18} weight="light" />, context: 'Lactoscan, pH/TS, alcohol & peroxide, organoleptic. Reject <1%, 3-batch retention.', project: 'Rumah Susu Indonesia' },
            { name: 'Supplier Intelligence', icon: <ChartBar size={18} weight="light" />, context: 'Per-KPS fat/SNF/protein/alcohol/volume dashboard — data-driven supplier selection.', project: 'Rumah Susu Indonesia' },
            { name: 'Traceability', icon: <Pulse size={18} weight="light" />, context: '3-batch retention traceability production → delivery.', project: 'Rumah Susu Indonesia' },
            { name: 'Supply Chain', icon: <Globe size={18} weight="light" />, context: 'KPS coordination, ratchet SOPs Box Biru/Tray, scheduling, stock rec.', project: 'Rumah Susu Indonesia' },
            { name: 'Team Leadership', icon: <UsersThree size={18} weight="light" />, context: 'Leading 4-person Tasikmalaya ops across shifts.', project: null },
            { name: 'Quality Prediction', icon: <ChartBar size={18} weight="light" />, context: 'Random Forest/XGBoost grade from 7 params, real-time dashboard.', project: 'Milk Quality Prediction' },
        ]
    },
    {
        title: 'Engineering & Technical',
        mono: 'Systems & Code',
        accentColor: 'text-text-tertiary',
        skills: [
            { name: 'IoT & Embedded', icon: <Circuitry size={18} weight="light" />, context: 'ESP32/Arduino, MQTT, Arduino IoT Cloud, FastLED — 5+ deployments, 99% uptime.', project: 'Flood Detection' },
            { name: 'Data & ML', icon: <Brain size={18} weight="light" />, context: 'Python Pandas/NumPy, RF/XGBoost, 660+ companies screened.', project: 'IDX Screener' },
            { name: 'Web Development', icon: <TerminalWindow size={18} weight="light" />, context: 'React, TypeScript, Tailwind — portfolio, dashboards, company profiles.', project: 'DR.MATT' },
            { name: 'Networking', icon: <Globe size={18} weight="light" />, context: 'Kominfo DTS certified — VLAN, OSPF, IPv4/6, Cisco.', project: null },
            { name: 'IT & Hardware', icon: <Wrench size={18} weight="light" />, context: 'BNSP Hardware Supervisor — assembly, troubleshooting, on-site.', project: null },
        ]
    },
];

const Skills = () => {
    const [expanded, setExpanded] = useState(new Set());
    const toggle = (id) => setExpanded(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

    return (
        <section id="skills" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-border">
            <div className="container mx-auto px-6 lg:px-8 max-w-[1400px] space-y-16">
                {sections.map((section, si) => (
                    <div key={si} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                        <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-3">
                            <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase">{section.mono}</p>
                            <h3 className={`font-display text-[24px] md:text-[28px] font-[700] tracking-[-0.02em] leading-tight ${section.accentColor} text-balance`}>{section.title}</h3>
                            <div className="hidden lg:block h-px w-12 bg-border mt-4"></div>
                            <p className="hidden lg:block text-sm leading-relaxed text-text-tertiary max-w-[28ch] text-pretty">
                                {si === 0 ? 'Process, QC, cold chain and supplier data — built from zero for repeatable ops.' : 'Firmware, data, and web — bridging factory floor and dashboard.'}
                            </p>
                        </div>

                        <div className="lg:col-span-8 divide-y divide-border border-y border-border">
                            {section.skills.map((skill, ski) => {
                                const id = `${si}-${ski}`;
                                const open = expanded.has(id);
                                return (
                                    <div key={id} className={`group py-4 flex flex-col gap-1 cursor-pointer ${skill.featured ? 'bg-white/[0.02] -mx-3 px-3 rounded-lg border-l-2 border-primary' : ''}`} onClick={() => toggle(id)}>
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 p-1.5 rounded-md bg-white/[0.04] border border-white/10 text-text-secondary group-hover:text-foreground transition-colors">{skill.icon}</span>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-medium text-[14px] leading-tight">{skill.name}</span>
                                                    <CaretDown size={12} weight="bold" className={`text-text-tertiary shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
                                                </div>
                                                <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                                                    <div className="overflow-hidden">
                                                        <p className="text-[13px] leading-relaxed text-text-secondary text-pretty pr-6">{skill.context}</p>
                                                        {skill.project && <div className="flex items-center gap-1.5 text-primary text-xs font-medium mt-2"><ArrowUpRight size={12} weight="bold" /><span>{skill.project}</span></div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
