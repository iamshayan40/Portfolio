import React, { useEffect, useState } from 'react';  

export const PreLoader = () => {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true); 
    }, 500);

    setTimeout(() => {
      setVisible(false); // Start fade-out
      setTimeout(() => {
        setHidden(true); // Finally hide the loader after fade-out
      }, 2000); // Match with the CSS transition duration
    }, 3000); // Show loader for 3 seconds before fade-out starts
  }, []);

  if (hidden) return null; // Remove loader completely from DOM

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div className={`texts-container flex items-center justify-between h-15 w-70 text-white text-lg font-extralight font-lexend space-x-4 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibes.</span>
      </div>
    </div>
  );
};

export default PreLoader;
