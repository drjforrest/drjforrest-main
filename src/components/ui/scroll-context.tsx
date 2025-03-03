'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ScrollContextType {
  scrollProgress: number;
  activeSection: string;
  setActiveSection: (section: string) => void;
  sectionProgress: Record<string, number>;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollProgress: 0,
  activeSection: 'hero', // Default to hero section
  setActiveSection: () => {},
  sectionProgress: {},
});

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});
  
  useEffect(() => {
    // Function to calculate overall scroll progress
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(Math.max(scrolled / documentHeight, 0), 1);
      setScrollProgress(progress);
      
      // Calculate individual section progress
      const sections = ['hero', 'career', 'publications', 'education', 'interests', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const newSectionProgress: Record<string, number> = {};
      
      sectionElements.forEach((element, index) => {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate how much of the section is visible
        if (sectionTop > windowHeight) {
          // Section is below viewport
          newSectionProgress[sections[index]] = 0;
        } else if (sectionTop + sectionHeight < 0) {
          // Section is above viewport
          newSectionProgress[sections[index]] = 1;
        } else {
          // Section is partially visible
          const visiblePortion = Math.min(
            Math.max((windowHeight - sectionTop) / sectionHeight, 0),
            1
          );
          newSectionProgress[sections[index]] = visiblePortion;
        }
      });
      
      setSectionProgress(newSectionProgress);
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize values
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ 
      scrollProgress, 
      activeSection, 
      setActiveSection,
      sectionProgress
    }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}
