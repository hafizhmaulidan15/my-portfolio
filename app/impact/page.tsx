'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, Code2, ArrowRight, ClipboardCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { calculateCheeseYield, calculateRejectRate, validateMilkQuality } from '@/lib/metrics';

export default function ImpactPage() {
  // Interactive floor simulation state
  const [simMilk, setSimMilk] = useState<number>(500);
  const [simCheese, setSimCheese] = useState<number>(42.2);
  const [simFat, setSimFat] = useState<number>(4.1);
  const [simSnf, setSimSnf] = useState<number>(8.3);
  const [alcoholPass, setAlcoholPass] = useState<boolean>(true);

  const calculatedYield = calculateCheeseYield(simMilk, simCheese);
  const qualityEvaluation = validateMilkQuality(simFat, simSnf, alcoholPass);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* 1. Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#164E3A]">
          <Activity className="w-3.5 h-3.5" />
          <span>PRODUCTION FLOOR IMPACT · MEASURED DATA</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
          Production impact & <span className="text-[#164E3A]">operational metrics.</span>
        </h1>
        <p className="text-lg text-[#4B5563] leading-relaxed">
          Real output, reject rates, and raw milk trends—grounded in production logs, with estimates labeled where a figure is derived rather than logged.
        </p>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-surface p-6 rounded-2xl space-y-2 border-t-4 border-t-[#164E3A]">
          <span className="text-xs font-mono font-bold uppercase text-gray-400">
            TOTAL MILK PROCESSED
          </span>
          <div className="text-3xl font-extrabold font-mono text-[#111827] tabular-nums">
            ≈1.05M L
          </div>
          <p className="text-xs text-[#6B7280]">
            RSI 52,378 L logged + Mitrayasa ≈1.0M L, ramped to 50K L/week over the last 3 months
          </p>
        </div>

        <div className="card-surface p-6 rounded-2xl space-y-2 border-t-4 border-t-emerald-600">
          <span className="text-xs font-mono font-bold uppercase text-gray-400">
            DEFECT REJECT RATE
          </span>
          <div className="text-3xl font-extrabold font-mono text-emerald-600 tabular-nums">
            0.35%
          </div>
          <p className="text-xs text-[#6B7280]">
            Cup 130ml & bottle line, target &lt; 1.00%
            <br />
            183 L rejected of 52,378 L (RSI only)
          </p>
        </div>

        <div className="card-surface p-6 rounded-2xl space-y-2 border-t-4 border-t-amber-500">
          <span className="text-xs font-mono font-bold uppercase text-gray-400">
            MOZZARELLA PRODUCED
          </span>
          <div className="text-3xl font-extrabold font-mono text-amber-600 tabular-nums">
            1,670 pcs
          </div>
          <p className="text-xs text-[#6B7280]">
            First commercial cheese batches packaged @200g
          </p>
        </div>

        <div className="card-surface p-6 rounded-2xl space-y-2 border-t-4 border-t-[#164E3A]">
          <span className="text-xs font-mono font-bold uppercase text-gray-400">
            ACTIVE SOPS ON FLOOR
          </span>
          <div className="text-3xl font-extrabold font-mono text-[#164E3A] tabular-nums">
            12 SOPs
          </div>
          <p className="text-xs text-[#6B7280]">
            Full suite: intake, cheese vat, CIP, distribution
          </p>
        </div>
      </div>

      {/* 3. Interactive Floor Quality & Yield Calculator */}
      <div className="card-surface p-8 sm:p-10 rounded-3xl space-y-8 border border-gray-200">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
              INTERACTIVE TOOL
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#111827]/5 border border-gray-200 text-[10px] font-mono font-semibold text-[#4B5563]">
              <Code2 className="w-3 h-3" />
              REACT LOGIC · CLIENT-SIDE
            </span>
          </div>
          <h2 className="text-2xl font-bold text-[#111827] mt-1">
            Floor Quality & Cheese Yield Verification
          </h2>
          <p className="text-sm text-[#4B5563] mt-1">
            Test raw milk batch inputs to simulate curd yield percentage and laboratory grade classification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-bold uppercase text-gray-700 block mb-1">
                Raw Milk Volume (L)
              </label>
              <input
                type="number"
                value={simMilk}
                onChange={(e) => setSimMilk(Math.max(1, Number(e.target.value)))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] text-sm font-mono font-semibold"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-gray-700 block mb-1">
                Mozzarella Curd Output (Kg)
              </label>
              <input
                type="number"
                step="0.1"
                value={simCheese}
                onChange={(e) => setSimCheese(Math.max(0, Number(e.target.value)))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] text-sm font-mono font-semibold"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-gray-700 block mb-1">
                Fat Content (%)
              </label>
              <input
                type="number"
                step="0.05"
                value={simFat}
                onChange={(e) => setSimFat(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] text-sm font-mono font-semibold"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-gray-700 block mb-1">
                SNF Content (%)
              </label>
              <input
                type="number"
                step="0.05"
                value={simSnf}
                onChange={(e) => setSimSnf(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-[#FAF8F5] text-sm font-mono font-semibold"
              />
            </div>

            <p className="sm:col-span-2 text-[11px] text-gray-500">
              Use a dot for decimals (e.g. 4.20% fat, 8.35% SNF) to match lab log formatting.
            </p>

            <div className="sm:col-span-2 flex items-center gap-3 pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-800">
                <input
                  type="checkbox"
                  checked={alcoholPass}
                  onChange={(e) => setAlcoholPass(e.target.checked)}
                  className="w-4 h-4 text-[#164E3A] rounded border-gray-300 focus:ring-[#164E3A]"
                />
                <span>Alcohol Coagulation Test Passed (No acidity clot)</span>
              </label>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 card-midnight p-6 rounded-2xl text-white space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block font-semibold">
              CALCULATED OUTCOME
            </span>

            <div className="flex items-baseline justify-between pb-3 border-b border-white/10">
              <span className="text-sm text-gray-300">Curd Yield Percentage:</span>
              <span className="text-3xl font-mono font-extrabold text-amber-400 tabular-nums">
                {calculatedYield}%
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Quality Classification:</span>
                <span className={`font-mono font-bold px-2 py-0.5 rounded ${
                  qualityEvaluation.grade === 'Tier 1'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : qualityEvaluation.grade === 'Tier 2'
                    ? 'bg-blue-500/20 text-blue-300'
                    : 'bg-rose-500/20 text-rose-300'
                }`}>
                  {qualityEvaluation.grade}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Intake Status:</span>
                <span className="font-semibold text-white">
                  {qualityEvaluation.passed ? 'Accepted for Processing' : 'Batch Rejected'}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 pt-2 border-t border-white/10 leading-relaxed">
              {qualityEvaluation.notes}
            </p>
          </div>
        </div>
      </div>

      {/* 4. QC & Troubleshooting Case Files */}
      <div className="space-y-6">
        <div className="border-b border-[#111827]/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
            <ClipboardCheck className="w-4 h-4" />
            <span>FIELD QC · DOCUMENTED DEVIATIONS</span>
          </div>
          <h2 className="text-2xl font-bold text-[#111827] mt-1">
            Quality Control &amp; Troubleshooting Log
          </h2>
          <p className="text-sm text-[#4B5563]">
            Selected closed cases from the production logbook: what failed, why, what was done, and the SOP that changed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.qcCaseFiles.map((entry) => (
            <div
              key={entry.id}
              className="card-surface p-6 rounded-2xl space-y-4 border border-gray-200 hover:border-[#164E3A]/40 transition-all"
            >
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100">
                <span className="text-xs font-mono text-gray-500">
                  {entry.id} · {entry.date}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-[#164E3A] font-mono font-bold text-[10px]">
                  {entry.status}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-gray-400 tracking-wider block">
                  ISSUE
                </span>
                <p className="text-sm font-semibold text-[#111827] leading-relaxed">
                  {entry.issue}
                </p>
              </div>

              <dl className="space-y-2.5 text-xs">
                <div>
                  <dt className="font-mono uppercase font-bold text-gray-400 tracking-wider text-[10px]">
                    Root cause
                  </dt>
                  <dd className="text-[#4B5563] leading-relaxed">{entry.rootCause}</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase font-bold text-gray-400 tracking-wider text-[10px]">
                    Action
                  </dt>
                  <dd className="text-[#4B5563] leading-relaxed">{entry.action}</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase font-bold text-gray-400 tracking-wider text-[10px]">
                    Result
                  </dt>
                  <dd className="text-[#111827] font-medium leading-relaxed">{entry.result}</dd>
                </div>
              </dl>

              <div className="pt-3 border-t border-gray-100 space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#164E3A] tracking-wider block">
                  SOP CHANGE
                </span>
                <p className="text-xs text-[#4B5563] leading-relaxed">{entry.sopChange}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-[#111827]/10 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/achievements"
          className="inline-flex items-center gap-2 -mx-3 px-3 py-2 rounded-lg text-sm font-bold text-[#164E3A] border border-transparent hover:text-[#11382A] hover:bg-emerald-50 hover:border-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#164E3A]/40 transition-colors"
        >
          <span>Read Documented Achievements & Case Studies</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/contact"
          className="px-5 py-2.5 text-xs font-semibold text-white bg-[#164E3A] rounded-lg hover:bg-[#11382A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#164E3A]/40 focus-visible:ring-offset-2 transition-colors"
        >
          Discuss Operational Scale
        </Link>
      </div>

    </div>
  );
}
