import { motion } from 'framer-motion';

export const StaggerContainer = ({
    children,
    staggerChildren = 0.1,
    delayChildren = 0,
    direction = 'up'
}) => {
    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export const Item = ({ children, direction = 'up' }) => {
    const offsetValue = 20;
    const initialVariant = {
        up: { y: offsetValue, opacity: 0 },
        down: { y: -offsetValue, opacity: 0 },
        left: { x: offsetValue, opacity: 0 },
        right: { x: -offsetValue, opacity: 0 },
    };

    const variants = {
        hidden: initialVariant[direction],
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div variants={variants}>
            {children}
        </motion.div>
    );
};

export default StaggerContainer;
