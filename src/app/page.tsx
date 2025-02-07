'use client';

import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import { PublicationDashboard } from "@/components/publication-dashboard";
import { CV } from "@/components/sections/CV";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

// Project data can be moved to a separate file if preferred
const projects = [
  {
    title: "The Momentum Health Study",
    period: "2011 - 2015",
    paperThumbnail: "/projects/momentum-health.png",
    description: "Canada's largest gay men's health study...",
    expandedDescription: "Led the coordination of this groundbreaking cohort study...",
    impact: "The study's findings directly informed HIV prevention strategies...",
    paperLink: "https://www.momentumstudy.ca",
    paperTitle: "Social Media Use and HIV Transmission Risk Behavior among Gay and Bisexual Men",
    journal: "AIDS and Behavior",
    citationCount: 45
  },
  // ... other projects
];

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Hero />
      <Timeline />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ProjectCarousel projects={projects} />
        </div>
      </section>
      <PublicationDashboard />
      <CV />
      <ContactForm />
    </motion.div>
  );
}