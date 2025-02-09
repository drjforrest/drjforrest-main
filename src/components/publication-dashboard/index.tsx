'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from './Timeline';
import { Impact } from './Impact';
import { Focus } from './Focus';
import { Clock, TrendingUp, Target } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const metrics = [
  { label: 'Journal Publications', value: '50' },
  { label: 'High Impact Papers', value: '9' },
  { label: 'Most Papers in a Year', value: '8' },
  { label: 'First Author Publications', value: '6' }
];

export function PublicationDashboard() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Metrics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-primary/10"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-foreground/70">{metric.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="timeline" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="bg-white/50 backdrop-blur-sm shadow-lg border border-primary/10">
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="impact" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Impact
            </TabsTrigger>
            <TabsTrigger value="focus" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Research Focus
            </TabsTrigger>
          </TabsList>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10"
        >
          <TabsContent value="timeline">
            <Timeline />
          </TabsContent>
          <TabsContent value="impact">
            <Impact />
          </TabsContent>
          <TabsContent value="focus">
            <Focus />
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
}
