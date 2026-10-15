import Image from "next/image";

import { CATEGORIES, CATEGORY_ACCENT } from "@/lib/content/categories";
import { nameOf } from "@/lib/content/ui";
import type { Locale, Project } from "@/types/content";

/** Name before the dash, and the descriptive part after it. */
function splitName(project: Project, locale: Locale) {
  const [title, ...rest] = nameOf(project, locale).split(/\s[—–]\s/);
  return { title, subtitle: rest.join(" — ") };
}

/**
 * Typographic cover with the digitised process steps when the project defines a `flow`;
 * otherwise the first screenshot, or the typographic cover when there is no publishable image.
 */
export function ProjectCover({
  project,
  locale,
  sizes,
  priority = false,
  aspect = "aspect-[16/10]",
}: {
  project: Project;
  locale: Locale;
  sizes: string;
  priority?: boolean;
  aspect?: string;
}) {
  const image = project.images.find((img) => img.device === "desktop") ?? project.images[0];

  if (!image || project.flow?.length) {
    const categoryId = project.categories[0];
    const category = CATEGORIES.find((c) => c.id === categoryId);
    const rgb = categoryId ? CATEGORY_ACCENT[categoryId] : "163,163,163";
    const { title, subtitle } = splitName(project, locale);
    const steps = project.flow?.map((step) => step[locale]) ?? [];

    return (
      <div
        aria-hidden="true"
        className={`cover relative flex ${aspect} w-full flex-col justify-between gap-4 overflow-hidden bg-surface-2 p-5 sm:p-6`}
        style={{
          backgroundImage: `radial-gradient(circle at 90% 0%, rgba(${rgb},0.26), transparent 55%), radial-gradient(circle at 0% 100%, rgba(${rgb},0.10), transparent 50%), linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "auto, auto, 28px 28px, 28px 28px",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: `rgb(${rgb})` }} />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {category?.name[locale] ?? project.period}
          </span>
        </div>

        <div>
          <p className="cover-title font-semibold leading-none tracking-tight text-foreground">{title}</p>
          {subtitle && <p className="cover-subtitle mt-2 max-w-md leading-snug text-muted">{subtitle}</p>}
        </div>

        {steps.length > 0 ? (
          <div>
            <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
              <span
                className="absolute top-[9px] h-px"
                style={{
                  left: `${50 / steps.length}%`,
                  right: `${50 / steps.length}%`,
                  backgroundImage: `linear-gradient(90deg, rgba(${rgb},0.9), rgba(${rgb},0.3))`,
                }}
              />
              {steps.map((step, index) => {
                const edge = index === 0 || index === steps.length - 1;
                return (
                  <li key={step} className="relative flex flex-col items-center px-1 text-center">
                    <span
                      className="flex h-[19px] w-[19px] items-center justify-center rounded-full border font-mono text-[9px] font-semibold"
                      style={{
                        borderColor: `rgb(${rgb})`,
                        backgroundColor: edge ? `rgb(${rgb})` : "var(--surface-2)",
                        color: edge ? "var(--background)" : "var(--foreground)",
                      }}
                    >
                      {index + 1}
                    </span>
                    <span className={`cover-step-label mt-2 text-[11px] leading-tight ${edge ? "text-foreground" : "text-muted"}`}>{step}</span>
                  </li>
                );
              })}
            </ol>
            <div className="cover-step-ends mt-2 justify-between gap-4 text-[11px] leading-tight">
              <span className="text-foreground">{steps[0]}</span>
              <span className="text-right text-foreground">{steps[steps.length - 1]}</span>
            </div>
          </div>
        ) : (
          <span className="font-mono text-xs text-muted">
            {project.tech.length > 0 ? project.tech.slice(0, 4).join(" · ") : project.period}
          </span>
        )}
      </div>
    );
  }

  const isMobile = image.device === "mobile";

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
      <Image
        src={image.src}
        alt={image.alt[locale]}
        fill
        sizes={sizes}
        priority={priority}
        className={isMobile ? "object-contain p-3" : "object-cover object-top"}
      />
    </div>
  );
}
