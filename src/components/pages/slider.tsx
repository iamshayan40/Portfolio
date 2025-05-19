"use client";

import React from "react";

const Slider = () => {
  // About Section
  return (
    <div className="w-full m-0 p-0 relative overflow-hidden bg-transparent border-t border-b border-zinc-800 py-4 mb-8 -mt-28 md:-mt-0">
      <div className="w-full flex whitespace-nowrap animate-scroll text-sm font-monty font-light text-gray-100 uppercase -mx-6">
        {/* Original Content */}
        <span className="mx-6">Innovative Solutions</span>
        <span className="mx-6">Creative Designs</span>
        <span className="mx-6">Expert Development</span>
        <span className="mx-6">Cutting-Edge Technology</span>
        <span className="mx-6">Professional Execution</span>
        <span className="mx-6">Seamless Integration</span>
        <span className="mx-6">High Quality Results</span>

        {/* Duplicate Content for seamless scrolling */}
        <span className="mx-6">Innovative Solutions</span>
        <span className="mx-6">Creative Designs</span>
        <span className="mx-6">Expert Development</span>
        <span className="mx-6">Cutting-Edge Technology</span>
        <span className="mx-6">Professional Execution</span>
        <span className="mx-6">Seamless Integration</span>
        <span className="mx-6">High Quality Results</span>
      </div>
      <style jsx>{`
        @keyframes scroll {
          100% {
            transform: translateX(0);
          }
          0% {
            transform: translateX(-50%); 
          }
        }
        .animate-scroll {
          animation: scroll 9s linear infinite;
          white-space: nowrap; /* Ensure words stay in one line */
        }
      `}</style>
    </div>
  );
};

export default Slider;
