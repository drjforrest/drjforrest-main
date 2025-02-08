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
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <FileText className="h-8 w-8 mb-2 mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">45+</div>
              <p className="text-sm text-muted-foreground">
                Peer-reviewed Publications
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mb-2 mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">9</div>
              <p className="text-sm text-muted-foreground">
                High-Impact Journal Papers
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Globe className="h-8 w-8 mb-2 mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">15+</div>
              <p className="text-sm text-muted-foreground">
                Countries Impacted
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Award className="h-8 w-8 mb-2 mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">2021</div>
              <p className="text-sm text-muted-foreground">
                Sackett Trial Award
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Publications */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Publications</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-4">
              {/* Add your key publications here */}
              <div className="space-y-2 pb-4 border-b">
                <h3 className="font-medium">Resilient Clinical Trial Infrastructure in Response to COVID-19</h3>
                <p className="text-sm text-muted-foreground">
                  American Journal of Tropical Medicine & Hygiene (2022)
                </p>
              </div>
              <div className="space-y-2 pb-4 border-b">
                <h3 className="font-medium">Early Treatment of COVID-19: A Missed Opportunity</h3>
                <p className="text-sm text-muted-foreground">
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