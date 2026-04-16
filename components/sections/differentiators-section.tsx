import { WifiOff, RefreshCw, MapPin, Layers, Rocket, Quote } from "lucide-react";
import { SectionTitle } from "@/components/layout/section-title";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

const iconMap: Record<string, React.ElementType> = {
  "wifi-off": WifiOff,
  "refresh-cw": RefreshCw,
  "map-pin": MapPin,
  layers: Layers,
  rocket: Rocket,
};

export function DifferentiatorsSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section className="section-shell section-spacing bg-gradient-to-b from-transparent to-primary/5">
      <SectionTitle
        eyebrow={locale === "pt" ? "Porquê escolher-nos" : "Why choose us"}
        title={getLocalizedValue(locale, data.differentiators.titlePt, data.differentiators.titleEn)}
      />
      <div className="mt-8 flex items-center justify-center">
        <div className="relative max-w-2xl rounded-2xl bg-primary/10 p-6 text-center">
          <Quote className="absolute -left-4 -top-4 h-8 w-8 text-primary/30" />
          <p className="text-lg font-medium italic text-foreground">
            {getLocalizedValue(locale, data.differentiators.quotePt, data.differentiators.quoteEn)}
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {data.differentiators.items.map((item, index) => {
          const Icon = iconMap[item.icon] || Rocket;
          return (
            <Reveal key={item.titleEn} delay={index * 0.05}>
              <div className="glass-panel group flex h-full flex-col items-center rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  {getLocalizedValue(locale, item.titlePt, item.titleEn)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {getLocalizedValue(locale, item.descriptionPt, item.descriptionEn)}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
