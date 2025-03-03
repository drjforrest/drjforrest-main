'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { FileText, TrendingUp, Globe, Award } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Timeline } from '@/components/publication-dashboard/Timeline';
import { Impact } from '@/components/publication-dashboard/Impact';
import { Focus } from '@/components/publication-dashboard/Focus';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export function ResearchImpactDashboard() {
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-12 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: FileText, value: "45+", label: "Peer-reviewed Publications" },
            { icon: TrendingUp, value: "9", label: "High-Impact Journal Papers" },
            { icon: Globe, value: "15+", label: "Countries Impacted" },
            { icon: Award, value: "2021", label: "Sackett Trial Award" },
          ].map(({ icon: Icon, value, label }, index) => (
            <Card 
              key={index} 
              className="p-6 bg-surface dark:bg-surface-elevated hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{value}</div>
                <p className="text-sm font-medium text-foreground/70">{label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Research Insights */}
        <Card className="p-6 bg-surface dark:bg-surface-elevated">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-background/50 dark:bg-background/50 border border-border p-1 mb-8 flex flex-wrap justify-center w-full">
              <TabsTrigger value="timeline">Publication Timeline</TabsTrigger>
              <TabsTrigger value="impact">Journal Impact</TabsTrigger>
              <TabsTrigger value="focus">Research Focus</TabsTrigger>
            </TabsList>

            <TabsContent value="timeline">
              <Timeline />
            </TabsContent>
            <TabsContent value="impact">
              <Impact />
            </TabsContent>
            <TabsContent value="focus">
              <Focus />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}