import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue, getProjectImage } from "@/lib/portfolio";
import type { Locale, ProjectItem } from "@/types/portfolio";

export function ProjectCard({ item, locale, index }: { item: ProjectItem; locale: Locale; index: number }) {
  const image = getProjectImage(item.slug);

  return (
    <Reveal delay={index * 0.06}>
      <GlassCard className="group overflow-hidden">
        <div className="relative h-52 overflow-hidden border-b border-white/10">
          {image ? (
            <div
              className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
            />
          ) : (
            <div className="h-full w-full bg-hero-grid" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        <div className="space-y-5 p-6">
          <div className="space-y-3">
            <Badge>{getLocalizedValue(locale, item.categoryPt, item.categoryEn)}</Badge>
            <div>
              <h3 className="font-display text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {getLocalizedValue(locale, item.summaryPt, item.summaryEn)}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} className="bg-white/0">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {getLocalizedValue(locale, item.periodPt, item.periodEn)}
            </div>
            <Link
              href={`/${locale}/projects/${item.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              {locale === "pt" ? "Ver case study" : "View case study"}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}
