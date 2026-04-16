import { Landmark, HeartPulse, Wheat, GraduationCap, Hotel, LucideIcon } from "lucide-react";
import { SectionTitle } from "@/components/layout/section-title";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

const iconMap: Record<string, LucideIcon> = {
  landmark: Landmark,
  "heart-pulse": HeartPulse,
  wheat: Wheat,
  "graduation-cap": GraduationCap,
  hotel: Hotel,
};

export function ExpertiseAreasSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Especialidades" : "Specialties"}
        title={locale === "pt" ? "Áreas de Atuação" : "Areas of Expertise"}
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.expertiseAreas.map((area, index) => {
          const Icon = iconMap[area.icon] || Landmark;
          return (
            <Reveal key={area.nameEn} delay={index * 0.05}>
              <div className="glass-panel group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  {getLocalizedValue(locale, area.namePt, area.nameEn)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {getLocalizedValue(locale, area.descriptionPt, area.descriptionEn)}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
