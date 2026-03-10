import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function MetricsSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section className="section-shell section-spacing pt-0">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.metrics.map((metric, index) => (
          <Reveal key={metric.labelEn} delay={index * 0.05}>
            <div className="glass-panel rounded-[1.5rem] p-6">
              <div className="font-display text-4xl font-semibold text-white">{metric.value}</div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {getLocalizedValue(locale, metric.labelPt, metric.labelEn)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
