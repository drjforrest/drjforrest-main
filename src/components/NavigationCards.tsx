'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink, Code2, BookText } from 'lucide-react';

export function NavigationCards() {
  const sites = [
    {
      title: 'Applications',
      description: 'Collection of web apps and tools I\'ve built for research and data analysis',
      url: 'https://apps.drjforrest.com',
      icon: Code2
    },
    {
      title: 'Academic Writing',
      description: 'Published papers, research findings, and academic contributions',
      url: 'https://scholar.drjforrest.com',
      icon: BookText
    }
  ];

  return (
    <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {sites.map((site, index) => {
        const Icon = site.icon;
        return (
          <Card
            key={index}
            onClick={() => window.open(site.url, '_blank')}
            className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] bg-card"
          >
            <CardHeader className="p-0">
              <div className="flex items-start justify-between space-x-4">
                <div className="space-y-2">
                  <CardTitle className="text-xl font-semibold inline-flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {site.title}
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>
                    {site.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}