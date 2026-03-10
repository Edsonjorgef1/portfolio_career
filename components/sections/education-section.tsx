import { SectionTitle } from "@/components/layout/section-title";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function EducationSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section id="education" className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Formação" : "Education"}
        title={getLocalizedValue(locale, data.education.titlePt, data.education.titleEn)}
      />
      <div className="mt-10 grid gap-4">
        {data.education.items.map((item, index) => (
          <Reveal key={item.institution} delay={index * 0.04}>
            <div className="glass-panel rounded-[1.5rem] p-6">
              <h3 className="font-display text-xl font-semibold text-white">
                {getLocalizedValue(locale, item.degreePt, item.degreeEn)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.institution}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
