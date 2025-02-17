'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="w-full bg-white/50 backdrop-blur-sm border-t border-[#2A9D8F]/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground/70">
              © {currentYear} Dr. Jamie I. Forrest. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="/privacy"
              className="text-sm text-foreground/70 hover:text-[#2A9D8F] transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms"
              className="text-sm text-foreground/70 hover:text-[#2A9D8F] transition-colors"
            >
              Terms of Use
            </a>
            <a 
              href="mailto:jamie@drjforrest.com"
              className="text-sm text-foreground/70 hover:text-[#2A9D8F] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
} 