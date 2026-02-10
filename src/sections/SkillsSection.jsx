import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function SkillsSection() {
    const skills = [
        {
            category: "Languages",
            items: ["C#", "JavaScript", "TypeScript"]
        },
        {
            category: "Frontend",
            items: ["React", "Angular", "HTML", "CSS", "Bootstrap"]
        },
        {
            category: "Backend",
            items: ["ASP.NET MVC", "ASP.NET Web API"]
        },
        {
            category: "Database",
            items: ["SQL Server", "SQL"]
        },
        {
            category: "Tools",
            items: ["Git", "VS Code", "Visual Studio", "Postman", "SSMS"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="rounded-2xl glass p-8 md:p-12 shadow-xl border border-white/5"
                >
                    <h2 className="section-title text-center">Technical Skills</h2>

                    <motion.div
                        className="mt-12 space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {skills.map((group, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="rounded-xl bg-white/5 hover:bg-white/10 transition-all p-6 flex gap-5"
                            >
                                {/* Icon */}
                                <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <Code2 size={20} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold mb-3">{group.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((skill, idx) => (
                                            <motion.span
                                                key={idx}
                                                whileHover={{ scale: 1.1 }}
                                                className="px-3 py-1 rounded-full text-sm bg-indigo-500/20 text-indigo-300 cursor-default"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
