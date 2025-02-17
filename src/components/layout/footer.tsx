'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LineChart, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center text-center space-y-4">
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
            <p className="text-foreground/70 max-w-md">
             Innovative solutions in global health programming, research, and evaluation
            </p>
          </div>

          {/* Links */}
          <div className="mt-8 flex justify-center gap-6">
            <FooterLink href="https://drjforrest.com" label="Main Site" />
            <FooterLink href="https://blog.drjforrest.com" label="Blog" />
            <FooterLink href="mailto:jamie@drjforrest.com" label="Contact" />
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-foreground/70">
            <p>© {new Date().getFullYear()} Dr. Jamie I. Forrest. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {label}
      {href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
    </Link>
  );
}