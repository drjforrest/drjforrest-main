'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Timeline } from './Timeline';
import { Impact } from './Impact';
import { Focus } from './Focus';
import { Clock, TrendingUp, Target, Loader2 } from 'lucide-react';

export function PublicationDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  const publications = [
    {"year": "2024", "count": 3},
    {"year": "2023", "count": 6},
    {"year": "2022", "count": 8},
    {"year": "2021", "count": 7},
    {"year": "2020", "count": 5},
    {"year": "2019", "count": 5},
    {"year": "2018", "count": 4},
    {"year": "2017", "count": 4},
    {"year": "2016", "count": 3},
    {"year": "2015", "count": 2},
    {"year": "2014", "count": 1},
    {"year": "2013", "count": 1},
    {"year": "2012", "count": 1},
    {"year": "2011", "count": 0},
    {"year": "2009", "count": 0}
  ];

  const journalImpact = [
    { name: 'NEJM', count: 2, tier: 'Highest Impact' as const },
    { name: 'Lancet', count: 7, tier: 'Highest Impact' as const },
    { name: 'JAMA', count: 2, tier: 'High Impact' as const },
    { name: 'Other', count: 26, tier: 'Peer Reviewed' as const }
  ];

  const researchFocus = [
    { name: 'Clinical Trials', papers: 12 },
    { name: 'Global Health', papers: 10 },
    { name: 'Health Systems', papers: 8 },
    { name: 'Digital Health', papers: 5 },
    { name: 'Public Health', papers: 2 }
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="p-8 bg-card">
        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-background p-2 rounded-lg mb-6">
            {[
              { value: 'timeline', icon: Clock, label: 'Timeline' },
              { value: 'impact', icon: TrendingUp, label: 'Impact' },
              { value: 'focus', icon: Target, label: 'Research Focus' }
            ].map(({ value, icon: Icon, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex items-center justify-center gap-2 py-2.5 px-4 transition-all duration-200
                           data-[state=active]:bg-primary data-[state=active]:text-background"
              >
                <div className="flex flex-col items-center gap-1.5">
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-6">
            {isLoading ? (
              <div className="flex items-center justify-center h-[200px]">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <>
                <TabsContent value="timeline" className="m-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Timeline data={publications} />
                  </motion.div>
                </TabsContent>

                <TabsContent value="impact" className="m-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Impact data={journalImpact} />
                  </motion.div>
                </TabsContent>

                <TabsContent value="focus" className="m-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Focus data={researchFocus} />
                  </motion.div>
                </TabsContent>
              </>
            )}
          </div>

          <motion.div
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 p-6 bg-background rounded-lg"
          >
            {[
              { value: publications.reduce((sum, pub) => sum + pub.count, 0), label: 'Journal Publications' },
              { value: journalImpact.filter(j => j.tier === 'Highest Impact').reduce((sum, j) => sum + j.count, 0), label: 'High Impact Papers' },
              { value: Math.max(...publications.map(p => p.count)), label: 'Most Papers in a Year' },
              { value: 6, label: 'First Author Publications' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Tabs>
      </Card>
    </motion.div>
  );
}
