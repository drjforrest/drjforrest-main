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
      {/* ✅ Progress Bar at the Top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary/20 z-50">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Mobile section indicator */}
      <div className="fixed bottom-16 left-0 w-full flex justify-center items-center lg:hidden z-40">
        <div className="bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium shadow-lg border border-border">
          {sections.find(s => s.id === activeSection)?.label || 'Introduction'}
        </div>
      </div>
    </>
  );
}