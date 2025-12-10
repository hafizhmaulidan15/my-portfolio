import {
    Cpu, Database, Wifi, Zap, Code, BarChart3,
    Network, Settings, Brain, Globe, Wrench, Users
} from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: 'Python', icon: <Code size={28} />, color: 'cyan' },
        { name: 'C/C++', icon: <Cpu size={28} />, color: 'purple' },
        { name: 'IoT', icon: <Wifi size={28} />, color: 'pink' },
        { name: 'Data Analysis', icon: <BarChart3 size={28} />, color: 'green' },
        { name: 'Machine Learning', icon: <Brain size={28} />, color: 'cyan' },
        { name: 'Data Visualization', icon: <Database size={28} />, color: 'purple' },
        { name: 'Networking', icon: <Network size={28} />, color: 'pink' },
        { name: 'Automation', icon: <Settings size={28} />, color: 'green' },
        { name: 'Electrical Eng.', icon: <Zap size={28} />, color: 'cyan' },
        { name: 'Hardware Eng.', icon: <Wrench size={28} />, color: 'purple' },
        { name: 'English', icon: <Globe size={28} />, color: 'pink' },
        { name: 'Agile PM', icon: <Users size={28} />, color: 'green' },
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">
                    Technologies and tools I work with to bring ideas to life
                </p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-item card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`skill-icon`}>
                                {skill.icon}
                            </div>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
