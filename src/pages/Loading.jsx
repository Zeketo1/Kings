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
                <img src={Logo} alt="Kings Cleaning" className="h-[60px] mb-2" />
            </motion.div>
            
            <div className="relative w-[220px] h-[220px] mb-10">
                {/* Washing Machine Outer Body */}
                <motion.div 
                    className="absolute w-full h-full bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-2 border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Machine Top Panel */}
                    <div className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-r from-gray-100 to-gray-50 flex items-center px-4">
                        <div className="w-[8px] h-[8px] rounded-full bg-blue-400 mr-2"></div>
                        <div className="w-[30px] h-[4px] bg-gray-200 rounded-full"></div>
                    </div>
                    
                    {/* Control Panel */}
                    <div className="absolute top-[50px] right-4 flex flex-col gap-2">
                        <div className="w-[35px] h-[10px] bg-gray-200 rounded-md"></div>
                        <div className="w-[35px] h-[10px] bg-gray-200 rounded-md"></div>
                        <div className="w-[35px] h-[35px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                            <div className="w-[15px] h-[15px] bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                    
                    {/* Door Frame */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-gradient-to-br from-gray-100 to-white rounded-full border-[6px] border-gray-200 shadow-inner">
                        {/* Door Glass */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] bg-[#e0f7ff] rounded-full overflow-hidden flex items-center justify-center shadow-inner">
                            {/* Water Level Effect */}
                            <motion.div 
                                className="absolute w-full h-full bg-[#c2e9fb] opacity-30"
                                initial={{ y: 130 }}
                                animate={{ y: 65 }}
                                transition={{ 
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            
                            {/* Rotating Drum */}
                            <motion.div 
                                className="w-[110px] h-[110px] rounded-full border-[12px] border-dashed border-blue-200"
                                animate={{ rotate: 360 }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity, 
                                    ease: "linear" 
                                }}
                            />
                            
                            {/* Clothes/Bubbles Effect */}
                            <div className="absolute">
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute rounded-full bg-white opacity-80"
                                        style={{
                                            width: `${Math.random() * 15 + 5}px`,
                                            height: `${Math.random() * 15 + 5}px`,
                                            left: `${Math.random() * 100 - 50}px`,
                                            top: `${Math.random() * 100 - 50}px`,
                                        }}
                                        animate={{
                                            x: Math.random() * 60 - 30,
                                            y: Math.random() * 60 - 30,
                                            opacity: [0.3, 0.8, 0.3],
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: Math.random() * 2 + 1.5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Door Handle */}
                    <div className="absolute top-1/2 right-[35px] transform -translate-y-1/2 w-[12px] h-[40px] bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                    
                    {/* Bottom Panel */}
                    <div className="absolute bottom-0 left-0 w-full h-[15px] bg-gradient-to-r from-gray-100 to-gray-200"></div>
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
                            scale: [1, 1.2, 1]
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
