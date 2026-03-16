import React from 'react';

export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  techStack: string[];
  features: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  imagePlaceholder?: string;
}

export interface ExperienceData {
  id: string;
  title: string;
  company: string;
  period: string;
  highlights: string[];
  techUsed: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface AchievementData {
  id: string;
  metric: string;
  label: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    logoText: string;
    resumeUrl: string;
    tagline: string;
    subTagline: string;
    about: string[];
    location: string;
    contact: {
      phone: string;
      email: string;
      linkedin: string;
      github: string;
    }
  };
  experience: ExperienceData[];
  skills: SkillCategory[];
  genAiFocus: {
    heading: string;
    description: string;
    keyPoints: string[];
  };
  projects: ProjectData[];
  domainExpertise: string[];
  services: ServiceData[];
  achievements: AchievementData[];
}
