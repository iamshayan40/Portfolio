"use client";

import React from "react";
import Slider from "./slider";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="relative mt-20 md:mt-12">
      <div className="mt-16 md:mt-12">
        <Slider />
      </div>

      <div className="flex flex-col md:flex-row justify-between md:px-20 p-4">
        {/* Text Section */}
        <div className="flex flex-col pt-12 px-2 justify-center md:max-w-[50%]">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-zinc-300 transition-transform duration-300 transform text-center md:text-left">
            About{" "}
            <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Me
            </span>
          </h1>

          <div className="md:text-left text-center mt-4 flex-grow">
            <p className="text-lg font-light font-lexend text-gray-400 mt-4">
              Hi, my name is <strong>Shayan</strong>, and I have been a{" "}
              <strong>tech enthusiast</strong> since childhood. My curiosity
              about technology, whether it's software or hardware, has driven me
              to learn as much as I can. I've always been immersed in computers,
              which has equipped me with a solid foundation in how things work.
            </p>
            <p className="text-lg font-light font-lexend text-gray-400 mt-2">
              After completing my matriculation, I stepped into the world of{" "}
              <strong>Web Development</strong> and found immense joy in this
              field. I am deeply dedicated to my work, often losing track of
              time while working late into the night.
            </p>
            <p className="text-lg font-light font-lexend text-gray-400 mt-2">
              Currently, I am studying{" "}
              <strong>Cloud Applied Generative AI</strong> and learning{" "}
              <strong>Next.js</strong>. I’ve created several projects using it
              and am improving day by day in my frontend journey.
            </p>
          </div>

          <div className="md:text-left text-center mt-6">
            <p className="text-xl font-light font-lexend text-gray-400">
              Feel free to explore my work and reach out for collaborations!
            </p>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center md:justify-start mt-6">
            <button
              className="px-8 py-3 rounded-full text-lg font-extralight font-lexend transition-all duration-300 transform hover:scale-105 mb-8"
              onClick={() =>{ window.location.href = "#contact"}}
              style={{
                background: "transparent",
                border: "1px solid rgba(156, 163, 175, 0.5)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span className="relative z-10 text-gray-300">Contact Me</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end items-center pl-0 md:pl-10 mt-6 md:mt-0">
          <Image
            src="/code.svg"
            alt="Description of SVG"
            className="h-72 w-72 md:h-96 md:w-96 object-contain transition-all duration-300 hover:scale-105"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
