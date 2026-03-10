import { SectionTitle } from "@/components/layout/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function AdditionalInfoSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const items = getLocalizedValue(locale, data.additionalInfo.itemsPt, data.additionalInfo.itemsEn);

  return (
    <section className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Adicional" : "Additional"}
        title={getLocalizedValue(locale, data.additionalInfo.titlePt, data.additionalInfo.titleEn)}
      />
      <GlassCard className="mt-10 p-8">
        <ul className="space-y-4 text-sm leading-7 text-muted-foreground">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </section>
  );
}
