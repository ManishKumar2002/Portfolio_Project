import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function MainLayout({ children }) {
    return (
        <div
            className="min-h-screen bg-gray-950 text-gray-100 relative overflow-x-hidden bg-cover bg-fixed bg-center"
            style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        >
            <AnimatedBackground />
            <Navbar />
            <main className="pt-16 relative z-10">
                {children}
            </main>
            <ScrollToTopButton />
        </div>
    );
}
