export type Locale = "pt" | "en";

export interface LabelValue {
  value: string;
  labelPt: string;
  labelEn: string;
}

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface LanguageItem {
  namePt: string;
  nameEn: string;
  levelPt: string;
  levelEn: string;
}

export interface ExperienceItem {
  company: string;
  rolePt: string;
  roleEn: string;
  periodPt: string;
  periodEn: string;
  location: string;
  bulletsPt: string[];
  bulletsEn: string[];
}

export interface ProjectItem {
  slug: string;
  name: string;
  categoryPt: string;
  categoryEn: string;
  rolePt: string;
  roleEn: string;
  periodPt: string;
  periodEn: string;
  summaryPt: string;
  summaryEn: string;
  highlightsPt: string[];
  highlightsEn: string[];
  stack: string[];
  featured?: boolean;
  link?: string;
  donors?: string;
  videoUrl?: string;
  images?: string[];
}

export interface DeploymentItem {
  slug: string;
  namePt: string;
  nameEn: string;
  rolePt: string;
  roleEn: string;
  clients: string[];
  summaryPt: string;
  summaryEn: string;
  bulletsPt: string[];
  bulletsEn: string[];
  stack: string[];
  images?: string[];
}

export interface SkillGroup {
  namePt: string;
  nameEn: string;
  items: string[];
}

export interface EducationItem {
  degreePt: string;
  degreeEn: string;
  institution: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  issuedPt: string;
  issuedEn: string;
  credentialId?: string;
  skills?: string[];
}

export interface CertificationGroup {
  namePt: string;
  nameEn: string;
  items: CertificationItem[];
}

export interface ExpertiseArea {
  icon: string;
  namePt: string;
  nameEn: string;
  descriptionPt: string;
  descriptionEn: string;
}

export interface Differentiator {
  icon: string;
  titlePt: string;
  titleEn: string;
  descriptionPt: string;
  descriptionEn: string;
}

export interface AwardItem {
  titlePt: string;
  titleEn: string;
  issuer: string;
  datePt: string;
  dateEn: string;
  placePt: string;
  placeEn: string;
  descriptionPt: string;
  descriptionEn: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface PortfolioData {
  expertiseAreas: ExpertiseArea[];
  differentiators: {
    titlePt: string;
    titleEn: string;
    quotePt: string;
    quoteEn: string;
    items: Differentiator[];
  };
  personal: {
    name: string;
    headlinePt: string;
    headlineEn: string;
    summaryPt: string;
    summaryEn: string;
    location: string;
    languages: LanguageItem[];
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    website: string;
    wakatime?: string;
    heroTagsPt: string[];
    heroTagsEn: string[];
  };
  metrics: LabelValue[];
  competencies: {
    titlePt: string;
    titleEn: string;
    items: LocalizedText[];
  };
  about: {
    titlePt: string;
    titleEn: string;
    bodyPt: string[];
    bodyEn: string[];
  };
  experience: {
    titlePt: string;
    titleEn: string;
    items: ExperienceItem[];
  };
  featuredProjects: {
    titlePt: string;
    titleEn: string;
    items: ProjectItem[];
  };
  freelanceDeployments: {
    titlePt: string;
    titleEn: string;
    items: DeploymentItem[];
  };
  otherProducts: {
    titlePt: string;
    titleEn: string;
    items: {
      name: string;
      typePt: string;
      typeEn: string;
      shortPt: string;
      shortEn: string;
    }[];
  };
  skills: {
    titlePt: string;
    titleEn: string;
    groups: SkillGroup[];
  };
  leadership: {
    titlePt: string;
    titleEn: string;
    introPt: string;
    introEn: string;
    strengths: string[];
  };
  education: {
    titlePt: string;
    titleEn: string;
    items: EducationItem[];
  };
  additionalInfo: {
    titlePt: string;
    titleEn: string;
    itemsPt: string[];
    itemsEn: string[];
  };
  certifications: {
    titlePt: string;
    titleEn: string;
    groups: CertificationGroup[];
  };
  awards: {
    titlePt: string;
    titleEn: string;
    items: AwardItem[];
  };
  navigation: {
    pt: NavigationItem[];
    en: NavigationItem[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
