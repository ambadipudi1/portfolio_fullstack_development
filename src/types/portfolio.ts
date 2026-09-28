export interface PersonalInfo {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  degree: string;
  college: string;
  expectedGraduation: string;
  cgpa: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface ArchitectureNode {
  id: string;
  title: string;
  role: string;
  tech: string[];
  description: string;
}

export interface ProjectArchitectureStep {
  step: string;
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  isFeatured: boolean;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string; // Configurable; undefined if not deployed
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architectureSummary: string;
  architectureSteps: ProjectArchitectureStep[];
  techCategories: {
    category: string;
    items: string[];
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  scoreLabel: string;
  score: string;
  location: string;
  details?: string[];
}
