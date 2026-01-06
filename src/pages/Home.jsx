import PageWrapper from "../components/PageWrapper";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function Home() {
    return (
        <PageWrapper pageStyle="page-home">
            <SEO
                title="Manish Kumar | Full Stack Developer"
                description="Full Stack Developer with expertise in .NET, Angular, React, and SQL Server."
            />

            {/* ===== HERO SECTION ===== */}
            <section
                className="
                            relative
                            flex flex-col
                            justify-center
                            items-center
                            text-center
                            overflow-hidden
                            mt-28
                        "
            >
                {/* ===== Avatar ===== */}
                <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-32 h-32 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-lime)] rounded-full flex items-center justify-center text-4xl font-bold shadow-lg"
                >
                    MK
                </motion.div>

                {/* ===== Heading ===== */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mt-6"
                >
                    Hi, I'm <span className="gradient-text">Manish Kumar</span>
                </motion.h1>

                {/* ===== Subtitle ===== */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl text-gray-300 mt-4"
                >
                    Software Developer | Full Stack Developer
                </motion.p>

                {/* ===== Social Icons ===== */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-6 mt-8"
                >
                    {[
                        { icon: Github, link: "https://github.com/ManishKumar2002" },
                        { icon: Linkedin, link: "https://linkedin.com/in/manishk10" },
                        { icon: Mail, link: "mailto:manish10akbr@gmail.com" }
                    ].map(({ icon: Icon, link }, index) => (
                        <motion.a
                            key={index}
                            href={link}
                            target="_blank"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-gray-300 hover:text-[var(--accent-lime)] transition"
                        >
                            <Icon size={28} />
                        </motion.a>
                    ))}
                </motion.div>
                {/* ===== Download Resume Button ===== */}
                <motion.a
                    href="https://drive.google.com/file/d/1xjd8VI-i87bCuHZqtc2snOzQVuOb_vuC/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                            mt-5
                            mb-5
                            inline-flex
                            items-center
                            gap-2
                            px-8
                            py-3
                            rounded-full
                            font-semibold
                            text-black
                            bg-gradient-to-r
                            from-[var(--accent-orange)] 
                            to-[var(--accent-lime)]
                            shadow-lg
                            hover:shadow-xl
                            transition
                        "
                >
                    Download Resume
                </motion.a>

            </section>


        </PageWrapper>
    );
}
