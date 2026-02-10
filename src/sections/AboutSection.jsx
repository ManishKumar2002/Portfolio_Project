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
                            a <span className="gradient-text">Frontend-Focused Full Stack Developer</span>.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            I have over <span className="text-white font-medium">2 years of professional experience</span> building modern, scalable web applications using
                            <span className="gradient-text"> Angular</span>,
                            <span className="gradient-text"> React</span>, and
                            <span className="gradient-text"> .NET</span>.
                            I primarily focus on crafting clean, responsive, and user-friendly interfaces,
                            while also having strong experience working with backend systems and APIs.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Currently, I work as an <span className="text-white font-medium">Associate Software Developer</span> at <span className="text-white">KMA Technoware Private Limited</span>,
                            where I develop and maintain
                            enterprise applications with a strong emphasis on frontend development using Angular.
                            I collaborate closely with backend services to integrate APIs, handle dynamic data,
                            and improve overall application performance and user experience.
                            I also contribute to backend logic and SQL Server optimization to ensure efficient data flow.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Earlier in my career, I completed a <span className="text-white font-medium">Full Stack Internship</span> at <span className="text-white">High Radius Technologies</span>,
                            where I built responsive UI components
                            using React, implemented reusable components, and integrated backend APIs while working
                            in an agile development environment.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            I've worked on projects including a university website and admin portal with role-based access control,
                            interactive JavaScript-based applications, and a responsive e-commerce platform with cart and checkout
                            functionality. I enjoy building intuitive frontend experiences and collaborating with teams to deliver
                            reliable, well-structured full stack solutions.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
