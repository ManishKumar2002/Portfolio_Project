import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Briefcase, GraduationCap, Award, Menu, X, ChevronDown } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xl font-bold gradient-text"
                        >
                            MK
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-4 py-2 rounded-lg transition-all ${activeSection === item.id
                                        ? 'bg-indigo-500/20 text-indigo-400'
                                        : 'hover:bg-white/5 text-gray-300'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-white/5"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${activeSection === item.id
                                        ? 'bg-indigo-500/20 text-indigo-400'
                                        : 'hover:bg-white/5 text-gray-300'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <motion.div
                    style={{ opacity, scale }}
                    className="relative z-10 text-center px-4"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold">
                            MK
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-4"
                    >
                        Hi, I'm <span className="gradient-text">Manish Kumar</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-8"
                    >
                        Software Developer | Full Stack Engineer
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        <a href="https://github.com/ManishKumar2002" target="_blank" rel="noopener noreferrer" className="glass px-6 py-3 rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                            <Github size={20} />
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/manishk10" target="_blank" rel="noopener noreferrer" className="glass px-6 py-3 rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                        <a href="mailto:manish10akbr@gmail.com" className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center gap-2">
                            <Mail size={20} />
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ChevronDown size={32} className="mx-auto text-gray-500" />
                    </motion.div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold mb-4 gradient-text">Who I Am</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Software Developer with 2+ years of hands-on experience in building scalable web applications using .NET, Angular, and React. I'm passionate about crafting clean, efficient code and collaborating on innovative software solutions.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Proficient in C#, TypeScript, JavaScript, and SQL Server, with strong expertise in API integration and UI design. I thrive in agile environments and enjoy solving complex problems through elegant solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold mb-4 gradient-text">Quick Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-indigo-400 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="font-semibold">Location</p>
                                        <p className="text-gray-400">Hisar, Haryana, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="text-indigo-400 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <p className="text-gray-400">+91 70821 60126</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="text-indigo-400 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-gray-400">manish10akbr@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-4 bg-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl hover:bg-white/10 transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Briefcase size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-1">Associate Software Developer</h3>
                                    <p className="text-indigo-400 mb-2">KMA Technoware Private Limited</p>
                                    <p className="text-gray-400 text-sm mb-4">Aug 2023 – Present</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-indigo-400">▪</span>
                                            Developed and maintained applications using .NET and Angular, enhancing performance and scalability
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-indigo-400">▪</span>
                                            Designed and consumed APIs for data integration between modules
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-indigo-400">▪</span>
                                            Optimized SQL Server queries, reducing data retrieval time
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-indigo-400">▪</span>
                                            Collaborated with team to ensure seamless delivery
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl hover:bg-white/10 transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Code2 size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-1">Full Stack Intern</h3>
                                    <p className="text-purple-400 mb-2">High Radius Technologies</p>
                                    <p className="text-gray-400 text-sm mb-4">Jan 2022 – Apr 2022</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="text-purple-400">▪</span>
                                            Built responsive UI components in React and integrated with backend APIs
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400">▪</span>
                                            Implemented state management and reusable components to improve maintainability
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-400">▪</span>
                                            Worked in an agile environment with version control using Git
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'GJU Hisar Website & Admin Panel',
                                role: 'Full Stack Developer',
                                description: 'Developed university website and portal using ASP.NET MVC, SQL Server, and HTML/CSS. Implemented role-based access control and optimized database performance.',
                                tech: ['ASP.NET MVC', 'SQL Server', 'HTML/CSS'],
                                gradient: 'from-blue-500 to-cyan-500'
                            },
                            {
                                title: 'Memory Game',
                                role: 'Frontend Developer',
                                description: 'Developed an interactive card-matching game with score tracking using JavaScript. Implemented flip animations, win conditions, and responsive design.',
                                tech: ['JavaScript', 'HTML', 'CSS'],
                                gradient: 'from-purple-500 to-pink-500'
                            },
                            {
                                title: 'E-Commerce Website',
                                role: 'Full Stack Developer',
                                description: 'Built a responsive e-commerce simulation with cart, checkout, and product rating features. Designed UI and integrated mock payment processing.',
                                tech: ['JavaScript', 'CSS', 'HTML'],
                                gradient: 'from-orange-500 to-red-500'
                            }
                        ].map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group"
                            >
                                <div className={`w-full h-40 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                                    <Code2 size={48} className="text-white opacity-80" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-indigo-400 mb-3">{project.role}</p>
                                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 bg-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { category: 'Languages', skills: ['C#', 'JavaScript', 'TypeScript', 'Python'], icon: Code2 },
                            { category: 'Frontend', skills: ['Angular', 'React', 'HTML/CSS', 'Bootstrap'], icon: Code2 },
                            { category: 'Backend', skills: ['ASP.NET MVC', 'Web API'], icon: Code2 },
                            { category: 'Database', skills: ['SQL Server', 'SQL'], icon: Code2 },
                            { category: 'Tools', skills: ['Git', 'Visual Studio', 'VS Code', 'Postman', 'SSMS'], icon: Code2 },
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <category.icon size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold">{category.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {[
                            {
                                degree: 'B.E - CSE',
                                institution: 'Chandigarh University, Mohali, Punjab',
                                year: '2023',
                                grade: '7.38 CGPA'
                            },
                            {
                                degree: '12th (CBSE)',
                                institution: 'Kendriya Vidyalaya, Hisar Cantt',
                                year: '2019',
                                grade: '78%'
                            }
                        ].map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                        <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                                        <div className="flex gap-4 text-sm">
                                            <span className="text-indigo-400">{edu.year}</span>
                                            <span className="text-gray-300">{edu.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Frontend Development using Angular',
                                'Dot Net Full Stack Foundation',
                                'Programming with Python Training',
                                'Using Databases with Python',
                                'C++ Programming Certification'
                            ].map((cert, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                                    <span className="text-gray-300">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-white/5">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6" />
                        <p className="text-gray-400 text-lg">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { icon: Mail, label: 'Email', value: 'manish10akbr@gmail.com', link: 'mailto:manish10akbr@gmail.com' },
                            { icon: Phone, label: 'Phone', value: '+91 70821 60126', link: 'tel:+917082160126' },
                            { icon: MapPin, label: 'Location', value: 'Hisar, Haryana, India', link: null }
                        ].map((contact, index) => (
                            <motion.a
                                key={index}
                                href={contact.link || '#'}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`glass p-6 rounded-2xl text-center hover:bg-white/10 transition-all ${!contact.link && 'pointer-events-none'}`}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <contact.icon size={24} />
                                </div>
                                <h3 className="font-semibold mb-2">{contact.label}</h3>
                                <p className="text-gray-400 text-sm">{contact.value}</p>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <a
                            href="https://github.com/ManishKumar2002"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass px-8 py-4 rounded-full hover:bg-white/10 transition-all flex items-center gap-3 group"
                        >
                            <Github size={24} className="group-hover:scale-110 transition-transform" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/manishk10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass px-8 py-4 rounded-full hover:bg-white/10 transition-all flex items-center gap-3 group"
                        >
                            <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="mailto:manish10akbr@gmail.com"
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center gap-3 group"
                        >
                            <Mail size={24} className="group-hover:scale-110 transition-transform" />
                            <span>Send Message</span>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Manish Kumar. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Portfolio;