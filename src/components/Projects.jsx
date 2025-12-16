import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Cpu, Droplets, Activity, Sprout, Lightbulb, Globe, Code, BarChart3, Database, TrendingUp } from 'lucide-react';

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'DR.MATT Company Profile Website',
            period: 'Aug 2024 - Nov 2024',
            association: 'PT Matra Kreasi Mandiri (drmatt.id)',
            icon: <Globe size={28} />,
            role: 'Frontend Developer',
            roleType: 'developer',
            category: 'web',
            description: 'Developed a responsive and user-friendly company profile website for DR.MATT, a Smart Learning & Smart Solution platform in the field of Industry 4.0 technology.',
            responsibilities: [
                'Developed responsive and user-friendly company profile website, ensuring consistency with brand visual identity and design direction',
                'Collaborated with design and content teams to refine layout, improve UI/UX flow, and deliver engaging user experience',
                'Implemented front-end features and optimized page performance using modern web technologies',
                'Troubleshot and resolved UI issues during development to maintain smooth functionality',
                'Participated in project discussions with management, contributing ideas and ensuring alignment with business needs'
            ],
            impact: 'This project strengthened my technical skills and teamwork through direct involvement in a real-world development environment, building a website for an Industry 4.0 technology education platform.',
            skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'Visual Studio Code', 'Testing', 'Responsive Design', 'UI/UX'],
            color: 'cyan',
            link: 'https://drmatt.id/'
        },
        {
            id: 2,
            title: 'Nano Robotic Education Platform Website',
            period: 'Aug 2024 - Nov 2024',
            association: 'PT Matra Kreasi Mandiri (nanorobotic.co.id)',
            icon: <Code size={28} />,
            role: 'Frontend Developer',
            roleType: 'developer',
            category: 'web',
            description: 'Developed a website for Nano Robotic, a Robotic & Coding education platform for children aged 3-15 years with the tagline "Smart Way in Technology for Brighter Future".',
            responsibilities: [
                'Developed engaging educational website for Robotic and Coding learning platform',
                'Ensured responsive and optimized website across various devices to meet the needs of parents and children',
                'Collaborated with design team to create fun, colorful, and engaging interface for child audience',
                'Implemented layout to display various class types (Online, Hybrid, Offline) and curriculum information',
                'Optimized page performance for fast loading and smooth user experience'
            ],
            impact: 'This project provided experience in building educational websites targeting children and parents, with focus on attractive and informative design.',
            skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'Visual Studio Code', 'Testing', 'Responsive Design', 'UI/UX'],
            color: 'purple',
            link: 'https://nanorobotic.co.id/'
        },
        {
            id: 3,
            title: 'Advanced Banana Ripeness Detection System',
            period: 'Oct 2024 - Nov 2024',
            association: 'UIN Jakarta',
            icon: <Cpu size={28} />,
            role: 'IoT Developer & Team Member',
            roleType: 'team',
            category: 'iot',
            description: 'IoT-based banana ripeness detection system designed to support agricultural innovation through smart monitoring and sensor integration.',
            responsibilities: [
                'Collaborated closely with team members to plan, design, and implement the system using Agile principles',
                'Utilized TCS34725 color sensor to accurately classify banana ripeness based on RGB values',
                'Built real-time monitoring system using ESP32, integrated with Arduino IoT Cloud for data tracking and visualization',
                'Enhanced usability by integrating J5019 module and LCD display for direct ripeness status display'
            ],
            impact: 'This project demonstrated my ability to work collaboratively in a team, apply IoT and sensor technology, and manage projects from concept to deployment with a client-focused approach.',
            skills: ['Internet of Things (IoT)', 'Arduino IDE', 'ESP32', 'Arduino Cloud', 'Embedded Systems', 'Hardware', 'C++', 'Testing', 'Fritzing', 'Agile Project Management'],
            color: 'green'
        },
        {
            id: 4,
            title: 'Flood Detection and Monitoring System',
            period: 'Nov 2024 - Nov 2024',
            association: 'PT Matra Kreasi Mandiri',
            icon: <Droplets size={28} />,
            role: 'IoT Developer',
            roleType: 'individual',
            category: 'iot',
            description: 'Flood detection system designed to monitor water level and flow rate with real-time alerts.',
            responsibilities: [
                'Integrated ultrasonic sensor for water level measurement and YF-S201 sensor for flow rate tracking',
                'Configured system to send data to Arduino IoT Cloud every 30 seconds, enabling real-time monitoring',
                'Implemented four alert levels based on water height with different LED indicators and buzzers',
                'Developed intuitive notification system to support proactive flood management'
            ],
            impact: 'This project demonstrated my expertise in IoT system integration, real-time data management, and automation for environmental monitoring solutions.',
            skills: ['Internet of Things (IoT)', 'Arduino IDE', 'Project Management', 'Hardware', 'Analytical Chemistry', 'C++', 'Teamwork', 'Testing', 'Automation', 'Agile Project Management'],
            color: 'blue'
        },
        {
            id: 5,
            title: 'Water Level Detection and Monitoring System',
            period: 'Aug 2024 - Sep 2024',
            association: 'Telkom University',
            icon: <Activity size={28} />,
            role: 'Project Lead & IoT Developer',
            roleType: 'lead',
            category: 'iot',
            description: 'Designed, developed, and managed a real-time water level monitoring system for practical needs in automation and environmental monitoring.',
            responsibilities: [
                'Led full product lifecycle using Agile methodology, from planning to deployment',
                'Managed project tasks, timelines, and cross-stage development collaboration',
                'Utilized three ultrasonic sensors and ESP32 for accurate water level measurement',
                'Developed Telegram bot for instant water level change notifications',
                'Implemented relay control system to automate equipment response based on sensor data'
            ],
            impact: 'This project demonstrated my capabilities in IoT development, real-time systems, and cross-functional project management, combining technical execution with strategic thinking.',
            skills: ['Internet of Things (IoT)', 'Arduino IDE', 'ESP32', 'Project Management', 'Arduino Cloud', 'Embedded Systems', 'Hardware', 'C++', 'Teamwork', 'Testing', 'Fritzing', 'Automation', 'Agile Project Management'],
            color: 'pink'
        },
        {
            id: 6,
            title: 'Admigre - Automated Microgreen Monitoring System',
            period: 'Jan 2024 - Jun 2024',
            association: 'Institut Pertanian Bogor (IPB)',
            icon: <Sprout size={28} />,
            role: 'System Analyst & Web Developer',
            roleType: 'analyst',
            category: 'iot',
            description: 'Contributed as system analyst and web developer in a team-based project to automate microgreen cultivation using IoT technology.',
            responsibilities: [
                'Analyzed user requirements and defined key performance indicators (temperature, humidity, soil moisture) for real-time monitoring',
                'Designed intuitive dashboard and process flow to support data-driven decision making',
                'Collaborated with back-end and hardware teams to ensure seamless IoT data integration into web interface',
                'Implemented front-end best practices using HTML, CSS, and JavaScript to optimize performance and usability'
            ],
            impact: 'This project strengthened my analytical thinking, documentation, and collaboration skills—bridging technical development with business process improvement in an IoT environment.',
            skills: ['Internet of Things (IoT)', 'Analytical Skills', 'Web Development', 'Critical Thinking', 'Embedded Systems', 'Hardware', 'Teamwork', 'Testing', 'Automation', 'Agile Project Management', 'Collaborative Problem Solving'],
            color: 'cyan'
        },
        {
            id: 7,
            title: 'Curug Cikoneng Logo Decoration Project',
            period: 'Jul 2023 - Oct 2023',
            association: 'Curug Cikoneng Tourist Attraction Bogor',
            icon: <Lightbulb size={28} />,
            role: 'Web Developer & Team Member',
            roleType: 'team',
            category: 'iot',
            description: 'Contributed as part of a multidisciplinary team in designing and developing an interactive LED logo decoration system for Curug Cikoneng, integrating IoT components with web-based control.',
            responsibilities: [
                'Conducted stakeholder discussions to identify lighting automation and synchronization requirements',
                'Designed user flow diagrams and system process documentation for time-based and environment-based LED control',
                'Developed responsive web dashboard to monitor and manage lighting behavior in real-time',
                'Integrated WS2812B LEDs, DS3232 real-time clock, and DHT22 temperature sensor for adaptive display'
            ],
            impact: 'This project enhanced my ability to translate user needs into functional system design and deepened my understanding of how IoT-based visual systems can improve engagement in real installations.',
            skills: ['Internet of Things (IoT)', 'Analytical Skills', 'Project Management', 'Web Development', 'Embedded Systems', 'Hardware', 'IT Hardware Support', 'Teamwork', 'Testing', 'Automation', 'Agile Project Management', 'Collaborative Problem Solving'],
            color: 'purple'
        },
        {
            id: 8,
            title: 'Robot Pemadam Api Otomatis (Autonomous Fire-Fighting Robot)',
            period: 'Mar 2023 - Jun 2023',
            association: 'Institut Pertanian Bogor (IPB)',
            icon: <Cpu size={28} />,
            role: 'Project Lead & Developer',
            roleType: 'lead',
            category: 'iot',
            description: 'Designed and developed an autonomous fire-fighting robot based on Arduino Uno for early fire detection and response.',
            responsibilities: [
                'Designed and built autonomous fire-fighting robot using Arduino Uno for automatic fire detection and suppression',
                'Implemented navigation system using ultrasonic sensors and motor control with L298N driver, enabling precise autonomous movement',
                'Integrated flame sensors for fire detection and automated water pump system for fire suppression',
                'Developed innovative solution effective in improving safety and security against potential fire hazards',
                'Successfully completed final project with full functionality as proof of deep understanding in hardware-software integration'
            ],
            impact: 'This project demonstrated my capability in robotics development, autonomous system design, and practical problem-solving for safety applications.',
            skills: ['Arduino IDE', 'Robotic Process Automation (RPA)', 'Hardware', 'C++', 'Teamwork', 'Testing', 'Embedded Systems', 'Sensor Integration'],
            color: 'cyan'
        },
        {
            id: 9,
            title: 'IDX Stock Market Screener - 52-Week High Breakout Analysis',
            period: 'Dec 2025',
            association: 'Personal Project',
            icon: <TrendingUp size={28} />,
            role: 'Data Analyst & ML Developer',
            roleType: 'individual',
            category: 'data',
            description: 'Developed sophisticated stock market analysis system for Indonesian markets (IDX) that screens 660+ companies for "golden breakout" opportunities using 52-week high analysis combined with machine learning predictions.',
            responsibilities: [
                'Built automated stock screener to identify breakout opportunities using 52-week high analysis and volume surge detection (1.2x average)',
                'Implemented machine learning model (RandomForestClassifier) to predict price movement confidence scores',
                'Developed dynamic trading strategy calculator with automated Stop Loss and Take Profit levels based on ATR volatility',
                'Optimized performance using concurrent futures to process hundreds of stocks in real-time',
                'Created comprehensive analysis dashboard displaying VOL multiplier and BREAK percentage metrics'
            ],
            impact: 'This project demonstrated advanced data analytics and machine learning skills applied to financial markets, combining domain knowledge of trading strategies with technical implementation for actionable investment insights.',
            skills: ['Python', 'pandas', 'yfinance', 'Machine Learning', 'RandomForestClassifier', 'Financial Analytics', 'Data Analysis', 'Concurrent Programming', 'Statistical Analysis', 'Trading Strategies'],
            color: 'green',
            link: 'https://github.com/hafizhmaulidan15/pasar-saham-660-emiten-52-WEEK-HIGH-BREAKOUT'
        },
        {
            id: 10,
            title: 'PDF Toolkit - Browser-Based PDF Manipulation Tool',
            period: 'Aug 2025',
            association: 'Personal Project',
            icon: <Database size={28} />,
            role: 'Full-Stack Developer',
            roleType: 'individual',
            category: 'data',
            description: 'Created web-based toolkit for PDF manipulation that allows users to view, split, and merge PDF documents directly in the browser without external plugins or dependencies.',
            responsibilities: [
                'Developed browser-based PDF viewer using JavaScript without requiring external plugins',
                'Implemented PDF splitting functionality to divide documents into multiple files',
                'Built PDF merging feature to combine multiple documents into a single file',
                'Designed intuitive user interface using HTML and CSS for seamless user experience',
                'Optimized client-side processing for efficient PDF manipulation'
            ],
            impact: 'This project showcased ability to create practical automation tools that solve real-world document management problems, demonstrating strong JavaScript and DOM manipulation skills.',
            skills: ['JavaScript', 'HTML', 'CSS', 'PDF.js', 'DOM Manipulation', 'Client-Side Processing', 'Web Development', 'UI/UX Design', 'Automation'],
            color: 'blue',
            link: 'https://github.com/hafizhmaulidan15/PDF-Toolkit'
        },
        {
            id: 11,
            title: 'My Brownies Telaga Kahuripan - E-Commerce Platform',
            period: 'Nov 2025 - Dec 2025',
            association: 'Personal Project',
            icon: <Globe size={28} />,
            role: 'Full-Stack Developer',
            roleType: 'individual',
            category: 'web',
            description: 'Developed comprehensive e-commerce platform for premium brownies business with full CRUD admin panel, real-time database integration, and modern UI/UX design.',
            responsibilities: [
                'Built full-stack e-commerce website with customer-facing storefront and comprehensive admin panel',
                'Implemented complete CRUD operations for product management, categories, and topping customization',
                'Integrated Supabase for real-time database synchronization and Google Sign-In authentication',
                'Designed modern glassmorphism UI with responsive layouts across all device sizes',
                'Developed advanced features including image upload, dynamic pricing, and inventory management'
            ],
            impact: 'This project demonstrated full-stack development capabilities with modern tech stack, delivering a production-ready e-commerce solution with real-time features and premium design.',
            skills: ['React', 'Vite', 'Supabase', 'JavaScript', 'CSS', 'Database Design', 'Authentication', 'CRUD Operations', 'Responsive Design', 'UI/UX', 'Real-time Updates'],
            color: 'pink',
            link: 'https://github.com/hafizhmaulidan15/My-Brownies-Kahuripan'
        }
    ];

    const getRoleColor = (roleType) => {
        switch (roleType) {
            case 'lead': return 'purple';
            case 'analyst': return 'green';
            case 'individual': return '';
            case 'developer': return 'pink';
            default: return '';
        }
    };

    const getRoleLabel = (roleType) => {
        switch (roleType) {
            case 'lead': return '👑 Project Lead';
            case 'analyst': return '📊 System Analyst';
            case 'individual': return '💻 Solo Developer';
            case 'team': return '🤝 Team Member';
            case 'developer': return '🌐 Solo Developer';
            default: return '👨‍💻 Developer';
        }
    };


    const toggleProject = (id) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    // Filter projects based on active category
    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    // Category statistics
    const categoryCount = {
        all: projects.length,
        iot: projects.filter(p => p.category === 'iot').length,
        web: projects.filter(p => p.category === 'web').length,
        data: projects.filter(p => p.category === 'data').length
    };

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">
                    Showcasing my expertise across IoT Development, Web Development, and Data Analytics
                </p>

                {/* Category Filter Tabs */}
                <div className="project-category-tabs">
                    <button
                        className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveCategory('all');
                            setShowAllProjects(false);
                            setExpandedProject(null);
                        }}
                    >
                        <span className="category-icon">📚</span>
                        <span className="category-name">All Projects</span>
                        <span className="category-count">{categoryCount.all}</span>
                    </button>
                    <button
                        className={`category-tab ${activeCategory === 'iot' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveCategory('iot');
                            setShowAllProjects(false);
                            setExpandedProject(null);
                        }}
                    >
                        <span className="category-icon">⚙️</span>
                        <span className="category-name">IoT</span>
                        <span className="category-count">{categoryCount.iot}</span>
                    </button>
                    <button
                        className={`category-tab ${activeCategory === 'web' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveCategory('web');
                            setShowAllProjects(false);
                            setExpandedProject(null);
                        }}
                    >
                        <span className="category-icon">🌐</span>
                        <span className="category-name">Web Dev</span>
                        <span className="category-count">{categoryCount.web}</span>
                    </button>
                    <button
                        className={`category-tab ${activeCategory === 'data' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveCategory('data');
                            setShowAllProjects(false);
                            setExpandedProject(null);
                        }}
                    >
                        <span className="category-icon">📊</span>
                        <span className="category-name">Data Analytics</span>
                        <span className="category-count">{categoryCount.data}</span>
                    </button>
                </div>



                {/* Featured Projects - Top 3 */}
                <div className="projects-grid">
                    {filteredProjects.slice(0, 3).map((project) => (
                        <div
                            key={project.id}
                            className={`project-card card ${expandedProject === project.id ? 'expanded' : ''}`}
                        >
                            {/* Project Header */}
                            <div className="project-header">
                                <div className={`project-icon ${project.color}`}>
                                    {project.icon}
                                </div>
                                <div className="project-header-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-meta">
                                        <span className="project-period">{project.period}</span>
                                        <span className="project-association">📍 {project.association}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Role Badge */}
                            <div className="project-role-section">
                                <span className={`tag ${getRoleColor(project.roleType)}`}>
                                    {getRoleLabel(project.roleType)}
                                </span>
                                <span className="project-role-title">{project.role}</span>
                            </div>

                            {/* Description */}
                            <p className="project-description">{project.description}</p>

                            {/* Expand/Collapse Button */}
                            <button
                                className="project-expand-btn"
                                onClick={() => toggleProject(project.id)}
                            >
                                {expandedProject === project.id ? (
                                    <>
                                        <span>Hide Details</span>
                                        <ChevronUp size={18} />
                                    </>
                                ) : (
                                    <>
                                        <span>View Details</span>
                                        <ChevronDown size={18} />
                                    </>
                                )}
                            </button>

                            {/* Expanded Content */}
                            {expandedProject === project.id && (
                                <div className="project-details">
                                    {/* Responsibilities */}
                                    <div className="project-responsibilities">
                                        <h4>🎯 Key Responsibilities & Achievements</h4>
                                        <ul>
                                            {project.responsibilities.map((resp, index) => (
                                                <li key={index}>{resp}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Impact */}
                                    <div className="project-impact">
                                        <h4>💡 Impact & Learning</h4>
                                        <p>{project.impact}</p>
                                    </div>

                                    {/* Skills */}
                                    <div className="project-skills">
                                        <h4>🛠️ Skills & Technologies</h4>
                                        <div className="project-skills-list">
                                            {project.skills.map((skill, index) => (
                                                <span key={index} className={`tag ${index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'pink' : ''}`}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Other Projects Section */}
                {filteredProjects.length > 3 && (
                    <div className="other-projects-section" style={{ marginTop: '48px' }}>
                        <button
                            className="other-projects-toggle"
                            onClick={() => setShowAllProjects(!showAllProjects)}
                        >
                            <span className="text-gradient" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                                {showAllProjects ? '▲ Hide Other Projects' : `▼ Other Projects (${filteredProjects.length - 3})`}
                            </span>
                        </button>

                        {showAllProjects && (
                            <div className="projects-grid" style={{ marginTop: '32px', animation: 'slideDown 0.3s ease-out' }}>
                                {filteredProjects.slice(3).map((project) => (
                                    <div
                                        key={project.id}
                                        className={`project-card card ${expandedProject === project.id ? 'expanded' : ''}`}
                                    >
                                        {/* Project Header */}
                                        <div className="project-header">
                                            <div className={`project-icon ${project.color}`}>
                                                {project.icon}
                                            </div>
                                            <div className="project-header-content">
                                                <h3 className="project-title">{project.title}</h3>
                                                <div className="project-meta">
                                                    <span className="project-period">{project.period}</span>
                                                    <span className="project-association">📍 {project.association}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Role Badge */}
                                        <div className="project-role-section">
                                            <span className={`tag ${getRoleColor(project.roleType)}`}>
                                                {getRoleLabel(project.roleType)}
                                            </span>
                                            <span className="project-role-title">{project.role}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="project-description">{project.description}</p>

                                        {/* Expand/Collapse Button */}
                                        <button
                                            className="project-expand-btn"
                                            onClick={() => toggleProject(project.id)}
                                        >
                                            {expandedProject === project.id ? (
                                                <>
                                                    <span>Hide Details</span>
                                                    <ChevronUp size={18} />
                                                </>
                                            ) : (
                                                <>
                                                    <span>View Details</span>
                                                    <ChevronDown size={18} />
                                                </>
                                            )}
                                        </button>

                                        {/* Expanded Content */}
                                        {expandedProject === project.id && (
                                            <div className="project-details">
                                                {/* Responsibilities */}
                                                <div className="project-responsibilities">
                                                    <h4>🎯 Key Responsibilities & Achievements</h4>
                                                    <ul>
                                                        {project.responsibilities.map((resp, index) => (
                                                            <li key={index}>{resp}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Impact */}
                                                <div className="project-impact">
                                                    <h4>💡 Impact & Learning</h4>
                                                    <p>{project.impact}</p>
                                                </div>

                                                {/* Skills */}
                                                <div className="project-skills">
                                                    <h4>🛠️ Skills & Technologies</h4>
                                                    <div className="project-skills-list">
                                                        {project.skills.map((skill, index) => (
                                                            <span key={index} className={`tag ${index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'pink' : ''}`}>
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
