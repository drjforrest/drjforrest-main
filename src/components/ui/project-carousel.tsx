'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  period: string;
  paperThumbnail: string;
  description: string;
  expandedDescription: string;
  impact: string;
  paperLink?: string;
  paperTitle?: string;
  journal?: string;
  citationCount?: number;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeProject, setActiveProject] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

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

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className="carousel-nav-button pointer-events-auto"
          onClick={() => {
            setDirection(-1);
            setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
          }}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="carousel-nav-button pointer-events-auto"
          onClick={() => {
            setDirection(1);
            setActiveProject((prev) => (prev + 1) % projects.length);
          }}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Project Card */}
      <Card className="w-full max-w-5xl mx-auto p-6 shadow-lg bg-white/90">
        <motion.div
          key={activeProject}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Image / Publication Link */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
            {projects[activeProject].paperLink ? (
              <a 
                href={projects[activeProject].paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 group cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {projects[activeProject].paperThumbnail && (
                    <Image
                      src={projects[activeProject].paperThumbnail}
                      alt={projects[activeProject].paperTitle || projects[activeProject].title}
                      fill
                      className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                      style={{ objectPosition: 'center' }}
                    />
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/5">
                  <div className="bg-background/90 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="text-sm font-medium">Read Publication</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </a>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                {projects[activeProject].paperThumbnail && (
                  <Image
                    src={projects[activeProject].paperThumbnail}
                    alt={projects[activeProject].paperTitle || projects[activeProject].title}
                    fill
                    className="object-contain"
                    style={{ objectPosition: 'center' }}
                  />
                )}
              </div>
            )}
          </div>
          
          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-1">{projects[activeProject].title}</h3>
              <p className="text-sm text-primary font-medium">{projects[activeProject].period}</p>
            </div>
            
            <p className="text-muted-foreground">{projects[activeProject].description}</p>
            
            <div className="space-y-2">
              <p className="text-sm">{projects[activeProject].expandedDescription}</p>
              
              {projects[activeProject].paperTitle && (
                <div className="mt-4 p-4 bg-muted/5 rounded-lg border border-primary/10">
                  <h4 className="font-medium mb-2">Key Publication</h4>
                  <p className="text-sm font-medium">{projects[activeProject].paperTitle}</p>
                  {projects[activeProject].journal && (
                    <p className="text-sm text-primary mt-1">{projects[activeProject].journal}</p>
                  )}
                  {projects[activeProject].citationCount && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Citations: {projects[activeProject].citationCount}
                    </p>
                  )}
                </div>
              )}
              
              <p className="text-sm font-medium mt-4">Impact: {projects[activeProject].impact}</p>
            </div>

            {projects[activeProject].paperLink && (
              <Button asChild variant="outline" size="sm">
                <a 
                  href={projects[activeProject].paperLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Read Publication
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </Card>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeProject ? 1 : -1);
              setActiveProject(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeProject ? 'bg-primary' : 'bg-primary/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}