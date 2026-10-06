import { notFound } from "next/navigation";

import { PROJECTS, getProject } from "@/lib/content/projects";
import { LOCALES } from "@/lib/content/ui";
import { OG_SIZE, projectOgImage } from "@/lib/og";
import type { Locale } from "@/types/content";

export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PROJECTS.map((project) => ({ locale, slug: project.slug })));
}

export const alt = "Edson Francisco — project";

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project || !LOCALES.includes(locale as Locale)) notFound();
  return projectOgImage(project, locale as Locale);
}
