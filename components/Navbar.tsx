'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Factory, Menu, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import LiveClock from './LiveClock';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/impact', label: 'Impact' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#111827]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark + icon */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-[#164E3A] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105 shrink-0">
              <Factory className="w-5 h-5 text-emerald-200" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="truncate text-base font-bold tracking-tight text-[#111827] group-hover:text-[#164E3A] transition-colors leading-tight">
                Muhammad Hafizh Maulidan
              </span>
              <span className="truncate text-xs text-[#6B7280] font-medium tracking-normal">
                Head of Unit · Dairy Manufacturing
              </span>
            </div>
          </Link>

          {/* Zone 2: 7 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4B5563]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                    active
                      ? 'text-[#164E3A] font-semibold border-[#164E3A]'
                      : 'border-transparent hover:text-[#111827] hover:border-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Live clock badge & primary CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Live WIB Clock badge in penetasan style */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/60 text-xs font-medium text-[#164E3A]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <LiveClock showSeconds={true} />
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#164E3A] rounded-lg hover:bg-[#11382A] transition-all shadow-sm whitespace-nowrap"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2 text-xs text-[#164E3A] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <LiveClock showSeconds={true} />
            </div>
            <span className="text-xs text-gray-500 font-medium">Unit Tasikmalaya</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-emerald-100/70 text-[#164E3A] font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#164E3A] rounded-lg shadow-sm"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
