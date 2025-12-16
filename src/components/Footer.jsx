import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <a href="#home" className="navbar-logo footer-logo">
                        <span className="text-terminal">&lt;</span>
                        <span className="text-shimmer">MHM</span>
                        <span className="text-terminal">&gt;</span>
                    </a>

                    <p className="footer-text">
                        <span className="text-terminal">&copy;</span> {currentYear} Muhammad Hafizh Maulidan
                        <span className="text-muted"> | </span>
                        <span className="text-gradient">Built with React</span>
                    </p>
                </div>

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="back-to-top btn-icon neon-glow"
                    aria-label="Back to top"
                    title="Back to top"
                >
                    <ArrowUp size={20} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
