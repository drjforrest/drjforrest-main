'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { ScrollNavigation } from "@/components/ui/scroll-navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

// Dynamically import heavy components
const CareerTimeline = dynamic(() => import('@/components/CareerTimeline').then(mod => mod.CareerTimeline), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />
});

const ResearchImpactDashboard = dynamic(() => import('@/components/ResearchImpactDashboard').then(mod => mod.ResearchImpactDashboard), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />
});

const EducationCards = dynamic(() => import('@/components/EducationCards').then(mod => mod.EducationCards), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />
});

const RSSFeed = dynamic(() => import('@/components/RSSFeed').then(mod => mod.default), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />
});

const ContactForm = dynamic(() => import('@/components/ContactForm').then(mod => mod.ContactForm), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />
});

const ContactInfo = dynamic(() => import('@/components/ui/ContactInfo').then(mod => mod.ContactInfo), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />
});

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
      <ScrollIndicator />
      <ScrollNavigation sections={sections} />

      {/* Hero Section */}
      <section id="hero" className="mb-4 sm:mb-8 md:mb-16 min-h-[60vh] sm:min-h-[85vh] md:min-h-screen flex items-center">
        <Hero />
      </section>

      {/* Career Timeline */}
      <motion.section 
        id="career"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="px-4 py-6 sm:py-10 md:py-16 mb-8 sm:mb-12 md:mb-24 min-h-[60vh] sm:min-h-[85vh] md:min-h-screen flex flex-col justify-center bg-surface dark:bg-surface-elevated"
      >
        <SectionTitle>Career Journey</SectionTitle>
        <div className="mt-4 sm:mt-8">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />}>
            <CareerTimeline />
          </Suspense>
        </div>
      </motion.section>

      {/* Publications & Research Impact */}
      <motion.section 
        id="publications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="px-4 py-6 sm:py-10 md:py-16 mb-8 sm:mb-12 md:mb-24 min-h-[60vh] sm:min-h-[85vh] md:min-h-screen flex flex-col justify-center bg-background dark:bg-background"
      >
        <SectionTitle>Publications & Research Impact</SectionTitle>
        <div className="mt-4 sm:mt-8">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />}>
            <ResearchImpactDashboard />
          </Suspense>
        </div>
      </motion.section>

      {/* Education & Achievements */}
      <motion.section 
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="px-4 py-6 sm:py-10 md:py-16 mb-8 sm:mb-12 md:mb-24 min-h-[60vh] sm:min-h-[85vh] md:min-h-screen flex flex-col justify-center bg-surface dark:bg-surface-elevated"
      >
        <SectionTitle>Education & Achievements</SectionTitle>
        <div className="mt-4 sm:mt-8 flex justify-center">
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
        <div className="mt-4 sm:mt-8">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />}>
            <EducationCards />
          </Suspense>
        </div>
      </motion.section>

      {/* Personal Interests */}
      <motion.section 
        id="interests"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="px-4 py-6 sm:py-10 md:py-16 mb-8 sm:mb-12 md:mb-24 min-h-[60vh] sm:min-h-[85vh] md:min-h-screen flex flex-col justify-center bg-background dark:bg-background"
      >
        <SectionTitle>Personal Interests</SectionTitle>
        <div className="mt-4 sm:mt-8">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />}>
            <RSSFeed />
          </Suspense>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="px-4 py-6 sm:py-10 md:py-16 mb-8 sm:mb-12 md:mb-24 min-h-[60vh] sm:min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center bg-surface dark:bg-surface-elevated"
      >
        <SectionTitle>Get in Touch</SectionTitle>
        <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-8 flex flex-col md:flex-row gap-4 sm:gap-8 items-stretch">
          <div className="w-full md:w-1/2 flex">
            <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />}>
              <ContactForm />
            </Suspense>
          </div>
          <div className="w-full md:w-1/2 flex">
            <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 sm:h-96 rounded-lg" />}>
              <ContactInfo />
            </Suspense>
          </div>
        </div>
      </motion.section>
    </ScrollArea>
  );
}