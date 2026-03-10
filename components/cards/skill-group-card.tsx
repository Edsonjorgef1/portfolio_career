import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue } from "@/lib/portfolio";
import type { Locale, SkillGroup } from "@/types/portfolio";

export function SkillGroupCard({
  group,
  locale,
  index,
}: {
  group: SkillGroup;
  locale: Locale;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.05}>
      <GlassCard className="p-6">
        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold text-white">
            {getLocalizedValue(locale, group.namePt, group.nameEn)}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}
