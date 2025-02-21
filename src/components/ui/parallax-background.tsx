'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export function ParallaxBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"
          style={{
            background: theme === 'dark' 
              ? 'radial-gradient(circle at top left, rgba(42, 157, 143, 0.05), transparent 70%)' 
              : 'radial-gradient(circle at top left, rgba(42, 157, 143, 0.02), transparent 70%)'
          }}
        />

        {/* Subtle animated shapes */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            backgroundImage: theme === 'dark'
              ? 'radial-gradient(circle at 50% 50%, rgba(42, 157, 143, 0.03) 0%, transparent 50%)'
              : 'radial-gradient(circle at 50% 50%, rgba(42, 157, 143, 0.015) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </motion.div>
    </div>
  );
}