import { motion } from "framer-motion";
import {
    FaAngular,
    FaReact,
    FaHtml5,
    FaCss3,
    FaJs,
    FaBootstrap,
    FaGithub,
    FaGit,

} from "react-icons/fa";

import {
    SiTypescript,
    SiPostman
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

export default function SkillsSection() {

    const skills = [
        { name: "Angular", icon: FaAngular, color: "text-red-500" },
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS", icon: FaCss3, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
        { name: "REST API Integration", icon: TbApi, color: "text-green-400" },
        { name: "HTTP Client", icon: TbApi, color: "text-green-400" },
        { name: "Git", icon: FaGit, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, color: "text-white-600" },
        { name: "VS Code", icon: VscCode, color: "text-blue-400" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" }
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.35 }
        }
    };

    return (
        <section id="skills" className="py-20 px-4">

            <div className="max-w-5xl mx-auto">

                {/* Glass container (same as your original) */}
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl glass p-8 md:p-12 shadow-xl border border-white/5"
                >

                    <h2 className="section-title text-center">
                        Technical Skills
                    </h2>

                    <motion.div
                        className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        {skills.map((skill, i) => {
                            const Icon = skill.icon;

                            return (
                                <motion.div
                                    key={i}
                                    variants={item}
                                    whileHover={{ scale: 1.08, y: -6 }}
                                    className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 flex flex-col items-center justify-center text-center transition"
                                >

                                    <Icon size={28} className={`mb-3 ${skill.color}`} />

                                    <span className="text-sm font-medium">
                                        {skill.name}
                                    </span>

                                </motion.div>
                            );
                        })}

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}