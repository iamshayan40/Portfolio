"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Building2, Code2, Users, CheckCircle2, ArrowRight, Briefcase } from "lucide-react";
import Slider from "./slider";

const ExperienceSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section id="experience" className="relative py-16 md:py-4 px-0 md:px-0">
    <div className="w-full max-w-none">
      <Slider />
    </div>
      {/* Animated Background Elements */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"
      />
      
      {/* Removed Floating Elements */}
      
      <div className="max-w-7xl mx-auto relative pt-8 md:pt-14 px-4">
        {/* Section Title with Advanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-32"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-6xl font-extralight font-lexend text-gray-100 mb-4 relative">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">Experience</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 font-light font-lexend text-lg md:text-xl"
          >
            Professional journey and achievements
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Experience Content */}
          <motion.div
            style={{ opacity, scale }}
            className="relative"
          >
            {/* Role and Company */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-12"
            >
              <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                    <div className="w-12 h-12 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-zinc-800/50 flex items-center justify-center">
                      <Image
                        src="/logo1.webp"
                        alt="Securely Innovations Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
                <div>
                    <h3 className="text-base md:text-4xl font-bold font-poppins text-gray-100 mb-4">
                    Web Developer Intern
                  </h3>
                    <div className="flex items-center gap-3 text-gray-400 font-light font-lexend text-sm md:text-lg">
                    <Building2 className="w-6 h-6" />
                    <span>Securely Innovations (Pvt.) ltd.</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-zinc-800/50 flex items-center justify-center md:flex"
                >
                  <Code2 className="w-8 h-8 md:w-12 md:h-12 text-purple-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Duration and Year */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 text-base md:text-lg text-gray-400 font-light font-lexend mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-zinc-900/30 px-4 py-2 rounded-xl border border-zinc-800/50"
              >
                <Calendar className="w-5 h-5" />
                <span>3 Months</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-zinc-900/30 px-4 py-2 rounded-xl border border-zinc-800/50"
              >
                <Code2 className="w-5 h-5" />
                <span>2024-25</span>
              </motion.div>
            </motion.div>

            {/* Skills Grid with Advanced Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-5"
            >
              <p className="text-gray-300 font-light font-lexend text-sm md:text-base">
                During my internship at Securely Innovations, I gained valuable experience in:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Full-stack web development",
                  "React Native mobile app development",
                  "Real World Experience",
                  "Collaborative development"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group/item relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center gap-4 text-gray-300 font-light font-lexend text-sm md:text-base p-4 md:p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                      <div className="relative">
                        <CheckCircle2 className="w-6 h-6 text-purple-500" />
                        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span>{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative my-16"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            <div className="absolute flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-500/50 to-cyan-500/50"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Second Experience - PIAIC */}
        <div className="relative mt-32">
          {/* Experience Content */}
          <motion.div
            style={{ opacity, scale }}
            className="relative"
          >
            {/* Role and Company */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-12"
            >
              <div className="flex items-center justify-between">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-zinc-800/50 flex items-center justify-center md:flex"
                >
                  <Users className="w-8 h-8 md:w-12 md:h-12 text-purple-500" />
                </motion.div>
                <div className="flex items-center gap-6">
                  <div>
                    <h3 className="text-xl md:text-4xl font-bold font-poppins text-gray-100 mb-4 text-right">
                      Certified Agentic and Robotic AI Engineering
                    </h3>
                    <div className="flex items-center gap-3 text-gray-400 font-light font-lexend text-sm md:text-lg justify-end">
                      <Building2 className="w-6 h-6" />
                      <span>PIAIC - Presidential Initiative for Artificial Intelligence and Computing</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <div className="w-12 h-12 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-zinc-800/50 flex items-center justify-center md:flex">
                      <Image
                        src="https://www.piaic.org/static/media/Logo.fb7de414.svg"
                        alt="PIAIC Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Duration and Year */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 text-base md:text-lg text-gray-400 font-light font-lexend mb-6 justify-end"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-zinc-900/30 px-4 py-2 rounded-xl border border-zinc-800/50"
              >
                <Calendar className="w-5 h-5" />
                <span>1.5 Years</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-zinc-900/30 px-4 py-2 rounded-xl border border-zinc-800/50"
              >
                <Code2 className="w-5 h-5" />
                <span>2024-Present</span>
              </motion.div>
            </motion.div>

            {/* Skills Grid with Advanced Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-5"
            >
              <p className="text-gray-300 font-light font-lexend text-sm md:text-base">
                During my course at PIAIC, I have learned and worked with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Modern Python Programming",
                  "LangChain & LangGraph Development",
                  "Chatbot Development",
                  "AI & Machine Learning Fundamentals",
                  "FullStack Web Development"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`group/item relative ${index === 4 ? 'md:col-span-2' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center gap-4 text-gray-300 font-light font-lexend text-sm md:text-base p-4 md:p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                      <div className="relative">
                        <CheckCircle2 className="w-6 h-6 text-purple-500" />
                        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span>{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;