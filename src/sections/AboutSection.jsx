import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="rounded-2xl glass p-8 md:p-12 shadow-xl border border-white/5"
                >
                    <h2 className="section-title text-center">About Me</h2>

                    <div className="text-gray-300 mt-6 leading-relaxed text-lg space-y-6 text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Hi, I'm <span className="font-semibold text-cyan-300">Manish Kumar</span>, a <span className="gradient-text">Frontend Developer</span> who enjoys building responsive websites and web applications. I like working on clean layouts and making interfaces easy to use.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            I have over <span className="text-white font-medium">2 years of professional experience</span> with frontend development, including React, JavaScript, TypeScript, HTML, and CSS. I have also worked with Angular. Alongside coding, I use <span className="text-white font-medium">Figma</span> and am continuing to build my UI/UX skills.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            I currently work as an <span className="text-white font-medium">Associate Software Developer</span> at <span className="text-white">KMA Technoware Private Limited</span>. My work includes building frontend pages and components, connecting REST APIs, and working with backend developers to fix issues and improve responsiveness.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            During my internship at <span className="text-white">High Radius Technologies</span>, I worked on React-based UI components, learned to make components reusable, and used Git while working with the team.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            I have worked on projects such as admin dashboards, e-commerce websites, and interactive web applications. I enjoy improving layouts, adding useful interactions, and learning ways to make websites better for the people using them.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
