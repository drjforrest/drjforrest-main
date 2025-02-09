'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, TrendingUp, Globe, Award } from 'lucide-react';

// You'll need to update these imports with your actual data files
import { publicationTimelineData } from '@/data/publication-timeline';
import { journalImpactData } from '@/data/journal-impact';
import { researchFocusData } from '@/data/research-focus';

export function ResearchImpactDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/90 hover:shadow-lg transition-all duration-300">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">45+</div>
              <p className="text-sm font-medium text-foreground/70">
                Peer-reviewed Publications
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/90 hover:shadow-lg transition-all duration-300">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">9</div>
              <p className="text-sm font-medium text-foreground/70">
                High-Impact Journal Papers
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/90 hover:shadow-lg transition-all duration-300">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <p className="text-sm font-medium text-foreground/70">
                Countries Impacted
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/90 hover:shadow-lg transition-all duration-300">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">2021</div>
              <p className="text-sm font-medium text-foreground/70">
                Sackett Trial Award
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Publications */}
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Featured Publications</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-4">
              <div className="space-y-2 pb-4 border-b border-foreground/10">
                <h3 className="font-medium text-primary">Resilient Clinical Trial Infrastructure in Response to COVID-19</h3>
                <p className="text-sm text-foreground/70">
                  American Journal of Tropical Medicine & Hygiene (2022)
                </p>
              </div>
              <div className="space-y-2 pb-4 border-b border-foreground/10">
                <h3 className="font-medium text-primary">Early Treatment of COVID-19: A Missed Opportunity</h3>
                <p className="text-sm text-foreground/70">
                  Infectious Diseases & Therapies (2021)
                </p>
              </div>
              {/* Add more publications */}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}