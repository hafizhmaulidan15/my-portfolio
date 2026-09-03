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
        <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-2 md:space-y-3">
                        <div className="h-0.5 w-10 bg-primary/60"></div>
                        <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold tracking-tight text-foreground">
                            Published <span className="text-primary">works</span>
                        </h2>
                        <p className="text-text-secondary max-w-[50ch] text-sm md:text-[16px]">
                            Research publication in IoT and Automation engineering.
                        </p>
                    </div>
                </div>

                <div className="max-w-[720px]">
                    {publications.map((pub, index) => (
                        <div key={index} className="border-l-2 border-primary/30 pl-6 md:pl-8 py-2 group">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-2.5 ${pub.bg} rounded-sm ${pub.color} group-hover:scale-105 transition-transform flex items-center justify-center`}>
                                    <i className="bi bi-book text-[20px]"></i>
                                </div>
                                <span className="text-xs font-mono text-text-tertiary px-2 py-1 rounded-sm bg-interactive-button border border-border uppercase">
                                    {pub.category}
                                </span>
                            </div>
                            
                            <div className="space-y-2 flex-grow">
                                <h3 className="text-[17px] sm:text-[18px] font-semibold tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors">
                                    {pub.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm sm:text-[15px] text-text-tertiary">
                                    <i className="bi bi-mortarboard text-[14px]"></i>
                                    <span>{pub.journal}</span>
                                </div>
                                <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed">
                                    {pub.description}
                                </p>
                            </div>
                            
                            <div className="mt-4 flex items-center gap-2 text-sm font-mono text-text-tertiary">
                                <i className="bi bi-calendar text-[14px]"></i>
                                <span>{pub.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
