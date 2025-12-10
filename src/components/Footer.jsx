import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <a href="#home" className="navbar-logo" style={{ fontSize: '1.25rem' }}>
                        &lt;HM /&gt;
                    </a>

                    <div className="footer-socials">
                        <a
                            href="https://github.com/hafizhmaulidan15"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-icon github"
                            aria-label="GitHub"
                        >
                            <Github size={16} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hafizhmaulidan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-icon linkedin"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={16} />
                        </a>
                    </div>

                    <p className="footer-text">
                        © {currentYear} Muhammad Hafizh Maulidan. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
