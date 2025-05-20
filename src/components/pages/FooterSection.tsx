import "remixicon/fonts/remixicon.css";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="space-y-2 md:space-y-4">
            <div className="flex items-start md:items-center gap-3 md:gap-4">
              {/* Animate DevShayan> logo from the left on large screens */}
              <motion.div
                className="-mt-2 text-[30px] md:text-[30px] flex items-center logo-text"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span
                  style={{
                    fontFamily: "Blauer-Nue-Light",
                    background:
                      "linear-gradient(180deg, #9a9a9a 60%, #4a4a4a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 1px 2px rgba(188,188,188,0.35)",
                    marginRight: 2,
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  Dev
                </span>
                <span
                  style={{
                    fontFamily: "Blauer-Nue-Light",
                    color: "#fff",
                    textShadow: `
                    0 0 1.5px rgba(255, 255, 255, 0.6),
                    0 0 3px rgba(255, 255, 255, 0.4),
                    0 0 6px rgba(255, 255, 255, 0.25)
                  `,
                    marginLeft: -2,
                    fontWeight: 500,
                    letterSpacing: "0.7px",
                  }}
                >
                  Shayan
                </span>

                <span
                  style={{
                    fontFamily: "Blauer-Nue-Light",
                    color: "#39FF14",
                    textShadow: "0 1px 2px rgba(57,255,20,0.25)",
                    marginLeft: 2,
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  &gt;
                </span>
              </motion.div>
            </div>
            <p className="  text-xs md:text-sm font-lexend font-light max-w-[200px] leading-tight">
              I deliver excellent services with top-quality results to my
              clients.
            </p>
          </div>

          <div className="mt-2 md:mt-0">
            <h4 className="font-semibold text-white mb-1 md:mb-3 font-poppins text-sm md:text-base">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-1 md:gap-y-1.5 max-w-[240px]">
              <div className="flex flex-col gap-y-1">
                <li>
                  <Link
                    href="/#skills"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 font-lexend font-light text-xs md:text-sm"
                  >
                    My Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#project"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 font-lexend font-light text-xs md:text-sm"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#experience"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 font-lexend font-light text-xs md:text-sm"
                  >
                    Experience
                  </Link>
                </li>
              </div>
              <div className="flex flex-col gap-y-1">
                <li>
                  <Link
                    href="/#about"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 font-lexend font-light text-xs md:text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 font-lexend font-light text-xs md:text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 font-poppins">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/+923102017585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 font-lexend font-light text-sm"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp Support
                </a>
              </li>
              <li>
                <p className="text-gray-400 font-lexend font-light text-sm">
                  Response Time: Within 2 hours
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 font-poppins">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/iamshayan40"
                className="text-gray-400 hover:text-green-400 transform hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://pk.linkedin.com/in/shayan40"
                className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://wa.me/+923102017585"
                className="text-gray-400 hover:text-green-400 transform hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://instagram.com/iamshayan40"
                className="text-gray-400 hover:text-pink-400 transform hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/shayan.waseem.774904/"
                className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-12 pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-lexend font-light">
              <p className="text-sm font-lexend font-light">
                Copyright © {new Date().getFullYear()}{" "}
                <span className="font-semibold">
                  <span style={{ color: "#a0a0a0" }}>Dev</span>
                  <span className="text-white">Shayan</span>
                  <span style={{ color: "#00ff7f" }}>{">"}</span>
                </span>{" "}
                All rights reserved.
              </p>
            </p>
            <p className="text-sm font-lexend font-light">
              Designed & developed by{" "}
              <a
                href="https://portfolio-devshayan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-green-400 hover:text-green-300 transition-colors duration-300 group"
              >
                <span className="relative z-10">DevShayan</span>
                <span className="absolute inset-0 -z-10 bg-green-400/20 blur-sm scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
