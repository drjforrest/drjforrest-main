'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { Calendar, Award, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  type: 'publication' | 'award' | 'milestone';
  impact?: string;
}

interface InteractiveTimelineProps {
  events: TimelineEvent[];
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function InteractiveTimeline({ events }: InteractiveTimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const sortedEvents = [...events].sort((a, b) => b.year - a.year);

  return (
    <div className="relative">
      {/* Timeline line - hidden on mobile */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2" />

      <div className="space-y-6 relative">
        {sortedEvents.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Mobile-optimized layout */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Date marker - Adjusted for mobile */}
              <div className="flex md:justify-end items-center mb-4 md:mb-0">
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="text-sm md:text-base font-medium text-primary">
                    {event.year}
                  </span>
                  {/* Circle marker - Hidden on mobile */}
                  <div className="hidden md:block w-4 h-4 rounded-full bg-primary relative z-10">
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  </div>
                </div>
              </div>

              {/* Content card */}
              <div className="md:pl-4">
                <button
                  className="w-full text-left"
                  onClick={() => setSelectedEvent(selectedEvent?.year === event.year ? null : event)}
                >
                  <Card
                    variant="interactive"
                    className={cn(
                      "p-4 md:p-6 transition-all duration-300",
                      selectedEvent?.year === event.year 
                        ? 'ring-2 ring-primary/20 shadow-lg' 
                        : 'hover:shadow-md'
                    )}
                  >
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-2 text-primary">
                          {event.type === 'award' ? (
                            <Award className="h-4 w-4 flex-shrink-0" />
                          ) : (
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                          )}
                          <h3 className="text-base md:text-lg font-semibold break-words">
                            {event.title}
                          </h3>
                        </div>
                        
                        {event.type === 'milestone' && (
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                            Milestone
                          </span>
                        )}
                      </div>

                      {/* Description - Collapsible on mobile */}
                      <AnimatePresence>
                        {selectedEvent?.year === event.year && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-foreground/70 mt-2">
                              {event.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Card>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
