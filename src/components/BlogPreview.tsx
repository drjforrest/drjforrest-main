"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
          href={`https://blog.drjforrest.com${href}`}
          target="_blank"
          rel="noopener noreferrer"
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
      title: "Agenda 2063: The Digital Transformation of a Continent",
      description: "Exploring Africa's digital transformation journey through the lens of Agenda 2063's strategic framework and implementation progress.",
      href: "/blog/agenda-2063"
    },
    {
      date: "January 25, 2024",
      title: "The AI Revolution in Africa",
      description: "Examining the unprecedented opportunities and transformative potential of artificial intelligence across African markets.",
      href: "/blog/ai-future"
    },
    {
      date: "January 15, 2024",
      title: "Navigating Digital Transformation Risks",
      description: "Critical analysis of challenges and potential pitfalls in Africa's digital transformation journey.",
      href: "/blog/transformation-risks"
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
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Recent Blog Posts</h2>
                <p className="text-content-muted max-w-3xl">
                  Exploring the intersection of global health, digital innovation, and clinical research.
                </p>
              </div>
              <Button 
                className="hidden md:flex items-center gap-2"
                variant="outline"
                asChild
              >
                <Link 
                  href="https://blog.drjforrest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Posts
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogPostPreview 
                  key={post.href}
                  {...post}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-8 md:hidden">
              <Button 
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                asChild
              >
                <Link 
                  href="https://blog.drjforrest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Posts
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}