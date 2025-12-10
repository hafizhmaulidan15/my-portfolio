import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="gradient-orb cyan" style={{
                width: '400px',
                height: '400px',
                top: '50%',
                left: '-200px',
                transform: 'translateY(-50%)'
            }}></div>
            <div className="gradient-orb purple" style={{
                width: '300px',
                height: '300px',
                bottom: '0',
                right: '-150px'
            }}></div>

            <div className="container">
                <div className="contact-content">
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        I'm currently looking for new opportunities. Whether you have a question,
                        a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-buttons">
                        <a href="mailto:mhafizh.maulidan@gmail.com" className="btn btn-primary">
                            <Send size={20} />
                            Say Hello
                        </a>
                    </div>

                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <Mail size={20} />
                            </div>
                            <div className="contact-item-text">
                                <label>Email</label>
                                <span>mhafizh.maulidan@gmail.com</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <MapPin size={20} />
                            </div>
                            <div className="contact-item-text">
                                <label>Location</label>
                                <span>Bogor, West Java, Indonesia</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div style={{ marginTop: '48px' }}>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.875rem',
                            marginBottom: '16px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>
                            Find me on
                        </p>
                        <div className="social-links-container">
                            <a
                                href="https://github.com/hafizhmaulidan15"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-icon github social-lg"
                                aria-label="GitHub"
                            >
                                <Github size={22} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hafizhmaulidan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-icon linkedin social-lg"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={22} />
                            </a>
                            <a
                                href="mailto:mhafizh.maulidan@gmail.com"
                                className="btn-icon email social-lg"
                                aria-label="Email"
                            >
                                <Mail size={22} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
