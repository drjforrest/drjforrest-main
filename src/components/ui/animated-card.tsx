'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function AnimatedCard({ children, className, delay = 0, hover = true }: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -2, transition: { duration: 0.2 } } : undefined}
    >
      <Card 
        className={cn(
          "bg-surface-elevated shadow-md backdrop-blur-sm transition-all duration-300",
          hover && "hover:shadow-lg hover:border-primary/30",
          className
        )}
      >
        {children}
      </Card>
    </motion.div>
  );
}