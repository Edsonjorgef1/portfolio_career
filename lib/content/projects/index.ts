import type { Project } from "@/types/content";

import { projects as fams } from "./fams";
import { projects as govtech } from "./govtech";
import { projects as healthCommunity } from "./health-community";
import { projects as products } from "./products";

/** Every project in the source, including hidden ones. */
export const ALL_PROJECTS: Project[] = [...fams, ...govtech, ...healthCommunity, ...products].sort(
  (a, b) => a.order - b.order,
);

/** Projects shown on the site. */
export const PROJECTS: Project[] = ALL_PROJECTS.filter((project) => !project.hidden);

/** Shown in the "Open source & tooling" strip. */
export const OPEN_SOURCE_SLUGS = ["laravel-teams-logging", "github-actions-template", "sms-usendit", "micacao-wallet"];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeatured() {
  return PROJECTS.filter((project) => project.featured);
}

export function getNeighbours(slug: string) {
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  return {
    prev: index > 0 ? PROJECTS[index - 1] : undefined,
    next: index >= 0 && index < PROJECTS.length - 1 ? PROJECTS[index + 1] : undefined,
  };
}

export function getUsedTech() {
  const counts = new Map<string, number>();
  for (const project of PROJECTS) {
    for (const tech of project.tech) counts.set(tech, (counts.get(tech) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([name]) => name);
}
