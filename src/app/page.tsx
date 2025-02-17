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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata = {
  title: 'Dr. Jamie I. Forrest',
  description: 'Global Health Research & Analytics',
  // ... other metadata
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="mb-16">
        <Hero />
      </section>
      
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 mb-24"
      >
        <SectionTitle>Career Journey</SectionTitle>
        <div className="mt-8">
          <CareerTimeline />
        </div>
      </motion.section>

      <section className="container mx-auto px-4 py-16 mb-24">
        <SectionTitle>Publications & Research Impact</SectionTitle>
        <div className="mt-8">
          <PublicationDashboard />
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16 mb-24">
        <SectionTitle>Education & Achievements</SectionTitle>
        <div className="mt-8">
          <EducationCards />
        </div>
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
      </section>

      <section className="container mx-auto px-4 py-16 mb-24">
        <SectionTitle>Personal Interests</SectionTitle>
        <div className="mt-8">
          <RSSFeed />
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16 mb-24">
        <SectionTitle>Get in Touch</SectionTitle>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
