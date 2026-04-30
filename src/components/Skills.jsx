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
            skills: [
                { name: 'SOP Development', icon: <ClipboardText size={24} weight="duotone" /> },
                { name: 'Supply Chain Coordination', icon: <Truck size={24} weight="duotone" /> },
                { name: 'Production Planning', icon: <Factory size={24} weight="duotone" /> },
                { name: 'Quality Control (QC)', icon: <ChartPieSlice size={24} weight="duotone" /> },
                { name: 'Team Leadership', icon: <UsersThree size={24} weight="duotone" /> },
            ]
        },
        {
            title: 'IoT & Systems',
            skills: [
                { name: 'IoT Systems', icon: <WifiHigh size={24} weight="duotone" /> },
                { name: 'Embedded Systems', icon: <Cpu size={24} weight="duotone" /> },
                { name: 'ESP32 & Arduino', icon: <Circuitry size={24} weight="duotone" /> },
                { name: 'Electronics & Hardware', icon: <SquaresFour size={24} weight="duotone" /> },
                { name: 'Automation', icon: <Gear size={24} weight="duotone" /> },
                { name: 'Sensor Integration', icon: <Lightning size={24} weight="duotone" /> },
            ]
        },
        {
            title: 'Data & Software',
            skills: [
                { name: 'Python & C++', icon: <Code size={24} weight="duotone" /> },
                { name: 'React Development', icon: <TerminalWindow size={24} weight="duotone" /> },
                { name: 'Data Analysis', icon: <ChartBar size={24} weight="duotone" /> },
                { name: 'Machine Learning', icon: <Brain size={24} weight="duotone" /> },
                { name: 'Database Design', icon: <Database size={24} weight="duotone" /> },
                { name: 'Networking (OSPF/VLAN)', icon: <Globe size={24} weight="duotone" /> },
            ]
        }
    ];

    return (
        <section className="pt-40 pb-24 bg-background relative overflow-hidden min-h-[calc(100vh-80px)]">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold tracking-tight text-foreground uppercase tracking-[0.1em]">
                                    {group.title}
                                </h3>
                                <div className="h-1 w-12 bg-accent"></div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {group.skills.map((skill, skillIdx) => (
                                    <GlassPanel 
                                        key={skillIdx} 
                                        className="flex items-center gap-4 p-4 border-white/5 hover:border-accent/20 transition-all group"
                                    >
                                        <div className="p-2 bg-accent/5 rounded-lg text-accent group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </div>
                                        <span className="text-zinc-400 font-medium group-hover:text-foreground transition-colors">
                                            {skill.name}
                                        </span>
                                    </GlassPanel>
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
