import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
