import React from 'react';
import './AnimatedBubbles.css';

const AnimatedBubbles = () => {
  // Generate a small number of bubbles
  const bubbleCount = 8;
  
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => {
    // Randomize properties
    const size = Math.floor(Math.random() * 200) + 50; // 50px to 250px
    const left = Math.floor(Math.random() * 100); // 0% to 100%
    const duration = Math.floor(Math.random() * 15) + 5; // 5s to 20s (faster)
    const delay = Math.floor(Math.random() * 5); // 0s to 5s (shorter delays)
    const isDark = Math.random() > 0.5;
    
    return {
      id: i,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        backgroundColor: isDark ? 'var(--accent-color-dark)' : 'var(--accent-color)',
      }
    };
  });

  return (
    <div className="bubbles-container">
      {bubbles.map((bubble) => (
        <div key={bubble.id} className="bubble" style={bubble.style}></div>
      ))}
    </div>
  );
};

export default AnimatedBubbles;
