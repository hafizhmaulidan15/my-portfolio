import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ShieldCheck, Factory, Award, TrendingUp, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import FloorTelemetryWidget from '@/components/FloorTelemetryWidget';
import EndorsementSection from '@/components/EndorsementSection';
import { PORTFOLIO_DATA } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-24 py-8 sm:py-12">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Typographic Impact */}
          <div className="lg:col-span-7 space-y-6">

            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#164E3A]">
              <Factory className="w-3.5 h-3.5" />
              <span>DAIRY MANUFACTURING · PRODUCTION & QUALITY</span>
            </div>

            {/* Display Headline with custom accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] leading-[1.08] text-balance">
              Leading operations{' '}
              <span className="text-[#164E3A] relative inline-block">
                with clarity.
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-2.5 text-amber-500/80 fill-current"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0,7 C50,1 150,1 200,7 L200,9 C150,3 50,3 0,9 Z" />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
              Built for scale, grounded in data. Heading Rumah Susu Indonesia&apos;s processing plant while running floor operations and raw milk reception testing at Mitrayasa Dairy Natural — SOPs, cheese vat processing, and multi-city cold chain logistics.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#164E3A] rounded-xl hover:bg-[#11382A] transition-all shadow-sm hover:shadow-md"
              >
                Start a conversation
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/achievements"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#111827] bg-white border border-[#111827]/10 rounded-xl hover:bg-gray-50 transition-all shadow-sm"
              >
                View achievements
                <ArrowRight className="w-4 h-4 text-[#164E3A]" />
              </Link>
            </div>

            {/* 3-in-a-row KPI Strip */}
            <div className="pt-8 border-t border-[#111827]/10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#111827] tabular-nums">
                  1.67K
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-[#6B7280] pt-1">
                  Pcs Produced
                </div>
                <div className="text-xs text-[#9CA3AF] hidden sm:block">
                  Mozzarella units
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-4xl font-extrabold font-mono text-[#164E3A] tabular-nums">
                  ≈1.05M
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-[#6B7280] pt-1">
                  L Milk Processed
                </div>
                <div className="text-xs text-[#9CA3AF] hidden sm:block">
                  RSI + Mitrayasa combined
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-600 tabular-nums">
                  0.35%
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-[#6B7280] pt-1">
                  Reject Rate
                </div>
                <div className="text-xs text-[#9CA3AF] hidden sm:block">
                  Strict quality pass
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Midnight Telemetry Widget */}
          <div className="lg:col-span-5">
            <FloorTelemetryWidget />
          </div>

        </div>
      </section>

      {/* 2. Managerial Principles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
            OPERATIONAL METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
            Managerial Principles
          </h2>
          <p className="text-base text-[#4B5563] leading-relaxed">
            Managing people, process, and product on the factory floor with disciplined accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {PORTFOLIO_DATA.managerialPrinciples.map((principle) => (
            <div
              key={principle.index}
              className="card-surface p-7 rounded-2xl hover:border-[#164E3A]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold font-mono text-[#164E3A]/40 block mb-4">
                  {principle.index}
                </span>
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Achievements & Case Studies Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#111827]/10">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
              PROVEN TRACK RECORD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
              Key Production Milestones
            </h2>
          </div>
          <Link
            href="/achievements"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#164E3A] hover:text-[#11382A]"
          >
            <span>Explore all case studies</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {PORTFOLIO_DATA.achievements.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="card-surface rounded-2xl p-7 flex flex-col justify-between hover:border-[#164E3A]/40 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#6B7280]">
                  <span className="font-mono font-bold text-[#164E3A]">
                    {item.category}
                  </span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-[#164E3A] font-semibold">
                  {item.metrics}
                </span>
                <span className="font-mono text-gray-400">
                  {item.sopRef}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Supervisor & Partner Endorsements */}
      <EndorsementSection />

      {/* 5. Pre-Footer Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-midnight rounded-3xl p-8 sm:p-12 text-center space-y-6 text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to lead, scale, or optimize your operations?
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Available for full-time manufacturing leadership, operational consultancy, and cold chain distribution systems across Indonesia and abroad.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 text-sm font-semibold text-[#111827] bg-white rounded-xl hover:bg-gray-100 transition-all shadow-md"
            >
              Get in Touch Directly
            </Link>
            <Link
              href="/experience"
              className="px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
            >
              View Full Experience
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
