import { motion } from 'framer-motion';
import { Student, MapPin, Briefcase, Factory, ChartPieSlice, Flask, ShieldCheck } from '@phosphor-icons/react';
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
            description: 'S.Tr.Kom — IPB University (GPA 3.33)',
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
        { text: 'Mozzarella First Batch — 7.2% Yield', icon: <Factory size={14} weight="duotone" />, color: 'text-primary' },
        { text: 'Cheddar R&D — 113.8% Trial Yield', icon: <Flask size={14} weight="duotone" />, color: 'text-accent-blue' },
        { text: '<1% Reject Rate', icon: <ShieldCheck size={14} weight="duotone" />, color: 'text-success' },
        { text: 'Supplier Quality Dashboard', icon: <ChartPieSlice size={14} weight="duotone" />, color: 'text-accent-blue' },
    ];

    return (
            <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}} aria-hidden="true"></div>
                
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
                                            width="192"
                                            height="192"
                                            loading="lazy"
                                            decoding="async"
                                            fetchPriority="low"
                                            className="w-full h-full object-cover object-[center_35%] transition-all duration-300"
                                            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Hafizh+Maulidan&background=1447E6&color=fff&size=512"; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center text-foreground shadow-floating">
                                        <Briefcase size={20} weight="bold" />
                                    </div>
                                </motion.div>

                                <div className="space-y-3 text-left">
                                    <h2 className="font-display text-[28px] md:text-[34px] font-[800] tracking-[-0.03em] leading-[0.95] text-foreground text-balance">
                                        Operations & Production <span className="inline-block w-10 h-6 md:w-14 md:h-7 rounded-full align-middle bg-cover bg-center mx-1.5 border border-white/10 relative top-[-1px]" style={{backgroundImage:'url(https://picsum.photos/seed/milk-lab/200/100)', filter:'grayscale(0.15) contrast(1.05)'}} aria-hidden="true"></span> <span className="text-primary">Leader</span>
                                    </h2>
                                    <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase">Tasikmalaya • Dairy Manufacturing • Cold Chain</p>
                                </div>
                            </div>

                            <div className="space-y-5 md:space-y-6 text-text-secondary text-[15px] md:text-[17px] leading-relaxed max-w-[65ch]">
                                <p>
                                    I joined Rumah Susu Indonesia in March 2026 as part of a new unit in Tasikmalaya. Alongside a lean team of <span className="text-foreground font-medium">four people</span>, I helped set up the SOP architecture, QC protocols — lactoscan analysis, peroxide tests, alcohol tests — and establish the cold chain and production workflows, processing <span className="text-foreground font-medium">2,000–3,500 liters per week</span>.
                                </p>
                                <p>
                                    Beyond volume, I led the unit's first commercial Mozzarella production — <span className="text-foreground font-medium">500 liters of fresh milk into 36 kg / 180 units at 7.2% yield</span>, from equipment procurement and troubleshooting to the first shipment to Bogor — and standardized its SOPs, production forms, and reporting. I'm now driving Processed Cheddar R&D through nine formulation trials, built a supplier milk-quality dashboard tracking fat, SNF, protein, and alcohol test per KPS, and set up a 3-batch sample retention system to trace spoilage. Reject rates stayed under <span className="text-foreground font-medium">1%</span>. Products: pasteurized milk and moza cheese, with processed cheddar scaling up next.
                                </p>
                                
                                <div className="pt-4">
                                    <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-widest mb-4">Key achievements</h4>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {achievements.map((ach, idx) => (
                                            <div key={idx} className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-sm ${ach.color.replace('text-', 'bg-')}/10 ${ach.color}`}>
                                                <span>{ach.icon}</span>
                                                <span className="text-[13px] sm:text-sm text-text-secondary font-medium">{ach.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                            <div className="lg:col-span-5 grid grid-cols-2 auto-rows-fr gap-3 sm:gap-4 self-center" style={{gridAutoFlow:'dense'}}>
                                {infoCards.map((info, idx) => {
                                    const variants = ['elevated','overlap','borderless','secondary'];
                                    const spans = ['col-span-2','col-span-1','col-span-1','col-span-2'];
                                    return (
                                    <GlassPanel 
                                        key={idx} 
                                        variant={variants[idx] || 'overlap'}
                                        className={`flex flex-col gap-3 sm:gap-4 group overflow-hidden p-4 sm:p-5 min-h-[130px] ${info.glow} ${spans[idx]}`}
                                    >
                                        <div className={`p-2.5 sm:p-3 ${info.bg} ${info.color} w-fit group-hover:scale-105 transition-transform`}>
                                            {info.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-display font-semibold text-[15px] md:text-[16px] tracking-tight text-foreground">{info.title}</h4>
                                            <p className="text-text-tertiary text-[13px] leading-snug text-pretty">{info.description}</p>
                                        </div>
                                    </GlassPanel>
                                )})}
                        </div>

                    </div>
                </div>
            </section>
    );
};

export default About;
