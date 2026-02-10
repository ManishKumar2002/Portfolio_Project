import { motion } from "framer-motion";
import { Github, Linkedin, Mail, DownloadIcon } from "lucide-react";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-20 relative"
        >
            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
                {/* Animated Floating Avatar */}
                <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.08 }}
                    animate={{ y: [0, -8, 0] }}
                    className="relative w-40 h-40 flex items-center justify-center cursor-pointer"
                >
                    {/* Glow Ring */}
                    <div
                        className="
                            absolute inset-0 rounded-full
                            bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-lime)]
                            blur-lg opacity-70
                        "
                    />

                    {/* Avatar Image */}
                    <div
                        className="
                                relative w-40 h-40 rounded-full
                                overflow-hidden
                                border-2 border-white/20
                                bg-black
                                shadow-2xl
                            "
                    >
                        <img
                            src="/profile-image.png"
                            alt="Manish Kumar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>


                {/* Heading */}
                <div className="mt-6 text-5xl md:text-6xl font-bold">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Hi, I'm{" "}
                        <span className="gradient-text">
                            Manish Kumar
                        </span>
                    </motion.div>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl text-gray-300 mt-4"
                >
                    Software Developer | Full Stack Developer
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-6 mt-8"
                >
                    {[
                        { icon: Github, link: "https://github.com/ManishKumar2002" },
                        { icon: Linkedin, link: "https://linkedin.com/in/manishk10" },
                        { icon: Mail, link: "mailto:manish1002kr@gmail.com" }
                    ].map(({ icon: Icon, link }, index) => (
                        <motion.a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-gray-300 hover:text-[var(--accent-lime)] transition"
                        >
                            <Icon size={28} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Download Resume Button */}
                <motion.a
                    href="https://drive.google.com/file/d/1yAJWcJdfX-RryvDaJRzp0ZNLjo1BlN9e/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 113, 0, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-lime)] hover:shadow-lg transition"
                >
                    Download Resume
                    <DownloadIcon size={18} />
                </motion.a>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-16 text-gray-400"
                >
                    <p className="text-sm mb-2">Scroll to explore</p>
                    <svg
                        className="w-6 h-6 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
