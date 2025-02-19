'use client';

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

export function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springConfig
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -400]),
    springConfig
  );
  const y3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig
  );

  const rotate1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 45]),
    springConfig
  );
  const rotate2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -45]),
    springConfig
  );

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      {/* ✅ Smooth Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />

      {/* ✅ Floating Animated Shapes */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-primary/5"
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-[30%] right-[15%] w-96 h-96 rounded-full bg-primary/10"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[50%] left-[30%] w-48 h-48 rounded-full bg-accent/5"
      />

      {/* ❌ REMOVED Grid Lines */}
      {/* ❌ REMOVED Animated Lines */}
    </div>
  );
}