'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, Code2, ArrowRight } from 'lucide-react';
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
          Real output, reject rates, and raw milk trends—grounded in real production logs. Every metric reflects live execution across intake, pasteurization, and distribution.
        </p>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-surface p-6 rounded-2xl space-y-2 border-t-4 border-t-[#164E3A]">
          <span className="text-xs font-mono font-bold uppercase text-gray-400">
            TOTAL MILK PROCESSED
          </span>
          <div className="text-3xl font-extrabold font-mono text-[#111827] tabular-nums">
            64,750 L
          </div>
          <p className="text-xs text-[#6B7280]">
            Cumulative across mozzarella, cheddar R&D, and liquid milk lines · avg 2,000 L/batch
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
            Cup 130ml & bottle line (Target &lt; 1.00%)
          </p>
        </div>

        <div className="card-surface p-6 rounded-2xl space-y-2 border-t-4 border-t-amber-500">
          <span className="text-xs font-mono font-bold uppercase text-gray-400">
            MOZZARELLA PRODUCED
          </span>
          <div className="text-3xl font-extrabold font-mono text-amber-600 tabular-nums">
            1,052 pcs
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

      {/* 4. Cooperative Supplier Intelligence Table */}
      <div className="space-y-6">
        <div className="border-b border-[#111827]/10 pb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
            SUPPLIER INTELLIGENCE
          </span>
          <h2 className="text-2xl font-bold text-[#111827] mt-1">
            Dairy Cooperative Sourcing Performance
          </h2>
          <p className="text-sm text-[#4B5563]">
            Intake metrics across contracted dairy farmer cooperatives (KPS).
          </p>
        </div>

        <div className="card-surface rounded-2xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FAF8F5] text-xs font-mono uppercase text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="py-3.5 px-6">Cooperative (KPS)</th>
                  <th className="py-3.5 px-6">Volume (L)</th>
                  <th className="py-3.5 px-6">Volume Share (%)</th>
                  <th className="py-3.5 px-6">Avg Fat (%)</th>
                  <th className="py-3.5 px-6">Avg SNF (%)</th>
                  <th className="py-3.5 px-6">Classification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PORTFOLIO_DATA.supplierData.map((s) => (
                  <tr key={s.name} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#111827]">
                      {s.name}
                    </td>
                    <td className="py-4 px-6 font-mono tabular-nums text-gray-700">
                      {s.volumeLiters.toLocaleString('en-US')} L
                    </td>
                    <td className="py-4 px-6 font-mono tabular-nums text-gray-700">
                      {s.sharePct.toFixed(1)}%
                    </td>
                    <td className="py-4 px-6 font-mono tabular-nums text-[#164E3A] font-bold">
                      {s.fatPercent.toFixed(2)}%
                    </td>
                    <td className="py-4 px-6 font-mono tabular-nums text-gray-700">
                      {s.snfPercent.toFixed(2)}%
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        {s.qualityGrade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
