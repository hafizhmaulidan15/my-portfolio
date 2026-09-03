import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { usePageMeta } from './hooks/usePageMeta';

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
const TubelightDemo = lazy(() => import('./components/ui/tubelight-demo'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LoadingFallback() {
  return (
    <div className="min-h-screen gradient flex flex-col items-center justify-center pt-24">
      <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin mb-4"></div>
      <div className="text-text-tertiary text-sm font-mono">Loading...</div>
    </div>
  );
}

function App() {
  useSmoothScroll();
  usePageMeta();

  return (
    <div className="app bg-transparent min-h-screen flex flex-col overflow-x-hidden w-full max-w-full">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-md focus:text-sm focus:font-medium">Skip to content</a>
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
        <div className="flex-1 flex flex-col">
            <main id="main-content" className="flex-1 page-fade">
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
                <Route path="/tubelight-demo" element={<TubelightDemo />} />
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
