import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const Contact = () => {
  const container = useRef();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: 'How do you lead operational teams?', a: 'By setting clear SOPs, defining ownership per shift, and leading with daily alignment clarity over micromanagement. I focus on enabling the team to run without constant supervision.' },
    { q: 'What is your SOP development process?', a: 'Start from field observation, map the actual workflow, draft with operators, trial, then standardize. Every SOP includes hygiene, step-by-step, QC checks, and verification.' },
    { q: 'How do you ensure quality and compliance?', a: 'Through layered checks: intake verification, in-process QC, 3-batch retention, and trend analysis. Quality is built into the process, not inspected at the end.' },
    { q: 'Are you available for operations consulting?', a: 'Open to consulting on operations management, SOP standardization, and team alignment. Contact via form I reply within 24h.' },
    { q: 'How do you drive continuous improvement?', a: 'By tracking metrics, reviewing deviations, and iterating SOPs. Small, consistent improvements compound from yield to cold-chain reliability.' },
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
      setForm({ name: '', email: '', subject: '', message: '' });
      navigate('/thank-you');
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const update = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  };

  const inputClass = 'w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-foreground text-sm placeholder-text-tertiary outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(91,141,209,0.12)]';
  const labelClass = 'text-sm text-text-secondary font-medium';

  return (
    <section id="contact" ref={container} className="py-24 md:py-32 bg-transparent relative overflow-hidden min-h-[calc(100dvh-64px)] flex items-center">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-primary/[0.04] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-left max-w-xl mx-auto contact-fade">
            <div className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase flex items-center gap-2">
              <span className="h-px w-6 bg-text-tertiary/40 hidden sm:block" aria-hidden="true"></span>
              Available for full-time roles anywhere
            </div>

            <h2 className="font-display text-[32px] md:text-[40px] font-[800] tracking-[-0.03em] leading-[0.9] text-foreground text-balance">
              Ready for <span className="text-gradient-primary">real work.</span>
            </h2>

            <p className="text-text-secondary text-[16px] md:text-[17px] leading-relaxed max-w-[60ch] text-pretty">
              I run operations on the floor — SOPs, QC, yield, and the team that makes it repeatable.
              Open to production and operations roles beyond one city, including abroad. If your line needs owning, inbox is open.
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
                <><i className="bi bi-arrow-repeat text-[18px] animate-spin"></i> Sending...</>
              ) : status === 'success' ? (
                <><i className="bi bi-check-circle text-[18px]"></i> Sent!</>
              ) : status === 'error' ? (
                <><i className="bi bi-exclamation-circle text-[18px]"></i> Failed try again</>
              ) : (
                <><i className="bi bi-send text-[18px]"></i> Send Message</>
              )}
            </button>
          </form>

          <div className="pt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 contact-fade">
            <span className="text-sm text-text-tertiary hidden sm:inline">Prefer direct?</span>
            <a href="mailto:mhafizh.maulidan@gmail.com" aria-label="Email Hafizh"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors">
              <i className="bi bi-envelope text-[16px]"></i>
              <span>mhafizh.maulidan@gmail.com</span>
            </a>
            <span className="hidden sm:block h-4 w-px bg-border" aria-hidden="true"></span>
            <a href="https://www.linkedin.com/in/hafizhmaulidan/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors" aria-label="LinkedIn Profile">
              <i className="bi bi-linkedin text-[16px]"></i>
              <span>linkedin.com/in/hafizhmaulidan</span>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-border max-w-xl mx-auto">
            <h3 className="font-display text-[18px] font-semibold tracking-tight">FAQ</h3>
            <p className="text-sm text-text-tertiary mt-1">Quick answers click to expand.</p>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {faqs.map((f, i) => (
                <div key={i} className="py-4 cursor-pointer group" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-medium text-sm leading-snug pr-2">{f.q}</h4>
                    <i className={`bi bi-chevron-down text-[14px] shrink-0 mt-0.5 text-text-tertiary transition-transform ${openFaq === i ? 'rotate-180' : ''}`}></i>
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
