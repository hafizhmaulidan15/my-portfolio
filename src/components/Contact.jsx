import { useState, useRef } from 'react';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt, CheckCircle, Spinner, WarningCircle } from '@phosphor-icons/react';
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

    const inputClass = 'w-full bg-black/[0.02] border border-border rounded-xl px-4 py-3 text-foreground text-sm placeholder-text-tertiary outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(17,129,255,0.1)]';
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
                </div>
            </div>
        </section>
    );
};

export default Contact;
