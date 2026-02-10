import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950/50 border-t border-white/10 mt-20 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <p className="text-gray-400 mb-2">
                            © {currentYear} Manish Kumar. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Built with React • Tailwind CSS • Framer Motion
                        </p>
                    </motion.div>

                    {/* Right side - Scroll to top */}
                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition"
                    >
                        <span>Back to top</span>
                        <ArrowUp size={18} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
