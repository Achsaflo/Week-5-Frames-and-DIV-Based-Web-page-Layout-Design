export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  status: string;
  period: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  type: string;
  focusArea: string;
}

export interface InternshipItem {
  id: string;
  title: string;
  type: string;
  description: string;
  areasCovered: string[];
  contextNote: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
