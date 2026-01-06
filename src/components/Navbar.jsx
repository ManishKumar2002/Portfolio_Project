import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full glass border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Brand */}
                <div className="font-bold text-xl gradient-text anim-hue">

                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-4">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition ${isActive
                                    ? "bg-gradient-to-r from-accentOrange to-accentLime text-black/90 shadow-md"
                                    : "text-gray-300 hover:bg-white/5 hover:scale-105"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
                <div></div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-300 hover:text-white transition"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden border-t border-white/10 glass">
                    <div className="flex flex-col px-6 py-4 gap-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `px-4 py-3 rounded-lg transition ${isActive
                                        ? "bg-gradient-to-r from-accentOrange to-accentLime text-black/90"
                                        : "text-gray-300 hover:bg-white/5"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
