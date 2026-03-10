"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/types/portfolio";

const locales: Locale[] = ["pt", "en"];

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const normalized = pathname.startsWith("/pt") || pathname.startsWith("/en") ? pathname.slice(3) || "" : pathname;

  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
      {locales.map((item) => {
        const href = item === "pt" ? `/pt${normalized}` : `/en${normalized}`;
        const active = item === locale;

        return (
          <Link
            key={item}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] transition ${
              active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
