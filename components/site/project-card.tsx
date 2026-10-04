import Link from "next/link";

import { ProjectCover } from "@/components/site/project-cover";
import { STATUS_LABEL } from "@/lib/content/categories";
import { projectHref, nameOf } from "@/lib/content/ui";
import type { Locale, Project } from "@/types/content";

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <article className="card group relative flex h-full flex-col overflow-hidden transition-colors hover:border-border-strong focus-within:border-accent focus-within:ring-1 focus-within:ring-accent">
      <ProjectCover project={project} locale={locale} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      <div className="flex flex-1 flex-col gap-3 border-t border-border p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-subtle">
          <span>{project.period}</span>
          <span aria-hidden="true">·</span>
          <span>{STATUS_LABEL[project.status][locale]}</span>
        </div>
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          <Link href={projectHref(locale, project.slug)} className="after:absolute after:inset-0 focus-visible:outline-none">
            {nameOf(project, locale)}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.tagline[locale]}</p>
        {project.tech.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label={locale === "pt" ? "Tecnologias" : "Technologies"}>
            {project.tech.slice(0, 4).map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
            {project.tech.length > 4 && <li className="chip">+{project.tech.length - 4}</li>}
          </ul>
        )}
      </div>
    </article>
  );
}
