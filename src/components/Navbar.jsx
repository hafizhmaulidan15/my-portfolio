import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
    House, User, Lightbulb, Briefcase, 
    Folder, Certificate, Envelope, GithubLogo, LinkedinLogo,
    List, X
} from '@phosphor-icons/react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home', icon: <House size={20} /> },
        { path: '/about', label: 'About', icon: <User size={20} /> },
        { path: '/skills', label: 'Skills', icon: <Lightbulb size={20} /> },
        { path: '/experience', label: 'Exp', icon: <Briefcase size={20} /> },
        { path: '/projects', label: 'Projects', icon: <Folder size={20} /> },
        { path: '/certifications', label: 'Cert', icon: <Certificate size={20} /> },
        { path: '/contact', label: 'Contact', icon: <Envelope size={20} /> },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 py-6",
            isScrolled ? "py-4 bg-background/80 backdrop-blur-md" : "py-8"
        )}>
            <div className="container mx-auto px-6 max-w-[1400px] flex items-center justify-between">
                
                {/* Logo */}
                <Link 
                    to="/" 
                    className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-2 group"
                >
                    <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-background">
                        H
                    </span>
                    <span className="group-hover:text-accent transition-colors">MAULIDAN</span>
                </Link>

                {/* Desktop Dock-style Navigation */}
                <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                    {navLinks.map((link) => (
                        <motion.div key={link.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to={link.path}
                                className={cn(
                                    "px-4 py-2 rounded-xl transition-all text-sm font-medium flex items-center gap-2",
                                    location.pathname === link.path 
                                        ? "text-foreground bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                                        : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                                )}
                            >
                                {link.icon}
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Socials & Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-2">
                        <motion.a
                            href="https://github.com/hafizhmaulidan15"
                            target="_blank"
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent transition-colors"
                        >
                            <GithubLogo size={20} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/hafizhmaulidan/"
                            target="_blank"
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent transition-colors"
                        >
                            <LinkedinLogo size={20} />
                        </motion.a>
                    </div>

                    <button
                        className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 p-6 bg-background/95 backdrop-blur-2xl border-b border-white/10 lg:hidden"
                    >
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "flex items-center gap-4 text-lg font-medium p-2 rounded-xl transition-all",
                                            location.pathname === link.path ? "text-accent bg-accent/5" : "text-zinc-400 hover:text-accent"
                                        )}
                                    >
                                        <span className={cn(
                                            "p-2 rounded-lg transition-colors",
                                            location.pathname === link.path ? "bg-accent/10 text-accent" : "bg-white/5 text-zinc-500"
                                        )}>
                                            {link.icon}
                                        </span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
