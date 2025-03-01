import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Bubble = ({ size, left, delay, duration }) => {
    return (
        <motion.div
            className={`absolute rounded-full bg-blue/20 backdrop-blur-sm border border-white/20 z-[99999]`}
            style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: "-10%",
            }}
            initial={{ y: 0, opacity: 1 }}
            animate={{
                y: [0, -1000],
                opacity: [1, 0.6, 1],
                scale: [1, 1.2, 0.8],
            }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
};

export default function FloatingBubbles() {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        // Generate initial bubbles
        const initialBubbles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            size: Math.random() * 40 + 20, // 40-140px
            left: Math.random() * 100, // 0-100%
            delay: Math.random() * 2, // 0-2s
            duration: Math.random() * 6 + 8, // 8-14s
        }));
        setBubbles(initialBubbles);

        // Regenerate bubbles periodically
        const interval = setInterval(() => {
            setBubbles((prevBubbles) => {
                const newBubble = {
                    id: Date.now(),
                    size: Math.random() * 100 + 40,
                    left: Math.random() * 100,
                    delay: 0,
                    duration: Math.random() * 6 + 8,
                };
                return [...prevBubbles.slice(-19), newBubble];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <AnimatePresence>
                {bubbles.map((bubble) => (
                    <Bubble
                        key={bubble.id}
                        size={bubble.size}
                        left={bubble.left}
                        delay={bubble.delay}
                        duration={bubble.duration}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
