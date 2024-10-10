"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";
import Image from "next/image";

const HeroContent = () => {
  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/Muhammad Shayan.pdf";
    link.setAttribute("download", "Muhammad_Shayan_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center w-full z-[20] px-5 md:px-20"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center mt-6 xl:text-start xl:gap-6 xl:mt-20">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 text-4xl font-bold font-monty text-white max-w-[800px] w-auto xl:text-6xl"
        >
          <div>
            Hi, I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Shayan
              <br />
            </span>
            <span className="lg:text-5xl mb-2 text-4xl xl:text-6xl">A</span>
            <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 lg:text-[3.2vw]">
              {" "}
              <Typewriter
                words={[
                  "Frontend Engineer.",
                  "Next.js Developer.",
                  "React.js Developer.",
                  "Node.js Developer.",
                  "TypeScript Developer.",
                  "AI Enthusiast.",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-lg text-white max-w-[800px] w-auto lg:text-xl xl:text-2xl"
        ></motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-gray-400 font-lexend mb-12 max-w-[600px] lg:text-2xl xl:text-xl text-[16px]"
        >
          <p>
            I'm a <strong className="font-bold">Frontend Engineer</strong>{" "}
            currently learning{" "}
            <strong className="font-bold">
              Certified Cloud Applied Generative AI Engineering
            </strong>
            . I specialize in building{" "}
            <strong className="font-bold">high-quality</strong> and{" "}
            <strong className="font-bold">fully responsive</strong> websites
            with modern designs that elevate user experience. Let's work
            together to bring your innovative ideas to life!
          </p>

          <div className="md:flex items-center justify-start md:mt-6 space-x-4 flex-wrap mt-20">
            <div className="md:flex items-center justify-center md:mt-6 space-x-4 flex-wrap mt-20">
              {/* Hire Me Button */}
              <div className="relative group mb-4">
                <a
                  href="#contact" // Change this to your desired link
                  className="relative inline-block md:p-1 p-1 font-semibold leading-1 text-gray-300 shadow-sm cursor-pointer rounded-full border border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative z-10 block px-4 py-1 rounded-full">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all text-md font-lexend font-extralight duration-500 group-hover:translate-x-1">
                        Hire Me
                      </span>
                      {/* Hire Me SVG Icon */}
                      <svg
                        className="w-7 h-7 text-white transition-transform duration-500 group-hover:translate-x-1"
                        width="64px"
                        height="58px"
                        viewBox="-2.72 -2.72 21.44 21.44"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                        strokeWidth="0.20800000000000002"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            id="Path_95"
                            data-name="Path 95"
                            d="M-5.5,11H-7.293l1.146-1.146a.518.518,0,0,0,.109-.163A.5.5,0,0,0-6,9.5V6h.5A.5.5,0,0,0-5,5.5.5.5,0,0,0-5.5,5h-.834L-9.666,2.5a2.52,2.52,0,0,0-1.5-.5h-.505a2.485,2.485,0,0,0-.58.075A.491.491,0,0,0-12.5,2h-2.758a3.522,3.522,0,0,0-2.474,1.025L-18.707,4H-20.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H-19v5h-1.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.793l1.975,1.975A3.522,3.522,0,0,0-14.258,14h2.516a3.522,3.522,0,0,0,2.474-1.025L-8.293,12H-5.5a.5.5,0,0,0,.5-.5A.5.5,0,0,0-5.5,11Zm-5.667-8a1.5,1.5,0,0,1,.9.3L-7,5.75V8.977A5.544,5.544,0,0,1-9.8,7.9l-2.4-1.8a.5.5,0,0,0-.3-.1.5.5,0,0,0-.354.146l-.707.708a1.361,1.361,0,0,1-1.878,0,.5.5,0,0,1,0-.708l2.707-2.707A1.511,1.511,0,0,1-11.672,3Zm1.192,9.268A2.515,2.515,0,0,1-11.742,13h-2.516a2.515,2.515,0,0,1-1.767-.732L-18,10.293V4.707l.975-.975A2.515,2.515,0,0,1-15.258,3h1.551l-2.439,2.439a1.5,1.5,0,0,0,0,2.122,2.384,2.384,0,0,0,3.292,0l.4-.4L-10.4,8.7A6.533,6.533,0,0,0-7.606,9.9l-1.247,1.247h0Z"
                            transform="translate(21 -2)"
                          />
                        </g>
                      </svg>
                    </div>
                  </span>
                </a>
              </div>

              {/* Second Button */}
              <div className="relative group mb-4">
                <button
                  onClick={handleCVDownload} // Attach the function here
                  className="relative inline-block md:p-1 p-1 md:ml-0 -ml-3 font-semibold leading-1 text-gray-300 shadow-sm cursor-pointer rounded-full border border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative z-10 block px-4 py-1 rounded-full">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all text-md font-lexend font-extralight duration-500 group-hover:translate-x-1">
                        Download CV
                      </span>
                      {/* Download CV SVG Icon */}
                      <svg
                        className="w-6 h-6 text-white transition-transform duration-500 group-hover:translate-x-1"
                        width="64px"
                        height="64px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="md:mb-10 md:-mt-4 mt-4"
      >
        <Image
          src="/freepik.png" 
          alt="Hero Image"
          height={650}
          width={650}
          className="w-full h-auto lg:w-[50rem] hover:scale-105 transition duration-300 ease-in-out"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
