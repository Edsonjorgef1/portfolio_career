export type Locale = "pt" | "en";

/** A string in both site languages. */
export type L = { pt: string; en: string };

export type CategoryId =
  | "offline-first"
  | "agritech"
  | "saas"
  | "govtech"
  | "health"
  | "community"
  | "reliability"
  | "hospitality";

export type ProjectStatus = "production" | "development" | "archived" | "prototype" | "concept";

/**
 * How much of the work is Edson's own, as shown by git history or documents.
 * - lead: designed and wrote most of it
 * - main: largest single contributor in a team
 * - contributor: a defined part (e.g. backend, deploy) of a team project
 * - team: team project where his role was not code-heavy (lead, review, coordination)
 * - consulting: advisory / implementation work without a code repository
 */
export type Authorship = "lead" | "main" | "contributor" | "team" | "consulting";

export type ProjectImage = {
  /** Path under /public, e.g. "/work/fams/01.webp" */
  src: string;
  alt: L;
  width: number;
  height: number;
  device: "desktop" | "mobile";
};

export type ProjectVideo = {
  /** Path under /public, e.g. "/work/fams/video/fams-demo-en.mp4" */
  src: string;
  /** Still frame shown before playback. */
  poster: string;
  title: L;
  /** e.g. "2:01" */
  duration: string;
};

/** A number or fact. `source` is kept for our records; only `url` (a public, checkable link) is shown. */
export type Fact = {
  value: string;
  label: L;
  source: L;
  url?: string;
};

export type Decision = {
  title: L;
  body: L;
};

export type ProjectLink = {
  label: L;
  href: string;
};

export type CaseStudySection = {
  heading: L;
  paragraphs: L[];
};

export type Project = {
  slug: string;
  /** Proper name, or a localized name when it contains descriptive words. */
  name: string | L;
  /** One sentence shown on cards. */
  tagline: L;
  /** e.g. "2021–2026" or "2022" */
  period: string;
  status: ProjectStatus;
  categories: CategoryId[];
  /** Canonical technology names (see TECH_NAMES in lib/content/categories.ts). */
  tech: string[];
  role: L;
  authorship: Authorship;
  /** e.g. "3 269 de 8 126 commits (2021–2026)". Omit when no repository exists. */
  authorshipNote?: L;
  client?: string;
  partners?: string[];
  problem: L;
  solution: L;
  decisions: Decision[];
  results: Fact[];
  learnings?: L;
  images: ProjectImage[];
  /** Demo videos, shown after the images on the project page. */
  videos?: ProjectVideo[];
  /** Process steps digitised in FAMS, drawn on the cover (cards and project page) instead of a screenshot. */
  flow?: L[];
  links: ProjectLink[];
  /** Long-form case study (only FAMS and FUNAE MGQR). */
  caseStudy?: CaseStudySection[];
  featured?: boolean;
  /** Kept in the source but not shown on the site. */
  hidden?: boolean;
  /** Lower comes first in the gallery. */
  order: number;
};
