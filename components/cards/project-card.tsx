import Link from "next/link";
import { ArrowUpRight, ExternalLink, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue, getProjectImage } from "@/lib/portfolio";
import type { Locale, ProjectItem } from "@/types/portfolio";

export function ProjectCard({ item, locale, index }: { item: ProjectItem; locale: Locale; index: number }) {
  const image = getProjectImage(item.slug);

  return (
    <Reveal delay={index * 0.06}>
      <GlassCard className="group overflow-hidden flex flex-col">
        <div className="relative h-52 overflow-hidden border-b border-white/10 shrink-0">
          {image ? (
            <div
              className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
            />
          ) : (
            <div className="h-full w-full bg-hero-grid" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          {item.donors && (
            <div className="absolute bottom-3 left-4 right-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-background/80 px-3 py-1 backdrop-blur-sm">
                <Users className="h-3 w-3 text-accent shrink-0" />
                <span className="truncate text-xs text-accent/90">{item.donors}</span>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 space-y-5 p-6">
          <div className="space-y-3 flex-1">
            <Badge>{getLocalizedValue(locale, item.categoryPt, item.categoryEn)}</Badge>
            <div>
              <h3 className="font-display text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
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
            <div className="flex items-center gap-3 shrink-0">
              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-white"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              )}
              <Link
                href={`/${locale}/projects/${item.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                {locale === "pt" ? "Ver detalhe" : "View detail"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}
