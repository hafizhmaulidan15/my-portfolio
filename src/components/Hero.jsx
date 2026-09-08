import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Hero = () => {
 const staggerRef = useRef(null);
 useEffect(() => {
  const el = staggerRef.current;
  if (!el) return;
  const t = setTimeout(() => el.classList.add('is-shown'), 80);
  return () => clearTimeout(t);
 }, []);

 return (
  <section id="home" className="hero-speakable relative bg-transparent overflow-hidden">
   <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}} aria-hidden="true"></div>

   <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-[1400px]">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[100dvh] pt-24 lg:pt-28 pb-12 lg:pb-16">
     {/* Left editorial 7 cols */}
     <div className="lg:col-span-7 space-y-6">
      <div className="font-mono text-[11px] tracking-[0.2em] text-text-tertiary uppercase flex items-center gap-3">
       <span className="h-px w-8 bg-foreground/15 hidden sm:block" aria-hidden="true"></span>
       Head of Unit Dairy Manufacturing Tasikmalaya
      </div>

      <div className="t-stagger" ref={staggerRef}>
       <h1 className="t-stagger-line font-display text-[42px] sm:text-[54px] lg:text-[64px] font-[800] tracking-[-0.04em] leading-[0.92] text-foreground text-balance">
        Leading operations<br />
        <span className="font-[300] italic tracking-[-0.02em] text-gradient-foreground">with clarity.</span>
       </h1>
       <p className="t-stagger-line t-stagger-line--2 mt-5 text-[16px] lg:text-[18px] leading-[1.6] text-text-secondary max-w-[52ch] text-pretty">
        Built for scale, grounded in data.<br />
        <Link to="/achievements" className="text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary">Explore Achievements →</Link> <span className="text-text-tertiary"></span> <Link to="/experience" className="text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary">Leadership →</Link> <span className="text-text-tertiary"></span> <Link to="/impact" className="text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary">Live Impact</Link>
       </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
       <Link to="/contact" className="group inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 bg-foreground text-background text-sm font-medium rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-foreground/90 active:scale-[0.98]">
        <span>Start a conversation</span>
        <span className="w-8 h-8 rounded-full bg-transparent/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
         <i className="bi bi-arrow-up-right text-[14px]"></i>
        </span>
       </Link>
       <Link to="/achievements" className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-foreground underline decoration-foreground/15 underline-offset-4 hover:decoration-foreground/40 transition-colors">
        View achievements
       </Link>
      </div>

       <div className="grid grid-cols-3 gap-6 pt-6 mt-2 border-t border-border max-w-[480px]">
        <div>
         <div className="font-display text-[28px] font-[700] tracking-[-0.03em] text-foreground tabular-nums">1.1K</div>
         <div className="font-mono text-[11px] tracking-[0.12em] text-text-tertiary uppercase">pcs produced</div>
         <div className="text-xs text-text-tertiary mt-1">mozzarella total</div>
        </div>
        <div>
         <div className="font-display text-[28px] font-[700] tracking-[-0.03em] text-foreground tabular-nums">64.8K</div>
          <div className="font-mono text-[11px] tracking-[0.12em] text-text-tertiary uppercase">L milk</div>
          <div className="text-xs text-text-tertiary mt-1">total processed</div>
        </div>
        <div>
         <div className="font-display text-[28px] font-[700] tracking-[-0.03em] text-foreground tabular-nums">0.35%</div>
         <div className="font-mono text-[11px] tracking-[0.12em] text-text-tertiary uppercase">Reject</div>
         <div className="text-xs text-text-tertiary mt-1">quality pass</div>
        </div>
       </div>
     </div>

     {/* Right visual 5 cols, Double-Bezel */}
     <div className="lg:col-span-5 lg:pl-4">
      <div className="p-1.5 bg-gradient-icon ring-1 ring-primary/10 rounded-[2rem]">
       <div className="relative bg-surface rounded-[1.4rem] overflow-hidden border border-black/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_12px_40px_rgba(232,238,246,0.08)]">
         <div className="aspect-[4/3] relative overflow-hidden bg-surface grid grid-cols-2 gap-0">
          <div className="relative overflow-hidden">
           <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=600&fit=crop&crop=center" alt="Dairy farm" width="400" height="600" loading="eager" decoding="async" fetchPriority="high" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <div className="relative overflow-hidden border-l border-white/10">
           <img src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=600&fit=crop&crop=center" alt="Mozzarella production" width="400" height="600" loading="eager" decoding="async" fetchPriority="high" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
         </div>
        <div className="p-4 flex items-center justify-between border-t border-border bg-surface">
         <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center">
           <i className="bi bi-building text-[14px]"></i>
          </span>
           <div>
            <div className="text-sm font-medium leading-none">Rumah Susu Indonesia</div>
            <div className="text-xs text-text-tertiary">Tasikmalaya</div>
           </div>
         </div>
         <span className="font-mono text-xs px-2 py-1 rounded-full bg-success/10 text-success border border-success/15">Live</span>
        </div>
       </div>
      </div>
       <figure className="mt-6 flex justify-start">
        <blockquote className="max-w-[52ch] border-l-2 border-primary/20 pl-4 py-0.5 text-left ml-1">
          <p className="font-display text-[13px] lg:text-[14px] leading-[1.7] tracking-[-0.01em] text-text-secondary italic">“Driven by data, grounded in reality.<br />Quality aligned, waste minimized, teams led with purpose.”</p>
        </blockquote>
       </figure>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Hero;
