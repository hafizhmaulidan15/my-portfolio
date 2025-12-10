const Experience = () => {
    const experiences = [
        {
            title: 'Front End Developer',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Kedung Jaya, Tanah Sareal, KOTA BOGOR, JAWA BARAT',
            date: 'September 2025 - December 2025',
            description: 'Developing and maintaining front-end web applications with modern technologies and best practices.',
            type: 'freelance'
        },
        {
            title: 'Internet of Things Engineer Intern',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Kedung Jaya, Tanah Sareal, KOTA BOGOR, JAWA BARAT',
            date: 'August 2024 - November 2024',
            description: 'Developed IoT solutions including embedded systems, sensor integration, and real-time monitoring dashboards.',
            type: 'internship'
        },
        {
            title: 'Front End Intern',
            company: 'PT. Matra Kreasi Mandiri',
            location: 'Kedung Jaya, Tanah Sareal, KOTA BOGOR, JAWA BARAT',
            date: 'August 2024 - November 2024',
            description: 'Built responsive web interfaces and collaborated with the development team on various projects.',
            type: 'internship'
        },
    ];

    const trainings = [
        {
            title: 'Data Science & Analytics',
            provider: 'HP Life',
            date: 'September 2025 - September 2028',
            description: 'Comprehensive training covering data science practices, methodologies, and analytical tools.',
        },
        {
            title: 'Data Visualization',
            provider: 'Dicoding',
            date: 'May 2025 - May 2028',
            description: 'Python programming with industry standards including data processing, visualization, and machine learning basics.',
        },
        {
            title: 'Python Programming',
            provider: 'SkillVul',
            date: 'August 2024 - January 2025',
            description: 'Advanced Python programming covering OOP, data structures, algorithms, and automation.',
        },
        {
            title: 'Network Professional',
            provider: 'Cisco Academy',
            date: 'June 2022 - June 2024',
            description: 'CCNA-level networking covering configuration, troubleshooting, routing, switching, WLAN, and security.',
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                    gap: '60px',
                    marginTop: '48px'
                }}>
                    {/* Work Experience */}
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '32px',
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
                            }}>💼</span>
                            Work Experience
                        </h3>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-date">{exp.date}</div>
                                    <div className="timeline-content card" style={{ marginTop: '8px' }}>
                                        <h3>{exp.title}</h3>
                                        <h4>{exp.company}</h4>
                                        <p>{exp.description}</p>
                                        <span className={`tag ${exp.type === 'internship' ? 'purple' : exp.type === 'freelance' ? 'green' : ''}`} style={{ marginTop: '12px' }}>
                                            {exp.type === 'internship' ? 'Internship' : exp.type === 'freelance' ? 'Freelance' : 'Full-time'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Training & Courses */}
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '32px',
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
                            }}>📚</span>
                            Training & Courses
                        </h3>
                        <div className="timeline">
                            {trainings.map((training, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot" style={{ background: 'var(--accent-purple)' }}></div>
                                    <div className="timeline-date">{training.date}</div>
                                    <div className="timeline-content card" style={{ marginTop: '8px' }}>
                                        <h3>{training.title}</h3>
                                        <h4>{training.provider}</h4>
                                        <p>{training.description}</p>
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
