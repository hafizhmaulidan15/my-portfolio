import { Globe, Pulse, Database, Factory, Code, ArrowUpRight } from '@phosphor-icons/react';

const Projects = () => {
    const featured = [
        {
            id: 0,
            kicker: 'Case Study — From Zero to Market',
            title: 'Pembuatan Mozzarela',
            period: 'Mei–Juni 2026 • Tasikmalaya → Bogor',
            image: 'https://picsum.photos/seed/mozza-steel/800/500',
            description: 'Perjalanan produksi mozzarella dari nol hingga siap jual — 1.5 bulan intensif. Batch MZ-160626-01 jadi tolok ukur: 500L susu TS 11.8% → 36kg / 180 pcs @200gr, yield 10,5%, reject 0, tekstur elastis.',
            bullets: ['Timeline: 12 Mei planning • 23-25 Mei unboxing mixer • 16-17 Jun 500L 4 batch cheese vat • 19 Jun packaging • 23 Jun kirim Zarafa Bogor', 'Kendala: inverter rusak, blade terpisah, air boiler chemical → REJECT 9 Jun pahit/asam, trial 20L gagal', 'SOP: hygiene → lactoscan → stretch/taste → chiller/vacuum + Form Produksi 16 Juni'],
            stats: [{ v: '10,5%', l: 'yield' }, { v: '180', l: 'pcs @200gr' }, { v: '500L', l: 'TS 11.8%' }],
            href: '#',
            postmortem: ['Air boiler chemical sanitasi → wajib air mineral', 'Susu bongkaran cups no stretch → pakai susu segar', 'Cheese vat hemat 80L/CIP vs PHE', 'Perforated plate untuk penirisan curd', 'Yield Tasik 10,5% < 10% rata-rata — optimasi next', 'Pemanasan 500L 4j55m — evaluasi boiler'],
        },
        {
            id: 1,
            kicker: 'R&D — 9 Trials to Scale',
            title: 'Pengembangan Cheddar Olahan',
            period: 'Mei–Juli 2026 • 9 Trial',
            image: 'https://picsum.photos/seed/cheddar-rd/800/500',
            description: 'Dari mixer dapur kasar tepung → chopper final 113.8%. Eksplorasi curd/EMC, air, pemanasan, pewarna, dan terobosan perisa Toffieco vs Mohler — chopper menang.',
            bullets: ['Trial 1 mixer dapur kasar • 2-4 curd/EMC & air • 5-6 tekstur pewarna • 7 Toffieco/Mohler • 8 maizena terpisah • 9 chopper final', 'Perisa Mohler gurih terpilih, maizena chopper jadi SOP final', 'Target: mixer semi-industri untuk skala komersial'],
            stats: [{ v: '113.8%', l: 'yield T9' }, { v: '9', l: 'trials' }, { v: 'Mohler', l: 'perisa' }],
            href: '#',
            postmortem: ['Mixer dapur kurang kuat → semi-industri', 'SHMP hidrolisis >60°C', 'Maizena terpisah hilangkan tepung', 'Mohler > Toffieco untuk cheddar gurih', 'Cold storage tidak kurangi air — perlu showcase'],
        },
    ];

    const more = [
        { title: 'Rumah Susu Inventory Dashboard', desc: 'Next.js + Google Sheets real-time stock opname, 100% accuracy, team access.', href: 'https://github.com/hafizhmaulidan15/Rumah-Susu-Dashboard' },
        { title: 'Aussie WHV 2026', desc: 'Next.js 14 resource hub — visa types, living guides, CI/CD Vercel.', href: 'https://github.com/hafizhmaulidan15/aussie-WHV' },
        { title: 'Yield Optimizer Keju', desc: 'Next.js + Recharts, yield engine for field entry.', href: 'https://github.com/hafizhmaulidan15/yield-optimizer-keju' },
        { title: 'Parmesan — Planning', desc: 'Next strategic cheese — 0% progress, roadmap after cheddar scale-up.', href: '#' },
    ];

    return (
        <section id="projects" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-border">
            <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
                <div className="max-w-[720px] mb-10">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase">Selected Works — built from zero, measured in yield</p>
                    <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-[800] tracking-[-0.04em] leading-[0.9] text-foreground text-balance">Case studies,<br /><span className="font-[300] italic text-gradient-foreground">not cards.</span></h2>
                    <p className="mt-4 text-[15px] leading-[1.6] text-text-secondary max-w-[60ch] text-pretty">Two systems that scaled production. The rest — compact, verifiable, linked.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featured.map((f) => (
                        <div key={f.id} className="p-1.5 bg-gradient-icon ring-1 ring-primary/10 rounded-[1.75rem] h-full">
                            <div className="bg-surface rounded-[1.25rem] overflow-hidden border border-border flex flex-col h-full">
                                <div className="aspect-[4/2.6] relative overflow-hidden bg-surface">
                                    <img src={f.image} alt={f.title} width="800" height="520" loading="lazy" decoding="async" className="w-full h-full object-cover grayscale-[0.12] contrast-[1.03]" />
                                    <div className="absolute top-3 left-3 flex items-center gap-2">
                                        <span className="px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur text-[11px] font-mono tracking-wide border border-border">{f.kicker}</span>
                                    </div>
                                </div>
                                <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                                    <div>
                                        <h3 className="font-display text-[20px] font-semibold leading-tight tracking-[-0.02em]">{f.title}</h3>
                                        <p className="font-mono text-[11px] tracking-wide text-text-tertiary">{f.period}</p>
                                    </div>
                                    <p className="text-[13.5px] leading-relaxed text-text-secondary text-pretty">{f.description}</p>
                                    <ul className="space-y-1.5 pt-2">
                                        {f.bullets.map((b) => (
                                            <li key={b} className="text-sm text-text-secondary flex gap-2"><span className="mt-2 w-1 h-1 rounded-full bg-foreground/30 shrink-0"></span><span>{b}</span></li>
                                        ))}
                                    </ul>
                                    {f.postmortem && (
                                        <div className="mt-3 p-3 rounded-lg bg-black/[0.02] border border-border">
                                            <p className="font-mono text-[11px] uppercase tracking-wide text-text-tertiary">Post-Mortem</p>
                                            <ul className="mt-2 space-y-1">
                                                {f.postmortem.map((p, i) => (
                                                    <li key={i} className="text-xs leading-relaxed text-text-secondary flex gap-2"><span className="text-primary mt-0.5">•</span><span>{p}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="flex gap-6 pt-3 mt-auto border-t border-border">
                                        {f.stats.map((s) => (
                                            <div key={s.l}><div className="font-mono text-sm font-bold tabular-nums">{s.v}</div><div className="font-mono text-[11px] uppercase tracking-wide text-text-tertiary">{s.l}</div></div>
                                        ))}
                                    </div>
                                    {f.href !== '#' && <a href={f.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium underline decoration-foreground/15 underline-offset-4 hover:decoration-foreground/40">Source <ArrowUpRight size={14} /></a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {more.map((m) => (
                        <a key={m.title} href={m.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 p-4 rounded-xl border border-border bg-surface hover:bg-white/[0.03] hover:border-border transition-colors">
                            <div className="min-w-0">
                                <div className="font-medium text-[14px] leading-tight group-hover:text-foreground transition-colors">{m.title}</div>
                                <div className="text-[13px] text-text-tertiary leading-snug truncate">{m.desc}</div>
                            </div>
                            <ArrowUpRight size={16} className="shrink-0 text-text-tertiary group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
