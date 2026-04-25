import { SectionTitle } from "@/components/layout/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";
import { Download } from "lucide-react";

export function LeadershipSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const isEn = locale === "en";

  return (
    <section className="section-shell section-spacing">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow={isEn ? "Leadership" : "Liderança"}
            title={getLocalizedValue(locale, data.leadership.titlePt, data.leadership.titleEn)}
            description={getLocalizedValue(locale, data.leadership.introPt, data.leadership.introEn)}
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`/cliftonstrengths-${isEn ? "en" : "pt"}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Download className="h-4 w-4" />
              {isEn ? "Download Certificate (EN)" : "Baixar Certificado (PT)"}
            </a>
            <a
              href={`/cliftonstrengths-${isEn ? "pt" : "en"}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/50 transition hover:bg-white/10 hover:text-white/80"
            >
              <Download className="h-4 w-4" />
              {isEn ? "Versão PT" : "EN Version"}
            </a>
          </div>
        </div>

        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {data.leadership.strengths.map((s) => (
              <GlassCard key={s.nameEn} className="flex flex-col gap-2 p-5">
                <span className="text-sm font-bold text-white">
                  {isEn ? s.nameEn : s.namePt}
                </span>
                <p className="text-xs leading-relaxed text-white/60">
                  {isEn ? s.descriptionEn : s.descriptionPt}
                </p>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
