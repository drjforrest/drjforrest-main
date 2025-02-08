import { JournalImpact } from '@/types/publications';

export const journalImpactData: JournalImpact[] = [
  { name: 'NEJM', count: 2, tier: 'Highest Impact' },
  { name: 'Lancet', count: 7, tier: 'Highest Impact' },
  { name: 'JAMA', count: 2, tier: 'High Impact' },
  { name: 'Other', count: 26, tier: 'Peer Reviewed' }
];

// Helper function to get total publications by tier
export function getPublicationsByTier(tier: JournalImpact['tier']): number {
  return journalImpactData
    .filter(journal => journal.tier === tier)
    .reduce((sum, journal) => sum + journal.count, 0);
}