'use client';

import React from 'react';
import { educationData, certifications, awards } from '@/data/education';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
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
      <div className="space-y-8">
      {/* Education Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-primary/10 h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-primary">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription>
                      {edu.institution}
                      <br />
                      {edu.location} | {edu.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground/80">
                    <span className="text-primary">Focus:</span> {edu.focus}
                  </p>
                  {edu.thesis && (
                    <div className="text-sm text-foreground/70">
                      <span className="font-medium text-primary">Thesis:</span>
                      <br />
                      {edu.thesis}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Awards and Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Awards */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-primary/10 h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Awards</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
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
                      <p className="text-sm text-foreground/70">
                        {award.organization} | {award.year}
                      </p>
                      {award.description && (
                        <p className="text-sm text-foreground/70 mt-1">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
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
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-primary/10 h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <ScrollText className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
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
                      <p className="text-sm text-foreground/70">
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
