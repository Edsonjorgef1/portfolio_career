import Link from "next/link";
import { ArrowUpRight, ExternalLink, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/utils-i18n";
import type { Locale, ProjectItem } from "@/types/portfolio";

export function ProjectCard({
  item,
  locale,
  index,
  image,
}: {
  item: ProjectItem;
  locale: Locale;
  index: number;
  image?: string | null;
}) {
  const role = getLocalizedValue(locale, item.rolePt, item.roleEn);
  const isContributor = /contribuidor|contributor/i.test(role);
  const isSupervisor = /supervisor/i.test(role);

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
            <div className="flex h-full w-full items-end bg-[radial-gradient(circle_at_top_left,rgba(88,166,255,0.24),transparent_30%),linear-gradient(135deg,rgba(12,18,30,0.95),rgba(12,18,30,0.7))] p-4">
              <div className="flex flex-wrap gap-2">
                {item.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
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
            <div className="flex flex-wrap gap-2">
              <Badge>{getLocalizedValue(locale, item.categoryPt, item.categoryEn)}</Badge>
              <Badge
                className={
                  isContributor || isSupervisor
                    ? "border-primary/35 bg-primary/10 text-primary"
                    : "border-white/15 bg-white/10 text-white"
                }
              >
                {role}
              </Badge>
            </div>
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
