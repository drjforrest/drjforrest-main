'use client';

import { motion } from 'framer-motion';
import { PenLine, LineChart, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-3rem)] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-repeat opacity-[0.02] dark:opacity-[0.03] pointer-events-none" />
      
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

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="default" size="lg">
              <Link href="#publications">
                View Publications
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Navigation Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card
              variant="interactive"
              className="p-4 cursor-pointer"
              onClick={() => window.open('https://apps.drjforrest.com', '_blank')}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <PenLine className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Interactive Tools</h3>
                  <p className="text-sm text-muted-foreground">Try out our quiz game and citation builder applications</p>
                </div>
              </div>
            </Card>

            <Card
              variant="interactive"
              className="p-4 cursor-pointer"
              onClick={() => window.open('https://blog.drjforrest.com', '_blank')}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Blog</h3>
                  <p className="text-sm text-muted-foreground">Read about Digital Development in the Age of AI in Africa</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}