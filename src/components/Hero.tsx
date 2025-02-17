'use client';

import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Globe, 
  Network,
  FileText,
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

function IconFeature({ 
  icon: Icon,
  title,
  description,
}: { 
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div 
      className="flex flex-col items-center gap-3 w-full sm:w-auto px-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="p-4 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl 
                    transition-all duration-300 border border-primary/10 w-full sm:w-auto">
        <div className="flex items-center sm:flex-col gap-4 sm:gap-2">
          <Icon className="w-8 h-8 text-primary flex-shrink-0" />
          <div className="text-left sm:text-center">
            <h3 className="font-medium text-primary">{title}</h3>
            <p className="text-sm text-foreground/70 mt-1 sm:max-w-[250px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 sm:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
          >
            Transforming Global Health Through Strategic Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg sm:text-xl text-foreground/80 px-4 sm:px-0"
          >
            Strategic global health leader with 15+ years of experience driving clinical research 
            innovation and health system strengthening
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-6 sm:gap-16 mt-8 sm:mt-12"
          >
            <IconFeature
              icon={Network}
              title="Clinical Trial Innovation"
              description="Leading platform trials and research initiatives"
            />
            <IconFeature
              icon={FileText}
              title="Research Impact"
              description="Publications in leading medical journals"
            />
            <IconFeature
              icon={Globe}
              title="Global Implementation"
              description="Building sustainable health solutions"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8 px-4 sm:px-0"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white gap-2"
              asChild
            >
              <Link href="#publications">
                View Research Impact
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2"
              asChild
            >
              <Link href="/contact">
                <Globe className="w-4 h-4" />
                Connect & Collaborate
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile-optimized background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20">
          <svg viewBox="0 0 800 800" className="w-full h-full">
            <motion.circle 
              cx="400" 
              cy="400" 
              r="300" 
              className="stroke-primary fill-none" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
