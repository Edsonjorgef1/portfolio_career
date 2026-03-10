import { DeploymentCard } from "@/components/cards/deployment-card";
import { SectionTitle } from "@/components/layout/section-title";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function DeploymentsSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section id="deployments" className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Implementação" : "Deployment"}
        title={getLocalizedValue(locale, data.freelanceDeployments.titlePt, data.freelanceDeployments.titleEn)}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {data.freelanceDeployments.items.map((item, index) => (
          <DeploymentCard key={item.slug} item={item} locale={locale} index={index} />
        ))}
      </div>
    </section>
  );
}
