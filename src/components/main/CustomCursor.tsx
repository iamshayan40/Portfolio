"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Check if we're in a footer or mobile menu
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('footer') || target.closest('.mobile-menu')) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Check if hovering over clickable elements
      if (target.closest('a') || target.closest('button') || target.closest('[role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor dot */}
          <motion.div
            className="fixed pointer-events-none z-50"
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
              scale: isHovering ? 1.5 : 1,
            }}
            transition={{
              type: "spring",
              damping: 50,
              stiffness: 1000,
              mass: 0.1
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>

          {/* Outer ring */}
          <motion.div
            className="fixed pointer-events-none z-50"
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
              scale: isHovering ? 1.5 : 1,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              mass: 0.5
            }}
          >
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
              <motion.div
                className="w-4 h-4 rounded-full border border-white/20"
                animate={{
                  scale: isHovering ? 0.8 : 1,
                }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 200,
                  mass: 0.5
                }}
              />
            </div>
          </motion.div>

          {/* Trailing effect */}
          <motion.div
            className="fixed pointer-events-none z-50"
            animate={{
              x: mousePosition.x - 8,
              y: mousePosition.y - 8,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              mass: 0.8
            }}
          >
            <div className="w-4 h-4 rounded-full bg-white/10" />
          </motion.div>
        </>
      )}
    </>
  );
};

export default CustomCursor; 