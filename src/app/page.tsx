"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroContent from "@/components/pages/HeroContent";
import Slider from "@/components/pages/slider";
import LampContainer from "@/components/pages/LampContainer";
import Projects from "@/components/pages/Projects";
import SkillsSection from "@/components/pages/SkillsSection";
import Skills from "@/components/pages/Skills";
import AboutSection from "@/components/pages/AboutSection";
import ContactSection from "@/components/pages/ContactSection";
import Footer from "@/components/pages/FooterSection";
import PreLoader from "@/components/main/Preloader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out transition
      setTimeout(() => {
        setIsLoading(false); // Hide preloader after fade-out
      }, 1000); // 1 second delay to allow the transition to complete
    }, 3000); // Adjust the time (in ms) based on your animation duration

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <main className="h-full w-full overflow-x-hidden">
      {isLoading ? (
        <div
          className={`transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <PreLoader />
        </div>
      ) : (
        <div className="flex flex-col gap-20">
          <Navbar />
          <HeroContent />
          <SkillsSection />
          <Skills />
          <Slider />
          <LampContainer>
            <div></div>
          </LampContainer>
          <Projects />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </main>
  );
}

export default Home;
