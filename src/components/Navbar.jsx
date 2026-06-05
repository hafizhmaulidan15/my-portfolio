import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    House, User, Lightbulb, Briefcase, 
    Folder, Certificate, Envelope, GithubLogo, LinkedinLogo,
    List, X, BookOpen, ChartBar
} from '@phosphor-icons/react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home', icon: <House size={20} /> },
        { path: '/about', label: 'About', icon: <User size={20} /> },
        { path: '/skills', label: 'Skills', icon: <Lightbulb size={20} /> },
        { path: '/experience', label: 'Experience', icon: <Briefcase size={20} /> },
        { path: '/impact', label: 'Impact', icon: <ChartBar size={20} /> },
        { path: '/projects', label: 'Projects', icon: <Folder size={20} /> },
        { path: '/publications', label: 'Publications', icon: <BookOpen size={20} /> },
        { path: '/certifications', label: 'Certifications', icon: <Certificate size={20} /> },
        { path: '/contact', label: 'Contact', icon: <Envelope size={20} /> },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[284px] flex-col justify-between bg-background z-50 py-[72px] px-0 border-r border-white/[0.06]">
                <div>
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="flex items-center gap-3 px-6 mb-12 group"
                    >
                        <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-foreground font-bold text-lg">
                            H
                        </span>
                        <span className="font-sans text-foreground font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">MAULIDAN</span>
                    </Link>

                    {/* Navigation Items */}
                    <nav className="px-4">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded mb-3 transition-all duration-200 font-sans text-foreground",
                                        isActive 
                                            ? "bg-primary/[0.15] text-primary border-l-[3px] border-l-primary" 
                                            : "hover:bg-white/[0.05] border-l-[3px] border-l-transparent"
                                    )}
                                >
                                    <span className={cn(isActive ? "text-primary" : "text-text-muted")}>
                                        {link.icon}
                                    </span>
                                    <span className="text-[14px] font-normal">{link.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Social Links */}
                <div className="px-6 flex items-center gap-3">
                    <a
                        href="https://github.com/hafizhmaulidan15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-interactive-button border border-border flex items-center justify-center text-text-muted hover:text-foreground hover:border-border-light transition-all duration-200"
                        aria-label="GitHub Profile"
                    >
                        <GithubLogo size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hafizhmaulidan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-interactive-button border border-border flex items-center justify-center text-text-muted hover:text-foreground hover:border-border-light transition-all duration-200"
                        aria-label="LinkedIn Profile"
                    >
                        <LinkedinLogo size={18} />
                    </a>
                </div>
            </aside>

            {/* Mobile Top Bar */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/[0.06]">
                <div className="flex items-center justify-between px-4 py-4">
                    <Link 
                        to="/" 
                        className="flex items-center gap-2"
                    >
                        <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-foreground font-bold">
                            H
                        </span>
                        <span className="font-sans text-foreground font-semibold tracking-tight">MAULIDAN</span>
                    </Link>

                    <button
                        className="w-10 h-10 rounded-lg bg-interactive-button border border-border flex items-center justify-center text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <List size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <div
              className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              className={`lg:hidden fixed left-0 top-0 bottom-0 w-[280px] bg-background z-50 flex flex-col py-[72px] px-0 border-r border-white/[0.06] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
              <div className="px-4 mb-8">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4"
                >
                  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-foreground font-bold text-lg">
                    H
                  </span>
                  <span className="font-sans text-foreground font-semibold tracking-tight">MAULIDAN</span>
                </Link>
              </div>

              <nav className="px-4 flex-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded mb-3 transition-all duration-200 font-sans text-foreground",
                        isActive 
                          ? "bg-primary/[0.15] text-primary border-l-[3px] border-l-primary" 
                          : "hover:bg-white/[0.05] border-l-[3px] border-l-transparent"
                      )}
                    >
                      <span className={cn(isActive ? "text-primary" : "text-text-muted")}>
                        {link.icon}
                      </span>
                      <span className="text-[14px] font-normal">{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="px-6 flex items-center gap-3 pb-8">
                <a
                  href="https://github.com/hafizhmaulidan15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-interactive-button border border-border flex items-center justify-center text-text-muted hover:text-foreground transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubLogo size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hafizhmaulidan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-interactive-button border border-border flex items-center justify-center text-text-muted hover:text-foreground transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinLogo size={18} />
                </a>
              </div>
            </div>
        </>
    );
};

export default Navbar;
