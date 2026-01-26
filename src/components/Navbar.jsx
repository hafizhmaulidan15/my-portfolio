import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Home, User, Lightbulb, Briefcase, Award, FolderOpen, Mail } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home', icon: <Home size={18} /> },
        { href: '#about', label: 'About', icon: <User size={18} /> },
        { href: '#skills', label: 'Skills', icon: <Lightbulb size={18} /> },
        { href: '#experience', label: 'Exp', icon: <Briefcase size={18} /> },
        { href: '#projects', label: 'Projects', icon: <FolderOpen size={18} /> },
        { href: '#certifications', label: 'Awards', icon: <Award size={18} /> },
        { href: '#contact', label: 'Contact', icon: <Mail size={18} /> },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
                    <span className="text-terminal">&lt;</span>
                    <span className="text-shimmer">Hafizh</span>
                    <span className="text-terminal">/&gt;</span>
                </a>

                {/* Desktop Menu */}
                <ul className="navbar-links desktop-only">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="mobile-nav-links">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="navbar-socials desktop-only">
                    <a
                        href="https://github.com/hafizhmaulidan15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon github"
                        aria-label="GitHub Profile"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hafizhmaulidan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon linkedin"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={18} />
                    </a>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
