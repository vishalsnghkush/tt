export interface ProjectScreenshot {
  src: string;
  label: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  name?: string;
  tagline: string;
  eyebrow?: string;
  category: 'AI & Web' | 'Systems & Vision' | 'UX & Open Source' | 'Web' | 'Mobile' | 'AI & ML' | 'Systems' | 'Research';
  stackCategory?: 'Web' | 'Mobile' | 'AI & ML' | 'Systems' | 'Research';
  isResearch?: boolean;
  featured: boolean;
  year: string;
  role: string;
  image: string;
  screenshots?: ProjectScreenshot[];
  cardColor?: string;
  collageImages?: string[];
  layoutType?: 'desktop' | 'mobile-collage' | 'standard';
  metrics: { label: string; value: string }[];
  description: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
  highlights: string[];
  caseStudy: {
    problem: string;
    audience: string;
    designDecisions: string[];
    technicalArchitecture: string[];
    impact: string[];
  };
  interactiveType: 
    | 'cbt-proctor' 
    | 'fl-nodes' 
    | 'agri-app' 
    | 'indoor-nav' 
    | 'cpu-scheduler' 
    | 'skill-graph' 
    | 'dr-retina' 
    | 'mascot-chat' 
    | 'amazon-ml' 
    | 'fda-safety' 
    | 'chronos-flow'
    | 'dsa-viz';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  link?: string;
  linkLabel?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface AnimalCompanion {
  id: 'mochi' | 'bubu' | 'pip';
  name: string;
  species: string;
  personality: string;
  state: 'idle' | 'happy' | 'sleeping' | 'playing' | 'curious';
  hearts: number;
}
