import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GithubLogo, LinkedinLogo, List, X } from '@phosphor-icons/react';
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
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <>
            {/* Desktop Top Navbar */}
            <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-white/[0.06] items-center px-6">
                <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group shrink-0">
                        <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-foreground font-bold text-base transition-transform duration-200 group-hover:scale-105">
                            H
                        </span>
                        <span className="text-foreground font-semibold tracking-tight text-sm group-hover:text-primary transition-colors duration-200">
                            MAULIDAN
                        </span>
                    </Link>

                    {/* Navigation Links */}
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
                                            : "text-text-tertiary hover:text-foreground hover:bg-white/[0.05]"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-2 shrink-0">
                        <a
                            href="https://github.com/hafizhmaulidan15"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-interactive-button border border-border flex items-center justify-center text-text-muted hover:text-foreground hover:border-white/[0.25] transition-all duration-200"
                            aria-label="GitHub Profile"
                        >
                            <GithubLogo size={16} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hafizhmaulidan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-interactive-button border border-border flex items-center justify-center text-text-muted hover:text-foreground hover:border-white/[0.25] transition-all duration-200"
                            aria-label="LinkedIn Profile"
                        >
                            <LinkedinLogo size={16} />
                        </a>
                    </div>
                </div>
            </header>

            {/* Mobile Top Bar */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/[0.06]">
                <div className="flex items-center justify-between px-4 h-14">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-foreground font-bold text-sm">
                            H
                        </span>
                        <span className="text-foreground font-semibold tracking-tight text-xs">MAULIDAN</span>
                    </Link>

                    <button
                        className="w-9 h-9 rounded-lg bg-interactive-button border border-border flex items-center justify-center text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X size={18} /> : <List size={18} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 z-40 bg-black/60 transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
                className={`lg:hidden fixed top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-white/[0.06] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
                <nav className="px-4 py-4 space-y-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "flex items-center px-4 py-3 rounded-md transition-all duration-200 text-sm",
                                    isActive
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-text-tertiary hover:text-foreground hover:bg-white/[0.05]"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="px-4 pb-4 flex items-center gap-3">
                    <a
                        href="https://github.com/hafizhmaulidan15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-interactive-button border border-border flex items-center justify-center text-text-muted hover:text-foreground transition-all duration-200"
                        aria-label="GitHub Profile"
                    >
                        <GithubLogo size={17} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hafizhmaulidan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-interactive-button border border-border flex items-center justify-center text-text-muted hover:text-foreground transition-all duration-200"
                        aria-label="LinkedIn Profile"
                    >
                        <LinkedinLogo size={17} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
