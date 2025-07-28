"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(true);

  // Listen to preloaderActive changes in localStorage
  useEffect(() => {
    const checkPreloader = () => {
      setPreloaderActive(!!window.localStorage.getItem('preloaderActive'));
    };
    checkPreloader();
    window.addEventListener('storage', checkPreloader);
    // Also check on focus (for SPA navigation)
    window.addEventListener('focus', checkPreloader);
    return () => {
      window.removeEventListener('storage', checkPreloader);
      window.removeEventListener('focus', checkPreloader);
    };
  }, []);



  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Only show cursor if preloader is not active
      if (!window.localStorage.getItem('preloaderActive')) {
        setIsVisible(true);
        checkFooterDistance(e);
      }
    };

    const checkFooterDistance = (e: MouseEvent) => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const distanceToFooter = footerRect.top - e.clientY;
        if (distanceToFooter < 50) {
          setIsNearFooter(true);
          document.body.style.cursor = 'auto';
        } else {
          setIsNearFooter(false);
          document.body.style.cursor = 'none';
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.style.cursor = 'auto';
    };

    const handleMouseEnter = () => {
      if (!window.localStorage.getItem('preloaderActive')) {
        setIsVisible(true);
        document.body.style.cursor = 'none';
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
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
      if (target.closest('.mobile-menu')) {
        setIsVisible(false);
      } else if (!target.closest('footer')) {
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


  if (preloaderActive) return null;

  return (
    <div className="hidden md:block">
      <AnimatePresence>
        {isVisible && !isNearFooter && (
          <>
            {/* Main cursor dot */}
            <motion.div
              className="fixed pointer-events-none z-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                x: mousePosition.x - 4,
                y: mousePosition.y - 4,
                scale: isHovering ? 1.5 : 1,
              }}
              exit={{ 
                opacity: 0,
                scale: 0,
                transition: { duration: 0.3 }
              }}
              transition={{
                type: "spring",
                damping: 50,
                stiffness: 1000,
                mass: 0.1
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-[#379e38] via-[#038a44] to-[#007209] rounded-full" />
            </motion.div>

            {/* Outer ring */}
            <motion.div
              className="fixed pointer-events-none z-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovering ? 1.5 : 1,
              }}
              exit={{ 
                opacity: 0,
                scale: 0,
                transition: { duration: 0.3 }
              }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                mass: 0.5
              }}
            >
              <div className="w-8 h-8 rounded-full border border-[#2cff2e]/30 flex items-center justify-center">
                <motion.div
                  className="w-4 h-4 rounded-full border border-[#16e87a]/20"
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
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: mousePosition.x - 8,
                y: mousePosition.y - 8,
              }}
              exit={{ 
                opacity: 0,
                transition: { duration: 0.2 }
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                mass: 0.8
              }}
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#2cff2e]/10 via-[#16e87a]/10 to-[#2cff3e]/10" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;
