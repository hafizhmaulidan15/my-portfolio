import { useState, useEffect } from 'react';
import { Mail, Terminal, Code2, Cpu, Wifi } from 'lucide-react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = 'IoT Engineer & Web Developer';
    const [showCursor, setShowCursor] = useState(true);

    // Typing effect
    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [typedText]);

    // Cursor blink
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero section">
            {/* Matrix/Particle Background */}
            <div className="grid-pattern"></div>
            <MatrixRain />

            <div className="container">
                <div className="hero-content">
                    {/* Hero Text */}
                    <div className="hero-text">
                        <div className="hero-greeting">
                            <Terminal size={16} />
                            <span>👋 Hello, I'm</span>
                        </div>

                        <h1 className="hero-name">
                            <span className="name-line-1">Muhammad</span>
                            <span className="name-line-2"><span className="text-shimmer">Hafizh</span> Maulidan</span>
                        </h1>

                        <div className="hero-title">
                            <span className="text-terminal">Fresh Graduate |</span>{' '}
                            <span className="role">
                                {typedText}
                                <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
                            </span>
                        </div>

                        <p className="hero-description">
                            IoT Engineer, Data Analyst, and Web Developer with hands-on experience in designing embedded systems,
                            real-time monitoring solutions, and modern web applications. Passionate about building smart, connected systems 
                            that solve real-world problems through automation and data-driven insights.
                        </p>

                        <div className="hero-buttons">
                            <a href="#contact" className="btn btn-primary">
                                <Mail size={20} />
                                Get In Touch
                            </a>
                        </div>

                        {/* Stats Bar */}
                        <div className="hero-stats">
                            <div className="stat-item glass-card">
                                <div className="stat-number text-terminal">5+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-item glass-card">
                                <div className="stat-number text-gradient">4+</div>
                                <div className="stat-label">Certifications</div>
                            </div>
                            <div className="stat-item glass-card">
                                <div className="stat-number text-shimmer">12+</div>
                                <div className="stat-label">Skills</div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image with Tech Elements */}
                    <div className="hero-image">
                        <div className="hero-image-wrapper">
                            {/* Avatar with Ring */}
                            <img
                                src="/profile-avatar.jpg"
                                alt="Muhammad Hafizh Maulidan"
                                className="hero-avatar"
                            />
                            <div className="hero-avatar-ring"></div>

                            {/* Floating Tech Icons */}
                            <div className="hero-floating-icons">
                                <div className="floating-icon floating-icon-1">
                                    <Cpu size={34} />
                                </div>
                                <div className="floating-icon floating-icon-2">
                                    <Code2 size={34} />
                                </div>
                                <div className="floating-icon floating-icon-3">
                                    <Wifi size={34} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Matrix Rain Component
const MatrixRain = () => {
    return (
        <div className="matrix-background">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="matrix-column"
                    style={{
                        left: `${i * 5}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${10 + Math.random() * 10}s`
                    }}
                >
                    {[...Array(20)].map((_, j) => (
                        <span key={j} className="matrix-char">
                            {String.fromCharCode(0x30A0 + Math.random() * 96)}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Hero;
