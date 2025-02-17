'use client';

import { motion } from 'framer-motion';
import { useScroll } from './scroll-context';

interface Section {
  id: string;
  label: string;
}

interface ScrollNavigationProps {
  sections: Section[];
}

export function ScrollNavigation({ sections }: ScrollNavigationProps) {
  const { scrollProgress, activeSection } = useScroll();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary/20 z-50">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Section Navigation */}
      <nav className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <div key={section.id} className="group relative">
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-primary scale-125'
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Scroll to ${section.label}`}
              />
              <span className="absolute left-0 transform -translate-x-full px-4 py-1 
                             text-sm text-primary opacity-0 group-hover:opacity-100 
                             transition-opacity whitespace-nowrap">
                {section.label}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
