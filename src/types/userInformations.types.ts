

export interface Profile{
  name: string;
  role: string;
  description: string;
  socials:Social;
}

export interface Social {
 github : {
  link: string;
  },
  linkedIn : {
  link: string;
 }
}

export interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  technologies: string[];
  points: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  dates: string;
  description: string;
}

export interface SkillItem {
  languages : string[];
  technologies : string[];
}


export interface CertificateItem {
    title: string;
    provider: string;
    dates: string;
    link: string;
  }

  

  