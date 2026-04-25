import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/utils-i18n";
import type { DeploymentItem, Locale } from "@/types/portfolio";

export function DeploymentCard({
  item,
  locale,
  index,
}: {
  item: DeploymentItem;
  locale: Locale;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.06}>
      <GlassCard className="p-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <Badge>{getLocalizedValue(locale, item.rolePt, item.roleEn)}</Badge>
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                {getLocalizedValue(locale, item.namePt, item.nameEn)}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {getLocalizedValue(locale, item.summaryPt, item.summaryEn)}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.clients.map((client) => (
              <Badge key={client} className="bg-white/0">
                {client}
              </Badge>
            ))}
          </div>
          <Link
            href={`/${locale}/projects/${item.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            {locale === "pt" ? "Ver implementação" : "View deployment"}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </GlassCard>
    </Reveal>
  );
}
