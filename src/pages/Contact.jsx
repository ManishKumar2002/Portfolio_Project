import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <PageWrapper pageStyle="page-contact">
            <SEO
                title="Contact | Manish Kumar"
                description="Get in touch with Manish Kumar for software development opportunities."
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
                        text-center
                    "
                >
                    <h2 className="section-title">
                        Get In Touch
                    </h2>

                    <p className="text-gray-400 mt-6 mb-12">
                        I’m always open to discussing new projects, opportunities, or ideas.
                    </p>

                    {/* ===== CONTACT INFO (HORIZONTAL) ===== */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="flex items-center gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-lime)] flex items-center justify-center">
                                <Mail />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold">Email</p>
                                <p className="text-gray-400 text-sm">
                                    manish10akbr@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-lime)] flex items-center justify-center">
                                <Phone />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold">Phone</p>
                                <p className="text-gray-400 text-sm">
                                    +91 70821 60126
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-lime)] flex items-center justify-center">
                                <MapPin />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold">Location</p>
                                <p className="text-gray-400 text-sm">
                                    Hisar, Haryana, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ===== ACTION BUTTONS ===== */}
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://github.com/ManishKumar2002"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass px-5 py-3 rounded-full hover:bg-white/10 transition"
                        >
                            <Github />
                        </a>

                        <a
                            href="https://linkedin.com/in/manishk10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass px-5 py-3 rounded-full hover:bg-white/10 transition"
                        >
                            <Linkedin />
                        </a>

                        <a
                            href="mailto:manish10akbr@gmail.com"
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-lime)] font-medium hover:opacity-90 transition"
                        >
                            <Mail />
                        </a>
                    </div>
                </motion.div>
            </section>
        </PageWrapper>
    );
}
