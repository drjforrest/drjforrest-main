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
    <div className="space-y-8">
      {/* Education Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg font-semibold text-primary">
                  {edu.degree}
                </CardTitle>
                <GraduationCap className="h-5 w-5 text-primary/60" />
              </div>
              <CardDescription>
                {edu.institution}
                <br />
                {edu.location} | {edu.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-medium">Focus: {edu.focus}</p>
                {edu.thesis && (
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Thesis:</span>
                    <br />
                    {edu.thesis}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
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
        >
          <Card className="bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Awards</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {awards.map((award, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-1"
                  variants={itemVariants}
                >
                  <h4 className="font-medium text-primary">{award.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {award.organization} | {award.year}
                  </p>
                  {award.description && (
                    <p className="text-sm text-muted-foreground">
                      {award.description}
                    </p>
                  )}
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
        >
          <Card className="bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <ScrollText className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-1"
                  variants={itemVariants}
                >
                  <h4 className="font-medium text-primary">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.organization}
                  </p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
