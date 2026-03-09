import { motion } from "framer-motion";

export default function ExperienceSection() {
    const experiences = [
        {
            title: "Associate Software Developer",
            company: "KMA Technoware Private Limited",
            period: "Jan 2024 – Present",
            points: [
                "Developed and maintained dynamic frontend applications using Angular and React.",
                "Integrated REST APIs to fetch and display dynamic data efficiently.",
                "Improved UI responsiveness and optimized client-side performance.",
                "Collaborated with backend teams to ensure smooth API consumption and seamless data flow."
            ]
        },
        {
            title: "Full Stack Intern",
            company: "KMA Technoware Private Limited",
            period: "Aug 2023 – Jan 2024",
            points: [
                "Contributed to the development of web applications using Angular and React.",
                "Assisted in building responsive UI components and integrating them with backend APIs.",
                "Gained experience in state management and component-based architecture."
            ]
        },
        {
            title: "Full Stack Intern",
            company: "High Radius Technologies",
            period: "Jan 2022 – Apr 2022",
            points: [
                "Built responsive UI components using React and integrated them with backend APIs.",
                "Implemented state management and reusable components to improve code maintainability.",
                "Worked in an agile environment using Git for version control and collaboration."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="rounded-2xl glass p-8 md:p-12 shadow-xl border border-white/5"
                >
                    <h2 className="section-title text-center">Experience</h2>

                    <div className="mt-10 space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <h3 className="text-2xl font-bold gradient-text">
                                    {exp.title}
                                </h3>
                                <p className="text-indigo-400 mt-1">
                                    {exp.company}
                                    <span className="text-gray-400"> | {exp.period}</span>
                                </p>

                                <motion.ul
                                    className="list-disc list-inside text-gray-300 mt-4 space-y-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.1 }}
                                >
                                    {exp.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </motion.ul>

                                {index < experiences.length - 1 && (
                                    <div className="my-8 h-px bg-white/10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
