'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Timeline } from './Timeline';
import { Impact } from './Impact';
import { Focus } from './Focus';
import { ProjectCarousel } from '@/components/ui/project-carousel';
import { Clock, TrendingUp, Target, Briefcase, Loader2 } from 'lucide-react';
import { SectionTitle } from "@/components/ui/section-title";

const projects = [
  {
    title: "The Momentum Health Study",
    period: "2011 - 2015",
    paperThumbnail: "/projects/momentum-health.png",
    description: "Canada's largest gay men's health study...",
    expandedDescription: "Led the coordination of this groundbreaking cohort study...",
    impact: "The study's findings directly informed HIV prevention strategies...",
    paperLink: "https://www.momentumstudy.ca",
    paperTitle: "Social Media Use and HIV Transmission Risk Behavior among Gay and Bisexual Men",
    journal: "AIDS and Behavior",
    citationCount: 45
  },
  // ... rest of the projects data
];

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
    // Simulate data loading
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <section className="py-20">
      <SectionTitle
        description="Track publication history, impact, and research focus in high-impact journals"
      >
        Publication Analysis
      </SectionTitle>
      <div className="container mx-auto px-6">
        <Card className="p-8 bg-background shadow-xl">
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-muted/10 p-2 rounded-lg">
              {[
                { value: 'timeline', icon: Clock, label: 'Timeline' },
                { value: 'impact', icon: TrendingUp, label: 'Impact' },
                { value: 'focus', icon: Target, label: 'Research Focus' },
                { value: 'projects', icon: Briefcase, label: 'Key Projects' }
              ].map(({ value, icon: Icon, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 transition-all duration-200
                             hover:bg-primary/10 data-[state=active]:bg-primary data-[state=active]:text-background"
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
                    <Timeline data={publications} />
                  </TabsContent>

                  <TabsContent value="impact" className="m-0">
                    <Impact data={journalImpact} />
                  </TabsContent>

                  <TabsContent value="focus" className="m-0">
                    <Focus data={researchFocus} />
                  </TabsContent>

                  <TabsContent value="projects" className="m-0">
                    <ProjectCarousel projects={projects} />
                  </TabsContent>
                </>
              )}
            </div>

            <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 p-6 bg-muted/5 rounded-lg border border-primary/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {publications.reduce((sum, pub) => sum + pub.count, 0)}
                </div>
                <div className="text-sm font-medium text-muted-foreground">Journal Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {journalImpact.filter(j => j.tier === 'Highest Impact').reduce((sum, j) => sum + j.count, 0)}
                </div>
                <div className="text-sm font-medium text-muted-foreground">High Impact Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {Math.max(...publications.map(p => p.count))}
                </div>
                <div className="text-sm font-medium text-muted-foreground">Most Papers in a Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  6
                </div>
                <div className="text-sm font-medium text-muted-foreground">First Author Publications</div>
              </div>
            </motion.div>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}