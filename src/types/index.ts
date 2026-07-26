export interface CodeSnippet {
  title: string;
  fileName: string;
  code: string;
  language?: string;
  footerStats?: Stat[]
}

export interface Stat {
  label: string;
  value: string;
}

export interface ProjectDescription {
  problem: string;
  solution: string;
  limitations: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tech: string[];
  description: ProjectDescription;
  marginNote?: string;
  metrics?: string[];
  details?: Stat[];
  snippet?: CodeSnippet;
  stats?: Stat[];
  link: string;
  repo: string;
  visualLabel?: string;
  variant: 'left-aligned' | 'right-indented' | 'center' | 'full-width'
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface OSSContribution {
  project: string;
  type: 'Bug Report' | 'Pull Request' | 'Docs PR';
  status: 'Merged' | 'Resolved' | 'Submitted' | 'Closed';
  title: string;
  description: string;
  link: string;
}