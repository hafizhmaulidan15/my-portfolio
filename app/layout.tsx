import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DevErrorGuard from '@/components/DevErrorGuard';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Hafizh Maulidan | Dairy Operations & Production Leader',
  description:
    'Head of Unit Dairy Manufacturing at Rumah Susu Indonesia. Standardized SOPs, cold chain logistics, quality assurance, and high-discipline production leadership.',
  openGraph: {
    title: 'Muhammad Hafizh Maulidan | Dairy Operations & Production Leader',
    description:
      'Head of Unit Dairy Manufacturing at Rumah Susu Indonesia. Standardized SOPs, cold chain logistics, and dairy processing leadership.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Hafizh Maulidan | Dairy Operations & Production Leader',
    description:
      'Head of Unit Dairy Manufacturing at Rumah Susu Indonesia. Operations management and production leadership.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-cream-dot text-[#111827] min-h-screen flex flex-col antialiased selection:bg-[#164E3A] selection:text-white" suppressHydrationWarning>
        <DevErrorGuard />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
