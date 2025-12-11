import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Cpu, Droplets, Activity, Sprout, Lightbulb, Globe, Code } from 'lucide-react';

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'DR.MATT Company Profile Website',
            period: 'Aug 2024 - Nov 2024',
            association: 'PT Matra Kreasi Mandiri (drmatt.id)',
            icon: <Globe size={28} />,
            role: 'Frontend Developer',
            roleType: 'developer',
            description: 'Mengembangkan website company profile yang responsif dan user-friendly untuk DR.MATT, platform Smart Learning & Smart Solution di bidang teknologi industri 4.0.',
            responsibilities: [
                'Mengembangkan website company profile yang responsif dan user-friendly, memastikan konsistensi dengan visual identity dan design direction brand',
                'Berkolaborasi dengan tim design dan content untuk menyempurnakan layout, meningkatkan UI/UX flow, dan memberikan user experience yang engaging',
                'Mengimplementasikan fitur front-end dan mengoptimalkan performa halaman menggunakan teknologi web modern',
                'Troubleshoot dan menyelesaikan isu UI selama development untuk menjaga kelancaran fungsionalitas',
                'Berpartisipasi dalam diskusi proyek dengan manajemen, berkontribusi ide dan memastikan alignment dengan kebutuhan bisnis'
            ],
            impact: 'Proyek ini memperkuat kemampuan teknis dan teamwork saya melalui keterlibatan langsung dalam lingkungan development real-world, membangun website untuk platform edukasi teknologi industri 4.0.',
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
            description: 'Mengembangkan website untuk Nano Robotic, platform edukasi Robotic & Coding untuk anak usia 3-15 tahun dengan tagline "Smart Way in Technology for Brighter Future".',
            responsibilities: [
                'Mengembangkan website edukatif yang menarik untuk platform pembelajaran Robotic dan Coding',
                'Memastikan website responsif dan optimal di berbagai device untuk memenuhi kebutuhan orang tua dan anak',
                'Berkolaborasi dengan tim design untuk menciptakan tampilan yang fun, colorful, dan engaging untuk target audience anak-anak',
                'Mengimplementasikan layout untuk menampilkan berbagai kelas (Online, Hybrid, Offline) dan informasi kurikulum',
                'Optimasi performa halaman untuk loading yang cepat dan user experience yang smooth'
            ],
            impact: 'Proyek ini memberikan pengalaman dalam membangun website edukatif yang target audience-nya adalah anak-anak dan orang tua, dengan fokus pada desain yang menarik dan informatif.',
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
            description: 'Sistem deteksi kematangan pisang berbasis IoT yang dirancang untuk mendukung inovasi pertanian melalui monitoring cerdas dan integrasi sensor.',
            responsibilities: [
                'Berkolaborasi erat dengan rekan tim untuk merencanakan, mendesain, dan mengimplementasikan sistem menggunakan prinsip Agile',
                'Menggunakan sensor warna TCS34725 untuk mengklasifikasikan kematangan pisang berdasarkan nilai RGB secara akurat',
                'Membangun sistem monitoring real-time menggunakan ESP32, terintegrasi dengan Arduino IoT Cloud untuk tracking dan visualisasi data',
                'Meningkatkan usability dengan mengintegrasikan modul J5019 dan display LCD untuk menampilkan status kematangan secara langsung'
            ],
            impact: 'Proyek ini menunjukkan kemampuan saya dalam bekerja secara kolaboratif dalam tim, menerapkan teknologi IoT dan sensor, serta mengelola proyek dari konsep hingga deployment dengan pendekatan client-focused.',
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
            description: 'Sistem deteksi banjir yang dirancang untuk memonitor ketinggian air dan laju aliran dengan alert real-time.',
            responsibilities: [
                'Mengintegrasikan sensor ultrasonik untuk pengukuran ketinggian air dan sensor YF-S201 untuk tracking laju aliran',
                'Mengkonfigurasi sistem untuk mengirim data ke Arduino IoT Cloud setiap 30 detik, memungkinkan monitoring real-time',
                'Mengimplementasikan empat level alert berdasarkan ketinggian air dengan indikator LED dan buzzer yang berbeda',
                'Mengembangkan sistem notifikasi intuitif untuk membantu manajemen banjir proaktif'
            ],
            impact: 'Proyek ini menunjukkan keahlian saya dalam integrasi sistem IoT, manajemen data real-time, dan otomasi untuk solusi monitoring lingkungan.',
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
            description: 'Merancang, mengembangkan, dan mengelola sistem monitoring ketinggian air real-time untuk kebutuhan praktis dalam otomasi dan monitoring lingkungan.',
            responsibilities: [
                'Memimpin full product lifecycle menggunakan metodologi Agile, dari perencanaan hingga deployment',
                'Mengelola tugas proyek, timeline, dan kolaborasi antar tahap development',
                'Menggunakan tiga sensor ultrasonik dan ESP32 untuk pengukuran ketinggian air yang akurat',
                'Mengembangkan Telegram bot untuk notifikasi instan perubahan ketinggian air',
                'Mengimplementasikan sistem kontrol relay untuk mengotomasi respons peralatan berdasarkan data sensor'
            ],
            impact: 'Proyek ini menunjukkan kapabilitas saya dalam IoT development, sistem real-time, dan manajemen proyek cross-functional, menggabungkan eksekusi teknis dengan pemikiran strategis.',
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
            description: 'Berkontribusi sebagai system analyst dan web developer dalam proyek berbasis tim untuk mengotomasi budidaya microgreen menggunakan teknologi IoT.',
            responsibilities: [
                'Menganalisis kebutuhan pengguna dan mendefinisikan key performance indicators (suhu, kelembaban, kelembaban tanah) untuk monitoring real-time',
                'Mendesain dashboard intuitif dan process flow untuk mendukung pengambilan keputusan berbasis data',
                'Berkolaborasi dengan tim back-end dan hardware untuk memastikan integrasi seamless data IoT ke web interface',
                'Mengimplementasikan best practices front-end menggunakan HTML, CSS, dan JavaScript untuk mengoptimalkan performa dan usability'
            ],
            impact: 'Proyek ini memperkuat kemampuan analytical thinking, dokumentasi, dan kolaborasi saya—menjembatani pengembangan teknis dengan peningkatan proses bisnis dalam lingkungan IoT.',
            skills: ['Internet of Things (IoT)', 'Analytical Skills', 'Web Development', 'Critical Thinking', 'Embedded Systems', 'Hardware', 'Teamwork', 'Testing', 'Automation', 'Agile Project Management', 'Collaborative Problem Solving'],
            color: 'cyan'
        },
        {
            id: 7,
            title: 'Curug Cikoneng Logo Decoration Project',
            period: 'Jul 2023 - Oct 2023',
            association: 'Tempat Wisata Curug Cikoneng Bogor',
            icon: <Lightbulb size={28} />,
            role: 'Web Developer & Team Member',
            roleType: 'team',
            description: 'Berkontribusi sebagai bagian dari tim multidisiplin dalam merancang dan mengembangkan sistem dekorasi logo LED interaktif untuk Curug Cikoneng, mengintegrasikan komponen IoT dengan kontrol berbasis web.',
            responsibilities: [
                'Melakukan diskusi stakeholder untuk mengidentifikasi kebutuhan otomasi pencahayaan dan sinkronisasi',
                'Mendesain user flow diagram dan dokumentasi proses sistem untuk kontrol LED berbasis waktu dan lingkungan',
                'Mengembangkan web dashboard responsif untuk memonitor dan mengelola perilaku pencahayaan secara real-time',
                'Mengintegrasikan LED WS2812B, DS3232 real-time clock, dan sensor suhu DHT22 untuk display adaptif'
            ],
            impact: 'Proyek ini meningkatkan kemampuan saya dalam menerjemahkan kebutuhan pengguna menjadi desain sistem fungsional dan memperdalam pemahaman tentang bagaimana sistem visual berbasis IoT dapat meningkatkan engagement di instalasi nyata.',
            skills: ['Internet of Things (IoT)', 'Analytical Skills', 'Project Management', 'Web Development', 'Embedded Systems', 'Hardware', 'IT Hardware Support', 'Teamwork', 'Testing', 'Automation', 'Agile Project Management', 'Collaborative Problem Solving'],
            color: 'purple'
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

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">
                    Koleksi proyek IoT dan Web Development yang telah saya kerjakan, menampilkan peran dan dampak saya di setiap proyek
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
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
                                        <span>Sembunyikan Detail</span>
                                        <ChevronUp size={18} />
                                    </>
                                ) : (
                                    <>
                                        <span>Lihat Detail</span>
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
            </div>
        </section>
    );
};

export default Projects;
