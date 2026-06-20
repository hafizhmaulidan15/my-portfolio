import { BookOpen, Calendar, GraduationCap } from '@phosphor-icons/react';
import { GlassPanel } from './ui/GlassPanel';

const Publications = () => {
    const publications = [
        {
            title: 'IoT-based Automation Tool Innovation to Optimize Microgreen Cultivation',
            journal: 'Jurnal Ilmiah Teknik Elektro',
            date: 'June 25, 2024',
            description: 'Research on integrating irrigation, lighting, and temperature regulation using WS2812B LEDs, DHT22 sensors, and ESP32 for automated microgreen farming.',
            category: 'IoT & Automation',
            color: 'text-accent-blue',
            bg: 'bg-accent-blue/10'
        },
    ];

    return (
        <section className="py-12 md:py-[72px] bg-background relative overflow-hidden">
            <div className="absolute top-0 right-1/3 w-72 h-72 bg-accent-blue/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-2 md:space-y-3">
                        <div className="h-0.5 w-10 bg-gradient-to-r from-accent-blue to-primary"></div>
                        <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold tracking-tight text-foreground">
                            Published <span className="text-gradient-cool">works</span>
                        </h2>
                        <p className="text-text-secondary max-w-[50ch] text-sm md:text-[16px]">
                            Research publication in IoT and Automation engineering.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {publications.map((pub, index) => (
                        <GlassPanel key={index} className="flex flex-col p-5 border-border/50 hover:border-primary/20 transition-all group h-full max-w-md">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-2.5 ${pub.bg} rounded-sm ${pub.color} group-hover:scale-105 transition-transform`}>
                                    <BookOpen size={20} weight="duotone" />
                                </div>
                                <span className="text-[10px] font-mono text-text-tertiary px-2 py-1 rounded-sm bg-interactive-button border border-border uppercase">
                                    {pub.category}
                                </span>
                            </div>
                            
                            <div className="space-y-2 flex-grow">
                                <h3 className="text-[16px] font-semibold tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors">
                                    {pub.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-text-tertiary">
                                    <GraduationCap size={14} weight="duotone" />
                                    <span>{pub.journal}</span>
                                </div>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {pub.description}
                                </p>
                            </div>
                            
                            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-text-tertiary">
                                <Calendar size={12} weight="duotone" />
                                <span>{pub.date}</span>
                            </div>
                        </GlassPanel>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
