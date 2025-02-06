'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, LineChart } from 'lucide-react';
import Link from 'next/link';
import { mainTheme } from '@/styles/theme';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Professional background pattern */}
      <div 
        className="fixed inset-0 bg-[url('/patterns/circuit-board.svg')] bg-repeat opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Icons */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-4 bg-primary/10 rounded-2xl">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <div className="p-4 bg-accent/10 rounded-2xl">
              <BookOpen className="w-10 h-10 text-accent" />
            </div>
            <div className="p-4 bg-success/10 rounded-2xl">
              <LineChart className="w-10 h-10 text-success" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Strengthening Health Systems Through Digital Innovation
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Building bridges between clinical research, data science, and health systems across Africa
            </p>

            {/* Call to Action */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-8 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link 
                href="#publications"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg
                         bg-primary text-background font-medium
                         hover:bg-primary/90 transition-colors duration-200"
              >
                View Publications
              </Link>
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg
                         border border-primary/20 text-primary font-medium
                         hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ 
              delay: 1,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-foreground/20 rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}