'use client';

import { motion } from 'framer-motion';
import { FileText, GraduationCap, Building2, BookOpen, BarChart } from 'lucide-react';

interface TimelineEntryProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  highlights?: string[];
  type: 'experience' | 'education' | 'publication';
  index: number;
}

function TimelineEntry({ 
  year, 
  title, 
  organization, 
  description, 
  highlights,
  type,
  index 
}: TimelineEntryProps) {
  const getIcon = () => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-6 h-6" />;
      case 'publication':
        return <BookOpen className="w-6 h-6" />;
      default:
        return <Building2 className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20" />
      
      {/* Timeline dot */}
      <div className="absolute left-[-12px] top-0 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary">
        {getIcon()}
      </div>

      {/* Content */}
      <div className="bg-background/50 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20">
        <div className="text-sm font-medium text-primary mb-2">{year}</div>
        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <div className="text-foreground/70 font-medium mb-3">{organization}</div>
        <p className="text-foreground/60 mb-4">{description}</p>
        
        {highlights && (
          <div className="space-y-2">
            {highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="flex items-start gap-2 text-sm text-foreground/70"
              >
                <FileText className="w-4 h-4 mt-0.5 text-accent" />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  const timelineEntries: TimelineEntryProps[] = [
    {
      year: '2023 - Present',
      title: 'Research & Strategy Lead',
      organization: 'Purpose Africa – Addis Ababa | Vancouver (Remote)',
      description: 'Leading pan-African clinical research and data science initiatives.',
      highlights: [
        'Authored comprehensive clinical research strategies and frameworks',
        'Led development of technical documentation and research protocols',
        'Managed publication strategy for multi-country research findings'
      ],
      type: 'experience',
      index: 0
    },
    {
      year: '2022',
      title: 'Major Publication Achievement',
      organization: 'TOGETHER Trial',
      description: 'Led writing team for significant COVID-19 therapeutic findings.',
      highlights: [
        'Published in high-impact medical journals',
        'Coordinated multi-author submissions and revisions',
        'Developed clinical trial documentation standards'
      ],
      type: 'publication',
      index: 1
    },
    {
      year: '2021 - 2023',
      title: 'Chief Partnerships Officer',
      organization: 'Purpose Life Sciences',
      description: 'Led strategic partnership expansion of clinical trials.',
      highlights: [
        'Directed medical writing team for clinical trial documentation',
        'Established publication strategy for trial outcomes',
        'Developed SOPs for clinical documentation'
      ],
      type: 'experience',
      index: 2
    },
    {
      year: '2017 - 2021',
      title: 'Ph.D. in Population & Public Health',
      organization: 'University of British Columbia, Faculty of Medicine',
      description: 'Doctoral research with extensive publication output.',
      highlights: [
        'Published multiple peer-reviewed articles as lead author',
        'Developed clinical research protocols',
        'Technical writing for grant applications and ethics submissions'
      ],
      type: 'education',
      index: 3
    },
  ];

  return (
    <section className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <BarChart className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Professional Journey</h2>
          </div>

          <div className="space-y-8">
            {timelineEntries.map((entry, index) => (
              <TimelineEntry 
                key={entry.title}
                year={entry.year}
                title={entry.title}
                organization={entry.organization}
                description={entry.description}
                highlights={entry.highlights}
                type={entry.type}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}