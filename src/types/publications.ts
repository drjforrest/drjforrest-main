// Publication Dashboard Types
export interface PublicationTimeline {
  year: string;
  count: number;
  total?: number;
  trend?: number;
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

export interface DashboardMetrics {
  totalPublications: number;
  highImpactPapers: number;
  maxPapersInYear: number;
  firstAuthorPublications: number;
}

export interface KeyProject {
  title: string;
  period: string;
  paperThumbnail: string;
  description: string;
  expandedDescription: string;
  impact: string;
  paperLink?: string;
  paperTitle: string;
  journal: string;
  citationCount: number;
}

// Career Timeline Types
export interface Position {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

// Education Types
export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  thesis?: string;
  focus: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface Certification {
  title: string;
  organization: string;
}