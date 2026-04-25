import { SectionTitle } from "@/components/layout/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function AboutSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const body = getLocalizedValue(locale, data.about.bodyPt, data.about.bodyEn);
  const competencies = data.competencies.items.map((item) =>
    getLocalizedValue(locale, item.pt, item.en)
  );

  return (
    <section id="about" className="section-shell section-spacing">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle
          eyebrow={locale === "pt" ? "Perfil" : "Profile"}
          title={getLocalizedValue(locale, data.about.titlePt, data.about.titleEn)}
          description={
            locale === "pt"
              ? "Experiência estratégica e execução técnica alinhadas ao negócio."
              : "Strategic experience and technical execution aligned with business goals."
          }
        />
        <Reveal>
          <GlassCard className="p-8">
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {competencies.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
