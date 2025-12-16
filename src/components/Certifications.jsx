import { Award, Shield, BarChart, Trophy, Star, Code2 } from 'lucide-react';

const Certifications = () => {
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
                <h2 className="section-title">Achievements</h2>
                <p className="section-subtitle">
                    Notable accomplishments and recognitions
                </p>

                {/* Achievements */}
                <div className="cert-section-header" style={{ marginTop: '64px' }}>
                    <div className="cert-header-icon neon-glow" style={{ background: 'var(--gradient-secondary)' }}>
                        <Trophy size={24} />
                    </div>
                    <h3 className="cert-section-title">Notable Achievements</h3>
                </div>

                <div className="achievements-grid-new">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-card-new glass-card hover-lift">
                            <div className="achievement-header">
                                <h4>{achievement.title}</h4>
                                <Star size={20} className="achievement-star" />
                            </div>
                            <p className="achievement-org text-gradient">{achievement.organization}</p>
                            <p className="achievement-date text-terminal">{achievement.date}</p>
                            <p className="achievement-desc">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
