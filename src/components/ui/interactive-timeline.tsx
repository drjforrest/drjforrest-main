'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { Calendar, Award, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineEvent {
  year: string;
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

  const sortedEvents = [...events].sort((a, b) => 
    parseInt(b.year) - parseInt(a.year)
  );

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-border" />

      {/* Events */}
      <div className="space-y-8">
        {sortedEvents.map((event, index) => (
          <motion.div
            key={`${event.year}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-16"
          >
            {/* Year marker */}
            <motion.div
              className="absolute left-0 w-[1.125rem] h-[1.125rem] rounded-full bg-primary"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            <button
              className="w-full text-left"
              onClick={() => setSelectedEvent(selectedEvent?.year === event.year ? null : event)}
            >
              <Card
                className={cn(
                  "p-6 bg-surface-elevated/95 backdrop-blur cursor-pointer hover:elevation-3 transition-all duration-300",
                  selectedEvent?.year === event.year ? 'elevation-3' : ''
                )}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 text-primary">
                    {event.type === 'award' ? (
                      <Award className="h-4 w-4" />
                    ) : (
                      <Calendar className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium">{event.year}</span>
                  </div>
                  
                  {event.type === 'milestone' && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      Milestone
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold mt-2">{event.title}</h3>

                <AnimatePresence>
                  {selectedEvent?.year === event.year && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-content-muted">{event.description}</p>
                      {event.impact && (
                        <div className="mt-4 p-4 rounded-lg bg-primary/5">
                          <h4 className="text-sm font-medium mb-2">Impact</h4>
                          <p className="text-sm text-content-muted">{event.impact}</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  className="mt-4 flex items-center gap-2 text-primary text-sm"
                  animate={{ 
                    rotate: selectedEvent?.year === event.year ? 90 : 0 
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>{selectedEvent?.year === event.year ? 'Show Less' : 'Learn More'}</span>
                </motion.div>
              </Card>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}