import React, { useEffect, useState } from 'react';  

export const PreLoader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true); 
    }, 500);
  }, []);

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
