import React, { useEffect, useState } from 'react';

export const PreLoader = () => {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Add 'preloader-active' class to body when PreLoader is active
    document.body.classList.add('preloader-active');

    const fadeInTimeout = setTimeout(() => {
      setVisible(true);
    }, 500);

    const fadeOutTimeout = setTimeout(() => {
      setVisible(false); // Start fade-out
      const hideTimeout = setTimeout(() => {
        setHidden(true); // Finally hide the loader after fade-out
        document.body.classList.remove('preloader-active'); // Remove class when PreLoader is hidden
      }, 1000); // Match with the CSS transition duration
      return () => clearTimeout(hideTimeout);
    }, 3000); // Show loader for 2.5 seconds before fade-out starts

    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOutTimeout);
      document.body.classList.remove('preloader-active'); // Cleanup on unmount
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
