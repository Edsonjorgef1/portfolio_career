import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { UI, t } from "@/lib/content/ui";
import type { Locale } from "@/types/content";

export function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:text-background"
      >
        {t(locale, UI.skip)}
      </a>
      <SiteHeader locale={locale} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
