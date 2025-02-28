import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled, { keyframes } from "styled-components";

// Simplified animation that just grows to size and moves up
const float = keyframes`
  0% {
    transform: translateY(0) scale(0.6);
    opacity: 0.7;
  }
  20% {
    transform: translateY(-20vh) scale(0.8);
    opacity: 0.8;
  }
  80% {
    transform: translateY(-80vh) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
`;

const BubbleContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 999;
    overflow: hidden;
`;

const Bubble = styled.div`
    position: absolute;
    background: radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(121, 133, 199, 0.6) 50%,
        rgba(121, 133, 199, 0.4) 100%
    );
    box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 0.4),
        inset 2px 2px 8px rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    pointer-events: none;
    animation: ${float} ${(props) => props.duration}s ease-out forwards;
    left: ${(props) => props.left}px;
    top: ${(props) => props.top}px;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    backdrop-filter: blur(1px);
    transform-origin: center;
    will-change: transform, opacity;
`;

const Bubbles = () => {
    const [bubbles, setBubbles] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isIdle, setIsIdle] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isPointer, setIsPointer] = useState(false);
    const idleTimerRef = useRef(null);
    const bubbleTimerRef = useRef(null);
    const idleTime = 1; // 2 seconds of inactivity to be considered idle

    useEffect(() => {
        // Check if the device is a mobile/touch device
        const checkIfMobile = () => {
            const isTouchDevice =
                "ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0;

            const isMobileViewport = window.innerWidth <= 768;

            setIsMobile(isTouchDevice || isMobileViewport);
        };

        // Check on initial load
        checkIfMobile();

        // Also check on resize
        window.addEventListener("resize", checkIfMobile);

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    useEffect(() => {
        // Only add mouse-related event listeners if not a mobile device
        if (isMobile) return;

        const resetIdleTimer = () => {
            setIsIdle(false);
            clearTimeout(idleTimerRef.current);

            // Set a new timer
            idleTimerRef.current = setTimeout(() => {
                setIsIdle(true);
            }, idleTime);
        };

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            resetIdleTimer();
        };

        // Check if the cursor is over a pointer element
        const handleMouseOver = (e) => {
            const element = e.target;

            // Only show bubbles for elements with class "bubbling" or for links
            if (
                element.classList.contains("bubbling") ||
                (element.parentElement &&
                    element.parentElement.classList.contains("bubbling"))
            ) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        // Initialize idle timer
        resetIdleTimer();

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            clearTimeout(idleTimerRef.current);
        };
    }, [isMobile]);

    // Create bubbles when idle and cursor is pointer
    useEffect(() => {
        if (!isIdle || !isPointer || isMobile) {
            clearInterval(bubbleTimerRef.current);
            return;
        }

        const createBubble = () => {
            const size = Math.random() * 40 + 20; // Larger bubbles (was 20 + 5)
            const offsetX = (Math.random() - 0.5) * 0; // Random horizontal offset from cursor

            // Position bubbles to start from the top of the cursor (subtract a few pixels)
            const offsetY = -50; // Fixed position above cursor

            return {
                id: Math.random(),
                left: mousePosition.x + offsetX,
                top: mousePosition.y + offsetY, // Position above the cursor
                size,
                duration: Math.random() * 3 + 4, // 4-7 seconds animation
            };
        };

        // Create a burst of bubbles when first idle
        const initialBubbles = Array.from({ length: 3 }, createBubble);
        setBubbles((prev) => [...prev, ...initialBubbles]);

        // Continue creating bubbles while idle
        bubbleTimerRef.current = setInterval(() => {
            setBubbles((prev) => {
                // Remove bubbles that have been around too long (more than 10 seconds)
                const now = Date.now();
                const filtered = prev.filter(
                    (bubble) =>
                        !bubble.createdAt || now - bubble.createdAt < 10000
                );

                // Add a new bubble with timestamp
                const newBubble = createBubble();
                newBubble.createdAt = now;

                return [...filtered, newBubble];
            });
        }, 500); // Create a new bubble less frequently for more realism

        return () => {
            clearInterval(bubbleTimerRef.current);
        };
    }, [isIdle, isPointer, mousePosition, isMobile]);

    // Don't render anything on mobile
    if (isMobile) {
        return null;
    }

    return (
        <BubbleContainer>
            <AnimatePresence>
                {bubbles.map((bubble) => (
                    <Bubble
                        key={bubble.id}
                        left={bubble.left}
                        top={bubble.top}
                        size={bubble.size}
                        duration={bubble.duration}
                    />
                ))}
            </AnimatePresence>
        </BubbleContainer>
    );
};

export default Bubbles;
