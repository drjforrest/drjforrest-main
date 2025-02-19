'use client';

import React from 'react';
import { educationData, certifications, awards } from '@/data/education';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';

export function EducationCards() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative container mx-auto px-4 py-12">
      <div className="space-y-6 sm:space-y-8">
      
      {/* Education Section */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-primary break-words">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {edu.institution}
                    <br />
                    {edu.location} | {edu.period}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 space-y-3 text-sm text-foreground/80">
                <p><span className="font-medium text-primary">Focus:</span> {edu.focus}</p>
                {edu.thesis && (
                  <p><span className="font-medium text-primary">Thesis:</span> {edu.thesis}</p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Awards and Certifications */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        
        {/* Awards */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Awards</h3>
            </div>
            <div className="mt-4 space-y-6 text-sm">
              {awards.map((award, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-medium text-primary">{award.title}</h4>
                      <p className="text-foreground/70">{award.organization} | {award.year}</p>
                      {award.description && <p className="mt-1">{award.description}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <ScrollText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Certifications</h3>
            </div>
            <div className="mt-4 space-y-6 text-sm">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-medium text-primary">{cert.title}</h4>
                      <p className="text-foreground/70">{cert.organization}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
      </div>
    </section>
  );
}