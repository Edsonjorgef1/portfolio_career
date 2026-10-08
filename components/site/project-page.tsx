import Image from "next/image";
import Link from "next/link";

import { ProjectCover } from "@/components/site/project-cover";
import { CATEGORIES, STATUS_LABEL } from "@/lib/content/categories";
import { SDGS, sdgIcon } from "@/lib/content/sdgs";
import { UI, projectHref, t, nameOf } from "@/lib/content/ui";
import type { Locale, Project } from "@/types/content";

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="grid gap-4 border-t border-border py-10 md:grid-cols-[12rem_1fr] md:gap-10">
      <h2 id={id} className="eyebrow md:pt-1">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

export function ProjectPage({
  project,
  locale,
  prev,
  next,
}: {
  project: Project;
  locale: Locale;
  prev?: Project;
  next?: Project;
}) {
  const categories = CATEGORIES.filter((c) => project.categories.includes(c.id));
  const meta: { label: string; value: string }[] = [
    { label: t(locale, UI.project.period), value: project.period },
    { label: t(locale, UI.project.status), value: STATUS_LABEL[project.status][locale] },
    { label: t(locale, UI.project.role), value: project.role[locale] },
  ];
  if (project.client) meta.push({ label: t(locale, UI.project.client), value: project.client });
  if (project.partners?.length) meta.push({ label: t(locale, UI.project.partners), value: project.partners.join(", ") });

  return (
    <article className="container-page pb-20 pt-10">
      <nav aria-label="Breadcrumb">
        <Link href={`/${locale}/projects`} className="text-sm text-muted transition-colors hover:text-foreground">
          <span aria-hidden="true">← </span>
          {t(locale, UI.project.back)}
        </Link>
      </nav>

      <header className="fade-up mt-8 max-w-3xl">
        <ul className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <li key={c.id} className="chip">
              {c.name[locale]}
            </li>
          ))}
        </ul>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{nameOf(project, locale)}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.tagline[locale]}</p>
      </header>

      {project.flow && project.flow.length > 0 && (
        <figure className="mt-10">
          <div className="overflow-hidden rounded-xl border border-border">
            <ProjectCover
              project={project}
              locale={locale}
              sizes="(min-width: 1024px) 60rem, 100vw"
              aspect="aspect-[16/10] sm:aspect-[21/8]"
            />
          </div>
          <figcaption className="mt-2 text-xs text-subtle">
            {t(locale, UI.project.flow)}: {project.flow.map((step) => step[locale]).join(" → ")}
          </figcaption>
        </figure>
      )}

      <dl className="mt-10 grid overflow-hidden rounded-xl border border-border sm:grid-cols-2 lg:grid-cols-4">
        {meta.map((item) => (
          <div key={item.label} className="p-4 shadow-[inset_0_0_0_0.5px_var(--border)]">
            <dt className="eyebrow">{item.label}</dt>
            <dd className="mt-1.5 text-sm text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <Block id="problem" title={t(locale, UI.project.problem)}>
          <p className="max-w-prose leading-relaxed text-muted">{project.problem[locale]}</p>
        </Block>

        <Block id="solution" title={t(locale, UI.project.solution)}>
          <p className="max-w-prose leading-relaxed text-muted">{project.solution[locale]}</p>
        </Block>

        {project.caseStudy?.map((section, index) => (
          <Block key={section.heading.en} id={`chapter-${index + 1}`} title={section.heading[locale]}>
            <div className="prose-body max-w-prose">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.en}>{paragraph[locale]}</p>
              ))}
            </div>
          </Block>
        ))}

        {project.decisions.length > 0 && (
          <Block id="decisions" title={t(locale, UI.project.decisions)}>
            <ol className="grid gap-4 lg:grid-cols-2">
              {project.decisions.map((decision, index) => (
                <li key={decision.title.en} className="card p-5">
                  <p className="font-mono text-xs text-subtle">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-medium text-foreground">{decision.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{decision.body[locale]}</p>
                </li>
              ))}
            </ol>
          </Block>
        )}

        <Block id="screens" title={t(locale, UI.project.screens)}>
          {project.images.length > 0 ? (
            <ul className="grid gap-4 sm:grid-cols-2">
              {project.images.map((image) => (
                <li key={image.src} className={image.device === "desktop" ? "sm:col-span-2" : ""}>
                  <figure>
                    <a
                      href={image.src}
                      className="block overflow-hidden rounded-xl border border-border bg-surface-2 transition-colors hover:border-border-strong"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt[locale]}
                        width={image.width}
                        height={image.height}
                        sizes={image.device === "desktop" ? "(min-width: 1024px) 60rem, 100vw" : "(min-width: 640px) 30rem, 100vw"}
                        className={
                          image.device === "mobile" ? "mx-auto h-auto max-h-[42rem] w-auto" : "h-auto w-full"
                        }
                      />
                      <span className="sr-only">{t(locale, UI.project.openImage)}</span>
                    </a>
                    <figcaption className="mt-2 text-xs text-subtle">{image.alt[locale]}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-prose text-sm text-subtle">{t(locale, UI.project.noScreens)}</p>
          )}
        </Block>

        {project.videos && project.videos.length > 0 && (
          <Block id="videos" title={t(locale, UI.project.videos)}>
            <ul className="grid gap-6">
              {project.videos.map((video) => (
                <li key={video.src}>
                  <figure>
                    <video
                      controls
                      preload="none"
                      playsInline
                      poster={video.poster}
                      className="aspect-video w-full rounded-xl border border-border bg-surface-2"
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                    <figcaption className="mt-2 text-xs text-subtle">
                      {video.title[locale]} · {video.duration}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </Block>
        )}

        {project.tech.length > 0 && (
          <Block id="tech" title={t(locale, UI.project.tech)}>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className="chip text-xs">
                  {tech}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {project.results.length > 0 && (
          <Block id="results" title={t(locale, UI.project.results)}>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.results.map((fact) => (
                <div key={fact.value + fact.label.en} className="card flex flex-col p-5">
                  <dt className="text-sm text-muted">{fact.label[locale]}</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-foreground">{fact.value}</dd>
                  {fact.url && (
                    <dd className="mt-3 text-xs">
                      <a href={fact.url} className="link text-muted" rel="noopener" target="_blank">
                        {new URL(fact.url).hostname.replace(/^www\./, "")}
                        <span aria-hidden="true"> ↗</span>
                        <span className="sr-only"> ({locale === "pt" ? "abre noutro separador" : "opens in a new tab"})</span>
                      </a>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </Block>
        )}

        {project.learnings && (
          <Block id="learnings" title={t(locale, UI.project.learnings)}>
            <p className="max-w-prose leading-relaxed text-muted">{project.learnings[locale]}</p>
          </Block>
        )}

        {project.sdgs && project.sdgs.length > 0 && (
          <Block id="sdgs" title={t(locale, UI.project.sdgs)}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {project.sdgs.map((sdg) => {
                const goal = SDGS[sdg.goal];
                if (!goal) return null;
                return (
                  <li key={sdg.goal} className="card flex gap-4 p-5">
                    <Image
                      src={sdgIcon(sdg.goal, locale)}
                      alt=""
                      width={64}
                      height={64}
                      className="h-16 w-16 flex-none rounded-md"
                      style={{ backgroundColor: goal.colour }}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {t(locale, UI.project.sdgPrefix)} {sdg.goal} · {goal.title[locale]}
                        <span className="ml-2 font-mono text-[11px] font-normal text-subtle">
                          {sdg.primary ? t(locale, UI.project.sdgPrimary) : t(locale, UI.project.sdgComplementary)}
                        </span>
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{sdg.contribution[locale]}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Block>
        )}

        {project.links.length > 0 && (
          <Block id="links" title={t(locale, UI.project.links)}>
            <ul className="space-y-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link" rel="noopener" target="_blank">
                    {link.label[locale]}
                    <span className="sr-only"> ({locale === "pt" ? "abre noutro separador" : "opens in a new tab"})</span>
                  </a>
                </li>
              ))}
            </ul>
          </Block>
        )}
      </div>

      <nav aria-label={locale === "pt" ? "Outros projectos" : "Other projects"} className="mt-6 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        {prev ? (
          <Link href={projectHref(locale, prev.slug)} className="card p-5 transition-colors hover:border-border-strong">
            <span className="eyebrow">← {t(locale, UI.project.prev)}</span>
            <span className="mt-2 block font-medium text-foreground">{nameOf(prev, locale)}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={projectHref(locale, next.slug)} className="card p-5 text-right transition-colors hover:border-border-strong">
            <span className="eyebrow">{t(locale, UI.project.next)} →</span>
            <span className="mt-2 block font-medium text-foreground">{nameOf(next, locale)}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
