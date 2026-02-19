import { motion } from "framer-motion";
import { Code2, Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {

    const projects = [
        {
            title: "Portfolio Website",
            description:
                "Modern single-page portfolio built with React, Tailwind CSS, and Framer Motion to showcase frontend engineering and UI/UX skills. Features smooth scroll navigation, scroll-triggered animations, and a polished animated loading experience. Includes a canvas-based particle background, reusable component architecture, and accessibility-focused markup. Fully responsive and optimized for performance across mobile and desktop devices.",
            tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
            live: "https://portfolio-manishkr.vercel.app/",
            previewImage: "/portfolio.png"
        },

        {
            title: "E-Commerce Website",
            description:
                "Designed and developed a complete e-commerce platform with dynamic product cards, category-wise browsing, discount product sections, and detailed product pages. Built core user flows including login, user profile, cart management, and checkout process. Implemented interactive UI components and optimized layouts for usability and responsiveness using HTML, CSS, and JavaScript.",
            tech: ["JavaScript", "HTML", "CSS"],
            live: "https://gramindukan.in",
            previewImage: "/ecommerce.png"
        },

        {
            title: "GJU Hisar Website & Admin Panel",
            description:
                "University website and admin portal developed using ASP.NET MVC and HTML/CSS with role-based access control.",
            tech: ["ASP.NET MVC", "JavaScript", "HTML", "CSS"],
            live: "https://gjust.ac.in",
            previewImage: "/gjust_website.png"
        },

        {
            title: "Memory Card Game",
            description:
                "Built an interactive Memory Card Game using HTML, CSS, and JavaScript with smooth card-flip animations and real-time score updates. The game includes two difficulty levels, where Level 1 contains 6 card pairs and Level 2 increases complexity with 8 card pairs. Designed responsive UI and implemented core game logic for matching, scoring, and progression.",
            tech: ["JavaScript", "HTML", "CSS"],
            github: "https://github.com/ManishKumar2002/Memory-Game",
            previewImage: "/memory-game.png"
        },

        {
            title: "Tic Tac Toe Game",
            description:
                "A classic Tic-Tac-Toe game built with React that includes advanced features like move history, winning square highlighting, and sortable move lists.",
            tech: ["React", "JavaScript", "HTML", "CSS"],
            github: "https://github.com/ManishKumar2002/Tic-Tac-Toe_Game",
            previewImage: "/tic-tac-toe.png"
        },

    ];

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl glass p-8 md:p-12 border border-white/5"
                >
                    <h2 className="section-title text-center">Projects</h2>

                    <div className="mt-12 space-y-6">
                        {projects.map((project, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ delay: i * 0.1 }}
                                className="group rounded-xl bg-white/5 hover:bg-white/10 transition-all p-6 flex gap-6"
                            >
                                {/* PREVIEW IMAGE + ICON OVERLAY */}
                                <div className="relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 group">

                                    {/* Preview Image (hidden → visible on hover) */}
                                    <img
                                        src={project.previewImage}
                                        alt={project.title}
                                        className="
                                                absolute inset-0 w-full h-full object-contain
                                                opacity-0 scale-110
                                                transition-all duration-300 ease-out
                                                group-hover:opacity-100 group-hover:scale-100
                                            "
                                    />

                                    {/* Icon Overlay */}
                                    <div
                                        className="
                                                absolute inset-0 flex items-center justify-center
                                                transition-all duration-300
                                                group-hover:bg-black/30
                                            "
                                    >
                                        <Code2
                                            size={26}
                                            className="text-white opacity-90 drop-shadow-lg"
                                        />
                                    </div>
                                </div>



                                {/* CONTENT */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold">{project.title}</h3>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* TECH STACK */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 rounded text-xs bg-indigo-500/20 text-indigo-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* ACTIONS */}
                                    <div className="flex items-center gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300"
                                            >
                                                <Github size={16} />
                                                View on GitHub
                                            </a>
                                        )}

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300"
                                            >
                                                <ExternalLink size={16} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
