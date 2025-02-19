'use client';

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { CareerTimeline } from "@/components/CareerTimeline";
import { EducationCards } from "@/components/EducationCards";
import { ResearchImpactDashboard } from "@/components/ResearchImpactDashboard";
import RSSFeed from "@/components/RSSFeed";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ContactInfo } from "@/components/ui/ContactInfo";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";  // Progress bar + mobile nav
import { ScrollNavigation } from "@/components/ui/scroll-navigation"; // Right-side navigation dots
import { ScrollArea } from "@/components/ui/scroll-area"; // Custom scroll wrapper

const sections = [
  { id: 'hero', label: 'Introduction' },
  { id: 'career', label: 'Career Journey' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' }
];

export default function HomeContent() {
  return (
    <ScrollArea className="relative flex min-h-screen flex-col">
      {/* 🔹 Scroll Progress Bar + Quick Mobile Nav */}
      <ScrollIndicator />

      {/* 🔹 Section Navigation Dots (Right Side) */}
      <ScrollNavigation sections={sections} />

      {/* Hero Section */}
      <section id="hero" className="mb-16 min-h-screen flex items-center">
        <Hero />
      </section>

      {/* Career Timeline */}
      <motion.section 
        id="career"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 py-16 mb-24 min-h-screen flex flex-col justify-center bg-white"
      >
        <SectionTitle>Career Journey</SectionTitle>
        <div className="mt-8">
          <CareerTimeline />
        </div>
      </motion.section>

      {/* Publications & Research Impact */}
      <motion.section 
        id="publications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 py-16 mb-24 min-h-screen flex flex-col justify-center bg-background/95"
      >
        <SectionTitle>Publications & Research Impact</SectionTitle>
        <div className="mt-8">
          <ResearchImpactDashboard />
        </div>
      </motion.section>

      {/* Education & Achievements */}
      <motion.section 
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 py-16 mb-24 min-h-screen flex flex-col justify-center bg-white"
      >
        <SectionTitle>Education & Achievements</SectionTitle>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="!text-white">
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

      {/* Personal Interests */}
      <motion.section 
        id="interests"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 py-16 mb-24 min-h-screen flex flex-col justify-center bg-background/95"
      >
        <SectionTitle>Personal Interests</SectionTitle>
        <div className="mt-8">
          <RSSFeed />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 py-16 mb-24 min-h-screen flex flex-col justify-center items-center bg-background/95"
      >
        <SectionTitle>Get in Touch</SectionTitle>

        {/* Make sure both cards have equal height */}
        <div className="w-full max-w-4xl mx-auto mt-8 flex flex-col md:flex-row gap-8 items-stretch">
          <div className="w-full md:w-1/2 flex">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/2 flex">
            <ContactInfo />
          </div>
        </div>
      </motion.section>
    </ScrollArea>
  );
}