import { Mail, Cpu, Database, Wifi, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="grid-pattern"></div>
            <div className="gradient-orb cyan"></div>
            <div className="gradient-orb purple"></div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-greeting">👋 Hello, I'm</span>
                        <h1 className="hero-name">
                            Muhammad <span className="text-gradient">Hafizh</span> Maulidan
                        </h1>
                        <p className="hero-title">
                            Fresh Graduate | <span className="role">IoT Engineer</span> & Data Analyst
                        </p>
                        <p className="hero-description">
                            Engineer IoT, Automasi, dan Elektrikal dengan pengalaman dalam merancang embedded system,
                            solusi otomasi, serta monitoring real-time. Passionate about turning data into insights
                            and building smart systems.
                        </p>
                        <div className="hero-buttons">
                            <a href="#contact" className="btn btn-primary">
                                <Mail size={20} />
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="hero-image-wrapper">
                            <div className="hero-avatar-ring"></div>
                            <img
                                src="/profile-avatar.jpg"
                                alt="Muhammad Hafizh Maulidan"
                                className="hero-avatar"
                            />
                            <div className="hero-floating-icons">
                                <div className="floating-icon">
                                    <Cpu size={24} color="#00f5ff" />
                                </div>
                                <div className="floating-icon">
                                    <Database size={24} color="#a855f7" />
                                </div>
                                <div className="floating-icon">
                                    <Wifi size={24} color="#ec4899" />
                                </div>
                                <div className="floating-icon">
                                    <Zap size={24} color="#10b981" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
