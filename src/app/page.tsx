import React from "react";
// Import your components here
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

function Home() {
  return (
    <main className="h-full w-full">
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
    </main>
  );
}

export default Home;
