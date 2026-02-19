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
                            Hi, I'm <span className="font-semibold text-cyan-300">Manish Kumar</span> —
                            a <span className="gradient-text">Frontend Developer</span> focused on building modern, responsive, and high-performance web applications.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            I have over <span className="text-white font-medium">2 years of professional experience</span> working extensively with
                            <span className="gradient-text"> Angular</span> and
                            <span className="gradient-text"> React</span>, developing scalable user interfaces with
                            <span className="text-white font-medium"> TypeScript, JavaScript, HTML, CSS, and Bootstrap</span>.
                            My primary focus is crafting clean UI architecture, reusable components, and seamless user experiences.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Currently, I work as an <span className="text-white font-medium">Associate Software Developer</span> at
                            <span className="text-white"> KMA Technoware Private Limited</span>, where I build and maintain
                            enterprise-level frontend applications using Angular and React. I collaborate closely with backend teams
                            to integrate REST APIs, manage dynamic data rendering, and enhance overall application
                            performance and responsiveness.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            During my internship at
                            <span className="text-white"> High Radius Technologies</span>,
                            I developed responsive UI components using React, implemented reusable component patterns,
                            and worked in an agile environment with Git-based version control.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            I enjoy transforming complex requirements into intuitive frontend experiences.
                            My projects include admin dashboards with role-based access control, interactive web applications,
                            and responsive e-commerce platforms with dynamic cart and checkout flows.
                            I am passionate about writing maintainable code and continuously improving UI performance and usability.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
