import { leadershipJournals } from '../data/leadership';
import { coreCompetencies } from '../data/portfolio';

const experiences = [
    {
        title: 'Head of Unit',
        company: 'Rumah Susu Indonesia',
        location: 'Tasikmalaya',
        date: 'Mar 2026  Present',
        meta: 'Lead • Full-time • On-site',
        description: 'Built the Tasikmalaya unit from zero. Led first commercial Mozzarella  500 L → 42.2 kg avg / 211 pcs avg (422 total) at 10% yield (inverter, blade mixer, boiler troubleshooting) to Bogor shipment. Standardized SOPs, forms, reporting. Now leading Processed Cheddar R&D (9 trials, 113.8% yield), supplier intelligence dashboard (fat/SNF/protein/alcohol per KPS), and ratchet SOPs Box Biru/Tray.',
        metrics: [{ v: '25K', l: 'units / batch' }, { v: '10%', l: 'mozza yield' }, { v: '113.8%', l: 'cheddar trial' }],
        tags: ['SOP Design', 'Product R&D', 'Cold Chain', 'QC', 'Supply Chain'],
    },
    {
        title: 'Frontend Developer',
        company: 'PT. Matra Kreasi Mandiri',
        location: 'Bogor  Hybrid',
        date: 'Sep 2025  Jan 2026',
        meta: 'Freelance • Lead',
        description: 'Built nanorobotic.co.id end-to-end for 3–15y education. WhatsApp API for all CTAs, Bootstrap mobile-first, launched with thorough cross-browser testing. Led small tech team and coordinated across stakeholders.',
        metrics: [{ v: '5', l: 'projects delivered' }],
        tags: ['React', 'WhatsApp API', 'SEO'],
    },
    {
        title: 'IoT Engineer Intern',
        company: 'PT. Matra Kreasi Mandiri',
        location: 'Bogor  On-site',
        date: 'Aug 2024  Nov 2024',
        meta: 'Internship • Field',
        description: 'Built 24/7 monitoring systems with ESP32, sensors, and relay control. Improved stability through calibration and preventive maintenance. Deployed with IP65 waterproof enclosures for field conditions.',
        metrics: [{ v: '40%', l: 'downtime cut' }, { v: '3', l: 'field systems' }],
        tags: ['ESP32', 'C++', 'MQTT', 'Calibration'],
    },
    {
        title: 'Web Developer Intern',
        company: 'PT. Matra Kreasi Mandiri',
        location: 'Bogor  On-site',
        date: 'Aug 2024  Nov 2024',
        meta: 'Internship',
        description: 'Maintained drmatt.id + IoT dashboards for real-time sensor viz. Responsive, cross-device, integrated device-to-cloud.',
        metrics: [{ v: '2', l: 'sites' }, { v: '3', l: 'dashboards' }],
        tags: ['HTML/CSS', 'IoT Viz', 'Responsive'],
    },
];

const certs = [
    { title: 'Hardware Installation Supervisor', org: 'BNSP', date: '2025  2028', icon: <i className="bi bi-shield-check text-[16px]"></i> },
    { title: 'Google Analytics Specialist', org: 'Google Skillshop', date: '2025  2026', icon: <i className="bi bi-bar-chart text-[16px]"></i> },
    { title: 'Junior Network Engineer', org: 'Kominfo DTS', date: '2024', icon: <i className="bi bi-mortarboard text-[16px]"></i> },
    { title: 'AI & LLMs for Network Engineers', org: 'Cisco', date: '2025', icon: <i className="bi bi-graph-up text-[16px]"></i> },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 bg-transparent border-t border-border relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
                {/* Header */}
                <div className="max-w-[720px] mb-12">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase">Career - Operations to Systems</p>
                    <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-[800] tracking-[-0.04em] leading-[0.9] text-balance">From line to lab,<br /><span className="font-[300] italic text-gradient-foreground">built to scale.</span></h2>
                </div>

                {/* Experiences  editorial list, not timeline cards */}
                <div className="divide-y divide-border border-y border-border">
                    {experiences.map((e) => (
                        <div key={e.title} className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8">
                            <div className="lg:col-span-3">
                                <div className="font-mono text-xs tracking-wide text-text-tertiary">{e.date}</div>
                                <div className="font-mono text-[11px] tracking-wide text-text-tertiary uppercase mt-1">{e.meta}</div>
                                <div className="flex gap-4 mt-4">
                                    {e.metrics.map((m) => (
                                        <div key={m.l}><div className="font-display text-[18px] font-bold tabular-nums leading-none">{m.v}</div><div className="font-mono text-[10px] uppercase tracking-wide text-text-tertiary">{m.l}</div></div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:col-span-9">
                                <div className="flex items-start gap-3">
                                    <span className="hidden sm:flex w-8 h-8 rounded-lg bg-gradient-icon border border-primary/10 items-center justify-center shrink-0"><i className="bi bi-building text-[16px]"></i></span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-display text-[18px] font-semibold leading-tight">{e.title}</h3>
                                        <div className="font-mono text-xs tracking-wide text-text-tertiary">{e.company} • {e.location}</div>
                                    </div>
                                </div>
                                <p className="mt-3 text-[14px] leading-[1.7] text-text-secondary max-w-[68ch] text-pretty">{e.description}</p>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {e.tags.map((t) => (
                                        <span key={t} className="px-2 py-1 rounded-full bg-gradient-icon border border-primary/10 text-[11px] font-mono tracking-wide text-text-secondary">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Core Competencies  expanded */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 rounded-xl border border-primary/15 bg-primary/[0.03]">
                    <div className="lg:col-span-4">
                        <h3 className="font-display text-[18px] font-semibold flex items-center gap-2"><span className="w-1 h-6 bg-primary rounded-full"></span>Core Competencies</h3>
                        <p className="text-sm text-text-tertiary mt-2">Expanded  production to R&D, end-to-end.</p>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="flex flex-wrap gap-2">
                            {coreCompetencies.map((c) => (
                                <span key={c} className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">{c}</span>
                            ))}
                            <span className="px-3 py-1.5 rounded-full bg-surface border border-border text-sm font-medium">Cold Chain & Distribution</span>
                            <span className="px-3 py-1.5 rounded-full bg-surface border border-border text-sm font-medium">Data & Supplier Intelligence</span>
                            <span className="px-3 py-1.5 rounded-full bg-surface border border-border text-sm font-medium">SOP & Standardization</span>
                        </div>
                    </div>
                </div>

                {/* Certs  compact grid */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                        <h3 className="font-display text-[18px] font-semibold">Core certified</h3>
                        <p className="text-sm text-text-tertiary mt-1">Verification, not vanity.</p>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {certs.map((c) => (
                            <div key={c.title} className="flex gap-3 p-4 rounded-xl border border-border bg-surface hover:border-primary/15 transition-colors">
                                <span className="w-8 h-8 rounded-lg bg-gradient-icon border border-primary/10 flex items-center justify-center shrink-0 text-primary">{c.icon}</span>
                                <div className="min-w-0">
                                    <div className="font-medium text-sm leading-tight text-pretty">{c.title}</div>
                                    <div className="font-mono text-xs text-text-tertiary">{c.org} • {c.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonial  single editorial quote */}
                <div className="mt-16 p-1.5 bg-gradient-icon ring-1 ring-primary/10 rounded-[1.75rem]">
                    <div className="bg-surface rounded-[1.25rem] border border-border p-6 md:p-8">
                        <div className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase mb-3">What collaborators say</div>
                        <blockquote className="font-display text-[18px] md:text-[22px] leading-[1.4] tracking-[-0.015em] text-pretty">
                            “Hafizh has demonstrated exceptional capability in building Rumah Susu Indonesia's Tasikmalaya unit from the ground up. His systematic approach  from SOP architecture to cold chain  has been instrumental in scaling production.”
                        </blockquote>
                        <div className="mt-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">R</div>
                            <div><div className="text-sm font-medium leading-none">Pak Rio Adhari</div><div className="text-xs text-text-tertiary">Management  Rumah Susu Indonesia</div></div>
                            <span className="ml-auto hidden sm:inline font-mono text-[11px] px-2 py-1 rounded-full bg-gradient-icon border border-primary/10">Direct supervisor</span>
                        </div>
                    </div>
                </div>

                {/* Leadership Journal  new section, blue accent like Cheese Production & R&D */}
                <div id="leadership-journal" className="mt-20">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="h-px w-8 bg-primary/20 hidden sm:block" aria-hidden="true"></span>
                        <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase">Leadership Journal  Document decisions</p>
                    </div>
                    <h3 className="font-display text-[24px] md:text-[28px] font-[700] tracking-[-0.02em] leading-tight text-foreground">Decisions that moved <span className="text-primary">production</span></h3>
                    <p className="text-sm text-text-secondary mt-2 max-w-[60ch]">4 entries  linked to projects, status completed, reflection included.</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {leadershipJournals.map((j) => (
                            <div key={j.id} className="p-4 rounded-xl border border-border bg-surface hover:border-primary/20 transition-colors">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-mono text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/15">COMPLETED</span>
                                    <span className="font-mono text-[11px] text-text-tertiary">{new Date(j.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                                <h4 className="font-medium text-sm mt-3 leading-tight">{j.meetingTitle}</h4>
                                <div className="mt-3 pl-3 border-l-2 border-primary">
                                    <p className="text-xs font-mono uppercase tracking-wide text-text-tertiary">Key Decision</p>
                                    <p className="text-sm leading-relaxed mt-1">{j.decision}</p>
                                </div>
                                <div className="mt-3 space-y-2">
                                    <p className="text-xs font-mono uppercase tracking-wide text-text-tertiary">Action Plan</p>
                                    <p className="text-sm leading-relaxed text-text-secondary whitespace-pre-line">{j.actionPlan}</p>
                                    {j.reflection && <p className="text-sm leading-relaxed bg-black/[0.02] border border-border rounded-lg p-3 italic">“{j.reflection}”</p>}
                                    {j.relatedProjectTitle && <p className="font-mono text-[11px] text-text-tertiary">Related to: <span className="text-primary">{j.relatedProjectTitle}</span></p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
