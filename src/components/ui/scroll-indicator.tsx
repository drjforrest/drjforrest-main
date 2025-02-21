'use client';

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: 'hero', label: 'Introduction' },
  { id: 'career', label: 'Career Journey' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' }
];

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState<string>("hero"); // Set initial state to "hero"

  useEffect(() => {
    // Intersection Observer for detecting active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If element is intersecting and in viewport
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: [0.3], // Single threshold for more consistent tracking
        rootMargin: '-10% 0px -70% 0px' // Adjust the detection area to favor the top of sections
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []); // Remove activeSection from dependencies

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
  
      {/* Navigation Dots with Labels */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col items-end space-y-4">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            className="group relative flex items-center space-x-2"
            onClick={() => scrollTo(section.id)}
            whileHover={{ x: -8 }}
            transition={{ duration: 0.2 }}
          >
            {/* Always Visible Label with Proper Spacing */}
            <motion.span
              className="text-primary text-sm font-medium opacity-100 transition-opacity whitespace-nowrap mr-2"
              animate={activeSection === section.id ? { fontWeight: 700 } : {}}
            >
              {section.label}
            </motion.span>

            {/* Circle Indicator with Better Scaling */}
            <motion.div
              className={`w-3 h-3 rounded-full border-2 border-primary transition-all duration-200
                          ${activeSection === section.id ? 'bg-primary scale-[1.4] shadow-lg' : 'bg-background'}`}
            />
          </motion.button>
        ))}
      </div>
  
      {/* Mobile Quick Nav (Scrolls to Next Section) */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 rounded-full bg-primary text-white shadow-lg lg:hidden
                   hover:scale-110 active:scale-95 transition-transform"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const nextIndex = sections.findIndex(s => s.id === activeSection) + 1;
          scrollTo(sections[nextIndex]?.id || sections[0].id);
        }}
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