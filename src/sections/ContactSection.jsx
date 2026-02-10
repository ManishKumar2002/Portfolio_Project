import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "manish1002kr@gmail.com",
            link: "mailto:manish1002kr@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 70821 60126",
            link: "tel:+917082160126"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Hisar, Haryana, India",
            link: null
        }
    ];

    const socialLinks = [
        { icon: Github, link: "https://github.com/ManishKumar2002", label: "GitHub" },
        { icon: Linkedin, link: "https://linkedin.com/in/manishk10", label: "LinkedIn" },
        { icon: Mail, link: "mailto:manish1002kr@gmail.com", label: "Email" }
    ];

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="rounded-2xl glass p-8 md:p-12 shadow-xl border border-white/5 text-center"
                >
                    <h2 className="section-title">Get In Touch</h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 mt-6 mb-12"
                    >
                        I'm always open to discussing new projects, opportunities, or ideas.
                    </motion.p>

                    {/* CONTACT INFO CARDS */}
                    <motion.div
                        className="grid md:grid-cols-3 gap-6 mb-12"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {contactInfo.map((info, idx) => {
                            const Icon = info.icon;
                            return (
                                <motion.a
                                    key={idx}
                                    href={info.link || "#"}
                                    target={info.link?.startsWith("http") ? "_blank" : undefined}
                                    rel={info.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-lime)] flex items-center justify-center flex-shrink-0">
                                        <Icon className="text-black" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-white">{info.label}</p>
                                        <p className="text-gray-400 text-sm">{info.value}</p>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* ACTION BUTTONS */}
                    <motion.div
                        className="flex justify-center gap-4 flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {socialLinks.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="glass px-5 py-3 rounded-full hover:bg-white/10 transition flex items-center gap-2"
                                >
                                    <Icon size={20} />
                                    <span className="hidden sm:inline">{social.label}</span>
                                </motion.a>
                            );
                        })}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
