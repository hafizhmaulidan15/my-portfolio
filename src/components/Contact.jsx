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
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=mhafizh.maulidan@gmail.com&su=Hello%20Hafizh%20-%20Inquiry%20from%20Portfolio&body=Halo%20Hafizh%2C%0A%0ASaya%20menemukan%20portfolio%20kamu%20dan%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut.%0A%0ANama%3A%20%5BNama%20Anda%5D%0APerusahaan%2FInstansi%3A%20%5BNama%20Perusahaan%5D%0AKeperluan%3A%20%5BProject%20%2F%20Job%20Opportunity%20%2F%20Collaboration%20%2F%20Other%5D%0A%0APesan%3A%0A%5BTulis%20pesan%20Anda%20di%20sini%5D%0A%0ATerima%20kasih%2C%0A%5BNama%20Anda%5D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
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
