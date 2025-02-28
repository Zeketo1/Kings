import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#F5E6E3]">
            <div className="relative w-[200px] h-[200px] mb-8">
                {/* Washing Machine Outer Body */}
                <motion.div 
                    className="absolute w-full h-full bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Control Panel */}
                    <div className="absolute top-3 right-3 w-[40px] h-[40px] bg-gray-200 rounded-md flex items-center justify-center">
                        <div className="w-[30px] h-[30px] bg-gray-300 rounded-md flex items-center justify-center">
                            <div className="w-[20px] h-[20px] bg-gray-400 rounded-md"></div>
                        </div>
                    </div>
                    
                    {/* Door Frame */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-gray-100 rounded-full border-4 border-gray-300">
                        {/* Door Glass */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-[#e0f2fe] rounded-full overflow-hidden flex items-center justify-center">
                            {/* Rotating Drum */}
                            <motion.div 
                                className="w-[100px] h-[100px] rounded-full border-[15px] border-dashed border-blue-200"
                                animate={{ rotate: 360 }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    ease: "linear" 
                                }}
                            />
                            
                            {/* Clothes/Bubbles Effect */}
                            <div className="absolute">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute rounded-full bg-white opacity-80"
                                        style={{
                                            width: `${Math.random() * 15 + 5}px`,
                                            height: `${Math.random() * 15 + 5}px`,
                                            left: `${Math.random() * 80 - 40}px`,
                                            top: `${Math.random() * 80 - 40}px`,
                                        }}
                                        animate={{
                                            x: Math.random() * 60 - 30,
                                            y: Math.random() * 60 - 30,
                                            opacity: [0.2, 0.8, 0.2],
                                        }}
                                        transition={{
                                            duration: Math.random() * 2 + 1,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            <motion.h2 
                className="text-2xl font-bold text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Cleaning Up...
            </motion.h2>
            
            <motion.div 
                className="mt-4 flex space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-3 h-3 rounded-full bg-blue-400"
                        animate={{ 
                            y: [0, -10, 0],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 1,
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
