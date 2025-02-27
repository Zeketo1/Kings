import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import './Bubbles.css';

const float = keyframes`
  0% {
    transform: translateY(100vh) scale(0.3);
    opacity: 0.8;
  }
  25% {
    opacity: 0.6;
    transform: translateY(75vh) scale(0.6);
  }
  50% {
    opacity: 0.5;
    transform: translateY(50vh) scale(1);
  }
  75% {
    opacity: 0.3;
    transform: translateY(25vh) scale(0.9);
  }
  100% {
    transform: translateY(-20vh) scale(0.8);
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
  z-index: -1;
  overflow: hidden;
`;

const Bubble = styled.div`
  position: absolute;
  bottom: -150px; /* Start further below to avoid getting stuck */
  background: radial-gradient(
    circle at 30% 30%,
    rgba(121, 133, 199, 0.6) 0%,
    rgba(121, 133, 199, 0.4) 50%,
    rgba(121, 133, 199, 0.2) 100%
  );
  box-shadow: inset -5px -5px 15px rgba(121, 133, 199, 0.3),
              inset 5px 5px 15px rgba(121, 133, 199, 0.3);
  border: 1px solid rgba(121, 133, 199, 0.2);
  border-radius: 50%;
  pointer-events: none;
  animation: ${float} ${props => props.duration}s linear infinite; /* Changed to linear for smoother movement */
  left: ${props => props.left}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation-delay: ${props => props.delay}s;
  backdrop-filter: blur(1px);
  transform-origin: center;
  will-change: transform, opacity; /* Performance optimization */
`;

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const styleNum = Math.floor(Math.random() * 3) + 1;
      return {
        id: Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 60 + 20,
        duration: Math.random() * 6 + 12, // Longer duration for smoother movement
        delay: Math.random() * 5,
        styleClass: `bubble-purple-${styleNum}${Math.random() > 0.5 ? ' bubble-glow' : ''}`
      };
    };

    // Create initial bubbles with staggered positions
    const initialBubbles = Array.from({ length: 20 }, (_, i) => {
      const bubble = createBubble();
      // Start bubbles at different positions in the animation cycle
      bubble.initialProgress = i * 5; // Stagger initial positions
      return bubble;
    });

    setBubbles(initialBubbles);

    const interval = setInterval(() => {
      setBubbles(prev => [...prev.slice(-19), createBubble()]);
    }, 2000); // Slightly faster bubble creation

    return () => clearInterval(interval);
  }, []);

  return (
    <BubbleContainer>
      {bubbles.map(bubble => (
        <Bubble
          key={bubble.id}
          left={bubble.left}
          size={bubble.size}
          duration={bubble.duration}
          delay={bubble.delay}
          className={bubble.styleClass}
          style={bubble.initialProgress ? { animationDelay: `${bubble.delay}s`, animationPlayState: 'running' } : {}}
        />
      ))}
    </BubbleContainer>
  );
};

export default Bubbles;
