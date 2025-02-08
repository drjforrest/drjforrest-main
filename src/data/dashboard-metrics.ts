import { DashboardMetrics } from '@/types/publications';
import { publicationTimelineData } from './publication-timeline';
import { getPublicationsByTier } from './journal-impact';

export const dashboardMetrics: DashboardMetrics = {
  totalPublications: publicationTimelineData.reduce((sum, year) => sum + year.count, 0),
  highImpactPapers: getPublicationsByTier('Highest Impact'),
  maxPapersInYear: Math.max(...publicationTimelineData.map(p => p.count)),
  firstAuthorPublications: 6  // This might need to be updated with actual data
};

// Helper function to get formatted metrics for display
export function getFormattedMetrics(): Array<{
  label: string;
  value: number;
  description: string;
}> {
  return [
    {
      label: 'Total Publications',
      value: dashboardMetrics.totalPublications,
      description: 'Journal Publications'
    },
    {
      label: 'High Impact',
      value: dashboardMetrics.highImpactPapers,
      description: 'High Impact Papers'
    },
    {
      label: 'Peak Output',
      value: dashboardMetrics.maxPapersInYear,
      description: 'Most Papers in a Year'
    },
    {
      label: 'First Author',
      value: dashboardMetrics.firstAuthorPublications,
      description: 'First Author Publications'
    }
  ];
}