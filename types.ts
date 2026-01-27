
export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'image' | 'link' | 'list';
  text?: string;
  url?: string;
  items?: string[];
  alt?: string;
}

export interface Entry {
  id: string;
  type: 'project' | 'experience';
  titleKey: string;
  descriptionKey: string;
  date: string;
  tags?: string[];
  github?: string;
  company?: string;
  role?: string;
  fullContent?: ContentBlock[];
  showReadme?: boolean;
}

export type Language = 'en' | 'pt';

export interface Translation {
  [key: string]: {
    en: string;
    pt: string;
  };
}

export interface SkyColors {
  start: string;
  end: string;
  isDark: boolean;
}

export interface SkillCategory {
  id: string;
  categoryKey: string;
  descriptionKey: string;
  skills: Array<{
    name: string;
    level: "expert" | "proficient" | "familiar";
    icon?: string;
  }>;
}

export interface ContactInfo {
  headline: { en: string; pt: string };
  subheadline: { en: string; pt: string };
  email: string;
  linkedin: string;
  github: string;
  calendly?: string;
  resumeUrl: string;
}
