import { SectionTitle } from "@/components/layout/section-title";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function LeadershipSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section className="section-shell section-spacing">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          eyebrow={locale === "pt" ? "Liderança" : "Leadership"}
          title={getLocalizedValue(locale, data.leadership.titlePt, data.leadership.titleEn)}
          description={getLocalizedValue(locale, data.leadership.introPt, data.leadership.introEn)}
        />
        <Reveal>
          <GlassCard className="p-8">
            <div className="flex flex-wrap gap-3">
              {data.leadership.strengths.map((strength) => (
                <Badge key={strength} className="px-4 py-2 text-sm text-white">
                  {strength}
                </Badge>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
