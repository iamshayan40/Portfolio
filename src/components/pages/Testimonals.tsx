import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Usama Amir Khosa",
    role: "CEO, Usama Bin Amir",
    image:
      "https://uba-portfolio.vercel.app/_next/image?url=%2Fteam%2Fusama.png&w=256&q=75",
    quote:
      "I hired Shayan to build my website for UBA International Ecom and was genuinely impressed. He delivered a clean, fast, and professional site that aligned perfectly with my brand's global vision. His communication, dedication, and execution were top-notch. Highly recommended for anyone seeking high-quality, agency-level web development.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  // Navigation handlers
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div className="w-full py-8 md:py-16 px-3 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-5xl pb-2 font-light font-lexend text-white mb-2 md:mb-4 tracking-tight">
            What My Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
              Says
            </span>
          </h2>
        </div>

        <div
          className="relative px-2 md:px-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Horizontal Carousel */}
          <div className="overflow-hidden">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex overflow-x-hidden"
                >
                  {/* Mobile Layout: Stacked, Desktop: Side by Side */}
                  <div className="w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-8">
                    {/* Profile Card - On Mobile, show on top */}
                    <div className="md:hidden bg-transparent border border-white/20 rounded-xl p-4 shadow-xl flex flex-col items-center justify-center mb-4">
                      <div className="relative mb-3">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-30"></div>
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="relative w-20 h-20 rounded-full object-cover border-2 border-purple-500/50"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-purple-300 text-center text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>

                    {/* Card with testimonial content */}
                    <div className="md:w-2/3 bg-transparent border border-white/20 rounded-xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
                      <div>
                        <div className="flex mb-3 md:mb-4 justify-center md:justify-start">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 md:w-5 md:h-5 ${
                                i < testimonials[currentIndex].rating
                                  ? "text-yellow-400"
                                  : "text-gray-400"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm md:text-lg italic text-gray-300 mb-4 md:mb-8 leading-relaxed line-clamp-6 md:line-clamp-none">
                          "{testimonials[currentIndex].quote}"
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-0.5 flex-grow bg-gradient-to-r from-transparent to-white/20 mr-2 md:mr-4"></div>
                        <svg
                          className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mx-1 md:mx-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <div className="h-0.5 flex-grow bg-gradient-to-l from-transparent to-white/20 ml-2 md:ml-4"></div>
                      </div>
                    </div>

                    {/* Profile Card - Desktop Only */}
                    <div className="hidden md:flex md:w-1/3 bg-transparent border border-white/20 rounded-xl p-8 shadow-xl flex-col items-center justify-center">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-30"></div>
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="relative w-32 h-32 rounded-full object-cover border-2 border-purple-500/50"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-purple-300 text-center">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation buttons - Better positioning for mobile */}
          <button
            onClick={goToPrev}
            className="absolute z-10 top-1/2 -translate-y-1/2 left-1 sm:left-2 md:-left-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full p-2 md:p-3 transition duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute z-10 top-1/2 -translate-y-1/2 right-1 sm:right-2 md:-right-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full p-2 md:p-3 transition duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-6 md:mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-1.5 md:w-10 md:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  : "w-1.5 h-1.5 md:w-2 md:h-2 bg-white/30 hover:bg-white/50 rounded-full"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
