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
    <div className="pb-12 md:pb-0">
    <h1 className="md:p-7 md:pb-8 pb-8 md:mt-4 text-5xl md:text-7xl text-white font-lexend font-extralight text-center">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
            TechStack
          </span>
        </h1>
        <p className="pb-32 text-white text-2xl font-lexend font-light text-center opacity-80">
          My techstack features essential tools for building efficient and
          user-friendly applications.
        </p>
          <div className="flex flex-wrap justify-center gap-4">
          <div className="wrapper">
  {extendedSkills.slice(0, 8).map((skill, index) => (
    <div className={`itemLeft item${index + 1}`} key={index}>
      {skill.icon}
      <p className="text-white text-sm font-extralight font-poppins mt-12">
        {skill.title}
      </p>
    </div>
  ))}
</div>
<div className="wrapper wrapperRight"> {/* Added wrapperRight class */}
  {extendedSkills.slice(0, 8).map((skill, index) => (
    <div className={`itemRight item${index + 1}`} key={index}>
      {skill.icon}
      <p className="text-white text-sm font-extralight font-poppins mt-12">
        {skill.title}
      </p>
    </div>
  ))}
</div>

<style jsx>{`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  .wrapper {
    margin-top: -2.1rem;
    width: 90%;
    max-width: 1536px;
    margin-inline: auto;
    height: 150px;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
  }

  .wrapperRight { /* New class for the second wrapper */
    margin-bottom: 2.5vw; /* Added bottom margin */
  }

    
            @keyframes scrollLeft {
              to {
                left: -200px;
              }
            }
    
            @keyframes scrollRight {
              to {
                right: -200px;
              }
            }
    
            .itemLeft,
            .itemRight {
              width: 200px;
              height: 110px; /* Height increased */
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background: rgba(0, 0, 0, 0.9); /* Darker background */
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 25px;
              backdrop-filter: blur(40px); /* Increased blur */
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              position: absolute;
              animation-timing-function: linear;
              animation-duration: 30s;
              animation-iteration-count: infinite;
              opacity: 0.7;
              transition: opacity 0.3s ease;
              z-index: 1;
            }
            .itemLeft:hover,
            .itemRight:hover {
              opacity: 1; /* Apply hover effect here */
            }
    
            .itemLeft {
              left: max(calc(200px * 8), 100%);
              animation-name: scrollLeft;
            }
    
            .itemRight {
              right: max(calc(200px * 8), calc(100% + 200px));
              animation-name: scrollRight;
            }
    
            .item1 {
              animation-delay: calc(30s / 8 * (8 - 1) * -1);
            }
    
            .item2 {
              animation-delay: calc(30s / 8 * (8 - 2) * -1);
            }
    
            .item3 {
              animation-delay: calc(30s / 8 * (8 - 3) * -1);
            }
    
            .item4 {
              animation-delay: calc(30s / 8 * (8 - 4) * -1);
            }
    
            .item5 {
              animation-delay: calc(30s / 8 * (8 - 5) * -1);
            }
    
            .item6 {
              animation-delay: calc(30s / 8 * (8 - 6) * -1);
            }
    
            .item7 {
              animation-delay: calc(30s / 8 * (8 - 7) * -1);
            }
    
            .item8 {
              animation-delay: calc(30s / 8 * (8 - 8) * -1);
            }
          `}</style>
        </div>
        </div>
  );
}
