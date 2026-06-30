"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import type { Locale, NavigationItem } from "@/types/portfolio";

export function SiteHeader({
  locale,
  navigation,
  name,
}: {
  locale: Locale;
  navigation: NavigationItem[];
  name: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="min-w-0">
          <div className="font-display text-lg font-semibold tracking-[0.2em] text-white uppercase">{name}</div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            item.href.startsWith("/") ? (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-white">
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-white">
                {item.label}
              </a>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open ? (
        <div className="section-shell glass-panel mb-4 rounded-[1.5rem] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navigation.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <div className="pt-2">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
