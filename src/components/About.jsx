import { GraduationCap, MapPin, Mail, Briefcase } from 'lucide-react';

const About = () => {
    const stats = [
        { value: '3+', label: 'Years Learning' },
        { value: '5+', label: 'Projects Completed' },
        { value: '4+', label: 'Certifications' },
        { value: '3.33', label: 'GPA' },
    ];

    const infoCards = [
        {
            icon: <GraduationCap size={24} />,
            title: 'Education',
            description: 'Bachelor of Engineering - IPB University (2021 - 2025)',
        },
        {
            icon: <MapPin size={24} />,
            title: 'Location',
            description: 'Bogor, West Java, Indonesia',
        },
        {
            icon: <Mail size={24} />,
            title: 'Email',
            description: 'mhafizh.maulidan@gmail.com',
        },
        {
            icon: <Briefcase size={24} />,
            title: 'Status',
            description: 'Open to Work - Actively Looking',
        },
    ];

    return (
        <section id="about" className="about section">
            <div className="grid-pattern"></div>
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">
                    Get to know more about my background and what drives me
                </p>

                {/* Main Content - Text + Stats Grid */}
                <div className="about-main-content">
                    <div className="about-text">
                        <p>
                            I am a Fresh Graduate from <strong>IPB University</strong> with a Bachelor of Engineering,
                            focusing on <strong>IoT Engineering</strong>, <strong>Data Analytics</strong>,
                            and <strong>Web Development</strong>.
                        </p>
                        <p>
                            I have a strong understanding of microcontrollers, sensor-actuator integration,
                            electronic circuits, and basic electrical systems used in automation devices.
                            Experienced in developing dashboards, device control systems, and real-time data processing flows with end-to-end management.
                        </p>
                        <p>
                            Certified as <strong>Hardware Installation Supervisor (BNSP)</strong>,
                            <strong>Google Analytics Certification</strong>, and <strong>Integrated Speaking English</strong> with
                            foundational knowledge in networking, Python programming, data analysis, electronics mastery, and technical troubleshooting.
                        </p>
                    </div>

                    {/* Stats Grid - Right Side */}
                    <div className="about-stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card-new glass-card hover-lift">
                                <div className="stat-value-new text-terminal">{stat.value}</div>
                                <div className="stat-label-new">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Cards - Full Width Bottom */}
                <div className="about-info-grid">
                    {infoCards.map((info, index) => (
                        <div key={index} className="info-card-new glass-card hover-lift">
                            <div className="info-icon-new neon-glow">
                                {info.icon}
                            </div>
                            <div className="info-content-new">
                                <h4 className="text-terminal">{info.title}</h4>
                                <p>{info.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
