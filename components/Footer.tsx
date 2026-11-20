import Link from 'next/link';
import { Factory, Mail, Linkedin, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#111827]/10 pt-16 pb-12 mt-20 text-[#4B5563]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#111827]/10">
          
          {/* Col 1: Bio & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#164E3A] flex items-center justify-center text-white">
                <Factory className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <span className="text-base font-bold text-[#111827] block">
                  Muhammad Hafizh Maulidan
                </span>
                <span className="text-xs text-[#6B7280]">
                  Dairy Manufacturing · Production & Quality
                </span>
              </div>
            </div>

            <p className="text-sm text-[#4B5563] leading-relaxed max-w-md">
              Production at a single Tasikmalaya dairy plant under two employers: heading the processing unit for Rumah Susu Indonesia and running floor operations plus raw milk reception testing for Mitrayasa Dairy Natural. SOPs, cold chain, and container-level quality control.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
              <MapPin className="w-3.5 h-3.5 text-[#164E3A]" />
              <span>Tasikmalaya & Bogor, West Java, Indonesia</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
              Operations & Profile
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#164E3A] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#164E3A] transition-colors">
                  About & Principles
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-[#164E3A] transition-colors">
                  Experience & Timeline
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-[#164E3A] transition-colors">
                  Skills Matrix (Dairy & IoT)
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-[#164E3A] transition-colors">
                  Live Production Impact
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-[#164E3A] transition-colors">
                  Achievements & Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Verification */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
              Direct Inquiry
            </h4>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Available for full-time plant leadership, operations management, and dairy processing consultations.
            </p>

            <div className="flex flex-col space-y-2 pt-1">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#111827] hover:text-[#164E3A] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#164E3A]" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#111827] hover:text-[#164E3A] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#164E3A]" />
                <span>{PORTFOLIO_DATA.profile.linkedinHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/60 text-xs font-medium text-[#164E3A]">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>FAO Antibiotics · BNSP Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>
            © {currentYear} Muhammad Hafizh Maulidan · Dairy Operations & Production Leader.
          </p>
          <div className="flex items-center gap-4 text-[#6B7280]">
            <span>Rumah Susu Indonesia · Mitrayasa Dairy</span>
            <span>·</span>
            <span>IPB University</span>
            <span>·</span>
            <span>Computer Engineering Tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
