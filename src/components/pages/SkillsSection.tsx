"use client"
import React from 'react'

function AboutSection() {

  return (
    <div className="relative overflow-hidden bg-transparent py-4 border-t border-b border-zinc-800">
      {/* Animated Scrolling Content */}
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
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 8s linear infinite;
          white-space: nowrap; 
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
