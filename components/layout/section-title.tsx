import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <Badge className="border-primary/20 bg-primary/10 text-primary">{eyebrow}</Badge>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description ? <p className="text-base leading-8 text-muted-foreground">{description}</p> : null}
      </div>
    </div>
  );
}
