import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-content">
                    <h2 className="section-title">
                        <span className="text-terminal">&gt;</span> ready to collaborate
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        I'm currently looking for new opportunities. Whether you have a question,
                        a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-buttons">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=mhafizh.maulidan@gmail.com&su=Hello%20Hafizh%20-%20Inquiry%20from%20Portfolio&body=Hello%20Hafizh%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20further.%0A%0AName%3A%20%5BYour%20Name%5D%0ACompany%2FOrganization%3A%20%5BCompany%20Name%5D%0APurpose%3A%20%5BProject%20%2F%20Job%20Opportunity%20%2F%20Collaboration%20%2F%20Other%5D%0A%0AMessage%3A%0A%5BWrite%20your%20message%20here%5D%0A%0AThank%20you%2C%0A%5BYour%20Name%5D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <Mail size={20} />
                            &gt; Contact Me!!
                        </a>
                    </div>

                    {/* Social Links */}
                    <div style={{ marginTop: '48px' }}>
                        <p className="social-header text-terminal">
                            FIND ME ON
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
