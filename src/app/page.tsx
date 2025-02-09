'use client';

import { Hero } from "@/components/Hero";
import { CareerTimeline } from "@/components/CareerTimeline";
import { PublicationDashboard } from "@/components/publication-dashboard";
import { EducationCards } from "@/components/EducationCards";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import RSSFeed from "@/components/RSSFeed";

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

          {/* Download CV Button */}
          <div className="mt-10 flex justify-center">
            <a 
              href="/cv.pdf" 
              download 
              className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-2xl shadow-md hover:bg-primary/80 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* RSS Feed */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-primary">Interests</h2>
          <RSSFeed />
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
}