import { PublicationDashboard } from "@/components/publication-dashboard";
import { BlogPreview } from "@/components/BlogPreview";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ContactForm } from "@/components/ContactForm";
import { CV } from "@/components/sections/CV";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CV />
      <PublicationDashboard />
      <FeaturedWork />
      <BlogPreview />
      <ContactForm />
    </main>
  );
}