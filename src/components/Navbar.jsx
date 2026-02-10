import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
            setOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems
                .map(item => ({ id: item.id, el: document.getElementById(item.id) }))
                .filter(s => s.el);

            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i].el.getBoundingClientRect().top < 200) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 w-full glass border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center relative">

                {/* Desktop Menu – CENTER */}
                <div className="hidden md:flex gap-2">
                    {navItems.map((item, idx) => (
                        <motion.button
                            key={item.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-4 py-2 rounded-lg transition ${activeSection === item.id
                                    ? "bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-lime)] text-black/90 shadow-md"
                                    : "text-gray-300 hover:bg-white/5 hover:scale-105"
                                }`}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </div>

                {/* Mobile Menu Button – RIGHT */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden absolute right-6 text-gray-300 hover:text-white transition"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden border-t border-white/10 glass"
                >
                    <div className="flex flex-col px-6 py-4 gap-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-4 py-3 rounded-lg text-left transition ${activeSection === item.id
                                        ? "bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-lime)] text-black/90"
                                        : "text-gray-300 hover:bg-white/5"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}

