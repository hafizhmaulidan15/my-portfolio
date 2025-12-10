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
            description: 'D4 - IPB University (2021 - 2025)',
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

                <div className="about-content" style={{ marginTop: '48px' }}>
                    <div className="about-text">
                        <p>
                            Saya adalah Fresh Graduate dari <strong>IPB University</strong> dengan program D4,
                            fokus pada bidang <strong>IoT Engineering</strong>, <strong>Data Analytics</strong>,
                            dan <strong>Web Development</strong>.
                        </p>
                        <p>
                            Memiliki pemahaman kuat terhadap mikrokontroler, integrasi sensor - aktuator,
                            rangkaian elektronik, serta sistem kelistrikan dasar yang digunakan pada perangkat otomatisasi.
                            Berpengalaman mengembangkan dashboard, sistem kendali perangkat, dan alur pengolahan data real-time, pengelolaan end-to-end.
                        </p>
                        <p>
                            Bersertifikat <strong>Hardware Installation Supervisor (BNSP)</strong> dengan penguasaan
                            dasar jaringan, pemrograman Python, serta troubleshooting teknis.
                        </p>

                        <div className="about-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card card">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-info">
                        {infoCards.map((info, index) => (
                            <div key={index} className="info-card card">
                                <div className="info-icon">
                                    {info.icon}
                                </div>
                                <div className="info-content">
                                    <h4>{info.title}</h4>
                                    <p>{info.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
