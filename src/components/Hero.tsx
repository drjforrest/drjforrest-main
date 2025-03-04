'use client';

import { motion } from "framer-motion";
import { Network, FileText, Globe } from "lucide-react";
import { LineChart, PenTool, Globe2 } from 'lucide-react';

interface IconFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  sectionId: string;
}

function IconFeature({ 
  icon: Icon,
  title,
  description,
  sectionId,
}: IconFeatureProps) {
  const scrollToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.button 
      onClick={scrollToSection}
      className="bg-surface dark:bg-surface-elevated rounded-lg shadow-lg w-full md:w-[280px] max-w-xs"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-8 flex flex-col items-center text-center">
        <div className="p-3 rounded-xl bg-primary/5 mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-medium text-foreground mb-2">{title}</h3>
        <p className="text-sm text-foreground/70">
          {description}
        </p>
      </div>
    </motion.button>
  );
}

export function Hero() {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] py-8 md:py-0 flex items-center justify-center">
      
      {/* 🔹 Hero Background Ring */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[90vw] h-[90vw] md:w-[720px] md:h-[720px] border-[1.5px] 
                  border-[#2A9D8F]/10 rounded-full z-[-1]"
        style={{
          background: 'radial-gradient(circle, transparent 40%, rgba(42, 157, 143, 0.015) 80%)'
        }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 Hero Content */}
      <div className="max-w-5xl mx-auto">
        
        {/* Hero Icons */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 bg-primary/10 rounded-2xl">
            <LineChart className="w-10 h-10 text-primary" />
          </div>
          <div className="p-4 bg-[#E63946]/10 rounded-2xl">
            <PenTool className="w-10 h-10 text-[#E63946]" />
          </div>
          <div className="p-4 bg-success/10 rounded-2xl">
            <Globe2 className="w-10 h-10 text-success" />
          </div>
        </motion.div>

        {/* Hero Text */}
        <div className="w-full max-w-[1200px] mx-auto px-8 flex flex-col items-center relative">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Innovating Global Health Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-foreground/80 text-xl max-w-3xl mx-auto"
            >
              Strategic partnerships, effective technical & scientific communication, 
              evidence-based approaches to results monitoring and evaluation
            </motion.p>
          </div>

          {/* 🔹 Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center"
          >
            <IconFeature
              icon={Network}
              title="Experienced Professional"
              description="15+ years leading global health initiatives and clinical research"
              sectionId="career"
            />
            <IconFeature
              icon={FileText}
              title="Writing & Research"
              description="Published in leading scientific journals with high-impact contributions"
              sectionId="publications"
            />
            <IconFeature
              icon={Globe}
              title="Strategic Partnerships"
              description="Building sustainable collaborations across sectors and regions"
              sectionId="education"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}