import { SkillGroupCard } from "@/components/cards/skill-group-card";
import { SectionTitle } from "@/components/layout/section-title";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function SkillsSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section id="skills" className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Capacidades" : "Capabilities"}
        title={getLocalizedValue(locale, data.skills.titlePt, data.skills.titleEn)}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {data.skills.groups.map((group, index) => (
          <SkillGroupCard key={group.nameEn} group={group} locale={locale} index={index} />
        ))}
      </div>
    </section>
  );
}
