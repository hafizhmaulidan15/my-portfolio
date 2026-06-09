import { useState, useEffect } from 'react';
import { CaretUp } from '@phosphor-icons/react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-muted hover:text-foreground hover:border-border-light hover:bg-white/[0.08] transition-all duration-300 shadow-floating ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <CaretUp size={18} weight="bold" />
    </button>
  );
};

export default BackToTop;
