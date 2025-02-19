"use client";

import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { trackExternalLink } from '@/lib/analytics';

const contactLinks = [
  { icon: Mail, text: "jamie@drjforrest.com", url: "mailto:jamie@drjforrest.com" },
  { icon: Linkedin, text: "Connect on LinkedIn", url: "https://linkedin.com/in/drjamieforrest" },
  { icon: Github, text: "GitHub Profile", url: "https://github.com/drjamieforrest" }
];

const collaborationTopics = [
  "Strategic Leadership & Research Partnerships",
  "Global Health Projects",
  "Data Science Initiatives",
  "Health Systems Strengthening"
];

export function ContactInfo() {
  const handleExternalLink = (platform: string) => {
    trackExternalLink(platform);
    window.open(platform, '_blank');
  };

  return (
    <Card className="p-8 bg-white shadow-lg border border-gray-300 w-full flex flex-col justify-between">      <h3 className="text-lg font-semibold text-primary mb-4">Contact Information</h3>
      <ul className="space-y-3 text-foreground/70">
        {contactLinks.map(({ icon: Icon, text, url }) => (
          <motion.button
            key={text}
            whileHover={{ scale: 1.01, x: 2 }}
            onClick={() => handleExternalLink(url)}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <div className="p-2 rounded-full bg-primary/20 shadow-md">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <span>{text}</span>
          </motion.button>
        ))}
      </ul>

      <h3 className="mt-6 text-lg font-semibold text-primary">Looking to collaborate?</h3>
      <p className="text-sm text-foreground/70 mt-2">I'm open to discussing opportunities in:</p>
      <ul className="list-disc pl-5 mt-2 text-sm text-foreground/70 space-y-1">
        {collaborationTopics.map((topic) => (
          <motion.li key={topic} whileHover={{ x: 2 }}>
            {topic}
          </motion.li>
        ))}
      </ul>
    </Card>
  );
}