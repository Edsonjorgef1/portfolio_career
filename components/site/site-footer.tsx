import Link from "next/link";

import { PERSON } from "@/lib/content/profile";
import { UI, t } from "@/lib/content/ui";
import type { Locale } from "@/types/content";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PERSON.name}. {t(locale, UI.footer.built)}
        </p>
        <ul className="flex flex-wrap gap-4">
          <li>
            <a className="hover:text-foreground" href={PERSON.github} rel="me noopener" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={PERSON.linkedin} rel="me noopener" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <Link className="hover:text-foreground" href={`/${locale}/now`}>
              {t(locale, UI.nav.now)}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
