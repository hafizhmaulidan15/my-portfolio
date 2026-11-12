'use client';

import { useState } from 'react';
import { Quote, Sparkles, CheckCircle2, ChevronRight, UserCheck, ShieldCheck, Factory, Truck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';

export default function EndorsementSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const endorsements = PORTFOLIO_DATA.endorsements;
  const current = endorsements[activeTab];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        
        {/* Section Header with Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#111827]/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#164E3A]">
              <UserCheck className="w-3.5 h-3.5" />
              <span>SUPERVISOR & PARTNER ENDORSEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
              Validated on the floor, <span className="text-[#164E3A]">proven in production.</span>
            </h2>
            <p className="text-sm text-[#4B5563] max-w-xl">
              Firsthand evaluations from the technical cheese consultant and the raw milk cooperative leadership partnering on the production line.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center p-1.5 bg-white border border-[#111827]/10 rounded-2xl shadow-sm self-start md:self-auto shrink-0 gap-1.5">
            {endorsements.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#164E3A] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                  }`}
                  aria-pressed={isActive}
                >
                  {idx === 0 ? (
                    <Factory className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-300' : 'text-gray-400'}`} />
                  ) : (
                    <Truck className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-gray-400'}`} />
                  )}
                  <span>{item.tag}</span>
                  <span className={`text-[10px] font-mono opacity-80 hidden sm:inline ${isActive ? 'text-emerald-200' : 'text-gray-400'}`}>
                    ({item.author.split(' ')[0]})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Endorsement Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#164E3A]/20 shadow-sm relative overflow-hidden transition-all">
          {/* Subtle decorative background watermark */}
          <Quote className="absolute -bottom-8 -right-8 w-48 h-48 text-[#164E3A]/5 pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            
            {/* Top pill tag & domain */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-white border border-[#164E3A]/20 text-xs font-mono font-bold text-[#164E3A] shadow-2xl">
                {current.domain.toUpperCase()}
              </span>
              <span className="text-xs text-[#6B7280] font-mono">
                {current.relationship}
              </span>
            </div>

            {/* Key highlight sentence */}
            <div className="p-3.5 rounded-xl bg-[#164E3A]/5 border border-[#164E3A]/10 text-xs sm:text-sm font-semibold text-[#164E3A] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{current.highlight}</span>
            </div>

            {/* Main Quote */}
            <blockquote className="text-lg sm:text-2xl font-medium text-[#111827] leading-relaxed text-pretty">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Profile Bio */}
            <div className="pt-4 border-t border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#164E3A] text-white flex items-center justify-center font-bold font-mono text-sm shadow-sm shrink-0">
                  {current.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-base font-extrabold text-[#111827]">
                    {current.author}
                  </div>
                  <div className="text-xs text-[#4B5563] font-medium">
                    {current.role} · <span className="text-[#164E3A]">{current.organization}</span>
                  </div>
                </div>
              </div>

              {/* Verified Relationship Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-mono text-gray-700 shadow-sm self-start sm:self-auto">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Collaborative Work</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

