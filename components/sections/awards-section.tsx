import { Trophy } from "lucide-react";

import { SectionTitle } from "@/components/layout/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

const placeColors: Record<string, string> = {
  "1st Place": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  "2nd Place": "text-slate-300 border-slate-300/30 bg-slate-300/10",
  "1º Lugar": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  "2º Lugar": "text-slate-300 border-slate-300/30 bg-slate-300/10",
};

export function AwardsSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section id="awards" className="section-shell section-spacing pt-0">
      <SectionTitle
        eyebrow={locale === "pt" ? "Hackathons" : "Hackathons"}
        title={getLocalizedValue(locale, data.awards.titlePt, data.awards.titleEn)}
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {data.awards.items.map((award, index) => {
          const place = getLocalizedValue(locale, award.placePt, award.placeEn);
          const colorClass = placeColors[place] ?? "text-primary border-primary/30 bg-primary/10";

          return (
            <Reveal key={award.titleEn} delay={index * 0.06}>
              <GlassCard className="p-7">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Trophy className="h-6 w-6 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${colorClass}`}>
                        {place}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {getLocalizedValue(locale, award.datePt, award.dateEn)}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-snug text-white">
                      {getLocalizedValue(locale, award.titlePt, award.titleEn)}
                    </h3>
                    <p className="text-xs text-primary">{award.issuer}</p>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {getLocalizedValue(locale, award.descriptionPt, award.descriptionEn)}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
