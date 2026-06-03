import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { CircleNotch } from '@phosphor-icons/react';
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
  const location = useLocation();

  return (
    <div className="app bg-background min-h-screen flex flex-col">
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
        <div className="lg:ml-[284px] lg:pt-0 pt-16 flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex-1"
            >
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
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </Suspense>
      <Analytics />
    </div>
  );
}

export default App;
