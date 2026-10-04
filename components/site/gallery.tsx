"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/site/project-card";
import { CATEGORIES } from "@/lib/content/categories";
import { UI, fill, t } from "@/lib/content/ui";
import type { CategoryId, Locale, Project } from "@/types/content";

export function Gallery({ projects, techs, locale }: { projects: Project[]; techs: string[]; locale: Locale }) {
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [tech, setTech] = useState<string>("");

  const visible = useMemo(
    () =>
      projects.filter(
        (project) =>
          (category === "all" || project.categories.includes(category)) && (!tech || project.tech.includes(tech)),
      ),
    [projects, category, tech],
  );

  const counts = useMemo(() => {
    const map = new Map<CategoryId, number>();
    for (const project of projects) for (const id of project.categories) map.set(id, (map.get(id) ?? 0) + 1);
    return map;
  }, [projects]);

  const filtered = category !== "all" || tech !== "";
  const chipBase =
    "rounded-full border px-3 py-1.5 text-sm transition-colors aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-foreground";

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div role="group" aria-label={t(locale, UI.gallery.areaLabel)} className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={category === "all"}
            onClick={() => setCategory("all")}
            className={`${chipBase} border-border text-muted hover:text-foreground`}
          >
            {t(locale, UI.gallery.all)}
          </button>
          {CATEGORIES.filter((c) => counts.get(c.id)).map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
              title={c.description[locale]}
              className={`${chipBase} border-border text-muted hover:text-foreground`}
            >
              {c.name[locale]} <span className="font-mono text-xs opacity-70">{counts.get(c.id)}</span>
            </button>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <label htmlFor="tech-filter" className="text-sm text-muted">
            {t(locale, UI.gallery.tech)}
          </label>
          <select
            id="tech-filter"
            value={tech}
            onChange={(event) => setTech(event.target.value)}
            className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
          >
            <option value="">{t(locale, UI.gallery.anyTech)}</option>
            {techs.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 text-sm">
        <p aria-live="polite" className="font-mono text-xs text-subtle">
          {visible.length === 1 ? t(locale, UI.gallery.countOne) : fill(t(locale, UI.gallery.count), visible.length)}
        </p>
        {filtered && (
          <button
            type="button"
            onClick={() => {
              setCategory("all");
              setTech("");
            }}
            className="link text-sm"
          >
            {t(locale, UI.gallery.clear)}
          </button>
        )}
      </div>

      {visible.length > 0 ? (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} locale={locale} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-muted">{t(locale, UI.gallery.empty)}</p>
      )}
    </div>
  );
}
