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
      <Card 
        variant="elevated" 
        padding="lg"
        className="mb-8 hover:shadow-xl transition-all duration-300"
        motionProps={{
          whileHover: { scale: 1.02 },
          transition: { duration: 0.2 }
        }}
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

  return (
    <section className="py-20 bg-muted/30">
      <SectionTitle>Education</SectionTitle>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            {education.map((entry, index) => (
              <CVEntry key={entry.title} {...entry} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}