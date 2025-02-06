'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Book, Award, Calendar } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  journal: string;
  year: string;
  impact: number;
  citation: string;
  doi?: string;
  abstract?: string;
}

export function PublicationCard({
  title,
  journal,
  year,
  impact,
  citation,
  doi,
  abstract
}: PublicationCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[300px] w-full perspective">
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 backface-hidden p-6 flex flex-col bg-surface-elevated/95 backdrop-blur hover:elevation-3 transition-shadow duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 text-primary">
              <Book className="h-4 w-4" />
              <span className="text-sm">{year}</span>
            </div>
            {impact && (
              <div className="flex items-center gap-2 text-primary">
                <Award className="h-4 w-4" />
                <span className="text-sm">Impact: {impact}</span>
              </div>
            )}
          </div>

          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-content-muted text-sm mb-4 italic">{journal}</p>

          <div className="mt-auto flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFlipped(true)}
            >
              View Details
            </Button>
            {doi && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                asChild
              >
                <a 
                  href={`https://doi.org/${doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  DOI
                </a>
              </Button>
            )}
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 backface-hidden p-6 flex flex-col bg-surface-elevated/95 backdrop-blur rotate-y-180">
          <div className="flex-1 overflow-y-auto">
            <div className="text-sm text-content-muted mb-4">
              <h4 className="font-medium text-content mb-2">Citation</h4>
              <p>{citation}</p>
            </div>
            
            {abstract && (
              <div className="text-sm text-content-muted">
                <h4 className="font-medium text-content mb-2">Abstract</h4>
                <p>{abstract}</p>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="mt-4"
            onClick={() => setIsFlipped(false)}
          >
            Back to Overview
          </Button>
        </Card>
      </motion.div>
    </div>
  );
}