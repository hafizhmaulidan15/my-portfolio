import { Award, Shield, BarChart, Trophy, Star, GraduationCap, Code2 } from 'lucide-react';

const Certifications = () => {
    // Course Certificates (Course completions)
    const courseCerts = [
        {
            title: 'Data Science & Analytics',
            provider: 'HP LIFE',
            date: 'Aug 2025',
            skills: ['Python', 'Data Science', 'Analytics']
        },
        {
            title: 'Data Visualization',
            provider: 'Dicoding Academy',
            date: 'May 2025',
            credential: '07Z631Y72ZQR',
            skills: ['Python', 'Machine Learning', 'Data Visualization']
        },
        {
            title: 'Understanding AI and LLMs as a Network Engineer',
            provider: 'Cisco',
            date: 'Apr 2025',
            credential: '00u3r4mfcsq6UUJvp5d7',
            skills: ['Large Language Models', 'Artificial Intelligence']
        },
        {
            title: 'Advance Python',
            provider: 'Skilvul',
            date: 'Jan 2025',
            skills: ['Python', 'OOP', 'Concurrency', 'Parallel Programming']
        },
        {
            title: 'Algorithm & Data Structures with Python',
            provider: 'Skilvul',
            date: 'Sep 2024',
            credential: '66d9189834148166cdcd7aac',
            skills: ['Algorithms', 'Data Structures', 'Python']
        },
        {
            title: 'JavaScript',
            provider: 'Skilvul',
            date: 'Sep 2024',
            credential: '66e295db43c6a0737458a129',
            skills: ['JavaScript', 'DOM', 'ES6']
        },
        {
            title: 'Python',
            provider: 'HackerRank',
            date: 'Sep 2024',
            credential: '77bd3eef739a',
            skills: ['Python', 'Data Structures', 'OOP']
        },
        {
            title: 'Cascading Style Sheets (CSS)',
            provider: 'Skilvul',
            date: 'Aug 2024',
            credential: '66ab563165a29630890c558c',
            skills: ['CSS', 'Responsive Design']
        },
        {
            title: 'Python Dasar',
            provider: 'Skilvul',
            date: 'Aug 2024',
            credential: '66bb2e1e3d59667a4a7220f6',
            skills: ['Python Basics', 'Control Flow']
        },
        {
            title: 'Hypertext Markup Language (HTML)',
            provider: 'Skilvul',
            date: 'Jul 2024',
            credential: '66a972ab6e1838114a8b98e4',
            skills: ['HTML', 'Web Structure']
        },
        {
            title: 'Python Essentials 1',
            provider: 'Cisco',
            date: 'May 2024',
            skills: ['Python Programming']
        },
        {
            title: 'Networking Basics',
            provider: 'Cisco',
            date: 'Apr 2024',
            skills: ['IPv4', 'Networking Fundamentals']
        },
        {
            title: '7 Habits of Highly Effective College Students',
            provider: 'FranklinCovey',
            date: 'Aug 2021',
            skills: ['Critical Thinking', 'Self-Management', 'Adaptability']
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
                <h2 className="section-title">Course Certificates & Achievements</h2>
                <p className="section-subtitle">
                    Professional credentials and notable accomplishments
                </p>

                {/* Course Certificates */}
                <div className="cert-section-header" style={{ marginTop: '64px' }}>
                    <div className="cert-header-icon neon-glow" style={{ background: 'var(--gradient-secondary)' }}>
                        <GraduationCap size={24} />
                    </div>
                    <h3 className="cert-section-title">Course Certificates</h3>
                    <span className="cert-count">{courseCerts.length} Certificates</span>
                </div>

                <div className="course-certs-grid">
                    {courseCerts.map((cert, index) => (
                        <div key={index} className="course-cert-card glass-card hover-lift">
                            <div className="course-cert-header">
                                <h4>{cert.title}</h4>
                                <p className="course-cert-provider text-gradient">{cert.provider}</p>
                            </div>
                            <p className="course-cert-date text-terminal">{cert.date}</p>
                            {cert.credential && (
                                <p className="cert-credential-small">ID: {cert.credential}</p>
                            )}
                            <div className="cert-skills-mini" style={{ marginTop: '8px' }}>
                                {cert.skills.slice(0, 2).map((skill, idx) => (
                                    <span key={idx} className="skill-tag-mini">{skill}</span>
                                ))}
                                {cert.skills.length > 2 && (
                                    <span className="skill-tag-mini">+{cert.skills.length - 2}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

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
