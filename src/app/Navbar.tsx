import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 md:px-8 md:py-4 bg-transparent">
      {/* Left: Logo */}
      <motion.div
        className=" flex items-center logo-text select-none"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/NavLogo.jpg"
          alt="Logo"
          className="h-[38px] md:h-[42px] mt-1 md:mt-0 w-auto object-contain"
          style={{ maxWidth: '160px' }}
        />
      </motion.div>

      {/* Right: GitHub Capsule Button */}
      <a
        href="https://github.com/iamshayan40"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center rounded-full -mr-3 px-3 py-1.5 md:px-6 md:py-1.5 transition-all duration-300 font-light text-base md:text-[0.95rem] border-zinc-400 md:border-zinc-400 border-transparent md:border hover:bg-[#24292f] hover:border-[#24292f] hover:scale-105 focus:outline-none"
        style={{
          boxShadow: '0 2px 8px rgba(255,255,255,0.05)',
          backdropFilter: 'blur(2px)',
        }}
      >
        {/* Desktop: Text + logo with NO outer circle */}
        <span className="hidden md:flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white"
            style={{verticalAlign: 'middle', background: 'transparent'}}
          >
            <path
              d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.09-.646.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.19 22 16.436 22 12.012 22 6.484 17.523 2 12 2z"
            />
          </svg>
          <span className="text-white font-light text-[15px] md:text-[14px] transition-colors duration-300" style={{fontFamily: 'lexend'}}>Github</span>
        </span>

        {/* Mobile: Only logo, no circle, no border, just icon */}
        <span className="flex items-center justify-center md:hidden p-0 m-0 border-none outline-none bg-transparent">
          <a href="https://github.com/iamshayan40" target="_blank" rel="noopener noreferrer" className="p-0 m-0 border-none outline-none bg-transparent shadow-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-white !border-none !outline-none !shadow-none bg-transparent"
              style={{verticalAlign: 'middle', background: 'transparent', border: 'none', outline: 'none', boxShadow: 'none', padding: 0, margin: 0}}
            >
              <path
                d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.09-.646.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.19 22 16.436 22 12.012 22 6.484 17.523 2 12 2z"
              />
            </svg>
          </a>
        </span>
      </a>
    </nav>
  );
}
