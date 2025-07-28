import React from "react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <section className="w-full h-[65vh] md:h-[75vh] flex flex-col justify-between">
      {/* Top Centered Content */}
      <div className="flex flex-col items-center">
        <div className="hero-heading w-full mt-12">
          <h1
            className="text-center text-[4.8rem] md:text-[8rem] font-extrabold tracking-tight bg-gradient-to-r from-[#2cff3e] via-[#16e87a] to-[#0edfc2] bg-clip-text text-transparent"
            style={{ fontFamily: "Blauer-Nue-Light" }}
          >
            Design
          </h1>
          <h2
            className="text-center text-[4.6rem] md:text-[9rem] font-bold tracking-tight select-none md:leading-[1.01] -mt-11 md:-mt-14"
            style={{ fontFamily: "Blauer-Nue-Light" }}
          >
            <span className="bg-gradient-to-r from-[#2cff2e] via-[#16e87a] to-[#2cff3e] bg-clip-text text-transparent">
              Obsessed
            </span>
          </h2>
        </div>
        {/* Subtitle */}
        <div className="hero-subtitle w-full mt-2 flex justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center font-poppins text-[1.15rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] text-zinc-200 font-light max-w-2xl px-9 md:px-0 mx-auto select-none leading-snug md:leading-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            style={{ fontFamily: "lexend" }}
          >
            I'm “
            <span className="bg-gradient-to-r from-[#2cff2e] via-[#16e87a] to-[#2cff3e] bg-clip-text text-transparent font-semibold">
              Shayan
            </span>
            ”, I build websites that don't just look good – they
            <span className="text-gray-300 font-semibold">
              {" "}
              convert, perform & scale
            </span>
            .
          </motion.p>
        </div>
      </div>

      <div className="hero-button w-full flex justify-start px-4 md:px-8 -mb-12 ml-2 md:ml-0">
        <a
          href="#project"
          className="group flex items-center justify-between border border-zinc-400 rounded-full pl-4 pr-1 py-2 md:pl-5 md:pr-1.5 md:py-[0.4vw] text-white font-light text-base md:text-[0.95rem] transition-all duration-300 hover:bg-[#24292f] hover:border-[#24292f] hover:scale-105 focus:outline-none min-w-[180px] max-w-fit"
          style={{ fontFamily: "lexend" }}
        >
          {/* Tight Left Text */}
          <span className="font-lexend font-extralight whitespace-nowrap -ml-2">
            My Portfolio
          </span>

          {/* Tight Right Icon */}
          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-zinc-400 bg-transparent relative mr-1 md:mr-0">
            {/* Downward arrow, centered in circle */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-[#2cff3e]"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <path d="M12 5v14M18 13l-6 6-6-6" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
