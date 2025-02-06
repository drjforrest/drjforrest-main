'use client';

import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface Project {
  title: string;
  period: string;
  description: string;
  expandedDescription: string;
  impact?: string;
  image: string;
  link?: string;
  tags?: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = projects.length - 1;
      if (newIndex >= projects.length) newIndex = 0;
      return newIndex;
    });
    setIsExpanded(false);
  }, [projects.length]);

  const currentProject = projects[currentIndex];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="bg-surface-elevated/95 backdrop-blur overflow-hidden transition-shadow duration-300 hover:elevation-3">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <OptimizedImage
                  src={currentProject.image}
                  alt={currentProject.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Section */}
          <div className="p-6 lg:p-8 flex flex-col lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-2 text-primary">{currentProject.period}</div>
                <h3 className="text-2xl font-bold mb-4">{currentProject.title}</h3>
                
                <div className="prose prose-sm dark:prose-invert">
                  <p>{isExpanded ? currentProject.expandedDescription : currentProject.description}</p>
                  {currentProject.impact && isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold mt-4">Impact</h4>
                      <p>{currentProject.impact}</p>
                    </motion.div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                  </Button>
                  
                  {currentProject.link && (
                    <Button asChild>
                      <Link 
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group"
                      >
                        Visit Project
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Card>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4">
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto bg-background/20 backdrop-blur hover:bg-background/40 transition-colors"
          onClick={() => paginate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto bg-background/20 backdrop-blur hover:bg-background/40 transition-colors"
          onClick={() => paginate(1)}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}