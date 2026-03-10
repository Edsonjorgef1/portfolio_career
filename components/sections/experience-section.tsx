import { ExperienceCard } from "@/components/cards/experience-card";
import { SectionTitle } from "@/components/layout/section-title";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function ExperienceSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section id="experience" className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Carreira" : "Career"}
        title={getLocalizedValue(locale, data.experience.titlePt, data.experience.titleEn)}
      />
      <div className="mt-10 space-y-6">
        {data.experience.items.map((item, index) => (
          <ExperienceCard key={`${item.company}-${item.roleEn}`} item={item} locale={locale} index={index} />
        ))}
      </div>
    </section>
  );
}
