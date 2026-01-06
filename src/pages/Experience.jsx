import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <PageWrapper pageStyle="page-experience">
            <SEO title="Experience | Manish Kumar" />

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
                        Experience
                    </h2>

                    {/* ===== EXPERIENCE ITEM 1 ===== */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-bold gradient-text">
                            Associate Software Developer
                        </h3>

                        <p className="text-indigo-400 mt-1">
                            KMA Technoware Private Limited
                            <span className="text-gray-400"> | Aug 2023 – Present</span>
                        </p>

                        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                            <li>
                                Developed and maintained applications using .NET and Angular,
                                improving performance and scalability.
                            </li>
                            <li>
                                Designed and consumed APIs for seamless data integration
                                between modules.
                            </li>
                            <li>
                                Optimized SQL Server queries, significantly reducing data
                                retrieval time.
                            </li>
                            <li>
                                Collaborated closely with cross-functional teams to ensure
                                timely and high-quality delivery.
                            </li>
                        </ul>
                    </div>

                    {/* ===== DIVIDER ===== */}
                    <div className="my-10 h-px bg-white/10" />

                    {/* ===== EXPERIENCE ITEM 2 ===== */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text">
                            Full Stack Intern
                        </h3>

                        <p className="text-indigo-400 mt-1">
                            High Radius Technologies
                            <span className="text-gray-400"> | Jan 2022 – Apr 2022</span>
                        </p>

                        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                            <li>
                                Built responsive UI components using React and integrated
                                them with backend APIs.
                            </li>
                            <li>
                                Implemented state management and reusable components to
                                improve code maintainability.
                            </li>
                            <li>
                                Worked in an agile environment using Git for version control
                                and collaboration.
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </section>
        </PageWrapper>
    );
}
