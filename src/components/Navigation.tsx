'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './theme/theme-toggle';
import { LineChart, FileText, Grid2X2, Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: 'https://blog.drjforrest.com', icon: FileText, label: 'Blog', external: true },
    { href: 'https://apps.drjforrest.com', icon: Grid2X2, label: 'Apps', external: true },
    { href: '/#contact', icon: BookOpen, label: 'Contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-foreground/10' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 group"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-all duration-200"
              >
                <LineChart className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Dr. Jamie I. Forrest
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(({ href, icon: Icon, label, external }) => (
                <Link 
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 text-foreground/70 hover:text-primary transition-all duration-200"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-md group-hover:bg-primary/5"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-foreground/10"
            >
              <div className="py-4 space-y-2">
                {navLinks.map(({ href, icon: Icon, label, external }) => (
                  <Link
                    key={href}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}