export interface CVEntryBase {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface CVEntryProps extends CVEntryBase {
  index: number;
}

export interface PublicationEntry {
  title: string;
  journal: string;
  year: string;
  citation: string;
  doi?: string;
  impact?: string;
}

export interface AwardEntry {
  title: string;
  organization: string;
  year: string;
  amount?: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}