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
  const { scrollProgress } = useScroll();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ✅ Keep: Progress Bar at the Top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary/20 z-50">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* ❌ Remove: Side Navigation Dots */}
    </>
  );
}