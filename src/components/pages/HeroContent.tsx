import React from 'react';

export default function HeroContent() {
  return (
    <section className="w-full h-screen flex flex-col justify-between">
      {/* Top Centered Content */}
      <div className="flex flex-col items-center">
        <div className="hero-heading w-full">
          <h1 className="text-center text-[2.7rem] md:text-[4rem] font-bold tracking-tight text-white select-none" style={{fontFamily: 'Blauer-Nue-Light'}}>
            Design
          </h1>
        </div>
        <div className="hero-subheading w-full">
          <h2 className="text-center text-[2.1rem] md:text-[3rem] font-semibold tracking-tight text-white select-none" style={{fontFamily: 'Blauer-Nue-Light'}}>
            Obsessed
          </h2>
        </div>
        {/* Subtitle */}
        <div className="hero-subtitle w-full">
          <p className="text-center text-[1.1rem] md:text-[1.3rem] text-zinc-300 font-light max-w-xl mx-auto select-none" style={{fontFamily: 'lexend'}}>
            I'm Shayan, I build websites that don't just look good - they convert, perform & scale.
          </p>
        </div>
      </div>

      {/* Capsule Button - left aligned, fixed position */}
      <div className="hero-button w-full flex justify-start md:justify-start ml-14">
        <a
          href="#projects"
          className="group flex items-center justify-between border border-zinc-400 rounded-full px-4 pr-2 pl-3 py-[0.5vw] text-white font-light text-[1rem] md:text-[0.9em] transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600 focus:outline-none min-w-[180px]"
          style={{fontFamily: 'lexend'}}
        >
          <span className="font-lexend font-extralight whitespace-nowrap">My Portfolio</span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-zinc-400 bg-transparent relative">
            {/* Down Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              className="w-4 h-4 text-zinc-400"
              style={{position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)'}}
            >
              <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}