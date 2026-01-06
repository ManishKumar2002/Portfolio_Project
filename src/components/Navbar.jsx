import { NavLink } from "react-router-dom";

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
    return (
        <nav className="fixed top-0 w-full glass border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="font-bold text-xl gradient-text anim-hue"></div>

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
            </div>
        </nav>
    );
}
