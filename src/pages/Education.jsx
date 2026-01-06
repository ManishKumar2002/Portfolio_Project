import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

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
    "Frontend Development using Angular",
    "Dot Net Full Stack Foundation",
    "Programming with Python",
    "Using Databases with Python",
    "C++ Programming Certification"
];

export default function Education() {
    return (
        <PageWrapper pageStyle="page-education">
            <SEO
                title="Education | Manish Kumar"
                description="Education and certifications of Manish Kumar, Full Stack Developer."
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
                    "
                >
                    <h2 className="section-title text-center">
                        Education & Certifications
                    </h2>

                    {/* ===== EDUCATION ===== */}
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        {education.map((edu, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <GraduationCap size={22} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {edu.institute}
                                        </p>
                                        <div className="flex gap-4 text-sm mt-2">
                                            <span className="text-indigo-400">
                                                {edu.year}
                                            </span>
                                            <span className="text-gray-300">
                                                {edu.grade}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ===== DIVIDER ===== */}
                    <div className="my-12 h-px bg-white/10" />

                    {/* ===== CERTIFICATIONS ===== */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                <Award size={22} />
                            </div>
                            <h3 className="text-2xl font-bold">
                                Certifications
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {certifications.map((cert, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                                >
                                    <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                                    <span className="text-gray-300">
                                        {cert}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
        </PageWrapper>
    );
}
