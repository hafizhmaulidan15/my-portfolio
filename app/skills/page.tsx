'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Layers, Factory, Cpu, CheckCircle2, ArrowRight, ShieldCheck, Thermometer, Database } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'dairy' | 'tech'>('all');

  const filteredCategories = PORTFOLIO_DATA.skillsData.filter((cat) => {
    if (activeTab === 'dairy') return cat.title.includes('Dairy');
    if (activeTab === 'tech') return cat.title.includes('Systems');
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* 1. Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#164E3A]">
          <Layers className="w-3.5 h-3.5" />
          <span>TECHNICAL & OPERATIONAL CAPABILITIES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
          Operations, Process & <span className="text-[#164E3A]">Systems Engineering.</span>
        </h1>
        <p className="text-lg text-[#4B5563] leading-relaxed">
          Bridging the physical factory floor and digital intelligence: dairy science, cold chain rigor, IoT sensor telemetry, and automated quality logging.
        </p>

        {/* Filter Controls (Allowed functional segmented control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#111827]/10 rounded-xl max-w-full sm:max-w-fit mt-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-[#164E3A] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            All Disciplines
          </button>
          <button
            onClick={() => setActiveTab('dairy')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'dairy'
                ? 'bg-[#164E3A] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Dairy Operations
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'tech'
                ? 'bg-[#164E3A] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Systems & IoT
          </button>
        </div>
      </div>

      {/* 2. Skills Grid */}
      <div className="space-y-14">
        {filteredCategories.map((category) => (
          <div key={category.title} className="space-y-6">
            <div className="border-b border-[#111827]/10 pb-4">
              <div className="flex items-center gap-2">
                {category.title.includes('Dairy') ? (
                  <Factory className="w-5 h-5 text-[#164E3A]" />
                ) : (
                  <Cpu className="w-5 h-5 text-[#164E3A]" />
                )}
                <h2 className="text-2xl font-bold text-[#111827]">
                  {category.title}
                </h2>
              </div>
              <p className="text-sm text-[#4B5563] mt-1">
                {category.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="card-surface p-6 rounded-2xl space-y-3 hover:border-[#164E3A]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-[#111827] leading-snug">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-[#164E3A] border border-emerald-200/60 font-semibold whitespace-nowrap">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Deep Dive Callout: Milk Quality Machine Learning Integration */}
      <div className="card-midnight rounded-3xl p-8 sm:p-10 text-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              CROSS-DISCIPLINARY INNOVATION
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Milk Quality Grade Prediction via Machine Learning
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-white/10 text-gray-300 border border-white/10 self-start sm:self-auto">
            Random Forest & XGBoost
          </span>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
          Trained predictive ML models on 7 core laboratory parameters: Fat, SNF, Density, Added Water, Freezing Point, Protein, and Lactose. The system provides real-time grade classification for incoming raw milk batches—allowing operators to route premium lots directly to high-margin cheese vats while rejecting substandard milk before offloading.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-gray-400 uppercase block">Parameters</span>
            <span className="text-base font-bold font-mono text-emerald-300">7 Core Tests</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-gray-400 uppercase block">Model Architecture</span>
            <span className="text-base font-bold font-mono text-white">RF / XGBoost</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-gray-400 uppercase block">Prediction Speed</span>
            <span className="text-base font-bold font-mono text-white">&lt; 200 ms</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-gray-400 uppercase block">Deployment</span>
            <span className="text-base font-bold font-mono text-amber-300">Dashboard Live</span>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-[#111827]/10 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/impact"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#164E3A] hover:text-[#11382A]"
        >
          <span>Explore Live Production Impact & Telemetry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/contact"
          className="px-5 py-2.5 text-xs font-semibold text-white bg-[#164E3A] rounded-lg hover:bg-[#11382A] transition-colors"
        >
          Discuss Technical Requirements
        </Link>
      </div>

    </div>
  );
}
