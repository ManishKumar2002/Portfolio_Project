import { motion } from "framer-motion";
import { GraduationCap, Award, Eye } from "lucide-react";


export default function EducationSection() {
    const education = [
        {
            degree: "B.E. in Computer Science Engineering",
            institute: "Chandigarh University, Mohali",
            year: "2023",
            grade: "7.38 CGPA"
        },
        {
            degree: "12th (CBSE)",
            institute: "Kendriya Vidyalaya, Hisar Cantt",
            year: "2019",
            grade: "78%"
        }
    ];

    const certifications = [
        {
            title: "Frontend Development using Angular",
            link: "https://www.coursera.org/account/accomplishments/verify/J2UEVTWJZJS4"
        },
        {
            title: "Front-End Web Development with React",
            link: "https://www.coursera.org/account/accomplishments/certificate/DC96CHAP5ND8"
        },
        {
            title: "Dot Net Full Stack Foundation",
            link: "https://www.coursera.org/account/accomplishments/verify/2YKHT9P39ACG"
        },
        {
            title: "Certificate of Participation in Level 1 (Qualifier): E-Commerce (Among Top-20 Teams within Institute)",
            link: "https://unstop.com/certificate-preview/a48826c4-5672-4acf-9f79-dd191e257ae4"
        },
        {
            title: "Programming with Python"
        },
    ];


    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="rounded-2xl glass p-8 md:p-12 shadow-xl border border-white/5"
                >
                    <h2 className="section-title text-center">Education & Certifications</h2>

                    {/* EDUCATION */}
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <GraduationCap size={22} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                                        <p className="text-gray-400 text-sm">{edu.institute}</p>
                                        <div className="flex gap-4 text-sm mt-2">
                                            <span className="text-indigo-400">{edu.year}</span>
                                            <span className="text-gray-300">{edu.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* DIVIDER */}
                    <div className="my-12 h-px bg-white/10" />

                    {/* CERTIFICATIONS */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                <Award size={22} />
                            </div>
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>

                        <motion.div
                            className="grid md:grid-cols-2 gap-4"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.08,
                                    },
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="text-gray-300 text-sm leading-snug">
                                            {cert.title}
                                        </p>

                                        {cert.link && (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                inline-flex items-center gap-1.5
                text-xs text-purple-400
                hover:text-purple-300
                px-2.5 py-1 rounded-md
                border border-purple-500/30
                hover:border-purple-500/50
                bg-purple-500/10
                transition-all
            "
                                            >
                                                <Eye size={14} />
                                                View
                                            </a>
                                        )}
                                    </div>

                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
