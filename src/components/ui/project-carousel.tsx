"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  period: string;
  image: string;
  description: string;
  expandedDescription: string;
  impact: string;
  link?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsExpanded(false);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsExpanded(false);
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={previous}
          className="rounded-full bg-background/80 backdrop-blur hover:bg-background"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full bg-background/80 backdrop-blur hover:bg-background"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Project Cards */}
      <div className="overflow-hidden relative px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-surface-elevated/95 backdrop-blur p-8 mx-auto max-w-4xl">
              <div className="flex flex-col gap-6">
                {/* Image with fallback */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/api/placeholder/800/400"; // Fallback to placeholder
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-primary">{projects[currentIndex].period}</p>
                  <h3 className="text-2xl font-bold">{projects[currentIndex].title}</h3>
                </div>

                <div className="prose prose-sm dark:prose-invert">
                  <p className="text-content-muted">
                    {isExpanded 
                      ? projects[currentIndex].expandedDescription 
                      : projects[currentIndex].description}
                  </p>
                  
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4"
                    >
                      <h4 className="text-lg font-semibold mb-2">Impact</h4>
                      <p className="text-content-muted">{projects[currentIndex].impact}</p>
                    </motion.div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <Button
                    variant="ghost"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-primary hover:text-primary/90"
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                  </Button>

                  {projects[currentIndex].link && (
                    <a
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/90 gap-2"
                    >
                      Visit Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsExpanded(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-primary w-6" 
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}