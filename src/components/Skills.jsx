import { motion } from 'framer-motion';
import { 
    Cpu, Database, WifiHigh, Lightning, Code, ChartBar,
    Gear, Brain, Globe, Wrench, SquaresFour, Circuitry, Cloud, TerminalWindow,
    Factory, ChartPieSlice, Truck, ClipboardText, UsersThree
} from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Operations & Leadership',
            accentColor: 'text-accent-orange',
            iconBg: 'bg-accent-orange/10',
            borderColor: 'group-hover:border-accent-orange/30',
            glow: 'border-glow-top-orange',
            skills: [
                { name: 'SOP Development', icon: <ClipboardText size={20} weight="duotone" /> },
                { name: 'Supply Chain Management', icon: <Truck size={20} weight="duotone" /> },
                { name: 'Production Planning', icon: <Factory size={20} weight="duotone" /> },
                { name: 'Quality Control (QC)', icon: <ChartPieSlice size={20} weight="duotone" /> },
                { name: 'Team Leadership', icon: <UsersThree size={20} weight="duotone" /> },
                { name: 'Project Management', icon: <Wrench size={20} weight="duotone" /> },
                { name: 'Digital Inventory Systems', icon: <Database size={20} weight="duotone" /> },
            ]
        },
        {
            title: 'IoT & Embedded Systems',
            accentColor: 'text-accent-teal',
            iconBg: 'bg-accent-teal/10',
            borderColor: 'group-hover:border-accent-teal/30',
            glow: 'border-glow-top-teal',
            skills: [
                { name: 'ESP32 & Arduino', icon: <Circuitry size={20} weight="duotone" /> },
                { name: 'Firmware Development (C/C++)', icon: <Cpu size={20} weight="duotone" /> },
                { name: 'Sensor Integration', icon: <Lightning size={20} weight="duotone" /> },
                { name: 'RFID, NFC & Ultrasonic', icon: <WifiHigh size={20} weight="duotone" /> },
                { name: 'MQTT, HTTP & REST API', icon: <Globe size={20} weight="duotone" /> },
                { name: 'Real-time Monitoring', icon: <ChartBar size={20} weight="duotone" /> },
                { name: 'Field Installation & Wiring', icon: <Wrench size={20} weight="duotone" /> },
            ]
        },
        {
            title: 'Programming & Data',
            accentColor: 'text-primary',
            iconBg: 'bg-primary/10',
            borderColor: 'group-hover:border-primary/30',
            glow: 'border-glow-top-primary',
            skills: [
                { name: 'Python (Pandas, NumPy)', icon: <Code size={20} weight="duotone" /> },
                { name: 'C/C++ for Embedded', icon: <Cpu size={20} weight="duotone" /> },
                { name: 'JavaScript & React', icon: <TerminalWindow size={20} weight="duotone" /> },
                { name: 'Data Analysis & ML', icon: <Brain size={20} weight="duotone" /> },
                { name: 'Fuzzy Logic Systems', icon: <Brain size={20} weight="duotone" /> },
                { name: 'MySQL & Database', icon: <Database size={20} weight="duotone" /> },
                { name: 'Networking (VLAN, OSPF)', icon: <Globe size={20} weight="duotone" /> },
            ]
        }
    ];

    return (
        <section className="py-[72px] px-6 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-teal/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-orange/4 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-6">
                            <div className="space-y-2">
                                <motion.h3 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: groupIdx * 0.1 }}
                                    className={`text-[18px] font-semibold tracking-tight ${group.accentColor}`}
                                >
                                    {group.title}
                                </motion.h3>
                                <div className={`h-0.5 w-10 bg-gradient-to-r ${groupIdx === 0 ? 'from-accent-orange to-warning' : groupIdx === 1 ? 'from-accent-teal to-primary' : 'from-primary to-accent-teal'} rounded-full`}></div>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                {group.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skillIdx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: groupIdx * 0.1 + skillIdx * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <GlassPanel 
                                            className={`flex items-center gap-3 p-3 group ${group.borderColor} ${group.glow}`}
                                        >
                                            <div className={`p-2 ${group.iconBg} rounded-sm ${group.accentColor} group-hover:scale-105 transition-transform`}>
                                                {skill.icon}
                                            </div>
                                            <span className="text-text-secondary font-medium group-hover:text-foreground transition-colors text-[14px]">
                                                {skill.name}
                                            </span>
                                        </GlassPanel>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
