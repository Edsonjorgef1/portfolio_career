import { SectionTitle } from "@/components/layout/section-title";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function OtherProductsSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Iniciativas" : "Initiatives"}
        title={getLocalizedValue(locale, data.otherProducts.titlePt, data.otherProducts.titleEn)}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.otherProducts.items.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.04}>
            <div className="glass-panel rounded-[1.5rem] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-primary">
                {getLocalizedValue(locale, item.typePt, item.typeEn)}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {getLocalizedValue(locale, item.shortPt, item.shortEn)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
