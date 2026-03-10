import { SectionTitle } from "@/components/layout/section-title";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function CompetenciesSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section className="section-shell section-spacing pt-0">
      <SectionTitle
        eyebrow={locale === "pt" ? "Competências" : "Competencies"}
        title={getLocalizedValue(locale, data.competencies.titlePt, data.competencies.titleEn)}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {data.competencies.items.map((item, index) => (
          <Reveal key={item.en} delay={index * 0.04}>
            <div className="glass-panel rounded-[1.5rem] p-5 text-sm leading-7 text-muted-foreground">
              <span className="font-medium text-white">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2">{getLocalizedValue(locale, item.pt, item.en)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
