import Link from 'next/link';
import { Award, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';

export const metadata = {
  title: 'Achievements | Muhammad Hafizh Maulidan',
  description: 'Documented operational wins, production records, and standardized SOP architectures.',
};

export default function AchievementsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#164E3A]">
          <Award className="w-3.5 h-3.5" />
          <span>PROVEN WINS · MEASURED OUTCOMES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
          Achievements & <span className="text-[#164E3A]">operational milestones.</span>
        </h1>
        <p className="text-lg text-[#4B5563] leading-relaxed">
          Record professional wins, metrics improved, and impact delivered on the factory floor. Grounded in standardized procedures and documented batch outcomes.
        </p>
      </div>

      {/* 2. Case Studies List */}
      <div className="space-y-8">
        {PORTFOLIO_DATA.achievements.map((item, idx) => {
          const verifiedOutcome = item.points?.find((p) => p.label === 'Verified Outcome');
          const keyPoints = item.points?.filter((p) => p.label !== 'Verified Outcome') ?? [];

          return (
            <div
              key={item.id}
              className="card-surface p-8 sm:p-10 rounded-3xl space-y-6 hover:border-[#164E3A]/40 transition-all border border-gray-200"
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#164E3A] text-white flex items-center justify-center font-mono font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-[#164E3A] border border-emerald-200">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    {item.date}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                  <FileText className="w-3.5 h-3.5 text-[#164E3A]" />
                  <span>Reference: {item.sopRef}</span>
                </div>
              </div>

              {/* Title & Key Points */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] leading-snug">
                  {item.title}
                </h2>

                <ul className="space-y-3">
                  {keyPoints.map((point) => (
                    <li key={point.label} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#164E3A] shrink-0" />
                      <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        <span className="font-bold text-[#111827]">{point.label}:</span>{' '}
                        {point.description}
                      </p>
                    </li>
                  ))}
                </ul>

                {verifiedOutcome && (
                  <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#164E3A] block">
                        Verified Outcome
                      </span>
                      <p className="text-sm font-semibold text-[#111827] leading-relaxed">
                        {verifiedOutcome.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Standards & Architecture Note */}
      <div className="card-midnight rounded-3xl p-8 sm:p-10 text-white space-y-4">
        <h3 className="text-2xl font-bold">
          Standardization as Competitive Advantage
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
          At Rumah Susu Indonesia, achievements are not one-off heroic efforts. Every breakthrough is codified into an SOP, reviewed with operators, and embedded in permanent production report templates—ensuring consistency and quality long after the initial rollout.
        </p>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-[#111827]/10 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#164E3A] hover:text-[#11382A]"
        >
          <span>Get in Touch for Operations Roles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#111827] hover:text-[#164E3A]"
        >
          <span>Review Career Timeline</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
