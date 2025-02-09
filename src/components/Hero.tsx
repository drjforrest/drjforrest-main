'use client';

import { motion } from 'framer-motion';
import { PenLine, LineChart, Globe, Code2, Book } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const iconMotion = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center z-0 pt-16">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Innovative Global Health Solutions
          </h1>

          <div className="flex justify-center gap-8">
            {[
              { icon: PenLine, text: "Technical Writing & Communication", color: "var(--primary)" },
              { icon: LineChart, text: "Data-driven Monitoring & Evaluation", color: "var(--accent)" },
              { icon: Globe, text: "Global Collaboration with Local Impact", color: "var(--success)" }
            ].map(({ icon: Icon, text, color }, index) => (
              <motion.div
                key={text}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={iconMotion}
                className="flex flex-col items-center gap-3"
              >
                <div className="p-5 bg-background/80 backdrop-blur-sm shadow-lg rounded-2xl">
                  <Icon className="w-8 h-8" style={{ color: `rgb(${color})` }} />
                </div>
                <span className="text-sm font-medium text-foreground/70">{text}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-foreground/80">Transforming complex health research into actionable insights</p>
            <p className="text-lg text-foreground/80">Driving evidence-based decisions through data analytics</p>
            <p className="text-lg text-foreground/80">Building sustainable partnerships across global health ecosystems</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                variant="default"
                size="lg"
                className="h-14 px-8 text-lg bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://apps.drjforrest.com', '_blank')}
              >
                <Code2 className="mr-2 h-6 w-6" />
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
                className="h-14 px-8 text-lg border-primary/20 hover:bg-primary/5"
                onClick={() => window.open('https://blog.drjforrest.com', '_blank')}
              >
                <Book className="mr-2 h-6 w-6" />
                Read Blog
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
