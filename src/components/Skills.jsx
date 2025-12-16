import {
    Cpu, Database, Wifi, Zap, Code, BarChart3,
    Network, Settings, Brain, Globe, Wrench, Layers, Cog,
    CircuitBoard, Cloud, Terminal
} from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Core Engineering',
            skills: [
                { name: 'IoT Systems', icon: <Wifi size={28} /> },
                { name: 'Embedded Systems', icon: <Cpu size={28} /> },
                { name: 'ESP32 & Arduino', icon: <CircuitBoard size={28} /> },
                { name: 'Electronics & Hardware', icon: <Layers size={28} /> },
                { name: 'Sensor Integration', icon: <Zap size={28} /> },
                { name: 'Automation', icon: <Settings size={28} /> },
            ]
        },
        {
            category: 'Programming & Data',
            skills: [
                { name: 'Python', icon: <Code size={28} /> },
                { name: 'C/C++', icon: <Cog size={28} /> },
                { name: 'JavaScript', icon: <Terminal size={28} /> },
                { name: 'Data Analysis', icon: <BarChart3 size={28} /> },
                { name: 'Machine Learning', icon: <Brain size={28} /> },
                { name: 'Data Visualization', icon: <Database size={28} /> },
            ]
        },
        {
            category: 'Web & Tools',
            skills: [
                { name: 'Web Development', icon: <Globe size={28} /> },
                { name: 'HTML/CSS', icon: <Code size={28} /> },
                { name: 'React', icon: <Cog size={28} /> },
                { name: 'Networking', icon: <Network size={28} /> },
                { name: 'Arduino Cloud', icon: <Cloud size={28} /> },
                { name: 'Agile PM', icon: <Wrench size={28} /> },
            ]
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">
                    Technologies and tools I work with to bring ideas to life
                </p>

                <div className="skills-categories">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex} className="skill-category">
                            <h3 className="skill-category-title">
                                <span className="category-border"></span>
                                {category.category}
                            </h3>
                            <div className="skill-category-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="skill-item-categorized glass-card hover-lift"
                                    >
                                        <div className="skill-icon-categorized">
                                            {skill.icon}
                                        </div>
                                        <span className="skill-name-categorized">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
