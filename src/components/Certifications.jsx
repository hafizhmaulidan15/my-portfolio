import { Award, Shield, BarChart } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: 'Hardware Installation Supervisor',
            issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
            date: 'September 2025 - September 2028',
            score: 'Score: 90',
            icon: <Shield size={24} />,
        },
        {
            title: 'Google Analytics Certification',
            issuer: 'Google',
            date: 'August 2025 - August 2026',
            score: null,
            icon: <BarChart size={24} />,
        },
        {
            title: 'Integrated Speaking English',
            issuer: 'Language Center',
            date: 'November 2025 - November 2026',
            score: 'Score: 75',
            icon: <Award size={24} />,
        },
    ];

    const achievements = [
        {
            title: 'Student Exchange Programme Southeast Asia',
            organization: 'Politeknik Mersing, Malaysia',
            date: 'June 2022',
            description: 'Selected from 800+ students for the SEAMEO TVET Student Exchange program, gaining international learning experience with participants from six ASEAN countries. Developed foundational knowledge in XAMPP, Wireshark, and cybersecurity fundamentals through practical sessions and international collaboration.',
        },
        {
            title: 'Junior Network Engineer - Digital Talent Scholarship 2024',
            organization: 'Pusbang Proserti & Kementerian Kominfo',
            date: 'June 2024',
            description: 'Selected as a participant of the Talent Scouting Academy, Digital Talent Scholarship 2024. Completed 256 hours of training covering computer networking concepts, IPv4/IPv6 configuration, VLAN, routing (static and OSPF), network security, troubleshooting, and Cisco device automation.',
        },
    ];

    return (
        <section id="certifications" className="certifications section">
            <div className="container">
                <h2 className="section-title">Certifications & Achievements</h2>
                <p className="section-subtitle">
                    Professional credentials and notable accomplishments
                </p>

                {/* Certifications */}
                <h3 style={{
                    fontSize: '1.5rem',
                    marginTop: '48px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <span style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--gradient-primary)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px'
                    }}>🏅</span>
                    Professional Certifications
                </h3>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="cert-card card">
                            <div className="cert-icon">
                                {cert.icon}
                            </div>
                            <div className="cert-content">
                                <h4>{cert.title}</h4>
                                <p>{cert.issuer}</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                                    {cert.date}
                                </p>
                                {cert.score && (
                                    <span className="cert-score">{cert.score}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievements */}
                <h3 style={{
                    fontSize: '1.5rem',
                    marginTop: '64px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <span style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--gradient-secondary)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px'
                    }}>🏆</span>
                    Notable Achievements
                </h3>

                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-card card">
                            <h4>{achievement.title}</h4>
                            <p className="org">{achievement.organization}</p>
                            <p className="date">{achievement.date}</p>
                            <p>{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
