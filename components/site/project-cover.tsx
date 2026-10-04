import Image from "next/image";

import { CATEGORIES } from "@/lib/content/categories";
import type { Locale, Project } from "@/types/content";

/** First screenshot, or a typographic cover when the project has no publishable image. */
export function ProjectCover({
  project,
  locale,
  sizes,
  priority = false,
}: {
  project: Project;
  locale: Locale;
  sizes: string;
  priority?: boolean;
}) {
  const image = project.images.find((img) => img.device === "desktop") ?? project.images[0];

  if (!image) {
    const category = CATEGORIES.find((c) => c.id === project.categories[0]);
    return (
      <div
        className="flex aspect-[16/10] w-full flex-col justify-between bg-surface-2 bg-[radial-gradient(circle_at_85%_15%,rgba(52,211,153,0.10),transparent_45%)] p-5"
        aria-hidden="true"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">{category?.name[locale] ?? project.period}</span>
        <span className="font-mono text-sm leading-relaxed text-muted">
          {project.tech.length > 0 ? project.tech.slice(0, 5).join(" · ") : project.period}
        </span>
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
