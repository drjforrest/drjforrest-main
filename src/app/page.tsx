import { Hero } from "@/components/Hero";
import { CareerTimeline } from "@/components/CareerTimeline";
import { EducationCards } from "@/components/EducationCards";
import { PublicationDashboard } from "@/components/publication-dashboard";
import { RSSFeed } from "@/components/RSSFeed";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/ui/section-title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="mb-16">
        <Hero />
      </section>
      
      <section className="container mx-auto px-4 py-16 mb-24">
        <SectionTitle>Career Journey</SectionTitle>
        <div className="mt-8">
          <CareerTimeline />
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16 mb-24">
        <SectionTitle>Education & Achievements</SectionTitle>
        <div className="mt-8">
          <EducationCards />
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16 mb-24">
        <SectionTitle>Publications & Research Impact</SectionTitle>
        <div className="mt-8">
          <PublicationDashboard />
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
