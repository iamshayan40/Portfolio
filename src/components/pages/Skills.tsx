"use client"; // Add this line at the top

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMongodb,
  SiBootstrap,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-red-500 text-5xl" />, title: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, title: "CSS3" },
    {
      icon: <SiJavascript className="text-yellow-500 text-5xl" />,
      title: "JavaScript",
    },
    {
      icon: <SiTypescript className="text-blue-600 text-5xl" />,
      title: "TypeScript",
    },
    { icon: <FaReact className="text-cyan-500 text-5xl" />, title: "React" },
    { icon: <SiNextdotjs className="text-white text-5xl" />, title: "Next.js" },
    { icon: <FaGit className="text-orange-500 text-5xl" />, title: "Git" },
    { icon: <FaGithub className="text-white text-5xl" />, title: "GitHub" },
    { icon: <SiVite className="text-yellow-400 text-5xl" />, title: "Vite" },
    {
      icon: <FaNodeJs className="text-green-600 text-5xl" />,
      title: "Node.js",
    },
    {
      icon: <SiExpress className="text-blue-500 text-5xl" />,
      title: "Express.js",
    },
    {
      icon: <SiMongodb className="text-green-600 text-5xl" />,
      title: "MongoDB",
    },
    {
      icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
      title: "Tailwind CSS",
    },
    {
      icon: <SiBootstrap className="text-purple-500 text-5xl" />,
      title: "Bootstrap",
    },
    // Adding more duplicates to make a total of 40
  ];

  // Duplicate skills array to reach 40 boxes
  const extendedSkills = [
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
  ];

  return (
    <div id="skills" className="h-screen flex items-center justify-center bg-transparent  md:-mt-14 -mt-48">
      {/* Main Container with Padding and Overflow Hidden */}
      <div className="relative w-11/12 md:w-3/4 lg:h-3/4 p-2 md:p-2  border border-zinc-900 hover:border-zinc-800 backdrop-blur-lg bg-transparent rounded-3xl transition duration-300 ease-in-out hover:shadow-lg overflow-hidden">
        {/* Heading */}
        <h1 className="md:p-7 md:pb-8 pb-2 mt-6 md:mt-4 text-5xl md:text-7xl text-white font-lexend font-extralight text-center">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
            TechStack
          </span>
        </h1>
        {/* Description */}
        <p className="hidden md:block px-6 pb-12 text-white text-2xl font-lexend font-light text-center opacity-80">
          My techstack features essential tools for building efficient and
          user-friendly applications.
        </p>

      {/* Container for sliding boxes */}
<div className="flex overflow-hidden w-full mt-24">
  {/* Add whitespace-nowrap here */}
  <div className="flex animate-slide-left gap-6 whitespace-nowrap">
    {/* Inner Boxes with Animation */}
    {extendedSkills.map((skill, index) => (
      <div
        key={index}
        className={`relative w-48 h-24 border border-zinc-800 hover:border-zinc-700 backdrop-blur-lg bg-transparent rounded-3xl transition ease-in-out opacity-80 hover:opacity-100 flex items-center justify-center z-10`}
      >
        <div className="flex flex-col items-center space-y-2">
          {/* Centered content */}
          {skill.icon}
          <span className="text-white text-lg font-lexend font-extralight">
            {skill.title}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Gap between inner boxes */}
        <div className="flex overflow-hidden w-full md:mt-6 mt-4 mb-4">
          {" "}
          {/* Added margin-top for spacing */}
          <div className="flex animate-slide-right gap-6">
            {" "}
            {/* Changed to animate-slide-right */}
            {/* Inner Boxes with Animation */}
            {extendedSkills.map((skill, index) => (
              <div
                key={index}
                className={`relative w-48 h-24 border border-zinc-800 hover:border-zinc-700 backdrop-blur-lg bg-transparent rounded-3xl transition duration-300 ease-in-out opacity-80 hover:opacity-100 flex items-center justify-center z-10`} // Added z-index here
              >
                <div className="flex flex-col items-center space-y-2">
                  {" "}
                  {/* Centered content */}
                  {skill.icon}
                  <span className="text-white text-lg font-lexend font-extralight">
                    {skill.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
