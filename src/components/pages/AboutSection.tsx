"use client";

import React from "react";
import Slider from "./slider";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaBrain } from "react-icons/fa";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="relative flex flex-col justify-end min-h-screen w-full text-white">
      <div className="w-screen m-0 p-0">
        <Slider />
      </div>

      <motion.div
        className="container mx-auto px-5 sm:px-2 py-2 sm:py-36"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          variants={itemVariants}
        >
          <div className="space-y-6 sm:space-y-8">
            <motion.h2
              className="text-[10vw] sm:text-5xl sm:text-start text-center font-bold font-poppins"
              variants={itemVariants}
            >
              <span className="text-white">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
                Me
              </span>
            </motion.h2>

            <motion.p className="text-base sm:text-lg font-poppins text-gray-300 leading-relaxed" variants={itemVariants}>
              Hi, my name is <strong>Shayan</strong>, and I have been a tech enthusiast since childhood. My curiosity about technology, whether it's software or hardware, has driven me to learn as much as I can. I've always been immersed in computers, which has equipped me with a solid foundation in how things work.
            </motion.p>

            <motion.p className="text-base sm:text-lg text-gray-200 font-poppins leading-relaxed" variants={itemVariants}>
              After completing my matriculation, I stepped into the world of Web Development and found immense joy in this field. I am deeply dedicated to my work, often losing track of time while working late into the night.
            </motion.p>

            <motion.p className="text-base sm:text-lg text-gray-300 font-poppins leading-relaxed" variants={itemVariants}>
              Currently, I am studying Cloud Applied Generative AI and learning Next.js. I've created several projects using it and am improving day by day in my frontend journey.
            </motion.p>

            <motion.p className="text-base sm:text-lg text-gray-300 font-poppins leading-relaxed" variants={itemVariants}>
              Feel free to explore my work and reach out for <strong><span className="text-green-400">Collaborations!</span></strong>
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 font-lexend gap-3 sm:gap-6"
            variants={itemVariants}
          >
            <motion.div
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-lg border-l-4 border-indigo-500 shadow-lg shadow-purple-900/20 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-indigo-500/10 rounded-bl-full"></div>
              <FaCode className="text-3xl sm:text-4xl text-indigo-400 mb-3 sm:mb-4 relative z-10" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 relative z-10">Web Development</h3>
              <p className="text-sm sm:text-base text-gray-300 relative z-10">Passionate about creating modern, responsive web applications.</p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-slate-800/30 to-blue-900/30 backdrop-blur-lg border-l-4 border-blue-500 shadow-lg shadow-blue-900/20 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/10 rounded-bl-full"></div>
              <FaCloud className="text-3xl sm:text-4xl text-blue-400 mb-3 sm:mb-4 relative z-10" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 relative z-10">Cloud & AI</h3>
              <p className="text-sm sm:text-base text-gray-300 relative z-10">Exploring the fascinating world of cloud computing and AI.</p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-lg border-l-4 border-teal-500 shadow-lg shadow-emerald-900/20 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-teal-500/10 rounded-bl-full"></div>
              <FaBrain className="text-3xl sm:text-4xl text-teal-400 mb-3 sm:mb-4 relative z-10" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 relative z-10">Continuous Learning</h3>
              <p className="text-sm sm:text-base text-gray-300 relative z-10">Always eager to learn and implement new technologies.</p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-violet-900/30 backdrop-blur-lg border-l-4 border-violet-500 shadow-lg shadow-violet-900/20 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-violet-500/10 rounded-bl-full"></div>
              <FaCode className="text-3xl sm:text-4xl text-violet-400 mb-3 sm:mb-4 relative z-10" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 relative z-10">Next.js</h3>
              <p className="text-sm sm:text-base text-gray-300 relative z-10">Building modern web applications with Next.js.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;