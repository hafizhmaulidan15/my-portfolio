import { Terminal, Code } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Front End Developer',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Kedung Jaya, Tanah Sareal, KOTA BOGOR, JAWA BARAT',
            date: 'September 2025 - December 2025',
            description: 'Developing and maintaining front-end web applications for educational technology platforms using modern web technologies. Responsibilities include creating responsive user interfaces, implementing design systems, collaborating with design teams, and ensuring optimal performance across various devices and browsers.',
            type: 'freelance'
        },
        {
            title: 'Internet of Things Engineer Intern',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Kedung Jaya, Tanah Sareal, KOTA BOGOR, JAWA BARAT',
            date: 'August 2024 - November 2024',
            description: 'Developed comprehensive IoT solutions including embedded systems design, sensor integration (TCS34725, ultrasonic, DHT22, YF-S201), real-time monitoring dashboards, and Arduino IoT Cloud integration. Successfully delivered multiple projects including banana ripeness detection system, flood monitoring system, and water level detection with Telegram bot integration.',
            type: 'internship'
        },
        {
            title: 'Front End Intern',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Kedung Jaya, Tanah Sareal, KOTA BOGOR, JAWA BARAT',
            date: 'August 2024 - November 2024',
            description: 'Built responsive and user-friendly web interfaces for company profile websites and educational platforms. Collaborated with development teams on various projects, implemented modern web design practices, and optimized website performance using HTML, CSS, JavaScript, and Bootstrap frameworks.',
            type: 'internship'
        },
    ];

    const trainings = [
        {
            title: 'Hardware Installation Supervisor',
            provider: 'Badan Nasional Sertifikasi Profesi (BNSP)',
            date: 'September 2025 - September 2028',
            description: 'Certified in Computer Hardware Occupation with competencies in disaster recovery planning, hardware specification, system analysis, and IT maintenance.',
            skills: ['Computer Hardware', 'IT Hardware Support', 'Disaster Recovery', 'System Analysis']
        },
        {
            title: 'Google Analytics Certification',
            provider: 'Google Digital Academy (Skillshop)',
            date: 'August 2025 - August 2026',
            description: 'Certified ability to set up Google Analytics 4 property, collect business data, and recognize key measurement features for marketing effectiveness.',
            skills: ['Google Analytics 4', 'Data Collection', 'Marketing Analytics']
        },
        {
            title: 'Integrated Speaking English',
            provider: 'Language Center Bogor',
            date: 'November 2025 - November 2026',
            description: 'English language proficiency certification focusing on spoken English, grammar, and communication skills.',
            skills: ['Spoken English', 'Grammar', 'Communication']
        },
        {
            title: 'Junior Network Engineer - Digital Talent Scholarship 2024',
            provider: 'Kementerian Kominfo',
            date: 'February 2024 - June 2024',
            description: 'Completed 256 hours of training covering computer networking concepts, IPv4/IPv6, VLAN, routing, OSPF, network security, and Cisco automation.',
            skills: ['Networking', 'IPv4/IPv6', 'VLAN', 'OSPF', '+3 more']
        },
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">
                    My professional journey and continuous learning path
                </p>

                <div className="experience-wrapper" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(450px, 100%), 1fr))',
                    gap: '60px',
                    marginTop: '48px'
                }}>
                    {/* Work Experience */}
                    <div>
                        <h3 className="experience-section-header">
                            <span className="experience-icon-box neon-glow">
                                <Terminal size={24} />
                            </span>
                            <span className="text-gradient">Work Experience</span>
                        </h3>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-date text-terminal">{exp.date}</div>
                                    <div className="timeline-content card glass-card hover-lift" style={{ marginTop: '8px' }}>
                                        <h3>{exp.title}</h3>
                                        <h4 className="text-gradient">{exp.company}</h4>
                                        <p>{exp.description}</p>
                                        <span className={`tag ${exp.type === 'internship' ? 'purple' : exp.type === 'freelance' ? 'green' : ''}`} style={{ marginTop: '12px' }}>
                                            {exp.type === 'internship' ? 'Internship' : exp.type === 'freelance' ? 'Freelance' : 'Full-time'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Certifications */}
                    <div>
                        <h3 className="experience-section-header">
                            <span className="experience-icon-box neon-glow" style={{ background: 'var(--gradient-secondary)' }}>
                                <Code size={24} />
                            </span>
                            <span className="text-shimmer">Professional Certifications</span>
                        </h3>
                        <div className="timeline">
                            {trainings.map((training, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot" style={{ background: 'var(--accent-purple)' }}></div>
                                    <div className="timeline-date text-terminal">{training.date}</div>
                                    <div className="timeline-content card glass-card hover-lift" style={{ marginTop: '8px' }}>
                                        <h3>{training.title}</h3>
                                        <h4 className="text-gradient">{training.provider}</h4>
                                        <p>{training.description}</p>
                                        {training.skills && (
                                            <div className="cert-skills-mini" style={{ marginTop: '12px' }}>
                                                {training.skills.map((skill, idx) => (
                                                    <span key={idx} className="skill-tag-mini">{skill}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
