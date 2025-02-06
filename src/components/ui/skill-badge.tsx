'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm inline-flex items-center gap-2 hover:bg-primary/20 transition-colors"
    >
      {skill}
    </motion.span>
  );
}