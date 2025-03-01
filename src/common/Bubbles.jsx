import React, { useEffect, useState, useRef, useCallback, memo } from "react";
import { AnimatePresence } from "framer-motion";
import styled, { keyframes, createGlobalStyle } from "styled-components";

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

// Global style to change cursor when bubbles are active
const GlobalCursorStyle = createGlobalStyle`
  :root {
    --bubble-cursor: ${(props) =>
        props.isActive ? "url('/soap.png'), pointer" : "auto"};
    --gradient-color: ${(props) =>
        props.cleaningProgress > 0.95
            ? "#7083c8"
            : props.cleaningProgress > 0
            ? `linear-gradient(to right, 
                #7083c8 ${props.cleaningProgress * 100}%, 
                #e2bfcb ${props.cleaningProgress * 100 + 33}%, 
                #d098b3 ${props.cleaningProgress * 100 + 86}%, 
                #7083c8 ${props.cleaningProgress * 100 + 110}%)`
            : "linear-gradient(to right, #7083c8 -50%, #e2bfcb 33%, #d098b3 86%, #7083c8 110%)"};
  }
  
  .bubbling {
    cursor: var(--bubble-cursor) !important;
    background: var(--gradient-color) !important;
    transition: background 0.3s ease-out !important;
  }
`;

// Memoized Bubble component to prevent unnecessary re-renders
const Bubble = memo(styled.div`
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
`);

// Individual MemoizedBubble component to prevent unnecessary re-renders
const MemoizedBubble = memo(({ id, left, top, size, duration }) => {
    return (
        <Bubble
            key={id}
            left={left}
            top={top}
            size={size}
            duration={duration}
        />
    );
});

// Maximum number of bubbles to show to prevent performance issues
const MAX_BUBBLES = 35;

// Shake detection sensitivity
const SHAKE_THRESHOLD = 8; // Minimum distance to consider it a shake
const CLEANING_RATE = 0.015; // How fast the cleaning progress increases per shake
const CURSOR_IDLE_RESET_TIME = 5000; // 5 seconds of cursor inactivity to reset
const RETAIN_TIME = 5000; // 5 seconds to retain solid color

const Bubbles = () => {
    const [bubbles, setBubbles] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isIdle, setIsIdle] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOverBubblingElement, setIsOverBubblingElement] = useState(false);
    const [cleaningProgress, setCleaningProgress] = useState(0);

    const idleTimerRef = useRef(null);
    const bubbleTimerRef = useRef(null);
    const cursorTimeoutRef = useRef(null);
    const colorResetTimerRef = useRef(null);
    const mousePositionRef = useRef({ x: 0, y: 0 });
    const previousMousePositionsRef = useRef([]);
    const isCleanedRef = useRef(false);
    const lastCursorActivityRef = useRef(Date.now());
    const idleTime = 1; // 1ms of inactivity to be considered idle

    // Memoized function to create a new bubble
    const createBubble = useCallback(() => {
        const size = Math.random() * 40 + 20; // Larger bubbles
        const offsetX = (Math.random() - 0.5) * 0; // Random horizontal offset from cursor

        // Position bubbles to start from the top of the cursor
        const offsetY = -50; // Fixed position above cursor

        return {
            id: Math.random(),
            left: mousePositionRef.current.x + offsetX,
            top: mousePositionRef.current.y + offsetY,
            size,
            duration: Math.random() * 3 + 4, // 4-7 seconds animation
            createdAt: Date.now(),
        };
    }, []);

    // Check if the mouse movement is a shaking motion
    const detectShaking = useCallback(
        (currentPosition) => {
            if (!isOverBubblingElement) return false;

            const positions = previousMousePositionsRef.current;
            positions.push(currentPosition);

            // Only keep recent positions (last 10)
            if (positions.length > 10) {
                positions.shift();
            }

            // Need at least a few positions to detect shaking
            if (positions.length < 5) return false;

            // Calculate movement in different directions
            let horizontalChanges = 0;
            let verticalChanges = 0;
            let totalDistance = 0;

            for (let i = 1; i < positions.length; i++) {
                const dx = positions[i].x - positions[i - 1].x;
                const dy = positions[i].y - positions[i - 1].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                totalDistance += distance;

                // Detect direction changes (shaking back and forth)
                if (i > 1) {
                    const prevDx = positions[i - 1].x - positions[i - 2].x;
                    const prevDy = positions[i - 1].y - positions[i - 2].y;

                    // If direction changed
                    if (Math.sign(dx) !== Math.sign(prevDx)) {
                        horizontalChanges++;
                    }
                    if (Math.sign(dy) !== Math.sign(prevDy)) {
                        verticalChanges++;
                    }
                }
            }

            // Consider it shaking if there are multiple direction changes and enough movement
            const isShaking =
                horizontalChanges + verticalChanges >= 5 &&
                totalDistance >= SHAKE_THRESHOLD;
            return isShaking;
        },
        [isOverBubblingElement]
    );

    // Progress the cleaning when shaking is detected
    const updateCleaningProgress = useCallback(
        (isShaking) => {
            // Always update the last cursor activity time when this function is called
            // (since it's called on mousemove)
            lastCursorActivityRef.current = Date.now();

            // Clear any existing reset timer whenever there's cursor activity
            if (colorResetTimerRef.current) {
                clearTimeout(colorResetTimerRef.current);
                colorResetTimerRef.current = null;
            }

            if (isShaking) {
                setCleaningProgress((prevProgress) => {
                    // If already at maximum, don't update to prevent flickering
                    if (prevProgress >= 1) return prevProgress;

                    const newProgress = Math.min(
                        prevProgress + CLEANING_RATE,
                        1
                    );

                    // Element is considered clean when progress is 1
                    if (newProgress >= 1 && !isCleanedRef.current) {
                        isCleanedRef.current = true;

                        // Create extra bubbles for a "clean" effect
                        const cleanBubbles = Array.from(
                            { length: 8 },
                            createBubble
                        );
                        setBubbles((prev) => [
                            ...prev.slice(-MAX_BUBBLES + 8),
                            ...cleanBubbles,
                        ]);
                    }

                    return newProgress;
                });
            } else {
                // Only check for timeout if we have some cleaning progress but not yet at 100%
                if (cleaningProgress > 0 && cleaningProgress < 1) {
                    const now = Date.now();

                    // If no cleaning for a while, gradually decrease
                    if (now - lastCursorActivityRef.current > 2000) {
                        setCleaningProgress((prevProgress) =>
                            Math.max(prevProgress - 0.01, 0)
                        );
                    }
                }
            }
        },
        [cleaningProgress, createBubble]
    );

    // Check if device is mobile - only run once
    useEffect(() => {
        const checkIfMobile = () => {
            // Check for mobile user agent patterns
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            const isMobileDevice = mobileRegex.test(userAgent);
            
            // Check for mobile viewport size (typical mobile width)
            const isMobileViewport = window.innerWidth <= 768;
            
            // Check for touch capability, but don't use it as the only criteria
            const hasTouchCapability = 
                "ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0;
                
            // Only consider it mobile if:
            // 1. It has a mobile user agent OR
            // 2. It has both a mobile viewport AND touch capability
            return isMobileDevice || (isMobileViewport && hasTouchCapability);
        };

        setIsMobile(checkIfMobile());

        // Use a more efficient resize handler with debounce
        const handleResize = () => {
            clearTimeout(window.resizeTimer);
            window.resizeTimer = setTimeout(() => {
                setIsMobile(checkIfMobile());
            }, 250);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Mouse move and idle detection - only run for non-mobile
    useEffect(() => {
        if (isMobile) return;

        let rafId;
        let lastUpdateTime = 0;
        const FPS_CAP = 30; // Limit updates to 30fps
        const FRAME_TIME = 1000 / FPS_CAP;

        const resetIdleTimer = () => {
            setIsIdle(false);
            clearTimeout(idleTimerRef.current);

            idleTimerRef.current = setTimeout(() => {
                setIsIdle(true);
            }, idleTime);
        };

        // More efficient mouse move handler with throttling
        const handleMouseMove = (e) => {
            const currentPosition = { x: e.clientX, y: e.clientY };
            mousePositionRef.current = currentPosition;

            // Update the last cursor activity time
            lastCursorActivityRef.current = Date.now();

            // Clear any existing reset timer when cursor moves
            if (colorResetTimerRef.current) {
                clearTimeout(colorResetTimerRef.current);
                colorResetTimerRef.current = null;
            }

            // Check if this is a shaking motion
            const isShaking = detectShaking(currentPosition);

            // Update cleaning progress based on shaking
            updateCleaningProgress(isShaking);

            // Throttle the state updates for better performance
            const now = performance.now();
            if (now - lastUpdateTime >= FRAME_TIME) {
                cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    setMousePosition(currentPosition);
                    lastUpdateTime = now;
                });
            }

            resetIdleTimer();
        };

        // Optimized event delegation for mouse over/out
        const handleMouseEvent = (e) => {
            // Use event delegation for both mouseover and mouseout
            const element = e.target;
            const isBubblingElement =
                element.classList.contains("bubbling") ||
                (element.parentElement &&
                    element.parentElement.classList.contains("bubbling"));

            // Only update state if there's an actual change
            if (
                e.type === "mouseover" &&
                isBubblingElement !== isOverBubblingElement
            ) {
                setIsOverBubblingElement(isBubblingElement);

                // Reset cleaning progress when moving to a new element
                if (isBubblingElement && cleaningProgress >= 1) {
                    setCleaningProgress(0);
                    isCleanedRef.current = false;
                }
            }
        };

        // Use event delegation with capture for better performance
        document.addEventListener("mousemove", handleMouseMove, {
            passive: true,
        });
        document.addEventListener("mouseover", handleMouseEvent, {
            passive: true,
        });
        document.addEventListener("mouseout", handleMouseEvent, {
            passive: true,
        });

        // Initialize idle timer
        resetIdleTimer();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseEvent);
            document.removeEventListener("mouseout", handleMouseEvent);
            clearTimeout(idleTimerRef.current);
            clearTimeout(colorResetTimerRef.current);
            cancelAnimationFrame(rafId);
        };
    }, [
        isMobile,
        isOverBubblingElement,
        cleaningProgress,
        detectShaking,
        updateCleaningProgress,
    ]);

    // Handle cursor style updates
    useEffect(() => {
        if (isMobile) return;

        const handleCursorStyle = () => {
            if (isOverBubblingElement) {
                clearTimeout(cursorTimeoutRef.current);
                document.documentElement.style.setProperty(
                    "--bubble-cursor",
                    "url('/soap.png'), pointer"
                );
            } else {
                cursorTimeoutRef.current = setTimeout(() => {
                    document.documentElement.style.setProperty(
                        "--bubble-cursor",
                        "auto"
                    );
                }, 100);
            }
        };

        handleCursorStyle();

        return () => clearTimeout(cursorTimeoutRef.current);
    }, [isOverBubblingElement, isMobile]);

    // Create bubbles when idle and over a bubbling element
    useEffect(() => {
        if (!isIdle || !isOverBubblingElement || isMobile) {
            clearInterval(bubbleTimerRef.current);
            return;
        }

        // Initial bubbles (less than before)
        const initialBubbles = [createBubble(), createBubble()];
        setBubbles((prev) => [
            ...prev.slice(-MAX_BUBBLES + 2),
            ...initialBubbles,
        ]);

        // Reduced frequency of bubble creation for better performance
        bubbleTimerRef.current = setInterval(() => {
            setBubbles((prev) => {
                // Create a new bubble
                const newBubble = createBubble();

                // Only keep the most recent bubbles up to MAX_BUBBLES
                // This is more efficient than filtering by timestamp
                return [...prev.slice(-MAX_BUBBLES + 1), newBubble];
            });
        }, 700); // Slower rate for better performance

        return () => clearInterval(bubbleTimerRef.current);
    }, [isIdle, isOverBubblingElement, isMobile, createBubble]);

    // Set up a monitor to check for cursor inactivity and reset cleaning progress when needed
    useEffect(() => {
        if (isMobile || cleaningProgress === 0) return;

        // Check every second if the cursor has been idle long enough to reset
        const inactivityCheckInterval = setInterval(() => {
            const now = Date.now();

            // If cursor has been inactive for CURSOR_IDLE_RESET_TIME and we have some cleaning progress
            if (
                now - lastCursorActivityRef.current > CURSOR_IDLE_RESET_TIME &&
                cleaningProgress > 0
            ) {
                // Only schedule reset if one isn't already scheduled
                if (!colorResetTimerRef.current) {
                    colorResetTimerRef.current = setTimeout(() => {
                        setCleaningProgress(0);
                        isCleanedRef.current = false;
                        colorResetTimerRef.current = null;
                    }, 100); // Small delay to avoid immediate reset
                }
            }
        }, 1000);

        return () => {
            clearInterval(inactivityCheckInterval);
            if (colorResetTimerRef.current) {
                clearTimeout(colorResetTimerRef.current);
            }
        };
    }, [isMobile, cleaningProgress]);

    // Don't render anything on mobile
    if (isMobile) return null;

    return (
        <>
            <GlobalCursorStyle
                isActive={isOverBubblingElement}
                cleaningProgress={cleaningProgress}
            />
            <BubbleContainer>
                <AnimatePresence>
                    {bubbles.map((bubble) => (
                        <MemoizedBubble
                            key={bubble.id}
                            id={bubble.id}
                            left={bubble.left}
                            top={bubble.top}
                            size={bubble.size}
                            duration={bubble.duration}
                        />
                    ))}
                </AnimatePresence>
            </BubbleContainer>
        </>
    );
};

export default memo(Bubbles);
