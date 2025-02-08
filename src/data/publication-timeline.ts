import { PublicationTimeline } from '@/types/publications';

export const publicationTimelineData: PublicationTimeline[] = [
  { year: "2024", count: 3 },
  { year: "2023", count: 6 },
  { year: "2022", count: 8 },
  { year: "2021", count: 7 },
  { year: "2020", count: 5 },
  { year: "2019", count: 5 },
  { year: "2018", count: 4 },
  { year: "2017", count: 4 },
  { year: "2016", count: 3 },
  { year: "2015", count: 2 },
  { year: "2014", count: 1 },
  { year: "2013", count: 1 },
  { year: "2012", count: 1 },
  { year: "2011", count: 0 },
  { year: "2009", count: 0 }
];

// Helper function to calculate cumulative totals and trends
export function getProcessedTimelineData(): (PublicationTimeline & { total: number; trend: number; })[] {
  return publicationTimelineData
    .filter(d => parseInt(d.year) >= 2011)
    .slice()
    .reverse()
    .reduce((acc, curr, idx) => {
      const prevTotal = idx > 0 ? acc[idx - 1].total : 0;
      return [...acc, {
        year: curr.year,
        count: curr.count,
        total: prevTotal + curr.count,
        trend: Math.max(
          curr.count,
          idx > 0 ? (acc[idx - 1].count + curr.count) / 2 : curr.count
        )
      }];
    }, [] as (PublicationTimeline & { total: number; trend: number; })[]);
}