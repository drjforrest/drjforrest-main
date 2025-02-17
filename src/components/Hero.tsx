'use client';

import { motion } from "framer-motion";
import { Network, FileText, Globe } from "lucide-react";
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

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
      className="bg-white rounded-lg shadow-lg w-[280px]"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-8 flex flex-col items-center text-center">
        <div className="p-3 rounded-xl bg-primary/5 mb-4">
          <Icon className="w-8 h-8 text-primary/70" />
        </div>
        <h3 className="text-xl font-medium text-[#26385C] mb-2">{title}</h3>
        <p className="text-sm text-[#26385C]/70">
          {description}
        </p>
      </div>
    </motion.button>
  );
}

export function Hero() {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center relative">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[120vh] 
                  border border-[#2A9D8F]/10 rounded-full opacity-50 pointer-events-none"
      />
      
      <div className="w-full max-w-[1200px] mx-auto px-8 flex flex-col items-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="relative"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#2A9D8F] p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Dr. Jamie Forrest"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <motion.div
            className="absolute -inset-4 border border-[#2A9D8F]/30 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.div
            className="absolute -inset-8 border border-[#2A9D8F]/20 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </motion.div>

        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#26385C] text-6xl font-bold mb-6"
          >
            Innovating Global Health Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#26385C]/80 text-xl max-w-3xl mx-auto"
          >
            Strategic partnerships, effective technical & scientific communication, evidence-based
            approaches to results monitoring and evaluation
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex gap-8 justify-center"
        >
          <IconFeature
            icon={Network}
            title="Experience"
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
            title="Partnerships"
            description="Building sustainable collaborations across sectors and regions"
            sectionId="education"
          />
        </motion.div>
      </div>
    </div>
  );
}
