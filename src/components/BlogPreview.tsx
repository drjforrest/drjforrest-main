"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPostPreviewProps {
  date: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

function BlogPostPreview({ date, title, description, href, index }: BlogPostPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-surface-elevated/95 backdrop-blur p-6 hover:elevation-2 transition-all duration-300 h-full flex flex-col">
        <div className="text-sm text-primary mb-2">{date}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-content-muted mb-4 flex-grow">{description}</p>
        <Link 
          href={href}
          className="inline-flex items-center text-primary hover:text-primary/90 gap-2 group"
        >
          Read More
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Card>
    </motion.div>
  );
}

export function BlogPreview() {
  const posts = [
    {
      date: "February 1, 2024",
      title: "The Role of Clinical Trials in Global Health Equity",
      description: "Exploring how decentralized clinical trials and innovative research methodologies are reshaping access to healthcare innovations in resource-limited settings.",
      href: "/blog/clinical-trials-global-health"
    },
    {
      date: "January 25, 2024",
      title: "Digital Health Transformation in Africa",
      description: "Examining the intersection of technology and healthcare delivery in African settings, from mobile health solutions to AI-driven diagnostics.",
      href: "/blog/digital-health-africa"
    },
    {
      date: "January 15, 2024",
      title: "Building Resilient Health Systems",
      description: "Lessons learned from COVID-19 and other global health challenges in strengthening healthcare infrastructure and preparedness.",
      href: "/blog/resilient-health-systems"
    }
  ];

  return (
    <section className="py-20" id="blog">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-surface-elevated/95 backdrop-blur p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Blog: Global Health & Digital Innovation</h2>
            <p className="text-content-muted max-w-3xl mb-12">
              Exploring the intersection of global health, digital innovation, and clinical research. 
              Follow along for insights on how technology and data science are transforming healthcare 
              delivery and research in resource-limited settings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogPostPreview 
                  key={post.href}
                  {...post}
                  index={index}
                />
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}