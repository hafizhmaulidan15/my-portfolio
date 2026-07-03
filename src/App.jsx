import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { usePageMeta } from './hooks/usePageMeta';
import gsap from 'gsap';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Publications = lazy(() => import('./components/Publications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const NotFound = lazy(() => import('./components/NotFound'));
const ProductionImpact = lazy(() => import('./components/ProductionImpact'));
const BackToTop = lazy(() => import('./components/BackToTop'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center pt-24">
      <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin mb-4"></div>
      <div className="text-text-tertiary text-sm font-mono">Loading...</div>
    </div>
  );
}

function App() {
  useSmoothScroll();
  usePageMeta();

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2 });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursor.remove();
    };
  }, []);

  return (
    <div className="app bg-background min-h-screen flex flex-col">
      <style>{`
        .custom-cursor {
          width: 12px; height: 12px; background: white; border-radius: 50%;
          position: fixed; top: 0; left: 0; pointer-events: none;
          z-index: 9999; mix-blend-mode: difference;
        }
      `}</style>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
        <div className="pt-16 lg:pt-16 flex-1 flex flex-col">
            <main className="flex-1 page-fade">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/impact" element={<ProductionImpact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          <Footer />
        </div>
      </Suspense>
      <BackToTop />
      <Analytics />
    </div>
  );
}

export default App;
