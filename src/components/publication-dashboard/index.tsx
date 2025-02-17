'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Timeline } from './Timeline';
import { Impact } from './Impact';
import { Focus } from './Focus';
import { FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { SectionTitle } from '@/components/ui/section-title';

export function PublicationDashboard() {
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h4 className="text-xl font-bold text-[#26385C]">53 Publications</h4>
          <p className="text-sm text-[#26385C]/70">Peer-reviewed articles spanning 15 years</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h4 className="text-xl font-bold text-[#26385C]">15+ High Impact</h4>
          <p className="text-sm text-[#26385C]/70">Publications in leading medical journals</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h4 className="text-xl font-bold text-[#26385C]">Global Reach</h4>
          <p className="text-sm text-[#26385C]/70">Research implemented across 20+ countries</p>
        </div>
      </div>

      {/* Visualization Area */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-gray-50 border border-[#26385C]/10 p-1 mb-8">
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
      </div>

      {/* Research Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Clinical Trial Design",
            description: "Leading innovative approaches in clinical research methodology",
            count: 12,
          },
          {
            title: "Global Health Systems",
            description: "Strengthening healthcare delivery and accessibility",
            count: 15,
          },
          {
            title: "Health Analytics",
            description: "Data-driven insights for public health decision making",
            count: 8,
          }
        ].map((area, index) => (
          <div key={area.title} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#2A9D8F]/10">
                <FileText className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#26385C] mb-2">{area.title}</h4>
                <p className="text-sm text-[#26385C]/70 mb-2">{area.description}</p>
                <p className="text-sm font-medium text-[#2A9D8F]">
                  {area.count} publications
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
