export interface TimelineData {
  year: string;
  count: number;
  total?: number;
}

export interface JournalImpact {
  name: string;
  count: number;
  tier: 'Highest Impact' | 'High Impact' | 'Peer Reviewed';
}

export interface ResearchFocus {
  name: string;
  papers: number;
}

export interface MilestoneMarker {
  year: string;
  label: string;
}