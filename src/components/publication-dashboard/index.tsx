'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Timeline } from './Timeline';
import { Impact } from './Impact';
import { Focus } from './Focus';
import { 
  BookOpen, 
  Globe, 
  Network,
  FileText,
  Award 
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

const researchAreas = [
  {
    title: "Clinical Research",
    icon: Network,
    description: "Platform trials and clinical research innovation",
  },
  {
    title: "Digital Health",
    icon: Globe,
    description: "Health analytics and digital solutions",
  },
  {
    title: "Policy Impact",
    icon: Award,
    description: "Evidence-based policy development",
  }
];

export function PublicationDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Research Areas Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {researchAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-white/90 backdrop-blur-sm border border-primary/10 
                         shadow-lg hover:shadow-xl transition-all duration-300 
                         transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-xl bg-primary/5">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-primary text-lg mb-2">{area.title}</h3>
                  <p className="text-sm text-foreground/70">{area.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Research Visualizations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/50 backdrop-blur-sm border border-primary/10 shadow-lg">
              <TabsTrigger value="overview">Research Timeline</TabsTrigger>
              <TabsTrigger value="impact">Journal Impact</TabsTrigger>
              <TabsTrigger value="focus">Research Focus</TabsTrigger>
            </TabsList>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg">
            <TabsContent value="overview" className="mt-0">
              <Timeline />
            </TabsContent>
            <TabsContent value="impact" className="mt-0">
              <Impact />
            </TabsContent>
            <TabsContent value="focus" className="mt-0">
              <Focus />
            </TabsContent>
          </div>
        </Tabs>
      </motion.div>

      {/* Key Publications Highlight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-foreground/70">
          Published in leading journals including The Lancet, NEJM, and other top-tier publications
        </p>
      </motion.div>
    </div>
  );
}
