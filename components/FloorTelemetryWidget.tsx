'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Factory, Cpu, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

export default function FloorTelemetryWidget() {
  return (
    <div className="card-midnight rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl border border-white/10">
      {/* Ambient background glow accents */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Profile & Positioning Header */}
      <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-emerald-500/30 shrink-0 bg-slate-800">
            <Image
              src="/profile-avatar.png"
              alt="Muhammad Hafizh Maulidan"
              fill
              className="object-cover object-top"
              sizes="48px"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight">
                Hafizh Maulidan
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>
            <span className="text-xs text-gray-300 block font-medium">
              Dairy Manufacturing · Production & Quality
            </span>
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-end text-right">
          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
            FACILITY
          </span>
          <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1 pt-0.5">
            <MapPin className="w-3 h-3" />
            RSI Tasikmalaya
          </span>
        </div>
      </div>

      {/* Kicker badge */}
      <div className="mt-5 mb-4 flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          DUAL-DISCIPLINE ADVANTAGE
        </span>
        <span className="text-[11px] font-mono text-gray-400">
          Factory Floor × Tech
        </span>
      </div>

      {/* Dual Capabilities Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
        
        {/* Domain 1: Factory Floor Operations */}
        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 transition-colors space-y-2.5">
          <div className="flex items-center gap-2 text-emerald-300">
            <div className="p-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
              <Factory className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block leading-tight">
                Floor Operations
              </span>
              <span className="text-[10px] text-gray-400 font-mono">
                Dairy Process & SOP
              </span>
            </div>
          </div>

          <ul className="space-y-1.5 text-xs text-gray-300 pt-1">
            <li className="flex items-start gap-1.5 leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>12+ Standardized SOPs</strong> from milk intake to cheese vat</span>
            </li>
            <li className="flex items-start gap-1.5 leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Cold Chain Integrity</strong> (2–8°C) Tasik → Bogor logistics</span>
            </li>
            <li className="flex items-start gap-1.5 leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Strict QA Testing</strong>: Lactoscan, alcohol pass, 0.35% reject</span>
            </li>
          </ul>
        </div>

        {/* Domain 2: Systems, IoT & Analytics */}
        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 transition-colors space-y-2.5">
          <div className="flex items-center gap-2 text-amber-300">
            <div className="p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/30">
              <Cpu className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block leading-tight">
                Systems & Tech
              </span>
              <span className="text-[10px] text-gray-400 font-mono">
                IoT, Data & Dashboards
              </span>
            </div>
          </div>

          <ul className="space-y-1.5 text-xs text-gray-300 pt-1">
            <li className="flex items-start gap-1.5 leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>IoT Sensor Firmware</strong>: ESP32 telemetry & IP65 modules</span>
            </li>
            <li className="flex items-start gap-1.5 leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Data & ML Analysis</strong>: Python milk quality classification</span>
            </li>
            <li className="flex items-start gap-1.5 leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Factory Dashboards</strong>: Next.js + Sheets real-time stock</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Verified Badges Row */}
      <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs relative z-10">
        <div className="flex items-center gap-2 text-gray-300 text-[11px]">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>FAO Antibiotics · BNSP Hardware Supervisor</span>
        </div>

        <Link
          href="/skills"
          className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>Explore skills matrix</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
