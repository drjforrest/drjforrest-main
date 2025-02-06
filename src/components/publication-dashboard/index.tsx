'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Timeline } from './Timeline';
import { Impact } from './Impact';
import { Focus } from './Focus';
import { Clock, TrendingUp, Target } from 'lucide-react';

export function PublicationDashboard() {
  const publications = [
    {"year": "2009", "count": 1},
    {"year": "2011", "count": 1},
    {"year": "2012", "count": 3},
    {"year": "2013", "count": 2},
    {"year": "2014", "count": 7},
    {"year": "2015", "count": 5},
    {"year": "2016", "count": 4},
    {"year": "2017", "count": 3},
    {"year": "2018", "count": 2},
    {"year": "2019", "count": 1},
    {"year": "2020", "count": 2},
    {"year": "2021", "count": 5},
    {"year": "2022", "count": 7},
    {"year": "2023", "count": 2},
    {"year": "2024", "count": 2}
  ];

  const journalImpact = [
    { name: 'NEJM', count: 2, tier: 'Highest Impact' as const },
    { name: 'Lancet', count: 7, tier: 'Highest Impact' as const },
    { name: 'JAMA', count: 2, tier: 'High Impact' as const },
    { name: 'Other', count: 35, tier: 'Peer Reviewed' as const }
  ];

  const researchFocus = [
    { name: 'COVID-19', papers: 12 },
    { name: 'HIV/AIDS', papers: 15 },
    { name: 'Health Systems', papers: 8 },
    { name: 'Digital Health', papers: 6 },
    { name: 'Public Health', papers: 5 }
  ];

  return (
    <section className="w-full py-20" id="publications">
      <div className="container mx-auto px-6">
        <Card className="p-6 bg-surface">
          <Tabs defaultValue="timeline" className="w-full">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Publication Analysis</h3>
              <p className="text-sm text-content-muted mb-4">
                Track publication history, impact, and research focus areas
              </p>
              <TabsList className="grid w-full grid-cols-3 bg-background p-1 rounded-lg">
                <TabsTrigger
                  value="timeline"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  Timeline
                </TabsTrigger>
                <TabsTrigger
                  value="impact"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Impact
                </TabsTrigger>
                <TabsTrigger
                  value="focus"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Target className="h-4 w-4 mr-2" />
                  Focus Areas
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="mt-4">
              <TabsContent value="timeline" className="m-0">
                <Timeline data={publications} />
              </TabsContent>

              <TabsContent value="impact" className="m-0">
                <Impact data={journalImpact} />
              </TabsContent>

              <TabsContent value="focus" className="m-0">
                <Focus data={researchFocus} />
              </TabsContent>
            </div>
          </Tabs>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 p-4 bg-surface-elevated rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {publications.reduce((sum, pub) => sum + pub.count, 0)}
              </div>
              <div className="text-sm text-content-muted">Total Publications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {journalImpact.filter(j => j.tier === 'Highest Impact').reduce((sum, j) => sum + j.count, 0)}
              </div>
              <div className="text-sm text-content-muted">High Impact Papers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {Math.max(...publications.map(p => p.count))}
              </div>
              <div className="text-sm text-content-muted">Most Papers in a Year</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {researchFocus.length}
              </div>
              <div className="text-sm text-content-muted">Research Areas</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}