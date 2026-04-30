import { motion } from 'framer-motion';
import { Student, MapPin, Envelope, Briefcase, Factory, ChartPieSlice } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const About = () => {
    const infoCards = [
        {
            icon: <Factory size={28} weight="duotone" />,
            title: 'Current Role',
            description: 'Head of Unit — Rumah Susu Indonesia',
        },
        {
            icon: <Student size={28} weight="duotone" />,
            title: 'Education',
            description: 'B.Eng - IPB University (GPA 3.33)',
        },
        {
            icon: <ChartPieSlice size={28} weight="duotone" />,
            title: 'Specialization',
            description: 'IoT, Operations & Data Analytics',
        },
        {
            icon: <MapPin size={28} weight="duotone" />,
            title: 'Location',
            description: 'Bogor & Tasikmalaya (Operations)',
        },
    ];

    return (
        <section className="pt-40 pb-24 bg-background relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left: Profile Image & Narrative */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-end">
                            {/* Profile Image with Premium Frame */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative shrink-0"
                            >
                                <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full opacity-50"></div>
                                <div className="w-48 h-48 md:w-56 md:h-56 rounded-[2.5rem] border-2 border-white/10 overflow-hidden relative group">
                                    <img 
                                        src="/profile-avatar.jpg" 
                                        alt="Muhammad Hafizh Maulidan" 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                        onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Hafizh+Maulidan&background=00f5ff&color=000&size=512"; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-background shadow-xl">
                                    <Briefcase size={24} weight="bold" />
                                </div>
                            </motion.div>

                            <div className="space-y-4 text-center md:text-left">
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
                                    SYSTEMS <span className="text-zinc-500">ARCHITECT</span>
                                </h2>
                                <div className="h-1 w-20 bg-accent mx-auto md:ml-0"></div>
                            </div>
                        </div>

                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-[65ch]">
                            <p>
                                I am a multidisciplinary <span className="text-foreground font-medium">B.Eng graduate from IPB University</span>, 
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
                        </div>
                    </div>

                    {/* Right: Info Bento Grid */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {infoCards.map((info, idx) => (
                            <GlassPanel 
                                key={idx} 
                                className="flex flex-col gap-6 group hover:border-accent/20 transition-all p-6"
                            >
                                <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit group-hover:scale-110 transition-transform">
                                    {info.icon}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-lg text-foreground tracking-tight">{info.title}</h4>
                                    <p className="text-zinc-500 text-sm leading-snug">{info.description}</p>
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
