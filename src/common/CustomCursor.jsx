import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSprayCan } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { MdOutlineCleaningServices } from "react-icons/md";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -50, y: -50 });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        // Check if the device is a mobile/touch device
        const checkIfMobile = () => {
            const isTouchDevice = 'ontouchstart' in window || 
                                 navigator.maxTouchPoints > 0 || 
                                 navigator.msMaxTouchPoints > 0;
            
            const isMobileViewport = window.innerWidth <= 768;
            
            setIsMobileDevice(isTouchDevice || isMobileViewport);
        };

        // Check on initial load
        checkIfMobile();
        
        // Also check on resize
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        // Only add mouse-related event listeners if not a mobile device
        if (isMobileDevice) return;

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        const mouseDown = () => {
            setIsClicking(true);
        };

        const mouseUp = () => {
            setIsClicking(false);
        };

        const handleMouseOver = (e) => {
            // Check if the element or its parent has cursor:pointer
            const element = e.target;
            const computedStyle = window.getComputedStyle(element);
            const parentComputedStyle = element.parentElement
                ? window.getComputedStyle(element.parentElement)
                : null;

            if (
                computedStyle.cursor === "pointer" ||
                element.tagName === "BUTTON" ||
                element.tagName === "A" ||
                element.classList.contains("cursor-pointer") ||
                (parentComputedStyle &&
                    (parentComputedStyle.cursor === "pointer" ||
                        element.parentElement.classList.contains(
                            "cursor-pointer"
                        )))
            ) {
                setCursorVariant("pointer");
            } else {
                setCursorVariant("default");
            }
        };

        // Handle mouse leaving the page
        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        // Handle mouse entering the page
        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mousedown", mouseDown);
        window.addEventListener("mouseup", mouseUp);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mousedown", mouseDown);
            window.removeEventListener("mouseup", mouseUp);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isMobileDevice]);

    // Cursor variants
    const variants = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            opacity: isVisible ? 1 : 0,
            transition: {
                type: "spring",
                mass: 0.3,
                stiffness: 800,
                damping: 30,
                opacity: { duration: 0.2 },
            },
        },
        pointer: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            opacity: isVisible ? 1 : 0,
            scale: 1.2,
            transition: {
                type: "spring",
                mass: 0.3,
                stiffness: 800,
                damping: 30,
                opacity: { duration: 0.2 },
            },
        },
    };

    // Cursor appearance based on state
    const getCursorContent = () => {
        if (cursorVariant === "pointer") {
            return (
                <motion.div
                    className="flex items-center justify-center w-full h-full"
                    animate={{ rotate: isClicking ? 15 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <MdOutlineCleaningServices className="text-white text-xl" />
                </motion.div>
            );
        } else {
            return (
                <motion.div
                    className="flex items-center justify-center w-full h-full"
                    animate={{ rotate: isClicking ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {isClicking ? (
                        <>
                            <BsStars className="text-white text-lg" />
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute"
                            >
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-white rounded-full"
                                        initial={{ x: 0, y: 0, opacity: 1 }}
                                        animate={{
                                            x: (Math.random() - 0.5) * 30,
                                            y: (Math.random() - 0.5) * 30,
                                            opacity: 0,
                                            scale: 0,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: i * 0.05,
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </>
                    ) : (
                        <FaSprayCan className="text-white text-sm" />
                    )}
                </motion.div>
            );
        }
    };

    // Don't render the cursor at all on mobile devices
    if (isMobileDevice) {
        return null;
    }

    return (
        <motion.div
            className="cursor-container fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full"
            variants={variants}
            animate={cursorVariant}
            style={{
                width: "24px",
                height: "24px",
                backgroundImage:
                    "linear-gradient(to right, #7083c8 -50%, #e2bfcb 33%, #d098b3 86%, #7083c8 110%)",
                boxShadow: isClicking
                    ? "0 0 15px rgba(224, 191, 203, 0.6)"
                    : "0 0 5px rgba(224, 191, 203, 0.3)",
            }}
        >
            {getCursorContent()}
        </motion.div>
    );
};

export default CustomCursor;
