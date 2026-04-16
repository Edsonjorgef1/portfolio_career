import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  neon = false,
}: {
  children: ReactNode;
  className?: string;
  neon?: boolean;
}) {
  return (
    <div className={cn(
      "glass-panel rounded-[2rem] neon-glow/50 transition-all duration-300 hover:scale-[1.02] hover:neon-glow",
      neon && "border-primary/40 bg-gradient-to-br from-primary/5 to-secondary/5",
      className
    )}>
      {children}
    </div>
  );
}
