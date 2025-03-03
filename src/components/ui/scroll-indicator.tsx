'use client';

import { motion, useSpring as useFramerSpring } from "framer-motion";
import { useEffect } from "react";
import { useScroll } from './scroll-context';

const sections = [
  { id: 'hero', label: 'Introduction' },
  { id: 'career', label: 'Career Journey' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' }
];

export function ScrollIndicator() {
  // Use our custom scroll context instead of framer-motion's useScroll
  const { scrollProgress, activeSection, setActiveSection } = useScroll();
  
  // Create a spring animation for the progress bar
  const scaleX = useFramerSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Enhanced Intersection Observer for detecting active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If element is intersecting with higher threshold for accuracy
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: [0.2, 0.4, 0.6], // Multiple thresholds for smoother detection
        rootMargin: '-5% 0px -45% 0px' // Adjusted margins for better detection
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
  }, [setActiveSection]); // Include setActiveSection in dependencies

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

            {/* Enhanced Circle Indicator with Better Animation */}
            <motion.div 
              className="w-3 h-3 rounded-full border-2 border-primary transition-all duration-300"
              animate={{
                backgroundColor: activeSection === section.id ? 'var(--primary)' : 'var(--background)',
                scale: activeSection === section.id ? 1.4 : 1,
                boxShadow: activeSection === section.id ? '0 0 10px rgba(var(--primary-rgb), 0.5)' : 'none'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
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