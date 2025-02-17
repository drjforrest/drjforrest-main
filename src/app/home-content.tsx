'use client';

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { CareerTimeline } from "@/components/CareerTimeline";
import { EducationCards } from "@/components/EducationCards";
import { PublicationDashboard } from "@/components/publication-dashboard";
import RSSFeed from "@/components/RSSFeed";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

export default function HomeContent() {
  return (
    <main className="flex min-h-screen flex-col">
      <section id="hero" className="mb-16 min-h-screen flex items-center">
        <Hero />
      </section>
      
      <motion.section 
        id="career"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-16 mb-24 min-h-screen flex flex-col justify-center"
      >
        <SectionTitle>Career Journey</SectionTitle>
        <div className="mt-8">
          <CareerTimeline />
        </div>
      </motion.section>

      <motion.section 
        id="publications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-16 mb-24 min-h-screen flex flex-col justify-center"
      >
        <SectionTitle>Publications & Research Impact</SectionTitle>
        <div className="mt-8">
          <PublicationDashboard />
        </div>
      </motion.section>
      
      <motion.section 
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-16 mb-24 min-h-screen flex flex-col justify-center"
      >
        <SectionTitle>Education & Achievements</SectionTitle>
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="!text-white"
          >
            <a 
              href="/assets/jamie-forrest-cv.pdf" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 !text-white"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </Button>
        </div>
        <div className="mt-8">
          <EducationCards />
        </div>
      </motion.section>

      <motion.section 
        id="interests"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-16 mb-24 min-h-screen flex flex-col justify-center"
      >
        <SectionTitle>Personal Interests</SectionTitle>
        <div className="mt-8">
          <RSSFeed />
        </div>
      </motion.section>
      
      <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-16 mb-24 min-h-screen flex flex-col justify-center"
      >
        <SectionTitle>Get in Touch</SectionTitle>
        <div className="mt-8">
          <ContactForm />
        </div>
      </motion.section>
    </main>
  );
}