import Link from 'next/link';
import { Factory, ShieldCheck, CheckCircle2, ArrowRight, UserCheck, BookOpen, Compass, Award, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';

export const metadata = {
  title: 'About | Muhammad Hafizh Maulidan',
  description: 'Leadership philosophy, operational background, and dairy manufacturing across Rumah Susu Indonesia and Mitrayasa Dairy Natural.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      
      {/* 1. Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#164E3A]">
          <UserCheck className="w-3.5 h-3.5" />
          <span>DAIRY MANUFACTURING · OPERATIONS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827] leading-tight">
          Leadership with <span className="text-[#164E3A]">operational rigor.</span>
        </h1>
        <p className="text-lg text-[#4B5563] leading-relaxed">
          Managing operations across two Tasikmalaya units with people, process, and product aligned. From raw milk reception testing to cold-chain reliability, every decision ties to repeatable scale.
        </p>
      </div>

      {/* 2. Deep Bio Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-6 text-base text-[#4B5563] leading-relaxed">
          <div className="card-surface p-8 rounded-2xl space-y-5">
            <h2 className="text-2xl font-bold text-[#111827]">
              From the Floor Up: Building Systems That Run
            </h2>
            <p>
              Running the Tasikmalaya unit is a management job before it is a technical one: targets, people, and process. Commissioning the plant meant building the team from zero, assigning shift ownership, and turning 12 procedures into daily habits across intake, pasteurization, cheese making, packaging, and cold chain. My test of a manager is simple — the line runs the same way whether or not I am in the room.
            </p>
            <p>
              Product development happens on the same floor. I run trial batches for mozzarella and cheddar, adjust acidification, salt, and moisture against stretch, texture, and yield targets, and scale a formula only once it repeats. Every trial is logged, so a change in the product can be traced back to pH, temperature, or milk quality instead of guesswork.
            </p>
            <p>
              Most days, the work is problem solving. When a batch fails the alcohol test, over-salts, or will not stretch, the task is to find the process cause, recover what can be recovered, and change the SOP so the same fault does not return. That loop — intake QC, vat control, deviation review — is dairy processing at its core: milk in, stable product out, waste and risk held down. The digital tools I build exist to keep that loop visible.
            </p>
          </div>

          {/* Core Philosophy Callout */}
          <div className="p-7 rounded-2xl bg-[#164E3A]/5 border border-[#164E3A]/20">
            <h3 className="text-lg font-bold text-[#164E3A] mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#164E3A]" />
              The Operations Mandate
            </h3>
            <p className="text-sm text-[#111827] font-medium leading-relaxed">
              &ldquo;Driven by data, grounded in reality. Quality aligned, waste minimized, teams led with purpose.&rdquo;
            </p>
          </div>
        </div>

        {/* Right Column: Plant & Education Snapshot Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-midnight p-7 rounded-2xl text-white space-y-5">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
              OPERATIONAL PROFILE
            </span>

            <div className="space-y-4 text-sm">
              <div className="pb-3 border-b border-white/10">
                <span className="text-xs text-gray-400 block">Current Roles</span>
                <span className="font-semibold text-white text-base">
                  Head of Production Unit
                </span>
                <span className="text-xs text-gray-300 block">
                  Rumah Susu Indonesia · Tasikmalaya Plant
                </span>
                <span className="font-semibold text-white text-base block pt-2">
                  Production Assistant
                </span>
                <span className="text-xs text-gray-300 block">
                  Mitrayasa Dairy Natural · Tasikmalaya
                </span>
              </div>

              <div className="pb-3 border-b border-white/10">
                <span className="text-xs text-gray-400 block">Academic & Technical Foundation</span>
                <span className="font-semibold text-white">
                  IPB University
                </span>
                <span className="text-xs text-gray-300 block">
                  Bachelor of Technology, Computer Engineering Technology
                </span>
              </div>

              <div className="pb-3 border-b border-white/10">
                <span className="text-xs text-gray-400 block">Production & Distribution Base</span>
                <span className="font-semibold text-white">
                  Tasikmalaya · Production Hub
                </span>
                <span className="text-xs text-gray-300 block">
                  Supplying Bogor, Lampung, and Sukabumi through cold chain transit
                </span>
              </div>

              <div>
                <span className="text-xs text-gray-400 block">Core Certifications</span>
                <div className="flex flex-col gap-1.5 pt-1 text-xs text-emerald-300">
                  {PORTFOLIO_DATA.certifications.slice(0, 2).map((cert) => (
                    <span key={cert.title}>• {cert.title} ({cert.validity})</span>
                  ))}
                  <Link
                    href="/experience"
                    className="inline-flex items-center gap-1 text-emerald-400/80 hover:text-emerald-300 transition-colors pt-0.5"
                  >
                    <span>+{PORTFOLIO_DATA.certifications.length - 2} more verified credentials</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Academic Foundation */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
            ACADEMIC FOUNDATION
          </span>
          <h2 className="text-3xl font-extrabold text-[#111827] mt-1">
            Where the systems thinking started
          </h2>
          <p className="text-sm text-[#4B5563] mt-2 max-w-2xl">
            Formal training in computer engineering technology, applied to production problems rather than left in the classroom.
          </p>
        </div>

        {PORTFOLIO_DATA.education.map((edu) => (
          <div key={edu.institution} className="card-surface p-7 rounded-2xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#164E3A] text-white flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-emerald-200" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827]">{edu.institution}</h3>
                  <p className="text-sm text-[#4B5563] mt-0.5">
                    {edu.degree} · {edu.field}
                  </p>
                </div>
              </div>
              <div className="sm:text-right text-xs text-[#6B7280] space-y-1">
                <p className="font-mono font-semibold text-[#164E3A]">{edu.period}</p>
                <p>{edu.location}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <span className="text-[10px] font-mono uppercase font-bold text-[#164E3A] tracking-wider block mb-2">
                RELEVANT COURSEWORK
              </span>
              <div className="flex flex-wrap gap-2">
                {edu.focus.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 rounded-md bg-[#164E3A]/5 border border-[#164E3A]/15 text-[11px] font-medium text-[#164E3A]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Detailed Managerial Principles Breakdown */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
            CORE DISCIPLINE
          </span>
          <h2 className="text-3xl font-extrabold text-[#111827] mt-1">
            The 4 Operational Pillars
          </h2>
          <p className="text-sm text-[#4B5563] mt-2 max-w-2xl">
            How we maintain <span className="font-semibold text-[#111827]">0.35% reject rates</span> and zero transit curd losses across dozens of batches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.managerialPrinciples.map((principle) => (
            <div
              key={principle.index}
              className="card-surface p-7 rounded-2xl space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#164E3A] text-white flex items-center justify-center font-mono font-bold text-sm">
                  {principle.index}
                </span>
                <h3 className="text-xl font-bold text-[#111827]">
                  {principle.title}
                </h3>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Navigation Links Footer */}
      <div className="pt-8 border-t border-[#111827]/10 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#164E3A] hover:text-[#11382A]"
        >
          <span>Explore Career Experience & Timeline</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/contact"
          className="px-5 py-2.5 text-xs font-semibold text-white bg-[#164E3A] rounded-lg hover:bg-[#11382A] transition-colors"
        >
          Discuss an Operations Role
        </Link>
      </div>

    </div>
  );
}
