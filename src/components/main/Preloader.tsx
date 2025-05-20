"use client";
import React, { useEffect, useState } from 'react';

export const PreLoader = () => {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.classList.add('preloader-active');
    // Set global flag for cursor visibility
    window.localStorage.setItem('preloaderActive', 'true');

    const fadeInTimeout = setTimeout(() => {
      setVisible(true);
    }, 500);

    const fadeOutTimeout = setTimeout(() => {
      setVisible(false);
      const hideTimeout = setTimeout(() => {
        setHidden(true);
        document.body.classList.remove('preloader-active');
        // Remove flag when preloader is done
        window.localStorage.removeItem('preloaderActive');
      }, 1000);
      return () => clearTimeout(hideTimeout);
    }, 3000);

    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOutTimeout);
      document.body.classList.remove('preloader-active');
      window.localStorage.removeItem('preloaderActive');
    };
  }, []);

  if (hidden) return null; // Remove loader completely from DOM

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div
        className={`texts-container flex items-center justify-between h-15 w-70 text-white text-lg font-extralight font-lexend space-x-4 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <span>Coder,</span>
        <span>Developer,</span>
        <span>Vibes.</span>
      </div>
    </div>
  );
};

export default PreLoader;
