import { motion } from 'framer-motion';
import { Student, MapPin, Envelope, Briefcase, Factory, ChartPieSlice, Trophy, Globe, Circle } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const About = () => {
    const infoCards = [
        {
            icon: <Factory size={24} weight="duotone" />,
            title: 'Current role',
            description: 'Head of Unit — Rumah Susu Indonesia',
            color: 'text-accent-orange',
            bg: 'bg-accent-orange/10',
            glow: 'border-glow-top-orange'
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
            description: 'IoT, Operations & Data Analytics',
            color: 'text-accent-teal',
            bg: 'bg-accent-teal/10',
            glow: 'border-glow-top-teal'
        },
        {
            icon: <MapPin size={24} weight="duotone" />,
            title: 'Location',
            description: 'Bogor & Tasikmalaya',
            color: 'text-accent-orange',
            bg: 'bg-accent-orange/10',
            glow: 'border-glow-top-orange'
        },
    ];

    const achievements = [
        { text: '73.33% Accuracy - Fuzzy Logic', icon: <ChartPieSlice size={14} weight="duotone" />, color: 'text-accent-orange' },
        { text: '40% Downtime Reduction', icon: <Factory size={14} weight="duotone" />, color: 'text-primary' },
        { text: 'SEAMEO TVET 2022', icon: <Globe size={14} weight="duotone" />, color: 'text-accent-teal' },
        { text: 'Hafidz Al-Quran', icon: <Circle size={14} weight="duotone" />, color: 'text-success' },
    ];

    return (
        <section className="py-[72px] px-6 bg-background relative overflow-hidden">
            <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/8 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent-teal/6 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-accent-orange/4 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-end">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative shrink-0"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent-teal/10 blur-2xl rounded-full opacity-60"></div>
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg border border-border overflow-hidden relative group">
                                    <img 
                                        src="/profile-avatar.png" 
                                        alt="Muhammad Hafizh Maulidan" 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 scale-110 group-hover:scale-100"
                                        onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Hafizh+Maulidan&background=1447E6&color=fff&size=512"; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-accent-teal rounded-lg flex items-center justify-center text-foreground shadow-floating">
                                    <Briefcase size={20} weight="bold" />
                                </div>
                            </motion.div>

                            <div className="space-y-3 text-center md:text-left">
                                <h2 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-foreground">
                                    Systems <span className="text-gradient-primary">architect</span>
                                </h2>
                                <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-accent-teal mx-auto md:ml-0 rounded-full"></div>
                            </div>
                        </div>

                        <div className="space-y-6 text-text-secondary text-[16px] leading-relaxed max-w-[65ch]">
                            <p>
                                I am a multidisciplinary <span className="text-foreground font-medium">B.Eng graduate from IPB University</span> (GPA 3.33), 
                                specializing in the convergence of IoT engineering, data intelligence, and operational leadership.
                            </p>
                            <p>
                                My methodology bridges the gap between <span className="text-foreground font-medium">complex technical systems</span> and 
                                <span className="text-foreground font-medium">high-stakes operational execution</span>. From managing production lines 
                                of 25,000 units to architecting spectral analysis IoT clusters, I solve problems at a systems level.
                            </p>
                            <p>
                                Currently leading dairy production operations at <span className="text-foreground font-medium">Rumah Susu Indonesia</span>, 
                                where I manage end-to-end supply chains, QC protocols, and production efficiency through an engineering lens.
                            </p>
                            
                            <div className="pt-4">
                                <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-widest mb-4">Key achievements</h4>
                                <div className="flex flex-wrap gap-3">
                                    {achievements.map((ach, idx) => (
                                        <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-sm bg-surface border border-border">
                                            <span className={ach.color}>{ach.icon}</span>
                                            <span className="text-sm text-text-secondary font-medium">{ach.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {infoCards.map((info, idx) => (
                            <GlassPanel 
                                key={idx} 
                                className={`flex flex-col gap-4 group hover:border-primary/20 transition-all p-5 ${info.glow}`}
                            >
                                <div className={`p-2.5 ${info.bg} ${info.color} w-fit group-hover:scale-105 transition-transform`}>
                                    {info.icon}
                                </div>
                                <div className="space-y-1.5">
                                    <h4 className="font-semibold text-[16px] tracking-tight text-foreground">{info.title}</h4>
                                    <p className="text-text-tertiary text-sm leading-snug">{info.description}</p>
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
