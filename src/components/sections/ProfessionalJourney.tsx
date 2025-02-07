'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart, 
  FileText, 
  GraduationCap, 
  Building2, 
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'experience' | 'education' | 'publication';
  highlights: string[];
  project?: {
    title: string;
    description: string;
    link?: string;
    technologies?: string[];
  };
}

const timelineData: TimelineEntry[] = [
  {
    id: '2023',
    year: '2023 - Present',
    title: 'Research & Strategy Lead',
    organization: 'Purpose Africa',
    type: 'experience',
    description: 'Leading strategic planning, resource mobilization, and results framework for pan-African clinical research and data science capacity-development initiative.',
    highlights: [
      'Leading pan-African clinical research and data science initiatives',
      'Developing comprehensive research strategies and frameworks',
      'Managing multi-country research publication strategies'
    ],
    project: {
      title: 'African Clinical Research Network',
      description: 'Developing infrastructure for multi-country clinical trials and research capacity building',
      technologies: ['Research Strategy', 'Clinical Trials', 'Data Science']
    }
  },
  {
    id: '2021',
    year: '2021 - 2023',
    title: 'Chief Partnerships Officer',
    organization: 'Platform Life Sciences',
    type: 'experience',
    description: 'Led strategic partnership expansion of the TOGETHER adaptive platform clinical trial for COVID-19 therapeutics.',
    highlights: [
      'Expanded clinical trial partnerships across multiple countries',
      'Led medical writing team for trial documentation',
      'Established publication strategy for trial outcomes'
    ],
    project: {
      title: 'TOGETHER Trial',
      description: 'Major COVID-19 therapeutic trial with significant findings published in high-impact journals',
      technologies: ['Clinical Trials', 'Medical Writing', 'Research Strategy']
    }
  },
  {
    id: '2019',
    year: '2019 - 2021',
    title: 'Ph.D. Population & Public Health',
    organization: 'University of British Columbia',
    type: 'education',
    description: 'Doctoral research on health and social networking technologies in harder-to-reach populations.',
    highlights: [
      'Published multiple peer-reviewed articles as lead author',
      'Developed innovative research methodologies',
      'Led international research collaborations'
    ],
    project: {
      title: 'Digital Health Networks',
      description: 'Research on health technology adoption and social networks in healthcare',
      technologies: ['Mixed Methods', 'Network Analysis', 'Digital Health']
    }
  },
  {
    id: '2017',
    year: '2017 - 2020',
    title: 'Managing Director, East Africa',
    organization: 'MTEK Sciences',
    type: 'experience',
    description: 'Expanded business operations into East Africa, delivering technical guidance for data-driven healthcare initiatives.',
    highlights: [
      'Established East African operational presence',
      'Led healthcare data optimization projects',
      'Developed partnerships with government health agencies'
    ],
    project: {
      title: 'Health Data Systems',
      description: 'Implementation of integrated health data systems across multiple countries',
      technologies: ['Health Systems', 'Data Integration', 'Capacity Building']
    }
  }
];

function TimelineDot({ type, isActive }: { type: TimelineEntry['type']; isActive: boolean }) {
  const getIcon = () => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4" />;
      case 'publication':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <Building2 className="w-4 h-4" />;
    }
  };

  return (
    <div className={`
      w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
      ${isActive ? 'bg-primary text-background' : 'bg-background text-primary'}
      border-2 border-primary
    `}>
      {getIcon()}
    </div>
  );
}

export function ProfessionalJourney() {
  const [activeEntry, setActiveEntry] = useState<string>(timelineData[0].id);
  const currentEntry = timelineData.find(entry => entry.id === activeEntry);

  return (
    <section className="py-20">
      <SectionTitle>Professional Journey</SectionTitle>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Horizontal Timeline Navigation */}
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-primary/20 -translate-y-1/2" />
            <div className="relative flex justify-between max-w-3xl mx-auto">
              {timelineData.map((entry) => (
                <motion.button
                  key={entry.id}
                  onClick={() => setActiveEntry(entry.id)}
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <TimelineDot type={entry.type} isActive={activeEntry === entry.id} />
                  <span className="text-sm font-medium">
                    {entry.year.split(' ')[0]}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            {currentEntry && (
              <motion.div
                key={currentEntry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="bg-background/50 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6">
                  <div className="text-sm font-medium text-primary mb-2">
                    {currentEntry.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">
                    {currentEntry.title}
                  </h3>
                  <div className="text-foreground/70 font-medium mb-3">
                    {currentEntry.organization}
                  </div>
                  <p className="text-foreground/60 mb-4">
                    {currentEntry.description}
                  </p>

                  <div className="space-y-2">
                    {currentEntry.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-2 text-sm text-foreground/70"
                      >
                        <FileText className="w-4 h-4 mt-0.5 text-accent" />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {currentEntry.project && (
                    <div className="mt-6 pt-6 border-t border-foreground/10">
                      <h4 className="text-lg font-semibold mb-2">
                        Featured Project: {currentEntry.project.title}
                      </h4>
                      <p className="text-foreground/60 mb-4">
                        {currentEntry.project.description}
                      </p>
                      {currentEntry.project.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {currentEntry.project.technologies.map(tech => (
                            <span 
                              key={tech}
                              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}