'use client';

import React, { useState, useEffect } from 'react';
import { positionData } from '@/data/positions';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function CareerTimeline() {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="relative container mx-auto px-4">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-primary/20" />
        <div className="space-y-12">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2 px-4 md:px-8">
                <Card className="p-6 bg-white/90 backdrop-blur-sm border border-primary/10">
                  <div className="space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                </Card>
              </div>
              <div className="hidden md:block w-4 h-4 rounded-full bg-primary/20" />
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative container mx-auto px-4">
      {/* Vertical Timeline Line */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px]" 
        style={{ 
          background: "linear-gradient(180deg, transparent 0%, rgb(var(--primary)) 5%, rgb(var(--primary)) 95%, transparent 100%)",
          zIndex: 0 
        }} 
      />

      <div className="space-y-12">
        {positionData.map((position, index) => (
          <div
            key={`${position.title}-${index}`}
            className={`flex items-center ${
              index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'
            }`}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {/* Timeline content */}
            <div className="w-full md:w-1/2 px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card 
                  className="p-6 bg-white/90 backdrop-blur-sm border border-primary/10 
                           shadow-lg hover:shadow-xl transition-all duration-300 
                           transform hover:-translate-y-1 cursor-pointer
                           hover:border-primary/20"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-primary">
                          {position.title}
                        </h3>
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.organization}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/70">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Calendar className="w-4 h-4" />
                          <span>{position.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80">
                      {position.description}
                    </p>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 space-y-2 border-t border-primary/10">
                            <h4 className="font-medium text-primary">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {position.achievements.map((achievement, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 text-foreground/70"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Center Dot */}
            <motion.div 
              className="w-4 h-4 rounded-full relative shadow-md my-4 md:my-0"
              style={{ backgroundColor: "#26385C" }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <div 
                className="w-8 h-8 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                style={{ backgroundColor: "rgba(38, 56, 92, 0.2)" }}
              />
            </motion.div>

            {/* Empty space for alternating layout */}
            <div className="hidden md:block w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
