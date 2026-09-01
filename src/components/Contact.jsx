import { useState, useRef } from 'react';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt, CheckCircle, Spinner, WarningCircle, CaretDown } from '@phosphor-icons/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const Contact = () => {
    const container = useRef();
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [errors, setErrors] = useState({});
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: 'What can you help with in dairy operations?', a: 'End-to-end: SOPs, QC lactoscan, cold chain 2–8°C, supplier intelligence per KPS, and distribution ratchet SOPs — built from zero at Rumah Susu Indonesia.' },
        { q: 'How did you achieve 7.2% mozzarella yield?', a: 'First commercial run 500 L → 36 kg / 180 pcs. Solved inverter, blade mixer, boiler contamination, standardized stretch/taste tests and vacuum sealing.' },
        { q: 'Are you available for freelance / consulting?', a: 'Open to operations consulting, SOP development, and dashboard builds (Next.js + Sheets API). Contact via form — I reply within 24h.' },
        { q: 'How does the supplier quality dashboard work?', a: 'Live Google Sheets API — tracks fat, SNF, protein, alcohol test, volume per supplier (Karya Nugraha, Kemuning, Larasati) for data-driven selection.' },
        { q: 'What is your scaling approach?', a: 'Repeatable systems over heroic effort: SOPs + 3-batch retention traceability + <1% reject rate, lean 4-person team, 25K units/batch.' },
    ];

    useGSAP(() => {
        gsap.from('.contact-fade', {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container.current,
                start: 'top 75%',
            },
        });
    }, { scope: container });

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name required';
        if (!form.email.trim()) errs.email = 'Email required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
        if (!form.subject.trim()) errs.subject = 'Subject required';
        if (!form.message.trim()) errs.message = 'Message required';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus('sending');

        if (!WEB3FORMS_KEY) {
            setStatus('error');
            return;
        }

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    ...form,
                }),
            });
            if (!res.ok) throw new Error('Submit failed');
            setStatus('success');
            setForm({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const update = (field) => (e) => {
        setForm(f => ({ ...f, [field]: e.target.value }));
        if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
    };

    const inputClass = 'w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-foreground text-sm placeholder-text-tertiary outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(17,129,255,0.1)]';
    const labelClass = 'text-sm text-text-secondary font-medium';

    return (
        <section id="contact" ref={container} className="py-24 md:py-32 bg-background relative overflow-hidden min-h-[calc(100dvh-64px)] flex items-center">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-primary/[0.04] blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6 text-left max-w-xl mx-auto contact-fade">
                        <div className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase flex items-center gap-2">
                            <span className="h-px w-6 bg-text-tertiary/40 hidden sm:block" aria-hidden="true"></span>
                            Ready to collaborate — Tasikmalaya & Bogor
                        </div>

                        <h2 className="font-display text-[32px] md:text-[40px] font-[800] tracking-[-0.03em] leading-[0.9] text-foreground text-balance">
                            Let's build the <span className="text-primary">next frontier</span>
                        </h2>

                        <p className="text-text-secondary text-[16px] md:text-[17px] leading-relaxed max-w-[60ch] text-pretty">
                            I am currently seeking opportunities to apply my expertise in operations management and production leadership.
                            Whether you have a specific inquiry or just want to connect, my inbox is open.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-12 space-y-5 contact-fade max-w-xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className={labelClass}>Name</label>
                                <input type="text" value={form.name} onChange={update('name')} placeholder="Your name" className={inputClass} />
                                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className={labelClass}>Email</label>
                                <input type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" className={inputClass} />
                                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className={labelClass}>Subject</label>
                            <input type="text" value={form.subject} onChange={update('subject')} placeholder="What's this about?" className={inputClass} />
                            {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className={labelClass}>Message</label>
                            <textarea rows="5" value={form.message} onChange={update('message')} placeholder="Your message..." className={`${inputClass} resize-none`} />
                            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <button type="submit" disabled={status === 'sending'}
                            className="w-full px-6 py-3 bg-primary text-foreground font-body rounded-xl flex items-center justify-center gap-2 hover:bg-primary-hover active:translate-y-[1px] active:scale-[0.98] transition-all duration-200 shadow-[0_1px_2px_rgba(15,23,42,0.08)] disabled:opacity-50 disabled:cursor-not-allowed">
                            {status === 'sending' ? (
                                <><Spinner size={18} className="animate-spin" /> Sending...</>
                            ) : status === 'success' ? (
                                <><CheckCircle size={18} weight="fill" /> Sent!</>
                            ) : status === 'error' ? (
                                <><WarningCircle size={18} weight="fill" /> Failed — try again</>
                            ) : (
                                <><PaperPlaneTilt size={18} weight="bold" /> Send Message</>
                            )}
                        </button>
                    </form>

                    <div className="pt-16 space-y-4 text-center contact-fade">
                        <p className="text-xs sm:text-sm font-mono text-text-tertiary uppercase tracking-[0.2em]">Peripheral links</p>
                        <div className="flex justify-center gap-4">
                            <a href="https://github.com/hafizhmaulidan15" target="_blank" rel="noopener noreferrer"
                                className="text-text-tertiary hover:text-primary transition-all duration-200 hover:-translate-y-1 p-2 inline-block" aria-label="GitHub Profile">
                                <GithubLogo size={28} weight="duotone" />
                            </a>
                            <a href="https://www.linkedin.com/in/hafizhmaulidan/" target="_blank" rel="noopener noreferrer"
                                className="text-text-tertiary hover:text-primary transition-all duration-200 hover:-translate-y-1 p-2 inline-block" aria-label="LinkedIn Profile">
                                <LinkedinLogo size={28} weight="duotone" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-border max-w-xl mx-auto">
                        <h3 className="font-display text-[18px] font-semibold tracking-tight">FAQ</h3>
                        <p className="text-sm text-text-tertiary mt-1">Quick answers — click to expand.</p>
                        <div className="mt-6 divide-y divide-border border-y border-border">
                            {faqs.map((f, i) => (
                                <div key={i} className="py-4 cursor-pointer group" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    <div className="flex items-start justify-between gap-4">
                                        <h4 className="font-medium text-sm leading-snug pr-2">{f.q}</h4>
                                        <CaretDown size={14} weight="bold" className={`shrink-0 mt-0.5 text-text-tertiary transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                    </div>
                                    <div className={`grid transition-all duration-300 ${openFaq === i ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <p className="text-sm leading-relaxed text-text-secondary text-pretty">{f.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
