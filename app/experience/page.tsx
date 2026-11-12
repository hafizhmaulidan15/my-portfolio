import Link from 'next/link';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ChevronRight, BookOpen, Clock, ShieldCheck, ArrowRight, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';

export const metadata = {
  title: 'Experience | Muhammad Hafizh Maulidan',
  description: 'Career journey, dairy plant leadership, IoT systems deployments, and leadership decision journal.',
};

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#164E3A]">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TRACK · OPERATIONS TO SYSTEMS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
          From line to lab, <span className="text-[#164E3A]">built to scale.</span>
        </h1>
        <p className="text-lg text-[#4B5563] leading-relaxed">
          Ground-up factory commissioning, technical leadership, IoT industrial telemetry, and automated quality logging.
        </p>
      </div>

      {/* 2. Experience Timeline */}
      <div className="space-y-8">
        <div className="border-b border-[#111827]/10 pb-4">
          <h2 className="text-2xl font-bold text-[#111827]">
            Professional Timeline
          </h2>
          <p className="text-sm text-[#4B5563]">
            Roles held with documented KPIs and operational deliverables.
          </p>
        </div>

        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div
              key={item.role + item.period}
              className="card-surface p-7 sm:p-9 rounded-3xl space-y-7 hover:border-[#164E3A]/40 transition-all border border-gray-200/80"
            >
              {/* Header row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#164E3A]">
                    <span>{item.type}</span>
                    <span>·</span>
                    <span>{item.period}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mt-1 tracking-tight">
                    {item.role} <span className="text-gray-400 font-normal text-xl sm:text-2xl">at</span> {item.company}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280] mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#164E3A]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* KPI badges */}
                <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-2.5">
                  {item.kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="min-w-0 px-2.5 py-2 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-gray-200 text-center"
                    >
                      <div className="text-sm sm:text-lg font-mono font-extrabold text-[#164E3A] tabular-nums break-words">
                        {kpi.val}
                      </div>
                      <div className="text-[9px] sm:text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 1-2 Lines Overview */}
              <div className="p-4 rounded-xl bg-gray-50/80 border border-gray-100">
                <span className="text-[10px] font-mono uppercase font-bold text-gray-400 tracking-wider block mb-1">
                  ROLE OVERVIEW
                </span>
                <p className="text-sm sm:text-base text-[#111827] font-medium leading-relaxed">
                  {item.overview || item.description}
                </p>
              </div>

              {/* 2-Column Grid: Key Responsibilities & Achievements */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Key Responsibilities */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A] pb-1 border-b border-gray-100">
                    <Briefcase className="w-3.5 h-3.5 text-[#164E3A]" />
                    <span>Key Responsibilities</span>
                  </div>
                  <ul className="space-y-2.5 text-sm text-[#4B5563]">
                    {(item.responsibilities || []).map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#164E3A] shrink-0 mt-2" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#164E3A]/20 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A] pb-1 border-b border-[#164E3A]/10">
                    <Award className="w-4 h-4 text-[#164E3A]" />
                    <span>Achievements</span>
                  </div>
                  <ul className="space-y-2.5 text-sm text-[#111827]">
                    {(item.achievements || []).map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Competencies */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100">
                <span className="text-xs font-mono uppercase text-gray-400 font-medium mr-1">
                  Scope:
                </span>
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Verified Certifications */}
      <div className="space-y-6">
        <div className="border-b border-[#111827]/10 pb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
            VERIFICATION, NOT VANITY
          </span>
          <h2 className="text-2xl font-bold text-[#111827] mt-1">
            Certified Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.title}
              className="card-surface p-5 rounded-xl space-y-2 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <ShieldCheck className="w-5 h-5 text-[#164E3A]" />
                <span className="text-xs font-mono text-gray-500">
                  {cert.validity}
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#111827] leading-snug">
                {cert.title}
              </h4>
              <p className="text-xs text-[#6B7280]">
                {cert.issuer}
              </p>
              <span className="text-[10px] font-mono text-gray-400 block pt-1">
                {cert.credentialId ? `ID: ${cert.credentialId}` : 'Verified credential'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Selected Engineering Projects */}
      <div className="space-y-6">
        <div className="border-b border-[#111827]/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
            <Cpu className="w-4 h-4" />
            <span>SYSTEMS BUILT OUTSIDE THE LINE</span>
          </div>
          <h2 className="text-2xl font-bold text-[#111827] mt-1">
            Selected Engineering Projects
          </h2>
          <p className="text-sm text-[#4B5563]">
            Hands-on IoT and data work behind the digital tooling used on the floor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="card-surface p-6 rounded-2xl space-y-3 border border-gray-200"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#164E3A]">
                {project.context}
              </span>
              <h3 className="text-lg font-bold text-[#111827] leading-snug">
                {project.name}
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200/70 text-[11px] font-medium text-[#164E3A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Leadership Decision Journal */}
      <div className="space-y-6">
        <div className="border-b border-[#111827]/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#164E3A]">
            <BookOpen className="w-4 h-4" />
            <span>LEADERSHIP JOURNAL · DOCUMENTED DECISIONS</span>
          </div>
          <h2 className="text-2xl font-bold text-[#111827] mt-1">
            Decisions That Moved Production
          </h2>
          <p className="text-sm text-[#4B5563]">
            Real floor decisions: problem, action taken, and operational reflection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.leadershipJournal.map((entry) => (
            <div
              key={entry.id}
              className="card-surface p-7 rounded-2xl space-y-5 hover:border-[#164E3A]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-[#164E3A] font-mono font-bold">
                    {entry.status}
                  </span>
                  <span className="text-gray-500 font-mono">{entry.date}</span>
                </div>

                <h3 className="text-lg font-bold text-[#111827] leading-snug">
                  {entry.title}
                </h3>

                <div className="pt-2 space-y-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-gray-400 tracking-wider block">
                    KEY DECISION
                  </span>
                  <p className="text-sm text-[#111827] font-medium leading-relaxed bg-[#FAF8F5] p-3 rounded-lg border border-gray-100">
                    {entry.keyDecision}
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-gray-400 tracking-wider block">
                    ACTION PLAN
                  </span>
                  <ul className="space-y-1 text-xs text-[#4B5563]">
                    {entry.actionPlan.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-[#164E3A] font-bold">›</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#164E3A] tracking-wider block">
                  OPERATIONAL REFLECTION
                </span>
                <p className="text-xs text-[#4B5563] italic leading-relaxed">
                  &ldquo;{entry.reflection}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-[#111827]/10 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#164E3A] hover:text-[#11382A]"
        >
          <span>Explore Dairy & Technical Skills Matrix</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/impact"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#111827] hover:text-[#164E3A]"
        >
          <span>View Production Impact & Live Metrics</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
