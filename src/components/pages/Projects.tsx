"use client";

import React from "react";
import { motion } from "framer-motion";

function Skills() {
  // Upper row card details
  const upperCards = [
    {
      title: "Animated WorkStudio",
      description:
        "This project is an animated Workstudio clone featuring animation libraries like GSAP and Locomotive Scroll. The website delivers an immersive experience on PC, showcasing stunning animations that enhance user interaction. Both the UI and UX are designed to be exceptional, making navigation enjoyable and visually engaging. This clone brings a dynamic and captivating feel to the browsing experience!",
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1726171535-cover.jpg&w=3000&q=96",
      width: 400,  // Specify the width
      height: 300, // Specify the height
      link: "https://github.com/iamshayan40/Works-Studio",
    },
    {
      title: "Tesla Clone",
      description:
        "This project is a responsive Tesla Clone built with HTML, CSS, and JavaScript. The design captures the sleek aesthetics of Tesla’s site, showcasing various models and features. With interactive elements and smooth animations, it delivers an engaging experience on mobile and desktop devices. This project demonstrates effective use of responsive design, ensuring all content is accessible and visually appealing on any screen.",
      image:
        "https://images.pexels.com/photos/18977351/pexels-photo-18977351/free-photo-of-close-up-of-the-steering-wheel-and-the-dashboard-in-a-tesla-model-s.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 400,  // Specify the width
      height: 300, // Specify the height
      link: "https://github.com/iamshayan40/Tesla-Clone",
    },
    {
      title: "Next.js Blog",
      description:
        "This project is a Next.js blog built using ShadCN UI, Zod for schema validation, and various npm packages. It features Tailwind CSS for styling, providing a modern and responsive design. The blog includes dynamic content management, user-friendly navigation, and a clean interface, making it easy for users to read and interact with posts. This setup ensures a robust and visually appealing blogging experience.",
      image:
        "https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg",
      width: 400,  // Specify the width
      height: 300, // Specify the height
      link: "https://github.com/iamshayan40/Blog-Web",
    },
  ];

  // Lower row card details
  const lowerCards = [
    {
      title: "E-commerce Agency Website",
      description:
        "This website was developed for a client who is an eCommerce digital marketer. Built using Next.js, Tailwind CSS, and Three.js, it features a fully responsive design, smooth background animations, a custom navigation bar, and dedicated sections for showcasing the client’s work and reviews. It reflects my skills in modern frontend development, responsive UI design, and animation integration.",
      image:
        "/UBA.png",
      width: 400,  // Specify the width
      height: 300, // Specify the height
      link: "https://uba-portfolio.vercel.app/",
    },
    {
      title: "Web Based Discussion Forum",
      description: "The Web-Based Discussion Forum Platform is a simple text-based app where users can sign up, create forums, and join discussions. It features authentication, forum management, real-time messaging, and moderation. Users can explore or filter forums by category or participation. This project was developed during my internship, helping me gain hands-on experience and improve both technical and collaborative skills.",
      image:
        "https://saaslandingpage.com/wp-content/uploads/2023/08/Cover-community-forum-examples@2x-680x382.png",
      width: 400,  // Specify the width
      height: 300, // Specify the height
      link: "https://github.com/Sanaullah-Turab/Web-Based-Discussion-Forum",
    },
  ];

  return (
    <div id="project" className="flex flex-col items-center">
      {/* Upper Cards Row */}
      <div className="flex justify-center gap-20 flex-wrap">
        {upperCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ x: index < 2 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: index < 2 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            className="relative h-[26em] w-[24em] border-2 border-zinc-800 rounded-[1.5em] font-extralight font-lexend bg-transparent text-white font-nunito p-[1em] flex flex-col gap-[0.75em]"
          >
            <img
              src={card.image}
              alt={card.title}
              width={card.width}
              height={card.height}
              className="h-48 w-full rounded-[1.5em] -mt-16 object-cover"
            />
            <div>
              <h1 className="text-2xl font-medium font-lexend mb-4">
                {card.title}
              </h1>
              <p className="text-[0.75em] font-extralight font-lexend">
                {card.description}
              </p>
            </div>
            <button className="mt-auto h-fit w-fit px-[1em] py-[0.30em] border border-white/20 rounded-full flex justify-center items-center overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px] hover:bg-gradient-to-r hover:from-gray-600 hover:via-gray-700 hover:to-gray-600 text-white">
            <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <p>Full Code</p>
                <svg
                  className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Space Between Upper and Lower Cards */}
      <div className="lg:my-16 my-10" />

      {/* Lower Cards Row */}
      <div className="flex justify-center gap-20 flex-wrap">
        {lowerCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ x: index < 2 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: index < 2 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            className="relative h-[26em] w-[24em] border-2 border-zinc-800 rounded-[1.5em] font-lexend font-extralight bg-transparent text-white font-nunito p-[1em] flex flex-col gap-[0.75em]"
          >
            
            <img
              src={card.image}
              alt={card.title}
              width={card.width}
              height={card.height}
              className="h-48 w-full rounded-[1.5em] -mt-16 object-cover"
            />
            <div>
              <h1 className="text-2xl font-medium font-lexend mb-4">
                {card.title}
              </h1>
              <p className="text-[0.75em]">{card.description}</p>
            </div>
            <button className="mt-auto h-fit w-fit px-[1em] py-[0.30em] border border-white/20 rounded-full flex justify-center items-center overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px] hover:bg-gradient-to-r hover:from-gray-600 hover:via-gray-700 hover:to-gray-600 text-white">
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <p>Full Code</p>
                <svg
                  className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
