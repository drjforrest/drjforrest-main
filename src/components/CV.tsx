'use client';

import { Building2, GraduationCap, BookOpen, Award, Binary } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { type CVEntryProps, type PublicationEntry, type AwardEntry, type SkillCategory } from "@/types/cv";
import { SectionTitle } from "@/components/ui/section-title";

function CVEntry({ title, organization, period, description, index }: CVEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Card 
          variant="default" 
          className="mb-8 hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm border border-primary/5 p-6"
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <div className="text-lg font-medium mt-1">{organization}</div>
              </div>
              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                {period}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function CV() {
  const education = [
    {
      title: "Ph.D. in Population & Public Health",
      organization: "University of British Columbia, Faculty of Medicine",
      period: "2017 - 2021",
      description: "Doctoral research on health and social networking technologies in harder-to-reach populations.",
    },
    {
      title: "M.P.H. in Global Health",
      organization: "Simon Fraser University, Faculty of Health Sciences",
      period: "2007 - 2009",
      description: "Practicum partnership with the Perinatal HIV Research Institute in Soweto, South Africa.",
    },
    {
      title: "B.Sc. in Microbiology",
      organization: "University of Guelph",
      period: "2003 - 2007",
      description: "Focus on molecular biology and immunology.",
    }
  ];

  const certifications = [
    {
      title: "Clinical Research Leadership",
      organization: "TOGETHER Trial Network",
      period: "2022",
      description: "Led clinical trial operations and partnerships across multiple countries for COVID-19 therapeutics research.",
    },
    {
      title: "Data Science for Global Health",
      organization: "Gates Foundation",
      period: "2020",
      description: "Advanced analytics and visualization for health systems strengthening in Africa.",
    }
  ];

  const achievements = [
    {
      title: "Global Health Impact Award",
      organization: "Gates Foundation",
      period: "2023",
      description: "Recognized for outstanding contributions to clinical research capacity building in Africa through the ACTIVATE initiative.",
    }
  ];

  return (
    <section className="py-20">
      <SectionTitle>Professional Background</SectionTitle>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-10">
              <h3 className="text-2xl font-bold">Education</h3>
              <div className="space-y-6">
                {education.map((entry, index) => (
                  <CVEntry key={entry.title} {...entry} index={index} />
                ))}
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Certifications</h3>
                <div className="space-y-6">
                  {certifications.map((entry, index) => (
                    <CVEntry key={entry.title} {...entry} index={index} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Achievements</h3>
                <div className="space-y-6">
                  {achievements.map((entry, index) => (
                    <CVEntry key={entry.title} {...entry} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}