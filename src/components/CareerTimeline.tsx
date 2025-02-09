'use client';

import React from 'react';
import { positionData } from '@/data/positions';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function CareerTimeline() {
  return (
    <div className="relative container mx-auto px-4">
      {/* Vertical Line - Now Uses Deep Navy */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px]" 
        style={{ backgroundColor: "rgb(var(--primary))", zIndex: 0 }} 
      />

      <div className="space-y-12">
        {positionData.map((position, index) => (
          <div
            key={`${position.title}-${index}`}
            className={`flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {/* Timeline content */}
            <div className="w-1/2 px-8">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-primary">
                        {position.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {position.organization} | {position.location}
                      </p>
                      <p className="text-sm font-medium text-primary/80">
                        {position.period}
                      </p>
                    </div>
                    
                    <p className="text-sm text-card-foreground">
                      {position.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Center Dot - Now Uses Rich Bronze */}
            <motion.div 
              className="w-4 h-4 rounded-full relative shadow-md"
              style={{ backgroundColor: "rgb(var(--accent))", zIndex: 2 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <div 
                className="w-8 h-8 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                style={{ backgroundColor: "rgba(var(--accent), 0.2)" }} /* Faded accent for glow effect */
              />
            </motion.div>

            {/* Empty space for alternating layout */}
            <div className="w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
