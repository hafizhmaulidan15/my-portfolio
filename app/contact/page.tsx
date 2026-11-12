'use client';

import { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, ChevronDown, MessageSquare, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = formData.subject.trim() || `Portfolio inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setMailtoHref(href);
    setSubmitted(true);
    window.location.href = href;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#164E3A]">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>OPEN FOR ROLES & CONSULTING</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
          Ready for <span className="text-[#164E3A]">real work.</span>
        </h1>
        <p className="text-lg text-[#4B5563] leading-relaxed">
          I run operations on the floor: SOPs, QC, yield, and the team that makes it repeatable. Open to production and operations roles beyond one city, including abroad. If your line needs owning, inbox is open.
        </p>
      </div>

      {/* 2. Contact Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Interactive Form */}
        <div className="lg:col-span-7 card-surface p-8 sm:p-10 rounded-3xl space-y-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#111827]">
            Send an Inquiry
          </h2>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#164E3A] mx-auto" />
              <h3 className="text-xl font-bold text-[#111827]">
                Email draft opened
              </h3>
              <p className="text-sm text-[#4B5563] max-w-md mx-auto">
                Your message to <span className="font-semibold text-[#111827]">{PORTFOLIO_DATA.profile.email}</span> should be open in your email app. Nothing is sent until you press send there.
              </p>
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#164E3A] bg-white border border-[#164E3A]/30 rounded-lg hover:bg-gray-50"
              >
                <Send className="w-3.5 h-3.5" />
                Reopen email draft
              </a>
              <div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMailtoHref('');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-2 px-4 py-2 text-xs font-semibold text-gray-600 hover:text-[#164E3A]"
                >
                  Write another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase text-gray-700 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ir. Bambang"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FAF8F5] text-sm text-[#111827] focus:border-[#164E3A] focus:ring-1 focus:ring-[#164E3A] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-gray-700 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="bambang@dairycompany.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FAF8F5] text-sm text-[#111827] focus:border-[#164E3A] focus:ring-1 focus:ring-[#164E3A] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-700 block mb-1.5">
                  Subject / Nature of Engagement
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Plant Operations Role / Cheese Plant Consultation"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FAF8F5] text-sm text-[#111827] focus:border-[#164E3A] focus:ring-1 focus:ring-[#164E3A] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-700 block mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your line, unit capacity, or leadership opportunity..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FAF8F5] text-sm text-[#111827] focus:border-[#164E3A] focus:ring-1 focus:ring-[#164E3A] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#164E3A] rounded-xl hover:bg-[#11382A] transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Submit Operational Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Direct Channels & Operational Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-midnight p-7 rounded-3xl text-white space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
              DIRECT CHANNELS
            </span>

            <div className="space-y-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">Email</span>
                  <span className="text-sm font-semibold text-white break-all">
                    {PORTFOLIO_DATA.profile.email}
                  </span>
                </div>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">LinkedIn</span>
                  <span className="text-sm font-semibold text-white">
                    {PORTFOLIO_DATA.profile.linkedinHandle}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">Location Base</span>
                  <span className="text-sm font-semibold text-white">
                    Tasikmalaya / Bogor, Indonesia
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-gray-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Typical Response Time: Within 24 hours</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Operational FAQs Accordion */}
      <div className="space-y-6 pt-6">
        <div className="border-b border-[#111827]/10 pb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
            COMMON QUESTIONS
          </span>
          <h2 className="text-2xl font-bold text-[#111827] mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#4B5563]">
            Quick insights into management approach, trials, and consulting availability.
          </p>
        </div>

        <div className="space-y-3 max-w-4xl">
          {PORTFOLIO_DATA.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="card-surface rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-[#111827] hover:text-[#164E3A] transition-colors"
              >
                <span className="text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openFaq === idx ? 'rotate-180 text-[#164E3A]' : ''
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-6 pb-6 pt-1 text-sm text-[#4B5563] leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
