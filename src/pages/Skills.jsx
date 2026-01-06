import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Skills() {
    return (
        <PageWrapper pageStyle="page-skills">
            <SEO
                title="Skills | Manish Kumar"
                description="Technical skills including C#, .NET, Angular, React, SQL Server, and modern development tools."
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
                        Technical Skills
                    </h2>

                    <div className="mt-12 space-y-6">
                        {skills.map((group, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="
                                    rounded-xl
                                    bg-white/5
                                    hover:bg-white/10
                                    transition-all
                                    p-6
                                    flex
                                    gap-5
                                "
                            >
                                {/* Icon */}
                                <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <Code2 size={20} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold mb-3">
                                        {group.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full text-sm bg-indigo-500/20 text-indigo-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </PageWrapper>
    );
}
