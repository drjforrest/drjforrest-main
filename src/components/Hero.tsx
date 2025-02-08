'use client';

import { motion } from 'framer-motion';
import { PenLine, LineChart, Globe, Code2, BookText } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-3rem)] flex items-center justify-center z-0">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-4 bg-primary/10 rounded-2xl">
              <PenLine className="w-10 h-10 text-primary" />
            </div>
            <div className="p-4 bg-accent/10 rounded-2xl">
              <LineChart className="w-10 h-10 text-accent" />
            </div>
            <div className="p-4 bg-success/10 rounded-2xl">
              <Globe className="w-10 h-10 text-success" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Innovative Global Health Solutions
          </h1>
          
          <div className="space-y-3 text-xl text-muted-foreground max-w-3xl mx-auto">
            <p>Transforming complex health research into actionable insights</p>
            <p>Driving evidence-based decisions through data analytics</p>
            <p>Building sustainable partnerships across global health ecosystems</p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                variant="default"
                size="lg"
                className="h-16 px-8 text-lg"
                onClick={() => window.open('https://apps.drjforrest.com', '_blank')}
              >
                <Code2 className="mr-2 h-5 w-5" />
                Discover Apps
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="h-16 px-8 text-lg"
                onClick={() => window.open('https://blog.drjforrest.com', '_blank')}
              >
                <BookText className="mr-2 h-5 w-5" />
                Read Blog
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}