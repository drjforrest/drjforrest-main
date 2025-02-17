'use client';

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorEffect() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        className="hidden lg:block fixed w-8 h-8 pointer-events-none z-50 rounded-full 
                   border-2 border-primary mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        className="hidden lg:block fixed w-2 h-2 pointer-events-none z-50 rounded-full 
                   bg-primary mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
}
