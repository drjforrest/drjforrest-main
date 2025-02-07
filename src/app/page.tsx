// Corrected code snippet
'use client';

import { Hero } from "@/components/Hero";
import { IconBanner } from "@/components/IconBanner";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { PublicationDashboard } from "@/components/publication-dashboard";
import { CV } from "@/components/CV";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Hero />
      <IconBanner />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ExperienceTimeline />
        </div>
      </section>
      <PublicationDashboard />
      <CV />
      <ContactForm />
    </motion.div>
  );
}