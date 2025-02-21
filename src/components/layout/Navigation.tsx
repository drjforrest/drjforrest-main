"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PresenceWrapper } from "@/components/ui/motion-wrapper";
import { LineChart, FileText, LayoutGrid, Menu, X } from "lucide-react";

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
    { href: "https://blog.drjforrest.com", icon: FileText, label: "Blog", external: true },
    { href: "https://drjforrest.com", icon: LayoutGrid, label: "Apps", external: true },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Side: Logo + Name */}
        <Link href="/" className="group flex items-center gap-3 text-foreground hover:text-primary">
          <div className="p-1.5 rounded-lg bg-primary/10">
            <LineChart className="w-5 h-5 text-primary" />
          </div>
          <motion.span
            className="font-semibold text-lg tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Dr. Jamie I. Forrest
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-foreground hover:text-primary transition group"
            >
              <motion.div 
                className="p-1.5 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <link.icon className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
              </motion.div>
              <span className="hidden sm:inline font-medium">{link.label}</span>
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="hover:bg-accent/10"
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <PresenceWrapper>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="bg-background border-t border-border/50"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/10 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="p-1.5 rounded-lg bg-primary/10">
                        <link.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </PresenceWrapper>
      </div>
    </header>
  );
}