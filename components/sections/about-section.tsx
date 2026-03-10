import { SectionTitle } from "@/components/layout/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function AboutSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const body = getLocalizedValue(locale, data.about.bodyPt, data.about.bodyEn);

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
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
