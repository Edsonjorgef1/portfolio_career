import { MapPin } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { ExperienceItem, Locale } from "@/types/portfolio";

export function ExperienceCard({
  item,
  locale,
  index,
}: {
  item: ExperienceItem;
  locale: Locale;
  index: number;
}) {
  const bullets = getLocalizedValue(locale, item.bulletsPt, item.bulletsEn);

  return (
    <Reveal delay={index * 0.05}>
      <GlassCard className="p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.6fr]">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.22em] text-primary">
              {getLocalizedValue(locale, item.periodPt, item.periodEn)}
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">
                {getLocalizedValue(locale, item.rolePt, item.roleEn)}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">{item.company}</p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {item.location}
            </div>
          </div>
          <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </GlassCard>
    </Reveal>
  );
}
