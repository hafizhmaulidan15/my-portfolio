const sections = [
    {
        title: 'Operations & Production Management',
        mono: 'Dairy Floor  Systems',
        accentColor: 'text-primary',
        skills: [
            { name: 'Cheese Production & R&D', icon: <i className="bi bi-flask text-[18px]"></i>, context: 'Led first commercial mozzarella and cheddar development  from trial to standardized SOP.', project: 'Rumah Susu Indonesia', featured: true },
            { name: 'SOP Development', icon: <i className="bi bi-clipboard-check text-[18px]"></i>, context: 'SOP architecture pasteurization, QC, cold chain, peroxide falsification. Mozzarella SOP suite + ratchet loading standards.', project: 'Rumah Susu Indonesia' },
            { name: 'Cold Chain Management', icon: <i className="bi bi-truck text-[18px]"></i>, context: 'Reinforced belts, 2–8°C across cooling, storage, distribution to Bogor/Sukabumi/Lampung.', project: 'Rumah Susu Indonesia' },
            { name: 'Production Planning', icon: <i className="bi bi-building text-[18px]"></i>, context: 'Production planning and scheduling across intake, pasteurization, and distribution.', project: 'Rumah Susu Indonesia' },
            { name: 'Quality Control', icon: <i className="bi bi-pie-chart text-[18px]"></i>, context: 'Lactoscan, pH/TS, alcohol & peroxide, organoleptic. Reject <1%, 3-batch retention.', project: 'Rumah Susu Indonesia' },
            { name: 'Supplier Intelligence', icon: <i className="bi bi-bar-chart text-[18px]"></i>, context: 'Per-KPS fat/SNF/protein/alcohol/volume dashboard  data-driven supplier selection.', project: 'Rumah Susu Indonesia' },
            { name: 'Traceability', icon: <i className="bi bi-activity text-[18px]"></i>, context: '3-batch retention traceability production → delivery.', project: 'Rumah Susu Indonesia' },
            { name: 'Supply Chain', icon: <i className="bi bi-globe text-[18px]"></i>, context: 'KPS coordination, ratchet SOPs Box Biru/Tray, scheduling, stock rec.', project: 'Rumah Susu Indonesia' },
            { name: 'Team Leadership', icon: <i className="bi bi-people text-[18px]"></i>, context: 'Leading Tasikmalaya ops  shift coordination, SOP adherence, and team development.', project: null },
            { name: 'Quality Prediction', icon: <i className="bi bi-bar-chart text-[18px]"></i>, context: 'Random Forest/XGBoost grade from 7 params, real-time dashboard.', project: 'Milk Quality Prediction' },
        ]
    },
    {
        title: 'Engineering & Technical',
        mono: 'Systems & Code',
        accentColor: 'text-primary',
        skills: [
            { name: 'IoT & Embedded', icon: <i className="bi bi-cpu text-[18px]"></i>, context: 'ESP32/Arduino, MQTT, Arduino IoT Cloud, FastLED  5+ deployments, 99% uptime.', project: 'Flood Detection' },
            { name: 'Data & ML', icon: <i className="bi bi-cpu text-[18px]"></i>, context: 'Python Pandas/NumPy, RF/XGBoost, 660+ companies screened.', project: 'IDX Screener' },
            { name: 'Web Development', icon: <i className="bi bi-terminal text-[18px]"></i>, context: 'React, TypeScript, Tailwind  portfolio, dashboards, company profiles.', project: 'DR.MATT' },
            { name: 'Networking', icon: <i className="bi bi-globe text-[18px]"></i>, context: 'Kominfo DTS certified  VLAN, OSPF, IPv4/6, Cisco.', project: null },
            { name: 'IT & Hardware', icon: <i className="bi bi-tools text-[18px]"></i>, context: 'BNSP Hardware Supervisor  assembly, troubleshooting, on-site.', project: null },
        ]
    },
];

const Skills = () => {

    return (
        <section id="skills" className="py-24 md:py-32 bg-transparent relative overflow-hidden border-t border-border">
            <div className="container mx-auto px-6 lg:px-8 max-w-[1400px] space-y-16">
                {sections.map((section, si) => (
                    <div key={si} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                        <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-3">
                            <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase">{section.mono}</p>
                            <h3 className={`font-display text-[24px] md:text-[28px] font-[700] tracking-[-0.02em] leading-tight ${section.accentColor} text-balance`}>{section.title}</h3>
                            <div className="hidden lg:block h-px w-12 bg-border mt-4"></div>
                            <p className="hidden lg:block text-sm leading-relaxed text-text-tertiary max-w-[28ch] text-pretty">
                                {si === 0 ? 'Process, QC, cold chain and supplier data  built from zero for repeatable ops.' : 'Firmware, data, and web  bridging factory floor and dashboard.'}
                            </p>
                        </div>

                        <div className="lg:col-span-8 divide-y divide-border border-y border-border">
                            {section.skills.map((skill) => {
                                return (
                                    <div key={skill.name} className={`group py-4 flex flex-col gap-1 ${skill.featured ? 'bg-white/[0.02] -mx-3 px-3 rounded-lg border-l-2 border-primary' : ''}`}>
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 p-1.5 rounded-md bg-gradient-icon border border-primary/10 text-text-secondary flex items-center justify-center">{skill.icon}</span>
                                            <div className="flex-1 min-w-0">
                                                <span className="font-medium text-[14px] leading-tight">{skill.name}</span>
                                                <p className="text-[13px] leading-relaxed text-text-secondary text-pretty pr-6 mt-2">{skill.context}</p>
                                                {skill.project && <div className="flex items-center gap-1.5 text-primary text-xs font-medium mt-2"><i className="bi bi-arrow-up-right text-[12px]"></i><span>{skill.project}</span></div>}
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
