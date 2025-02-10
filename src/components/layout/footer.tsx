'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LineChart, ExternalLink } from 'lucide-react';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  copyrightText?: string;
  copyrightLink?: string;
}

const footerLinks = {
  navigation: [
    { label: 'Blog', href: '/blog' },
    { label: 'Apps', href: '/apps' },
  ],
  resources: [
    { label: 'Interactive Dashboards', href: '/bonus' },
  ],
};

const FooterSection = ({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) => (
  <div>
    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
      {title}
    </h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <motion.li key={link.href} whileHover={{ x: 4 }}>
          <Link 
            href={link.href} 
            className="text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            {link.label}
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
);

export function Footer({ 
  copyrightText = "Jamie I Forrest @ 2024",
  copyrightLink = "https://drjforrest.com",
  ...props 
}: FooterProps) {
  return (
    <footer className="bg-background border-t border-foreground/10" {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Branding Section */}
          <div className="space-y-4">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <LineChart className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                Dr. Jamie I. Forrest
              </span>
            </motion.div>
            <p className="text-foreground/70">
              Exploring African digital development through data visualization and analysis.
            </p>
          </div>
          
          {/* Links Section */}
          <div className="md:col-span-2 md:flex md:justify-end">
            <div className="grid grid-cols-2 gap-8">
              <FooterSection title="Navigation" links={footerLinks.navigation} />
              <FooterSection title="Resources" links={footerLinks.resources} />
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="py-6 border-t border-foreground/10">
          <motion.p 
            className="text-center text-foreground/70"
            whileHover={{ scale: 1.02 }}
          >
            <Link 
              href={copyrightLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              © {copyrightText}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}