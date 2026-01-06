import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "GJU Hisar Website & Admin Panel",
        role: "Full Stack Developer",
        description:
            "University website and admin portal developed using ASP.NET MVC and SQL Server with role-based access control and optimized database queries.",
        tech: ["ASP.NET MVC", "SQL Server", "HTML", "CSS"],
        link: null
    },
    {
        title: "Memory Card Game",
        role: "Frontend Developer",
        description:
            "Interactive JavaScript game with animations, score tracking, win conditions, and responsive layout.",
        tech: ["JavaScript", "HTML", "CSS"],
        link: null
    },
    {
        title: "E-Commerce Website",
        role: "Full Stack Developer",
        description:
            "E-commerce simulation featuring cart, checkout flow, product listing, and UI-driven interactions.",
        tech: ["JavaScript", "HTML", "CSS"],
        link: null
    }
];

export default function Projects() {
    return (
        <PageWrapper pageStyle="page-projects">
            <SEO
                title="Projects | Manish Kumar"
                description="Portfolio projects built using ASP.NET MVC, React, Angular, JavaScript, and SQL Server."
            />

            <section className="min-h-[calc(100vh-160px)] flex items-center justify-center px-4">
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="
                        max-w-5xl
                        w-full
                        glass
                        rounded-2xl
                        p-8
                        md:p-12
                        shadow-xl
                        border
                        border-white/5
                    "
                >
                    <h2 className="section-title text-center">
                        Projects
                    </h2>

                    <div className="mt-12 space-y-8">
                        {projects.map((project, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="
                                    rounded-xl
                                    bg-white/5
                                    hover:bg-white/10
                                    transition-all
                                    p-6
                                    flex
                                    gap-6
                                "
                            >
                                {/* Icon */}
                                <div className="shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <Code2 size={26} className="text-white opacity-90" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-1">
                                        {project.title}
                                    </h3>

                                    <p className="text-indigo-400 text-sm mb-3">
                                        {project.role}
                                    </p>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full text-xs bg-indigo-500/20 text-indigo-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:underline mt-4"
                                        >
                                            View Project <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </section>
        </PageWrapper>
    );
}
