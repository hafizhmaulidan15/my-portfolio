import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/skills', label: 'Skills' },
        { path: '/experience', label: 'Experience' },
        { path: '/impact', label: 'Impact' },
        { path: '/achievements', label: 'Achievements' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <>
            {/* Desktop  Fluid Island Pill */}
            <header className="hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
                <div className="flex items-center gap-6 px-2 py-2 bg-surface/90 backdrop-blur-xl rounded-full">
                    <Link to="/" className="flex items-center gap-2.5 group shrink-0">
                        <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-105 group-hover:rotate-[-8deg]">
                            <i className="bi bi-building text-[18px]"></i>
                        </span>
                        <span className="text-foreground font-semibold tracking-tight text-sm group-hover:text-primary transition-colors duration-200">
                            Portfolio
                        </span>
                    </Link>
                    <nav className="flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={cn(
                                        "px-3 py-2 text-xs font-medium tracking-wide transition-all duration-200 rounded-md",
                                        isActive
                            ? "text-primary bg-primary/10"
                            : "text-text-tertiary hover:text-foreground"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="flex items-center gap-2 shrink-0">
                        <a href="mailto:mhafizh.maulidan@gmail.com" aria-label="Gmail" className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-primary transition-all duration-200">
                            <i className="bi bi-envelope text-[16px]"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/hafizhmaulidan/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-primary transition-all duration-200" aria-label="LinkedIn Profile">
                            <i className="bi bi-linkedin text-[16px]"></i>
                        </a>
                    </div>
                </div>
            </header>

            {/* Mobile Top Bar  Fluid Island */}
            <header className="lg:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[360px]">
                <div className="flex items-center justify-between px-1.5 py-1.5 bg-surface/90 backdrop-blur-xl rounded-full">
                    <Link to="/" className="flex items-center gap-2.5 pl-1 pr-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                            <i className="bi bi-building text-[14px]"></i>
                        </span>
                        <span className="text-foreground font-semibold tracking-tight text-xs">Portfolio</span>
                    </Link>
                    <button
                        className="relative w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center overflow-hidden shrink-0"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className={`absolute w-4 h-[2px] bg-background rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1'}`}></span>
                        <span className={`absolute w-4 h-[2px] bg-background rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1'}`}></span>
                    </button>
                </div>
            </header>

            {/* Full-Screen Glass Overlay */}
            <div className={`lg:hidden fixed inset-0 z-40 bg-background/85 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center justify-center min-h-screen px-6 py-20 gap-1">
                    {navLinks.map((link, i) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "font-display text-[32px] font-[800] tracking-[-0.03em] leading-none py-2 px-6 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
                                    isActive ? "text-foreground" : "text-text-tertiary hover:text-foreground",
                                    isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                                )}
                                style={{ transitionDelay: isMobileMenuOpen ? `${100 + i * 40}ms` : '0ms' }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className={`flex items-center gap-3 mt-8 pt-8 border-t border-border/50 transition-all duration-700 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: isMobileMenuOpen ? '380ms' : '0ms' }}>
                        <a href="mailto:mhafizh.maulidan@gmail.com" aria-label="Gmail" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-foreground hover:border-foreground/20 transition-colors">
                            <i className="bi bi-envelope text-[18px]"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/hafizhmaulidan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-foreground hover:border-foreground/20 transition-colors" aria-label="LinkedIn">
                            <i className="bi bi-linkedin text-[18px]"></i>
                        </a>
                    </div>
                    <p className={`font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase mt-6 transition-all duration-700 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isMobileMenuOpen ? '420ms' : '0ms' }}>Tasikmalaya  Dairy Operations</p>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
