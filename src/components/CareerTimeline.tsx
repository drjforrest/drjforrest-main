"use client";

import { useState, useEffect } from 'react';
import { positionData } from '@/data/positions';
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function CareerTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Collapse the previously expanded card if a new one is clicked
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".career-card")) {
        setExpandedIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative container mx-auto px-4">
      {/* Vertical Timeline Line */}
      <div 
        className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[3px] bg-primary/20" 
        style={{ zIndex: 0 }} 
      />

      <div className="space-y-12">
        {positionData.map((position, index) => (
          <div
            key={`${position.title}-${index}`}
            className={`flex items-start ${
              index % 2 === 0 ? 'md:flex-row flex-col pl-8 md:pl-0' : 'md:flex-row-reverse flex-col pl-8 md:pl-0'
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
                  className="p-6 bg-background/50 border border-gray-200 shadow-lg 
                           hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer
                           hover:border-primary/20 career-card"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering `handleClickOutside`
                    setExpandedIndex(expandedIndex === index ? null : index);
                  }}
                >
                  <div className="space-y-4">
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

                    {/* Expandable Description */}
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 text-foreground/80 border-t border-gray-200"
                        >
                          <p>{position.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}