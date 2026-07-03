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

    const inputClass = 'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-foreground text-sm placeholder-text-tertiary outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(17,129,255,0.1)]';
    const labelClass = 'text-sm text-text-secondary font-medium';

    return (
        <section id="contact" ref={container} className="py-12 md:py-[72px] bg-background relative overflow-hidden min-h-[calc(100dvh-64px)] flex items-center">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/6 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-blue/4 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6 text-center contact-fade">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary/10 text-primary text-xs sm:text-sm font-medium tracking-widest uppercase">
                            <PaperPlaneTilt size={14} weight="bold" />
                            <span>Ready to collaborate</span>
                        </div>

                        <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold tracking-tighter text-foreground leading-[1.1]">
                            Let's build the <br />
                            <span className="text-gradient-primary">next frontier</span>
                        </h2>

                        <p className="text-text-secondary text-[16px] md:text-[18px] leading-relaxed max-w-[50ch] mx-auto">
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
                            className="w-full px-6 py-3 bg-primary text-foreground font-body rounded-xl flex items-center justify-center gap-2 hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(17,129,255,0.15)] hover:shadow-[0_0_30px_rgba(17,129,255,0.25)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
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
