import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

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
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#contact', label: 'Contact' },
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
                    <span className="text-shimmer">Portfolio Hafizh</span>
                    <span className="text-terminal">&gt;</span>
                </a>

                <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
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

                <div className="navbar-socials">
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
