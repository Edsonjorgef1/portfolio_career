import Image from "next/image";
import Link from "next/link";

import { ProjectCover } from "@/components/site/project-cover";
import { CERTIFICATION_GROUPS } from "@/lib/content/certifications";
import { ABOUT, AWARDS, EDUCATION, EXPERIENCE, HERO, PERSON, STRENGTHS } from "@/lib/content/profile";
import { UI, fill, projectHref, t, nameOf } from "@/lib/content/ui";
import type { Locale, Project } from "@/types/content";

function SectionHeading({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div className="max-w-prose">
      <h2 id={id} className="section-title scroll-mt-24">
        {title}
      </h2>
      {intro && <p className="mt-3 leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export function Hero({ locale, cvHref }: { locale: Locale; cvHref: string | null }) {
  return (
    <section aria-labelledby="hero-title" className="container-page pb-16 pt-16 sm:pt-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-center xl:gap-16">
        <div className="fade-up max-w-3xl">
          <div className="mb-6 flex items-center gap-4 lg:hidden">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border-strong">
              <Image
                src="/profile/avatar.jpg"
                alt={locale === "pt" ? "Retrato de Edson Francisco" : "Portrait of Edson Francisco"}
                fill
                sizes="80px"
                priority
                className="object-cover"
              />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">{PERSON.name}</p>
              <p className="text-muted">{PERSON.location[locale]}</p>
            </div>
          </div>
          <p className="eyebrow">{t(locale, HERO.eyebrow)}</p>
          <h1 id="hero-title" className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t(locale, HERO.headline)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t(locale, HERO.intro)}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{t(locale, HERO.commitment)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/projects`}
              className="rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {t(locale, UI.nav.work)}
            </Link>
            <a
              href={`mailto:${PERSON.email}`}
              className="rounded-md border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              {PERSON.email}
            </a>
            {cvHref && (
              <a
                href={cvHref}
                className="rounded-md border border-border px-4 py-2.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                {t(locale, UI.cv)}
              </a>
            )}
          </div>
        </div>
        <figure className="fade-up-delay relative hidden lg:block">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.22),transparent_60%)] blur-2xl"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border-strong bg-surface-2 shadow-2xl shadow-black/50">
            <Image
              src="/profile/portrait.webp"
              alt={locale === "pt" ? "Retrato de Edson Francisco" : "Portrait of Edson Francisco"}
              fill
              sizes="320px"
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5 pt-16">
              <figcaption>
                <span className="block text-base font-semibold text-white">{PERSON.name}</span>
                <span className="block text-sm text-neutral-300">{PERSON.title[locale]}</span>
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                  {PERSON.location[locale]}
                </span>
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export function FeaturedCases({ locale, projects, total }: { locale: Locale; projects: Project[]; total: number }) {
  if (projects.length === 0) return null;
  return (
    <section aria-labelledby="cases-title" className="container-page py-16">
      <SectionHeading id="cases-title" title={t(locale, UI.featured.title)} intro={t(locale, UI.featured.intro)} />
      <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.slug} className={index === 0 ? "md:col-span-2" : ""}>
            <article className="card group relative h-full overflow-hidden transition-colors hover:border-border-strong focus-within:border-accent focus-within:ring-1 focus-within:ring-accent">
              <ProjectCover project={project} locale={locale} sizes="(min-width: 1024px) 50vw, 100vw" priority={index === 0} />
              <div className="border-t border-border p-6">
                <p className="eyebrow">
                  {project.period}
                  {project.client ? ` · ${project.client}` : ""}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  <Link href={projectHref(locale, project.slug)} className="after:absolute after:inset-0 focus-visible:outline-none">
                    {nameOf(project, locale)}
                  </Link>
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{project.tagline[locale]}</p>
                {project.results.length > 0 && (
                  <dl className="mt-5 grid grid-cols-2 gap-4">
                    {project.results.slice(0, 2).map((fact) => (
                      <div key={fact.value + fact.label.en} className="flex flex-col">
                        <dt className="text-xs text-subtle">{fact.label[locale]}</dt>
                        <dd className="order-first text-lg font-semibold text-foreground">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <p className="mt-5 text-sm font-medium text-accent">
                  {t(locale, UI.featured.read)} <span aria-hidden="true">→</span>
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
      {total > projects.length && (
        <p className="mt-8">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex rounded-md border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            {fill(t(locale, UI.featured.all), total)} <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </p>
      )}
    </section>
  );
}

export function OpenSource({ locale, projects }: { locale: Locale; projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <section aria-labelledby="oss-title" className="container-page py-16">
      <SectionHeading id="oss-title" title={t(locale, UI.openSource.title)} intro={t(locale, UI.openSource.intro)} />
      <ul className="mt-8 divide-y divide-border rounded-xl border border-border">
        {projects.map((project) => (
          <li key={project.slug} className="relative flex flex-col gap-1 p-5 transition-colors hover:bg-surface sm:flex-row sm:items-baseline sm:gap-6">
            <span className="w-24 shrink-0 font-mono text-xs text-subtle">{project.period}</span>
            <div className="flex-1">
              <Link href={projectHref(locale, project.slug)} className="font-medium text-foreground after:absolute after:inset-0">
                {nameOf(project, locale)}
              </Link>
              <p className="mt-1 text-sm text-muted">{project.tagline[locale]}</p>
            </div>
            <span className="font-mono text-xs text-subtle">{project.tech.slice(0, 3).join(" · ")}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Experience({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="experience" className="container-page py-16">
      <SectionHeading id="experience" title={t(locale, UI.experience.title)} />
      <ol className="mt-8 space-y-10">
        {EXPERIENCE.map((item) => (
          <li key={item.company + item.period.en} className="grid gap-2 sm:grid-cols-[12rem_1fr] sm:gap-8">
            <p className="font-mono text-xs text-subtle sm:pt-1">{item.period[locale]}</p>
            <div>
              <h3 className="font-semibold text-foreground">{item.company}</h3>
              <p className="mt-0.5 text-sm text-muted">{item.role[locale]}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet.en} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                    <span>{bullet[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function About({ locale }: { locale: Locale }) {
  const certCount = CERTIFICATION_GROUPS.reduce((sum, group) => sum + group.items.length, 0);
  return (
    <section aria-labelledby="about" className="container-page py-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
        <div>
          <SectionHeading id="about" title={t(locale, UI.about.title)} />
          <p className="mt-6 eyebrow">{PERSON.title[locale]}</p>
          <div className="prose-body mt-4 max-w-prose">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph.en}>{paragraph[locale]}</p>
            ))}
          </div>
        </div>
        <aside className="space-y-8 text-sm">
          <div>
            <h3 className="eyebrow">{t(locale, UI.about.languages)}</h3>
            <ul className="mt-3 space-y-1 text-muted">
              {PERSON.languages.map((lang) => (
                <li key={lang.name.en}>
                  {lang.name[locale]} — {lang.level[locale]}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow">{t(locale, UI.about.education)}</h3>
            <ul className="mt-3 space-y-2 text-muted">
              {EDUCATION.map((item) => (
                <li key={item.institution}>
                  {item.degree[locale]}
                  <br />
                  <span className="text-subtle">{item.institution}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow">{t(locale, UI.about.strengths)}</h3>
            <ol className="mt-3 space-y-1 text-muted">
              {STRENGTHS.map((strength) => (
                <li key={strength.name.en} title={strength.summary[locale]}>
                  {strength.name[locale]}
                </li>
              ))}
            </ol>
            <a className="link mt-3 inline-block" href={`/cliftonstrengths-${locale}.pdf`} target="_blank" rel="noopener">
              {t(locale, UI.about.strengthsCert)}
            </a>
          </div>
          <div>
            <h3 className="eyebrow">{t(locale, UI.about.awards)}</h3>
            <ul className="mt-3 space-y-2 text-muted">
              {AWARDS.map((award) => (
                <li key={award.title.en}>
                  <span className="text-foreground">{award.place[locale]}</span> — {award.title[locale]}
                  <br />
                  <span className="text-subtle">
                    {award.issuer}, {award.date[locale]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <details className="mt-10 rounded-xl border border-border">
        <summary className="cursor-pointer select-none p-5 text-sm font-medium text-foreground">
          {fill(t(locale, UI.about.certifications), certCount)}
        </summary>
        <div className="grid gap-8 border-t border-border p-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATION_GROUPS.map((group) => (
            <div key={group.name.en}>
              <h3 className="eyebrow">{group.name[locale]}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {group.items.map((cert) => (
                  <li key={cert.name}>
                    <span className="text-foreground">{cert.name}</span>
                    <br />
                    <span className="text-subtle">
                      {cert.issuer} · {locale === "pt" ? cert.issuedPt : cert.issuedEn}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}

export function Contact({ locale, cvHref }: { locale: Locale; cvHref: string | null }) {
  return (
    <section aria-labelledby="contact" className="container-page py-20">
      <div className="card p-8 sm:p-10">
        <SectionHeading id="contact" title={t(locale, UI.contact.title)} intro={t(locale, UI.contact.body)} />
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <li>
            <a className="link" href={`mailto:${PERSON.email}`}>
              {PERSON.email}
            </a>
          </li>
          <li>
            <a className="link" href={PERSON.linkedin} rel="me noopener" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link" href={PERSON.github} rel="me noopener" target="_blank">
              GitHub
            </a>
          </li>
          {cvHref && (
            <li>
              <a className="link" href={cvHref}>
                {t(locale, UI.cv)}
              </a>
            </li>
          )}
          <li className="text-subtle">{PERSON.location[locale]}</li>
        </ul>
      </div>
    </section>
  );
}
