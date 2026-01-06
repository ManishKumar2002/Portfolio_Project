import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

export default function PageWrapper({ children, pageStyle }) {
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`pt-20 ${pageStyle || ""}`}
        >
            {children}
        </motion.main>
    );
}
