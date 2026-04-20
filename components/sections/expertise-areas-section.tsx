import { Landmark, HeartPulse, Wheat, GraduationCap, Hotel, Building2, Users, Briefcase, LucideIcon } from "lucide-react";
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
  "building-2": Building2,
  users: Users,
  briefcase: Briefcase,
};

export function ExpertiseAreasSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const [featured, ...sectors] = data.expertiseAreas;
  const FeaturedIcon = iconMap[featured.icon] || Landmark;

  return (
    <section className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Especialidades" : "Specialties"}
        title={locale === "pt" ? "Áreas de Atuação" : "Areas of Expertise"}
      />

      {/* Featured: Consultoria — full width */}
      <Reveal delay={0}>
        <div className="mt-10 mb-6 glass-panel relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 border border-primary/20 bg-primary/5">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <FeaturedIcon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {getLocalizedValue(locale, featured.namePt, featured.nameEn)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-3xl">
                {getLocalizedValue(locale, featured.descriptionPt, featured.descriptionEn)}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Sector grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sectors.map((area, index) => {
          const Icon = iconMap[area.icon] || Landmark;
          return (
            <Reveal key={area.nameEn} delay={(index + 1) * 0.05}>
              <div className="glass-panel group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 h-full">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold">
                  {getLocalizedValue(locale, area.namePt, area.nameEn)}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
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
