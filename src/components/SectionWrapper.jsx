import { motion } from "framer-motion";

export default function SectionWrapper({ id, title, children }) {
    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id={id} className="py-20 px-4 relative">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                {title && (
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={titleVariants}
                        className="section-title text-center mb-12"
                    >
                        {title}
                    </motion.h2>
                )}

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
