"use client";

import React from "react";

const Slider = () => {
  return (
    <div className="relative overflow-hidden bg-transparent border-t border-b border-zinc-800 py-4 -mt-48 md:-mt-8 lg:mb-20">
      <div className="whitespace-nowrap flex animate-scroll text-sm font-monty font-light text-gray-100 uppercase">
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
            transform: translateX(-50%); /* Adjust to -50% to make full line visible */
          }
        }
        .animate-scroll {
          animation: scroll 8s linear infinite;
          white-space: nowrap; /* Ensure words stay in one line */
        }
      `}</style>
    </div>
  );
};

export default Slider;