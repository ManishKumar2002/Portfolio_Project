import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onLoadComplete }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadComplete();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onLoadComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-gray-950 flex items-center justify-center z-[9999]"
        >
            {/* Main Loading Content */}
            <div className="text-center space-y-8">
                {/* Animated Logo/Avatar */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="w-24 h-24 mx-auto bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-lime)] rounded-full flex items-center justify-center text-4xl font-bold shadow-lg"
                >
                    {/* Avatar Image */}
                    <div
                        className="
                                relative w-24 h-24 rounded-full
                                overflow-hidden
                                border-2 border-white/20
                                bg-black
                                shadow-2xl
                            "
                    >
                        <img
                            src="/profile-image.png"
                            alt="Manish Kumar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Loading Text */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold gradient-text"
                >
                    Manish Kumar
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400"
                >
                    Associate Software Developer | Front-End Developer
                </motion.p>

                {/* Animated Loading Dots */}
                <div className="flex justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -10, 0],
                                backgroundColor: [
                                    "rgba(255, 113, 0, 0.5)",
                                    "rgba(255, 113, 0, 1)",
                                    "rgba(255, 113, 0, 0.5)"
                                ]
                            }}
                            transition={{
                                duration: 1.4,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className="w-4 h-4 rounded-full"
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
