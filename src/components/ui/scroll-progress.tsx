'use client';

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ChevronUp } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Introduction' },
  { id: 'career', label: 'Career Journey' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' }
];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const determineActiveSection = useCallback(() => {
    const sectionElements = sections.map(section => ({
      id: section.id,
      element: document.getElementById(section.id)
    }));

    const currentSection = sectionElements.find(section => {
      if (!section.element) return false;
      const rect = section.element.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    });

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  }, []);

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 100);
    setShowScrollTop(window.scrollY > window.innerHeight);
    determineActiveSection();
  }, [determineActiveSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Enhanced Progress Bar with Section Markers */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <motion.div
          className="absolute inset-0 bg-primary/30"
          style={{ scaleX, transformOrigin: "0%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Section Markers */}
        <div className="absolute inset-0 flex">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="relative flex-1"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {hoveredSection === section.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-2 left-1/2 transform -translate-x-1/2 
                           bg-primary text-white px-2 py-1 rounded text-xs whitespace-nowrap"
                >
                  {section.label}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Section Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="space-y-4">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className="group relative flex items-center"
              onClick={() => scrollToSection(section.id)}
              whileHover={{ x: -8 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`w-3 h-3 rounded-full border-2 border-primary transition-all duration-300
                          ${activeSection === section.id ? 'bg-primary scale-125' : 'bg-background'}
                          hover:border-primary/80`}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20"
                  initial={false}
                  animate={activeSection === section.id ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 0.5, repeat: activeSection === section.id ? Infinity : 0 }}
                />
              </motion.div>
              
              <motion.span
                className="absolute left-0 transform -translate-x-full px-4 py-1 
                         bg-background/80 backdrop-blur-sm rounded-md
                         text-sm text-primary opacity-0 group-hover:opacity-100 
                         transition-all duration-200"
                initial={{ x: 20, opacity: 0 }}
                whileHover={{ x: -8, opacity: 1 }}
              >
                {section.label}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 rounded-full bg-primary text-white shadow-lg
                   hover:bg-primary/90 transition-all duration-300"
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 100,
          scale: 1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
      >
        <ChevronUp className="w-6 h-6" />
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>
    </>
  );
}