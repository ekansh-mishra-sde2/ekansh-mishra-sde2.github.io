export interface Project {
  id: number;
  num: string;
  title: string;
  description: string;
  tags: string[];
  meta: string;
  link?: string;
  isLive?: boolean;
}

export interface Recommendation {
  text: string;
  name: string;
  title: string;
  initials: string;
}

export interface TechItem {
  name: string;
  img: string;
}

export interface TechRings {
  r1: TechItem[];
  r2: TechItem[];
  r3: TechItem[];
}

export interface ContactFormData {
  fromName: string;
  fromEmail: string;
  subject: string;
  message: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
}
