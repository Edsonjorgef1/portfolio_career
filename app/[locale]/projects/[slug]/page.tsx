import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectPage } from "@/components/site/project-page";
import { Shell } from "@/components/site/shell";
import { PAGE_PROJECTS, getNeighbours, getProject } from "@/lib/content/projects";
import { pageMetadata } from "@/lib/content/seo";
import { LOCALES, nameOf } from "@/lib/content/ui";
import type { Locale } from "@/types/content";

type Params = Promise<{ locale: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PAGE_PROJECTS.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project || !LOCALES.includes(locale as Locale)) return {};
  const metadata = pageMetadata({
    locale: locale as Locale,
    path: `/projects/${slug}`,
    title: nameOf(project, locale as Locale),
    description: project.tagline[locale as Locale],
  });
  return project.unlisted ? { ...metadata, robots: { index: false, follow: false } } : metadata;
}

export default async function ProjectRoute({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project || !LOCALES.includes(locale as Locale)) notFound();
  const { prev, next } = getNeighbours(slug);

  return (
    <Shell locale={locale as Locale}>
      <ProjectPage project={project} locale={locale as Locale} prev={prev} next={next} />
    </Shell>
  );
}
