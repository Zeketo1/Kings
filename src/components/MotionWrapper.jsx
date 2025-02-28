import { motion } from "framer-motion";

const MotionWrapper = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.25, 0, 0.75],
            }}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
