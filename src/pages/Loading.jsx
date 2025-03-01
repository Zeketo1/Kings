import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Brand Guideline KIngs.png";

const Loading = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F5E6E3] to-[#f0d9d3]">
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-10"
            >
                <img
                    src={Logo}
                    alt="Kings Cleaning"
                    className="h-[60px] mb-2"
                />
            </motion.div>

            <div className="relative w-[220px] h-[220px] mb-10 flex items-center justify-center">
                {/* Vacuum Cleaner GIF */}
                <motion.div
                    className="w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <img
                        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXY1MjY5eDI1aGRjZHEzbG1weHAwamx6azFlcms4cHE0dzBpOXd4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w0pFUhMAqNPsu2Wk4f/giphy.gif"
                        alt="Vacuum Cleaner Animation"
                        className="max-w-full max-h-full object-contain bg-transparent"
                    />
                </motion.div>
            </div>

            <motion.h2
                className="text-2xl font-bold text-gray-700 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Preparing Your Space
            </motion.h2>

            <motion.p
                className="text-gray-500 text-center max-w-[280px] mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                Transforming your space, one sparkle at a time
            </motion.p>

            <motion.div
                className="flex space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"
                        animate={{
                            y: [0, -8, 0],
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Loading;
