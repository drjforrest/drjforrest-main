'use client';

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [sections, setSections] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Get all section IDs
    const sectionElements = document.querySelectorAll('section[id]');
    setSections(Array.from(sectionElements).map(section => section.id));

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="space-y-4">
          {sections.map((section) => (
            <motion.button
              key={section}
              className="group relative flex items-center"
              onClick={() => scrollTo(section)}
              whileHover={{ x: -8 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`w-3 h-3 rounded-full border-2 border-primary transition-all duration-200
                          ${activeSection === section ? 'bg-primary scale-125' : 'bg-white'}`}
              />
              <span className="absolute left-0 transform -translate-x-full px-4 py-1 
                             text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {section.replace(/-/g, ' ')}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile Quick Nav */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 rounded-full bg-primary text-white shadow-lg lg:hidden
                   hover:scale-110 active:scale-95 transition-transform"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollTo(sections[sections.indexOf(activeSection) + 1] || sections[0])}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </motion.button>
    </>
  );
}
