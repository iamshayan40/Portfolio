"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 h-80 md:-mt-28 -mt-32",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-75 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }} // Smaller initial width for mobile
          whileInView={{ opacity: 1, width: "20rem" }} // Default width
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-36 w-[5rem] bg-gradient-conic from-blue-700 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] md:w-[30rem] sm:w-[15rem]" // Set a very small width for mobile
        >
          <div className="absolute w-[100%] left-0 bg-background h-24 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-32 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }} // Smaller initial width for mobile
          whileInView={{ opacity: 1, width: "20rem" }} // Default width
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-36 w-[5rem] bg-gradient-conic from-transparent via-transparent to-blue-700 text-white [--conic-position:from_290deg_at_center_top] md:w-[30rem] sm:w-[15rem]" // Set a very small width for mobile
        >
          <div className="absolute w-32 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-background h-24 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-32 w-full translate-y-12 scale-x-150 bg-background blur-[8rem] opacity-0"></div>

        <div className="absolute top-1/2 z-50 h-32 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <motion.div
          initial={{ width: "3rem" }} // Smaller initial width for mobile
          whileInView={{ width: "6rem" }} // Default width
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-28 w-24 -translate-y-[6rem] rounded-full bg-primary blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "5rem" }} // Smaller initial width for mobile
          whileInView={{ width: "10rem" }} // Default width
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[10rem] -translate-y-[7rem]"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background opacity-0"></div>
      </div>

      <div className="relative z-50 flex flex-col items-center px-5">
        <h1 className="-mt-40 md:-mt-36 mb-12 text-4xl sm:text-5xl font-extralight font-lexend text-white text-center">
          Projects I Created With My
          <span className="text-green-600">
            {" "}
            TechStack
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LampContainer;
