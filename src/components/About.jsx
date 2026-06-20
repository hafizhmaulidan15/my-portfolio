import { motion } from 'framer-motion';
import { Student, MapPin, Briefcase, Factory, ChartPieSlice, Globe, Circle } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';


const About = () => {
    const infoCards = [
        {
            icon: <Factory size={24} weight="duotone" />,
            title: 'Current role',
            description: 'Head of Unit — Rumah Susu Indonesia',
            color: 'text-accent-blue',
            bg: 'bg-accent-blue/10',
            glow: 'border-glow-top-teal'
        },
        {
            icon: <Student size={24} weight="duotone" />,
            title: 'Education',
            description: 'B.Eng - IPB University (GPA 3.33)',
            color: 'text-primary',
            bg: 'bg-primary/10',
            glow: 'border-glow-top-primary'
        },
        {
            icon: <ChartPieSlice size={24} weight="duotone" />,
            title: 'Specialization',
            description: 'Operations & Production Management',
            color: 'text-accent-blue',
            bg: 'bg-accent-blue/10',
            glow: 'border-glow-top-teal'
        },
        {
            icon: <MapPin size={24} weight="duotone" />,
            title: 'Location',
            description: 'Bogor & Tasikmalaya',
            color: 'text-accent-blue',
            bg: 'bg-accent-blue/10',
            glow: 'border-glow-top-teal'
        },
    ];

    const achievements = [
        { text: 'Cold Chain Upgrade', icon: <ChartPieSlice size={14} weight="duotone" />, color: 'text-accent-blue' },
        { text: '<1% Reject Rate', icon: <Factory size={14} weight="duotone" />, color: 'text-primary' },
        { text: 'Traceability System', icon: <Globe size={14} weight="duotone" />, color: 'text-accent-blue' },
        { text: 'Quality Dashboard', icon: <Circle size={14} weight="duotone" />, color: 'text-success' },
    ];

    return (
            <section id="about" className="py-12 md:py-[72px] lg:py-0 lg:min-h-screen lg:flex lg:items-center bg-background relative overflow-hidden">
                <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/8 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent-blue/6 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-accent-blue/4 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                        
                        <div className="lg:col-span-7 space-y-6 md:space-y-8">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-end">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="relative shrink-0"
                                >
                                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent-blue/10 blur-2xl rounded-full opacity-60"></div>
                                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden relative group">
                                        <img 
                                            src="/profile-avatar.png" 
                                            alt="Muhammad Hafizh Maulidan" 
                                            className="w-full h-full object-cover object-[center_35%] transition-all duration-300"
                                            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Hafizh+Maulidan&background=1447E6&color=fff&size=512"; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center text-foreground shadow-floating">
                                        <Briefcase size={20} weight="bold" />
                                    </div>
                                </motion.div>

                                <div className="space-y-3 text-center md:text-left">
                                    <h2 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-foreground">
                                        Operations & Production <span className="text-gradient-primary">Leader</span>
                                    </h2>
                                    
                                </div>
                            </div>

                            <div className="space-y-4 md:space-y-6 text-text-secondary text-sm md:text-[16px] leading-relaxed max-w-[65ch]">
                                <p>
                                    I joined Rumah Susu Indonesia in March 2026 as part of a new unit in Tasikmalaya. Alongside a lean team of <span className="text-foreground font-medium">four people</span>, I helped set up the SOP architecture, QC protocols — lactoscan analysis, peroxide tests, alcohol tests — and establish the cold chain and production workflows, processing <span className="text-foreground font-medium">2,000–3,500 liters per week</span>.
                                </p>
                                <p>
                                    Beyond volume, I worked on a cold chain upgrade — reinforced belts so delivery boxes wouldn't crack in transit — set up a <span className="text-foreground font-medium">3-batch sample retention</span> system to trace spoilage, and built a milk quality dashboard tracking pH, TS, and added water in real time. Reject rates stayed under <span className="text-foreground font-medium">1%</span>. Products: pasteurized milk and moza cheese, with yogurt on the roadmap.
                                </p>
                                
                                <div className="pt-4">
                                    <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-widest mb-4">Key achievements</h4>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {achievements.map((ach, idx) => (
                                            <div key={idx} className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm ${ach.color.replace('text-', 'bg-')}/10 ${ach.color}`}>
                                                <span>{ach.icon}</span>
                                                <span className="text-[12px] sm:text-sm text-text-secondary font-medium">{ach.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 self-center">
                                {infoCards.map((info, idx) => (
                                    <GlassPanel 
                                        key={idx} 
                                        variant="overlap"
                                        className={`flex flex-col gap-3 sm:gap-5 group transition-all p-4 sm:p-6 md:p-7 min-h-[120px] sm:min-h-[160px] ${info.glow}`}
                                    >
                                        <div className={`p-2 sm:p-3 ${info.bg} ${info.color} w-fit group-hover:scale-105 transition-transform`}>
                                            {info.icon}
                                        </div>
                                        <div className="space-y-1 sm:space-y-1.5">
                                            <h4 className="font-semibold text-[15px] sm:text-[17px] md:text-[18px] tracking-tight text-foreground">{info.title}</h4>
                                            <p className="text-text-tertiary text-xs sm:text-sm leading-snug">{info.description}</p>
                                        </div>
                                    </GlassPanel>
                                ))}
                        </div>

                    </div>
                </div>
            </section>
    );
};

export default About;
