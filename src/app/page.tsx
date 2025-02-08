'use client';

import { Hero } from "@/components/Hero";
import { CareerTimeline } from "@/components/CareerTimeline";
import { PublicationDashboard } from "@/components/publication-dashboard";
import { EducationCards } from "@/components/EducationCards";
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

      {/* Career Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-primary">Professional Journey</h2>
          <CareerTimeline />
        </div>
      </section>

      {/* Research Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-primary">Publications & Research Impact</h2>
          <PublicationDashboard />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-primary">Education & Achievements</h2>
          <EducationCards />
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
}