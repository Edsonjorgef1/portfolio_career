import { Award } from "lucide-react";

import { SectionTitle } from "@/components/layout/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function CertificationsSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  return (
    <section id="certifications" className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Aprendizagem Contínua" : "Continuous Learning"}
        title={getLocalizedValue(locale, data.certifications.titlePt, data.certifications.titleEn)}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {data.certifications.groups.map((group, groupIndex) => (
          <Reveal key={group.nameEn} delay={groupIndex * 0.05}>
            <GlassCard className="h-full p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {getLocalizedValue(locale, group.namePt, group.nameEn)}
                </h3>
              </div>
              <ul className="space-y-4">
                {group.items.map((cert) => (
                  <li key={cert.name} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-medium leading-snug text-white/90">{cert.name}</p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs text-primary">{cert.issuer}</span>
                      <span className="text-xs text-muted-foreground">
                        {getLocalizedValue(locale, cert.issuedPt, cert.issuedEn)}
                      </span>
                    </div>
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-block rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
