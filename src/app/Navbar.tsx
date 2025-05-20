"use client"; // Ensure this component is a client component
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion"; // Import framer-motion for client-side animations
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LoadingBar from "react-top-loading-bar";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { XIcon } from "@heroicons/react/outline"; // Import the close icon
import "remixicon/fonts/remixicon.css";

const exploreVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control the menu open/close state
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);

    const timer1 = setTimeout(() => {
      setProgress(70);
    }, 100);

    const timer2 = setTimeout(() => {
      setProgress(100);
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(0);
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav className="relative flex items-center justify-between p-2 md:p-3 border-b border-zinc-800 mb-6">
      <LoadingBar
        color="#404040"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      {/* Animate DevShayan> logo from the left on large screens */}
      <motion.div
        className="text-[30px] md:text-[35px] pl-3 md:pl-6 flex items-center logo-text"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span
          style={{
            fontFamily: 'Blauer-Nue-Light',
            background: 'linear-gradient(180deg, #bcbcbc 60%, #6e6e6e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 1px 2px rgba(188,188,188,0.35)', // subtle glow
            marginRight: 2,
            fontWeight: 600,
            letterSpacing: '0.5px',
          }}
        >
          Dev
        </span>
       <span
  style={{
    fontFamily: 'Blauer-Nue-Light',
    color: '#fff',
    textShadow: `
      0 0 1.5px rgba(255, 255, 255, 0.6),
      0 0 3px rgba(255, 255, 255, 0.4),
      0 0 6px rgba(255, 255, 255, 0.25)
    `,
    marginLeft: -2,
    fontWeight: 500,
    letterSpacing: '0.7px',
  }}
>
  Shayan
</span>

        <span
          style={{
            fontFamily: 'Blauer-Nue-Light',
            color: '#39FF14',
            textShadow: '0 1px 2px rgba(57,255,20,0.25)', // subtle glow
            marginLeft: 2,
            fontWeight: 600,
            letterSpacing: '0.5px',
          }}
        >
          &gt;
        </span>
      </motion.div>

      {/* Desktop Navbar Links */}
      <div className="hidden lg:flex gap-12 pr-6 text-xl font-lexend font-extralight text-white">
        {["#skills", "#project", "#experience", "#about", "#contact"].map(
          (path, index) => {
            const labels = ["My Stack", "Projects","Experience", "About", "Contact"];
            return (
              <motion.div
                key={path}
                initial={{ x: 50, opacity: 0 }} // Animate in from the right
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }} // Add delay for staggered effect
                className="group relative" // Add group class here
              >
                <Link href={path} className="relative">
                  <span className="relative z-10">{labels[index]}</span>
                  <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-gray-200 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                </Link>
              </motion.div>
            );
          }
        )}
      </div>

      {/* Mobile Navbar Menu */}
      <div className="lg:hidden flex items-center">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          {" "}
          {/* Bind isMenuOpen to control sheet visibility */}
          <SheetTrigger asChild>
            <motion.div
              initial={{ x: 50, opacity: 0 }} // Animate in from the right
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <button>
                <i className="ri-menu-3-fill text-2xl text-white transition-transform duration-300 mr-3"></i>
              </button>
            </motion.div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* "Explore" heading with Top-to-Bottom animation */}
              <motion.h2
                className="text-3xl font-bold border-b mb-12 pb-8 mt-4 text-white"
                initial="hidden"
                animate="visible"
                variants={exploreVariants}
              >
                Explore Me
              </motion.h2>
            </SheetHeader>

            {/* White Close Button */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              <XIcon className="h-8 w-8" />
            </button>

            {/* Mobile Menu Links */}
           <motion.ul
  className="flex flex-col items-center gap-8 text-2xl font-extralight text-center text-white mt-12"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4 }}
>

              {["#skills", "#project", "#experience", "#about", "#contact"].map(
                (path, index) => {
                  const labels = [
                    "My Stack",
                    "Projects",
                    "Experience",
                    "About",
                    "Contact",
                  ];
                  return (
                    <motion.li
                      key={path}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="relative group"
                    >
                      <Link
                        href={path}
                        onClick={() => setIsMenuOpen(false)} // Close the sheet menu when a link is clicked
                      >
                        {labels[index]}
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-200 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                      </Link>
                    </motion.li>
                  );
                }
              )}
            </motion.ul>

            {/* Social Icons - Positioned at the Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-center justify-center">
              <div className="flex space-x-6 -mb-4">
                {/* Each icon with bottom-to-top animation */}
                {[
                  { href: "https://github.com/iamshayan40", icon: faGithub },
                  { href: "https://www.facebook.com/", icon: faFacebookF },
                  {
                    href: "https://pk.linkedin.com/in/shayan40",
                    icon: faLinkedin,
                  },
                  {
                    href: "https://instagram.com/iamshayan40",
                    icon: faInstagram,
                  },
                  {
                    href: "mailto:shayanwaseem.50@gmail.com",
                    icon: faEnvelope,
                  },
                ].map(({ href, icon }, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1 }}>
                    <Link
                      href={href}
                      className="text-white transition-colors duration-300"
                      target="_blank" // Open link in a new tab
                      rel="noopener noreferrer" // Security best practice
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        size="xl"
                        className="transition-colors duration-300"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
