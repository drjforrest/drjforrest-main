import { ResearchFocus } from '@/types/publications';

export const researchFocusData: ResearchFocus[] = [
  { name: 'Clinical Trials', papers: 12 },
  { name: 'Global Health', papers: 10 },
  { name: 'Health Systems', papers: 8 },
  { name: 'Digital Health', papers: 5 },
  { name: 'Public Health', papers: 2 }
];

// Helper function to get total papers across all focus areas
export function getTotalPapers(): number {
  return researchFocusData.reduce((sum, focus) => sum + focus.papers, 0);
}