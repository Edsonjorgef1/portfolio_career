import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";
import sharp from "sharp";

import { CATEGORIES, CATEGORY_ACCENT } from "@/lib/content/categories";
import { HERO, PERSON, SITE_URL } from "@/lib/content/profile";
import { nameOf } from "@/lib/content/ui";
import type { Locale, Project } from "@/types/content";

/** Open Graph images (1200×630) rendered at build time with the site's own type and colours. */
export const OG_SIZE = { width: 1200, height: 630 };

const COLORS = {
  background: "#0a0a0a",
  surface: "#171717",
  foreground: "#ededed",
  muted: "#a3a3a3",
  subtle: "#8a8a8a",
  border: "#2a2a2a",
  accent: "52,211,153",
};

const HOST = new URL(SITE_URL).hostname;

async function fonts() {
  const dir = path.join(process.cwd(), "assets/fonts");
  const [regular, semibold] = await Promise.all([
    readFile(path.join(dir, "Geist-400.ttf")),
    readFile(path.join(dir, "Geist-600.ttf")),
  ]);
  return [
    { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Geist", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

/** Reads an image from /public, crops it to the box and returns a PNG data URL. */
async function publicImage(src: string, width: number, height: number, position = "top") {
  const file = path.join(process.cwd(), "public", src);
  const png = await sharp(file).resize(width * 2, height * 2, { fit: "cover", position }).png().toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
}

function clamp(text: string, max: number) {
  return text.length <= max ? text : `${text.slice(0, max).replace(/[\s,;:—–-]+\S*$/, "")}…`;
}

/** Name before the dash, and the descriptive part after it. */
function splitName(project: Project, locale: Locale) {
  const [title, ...rest] = nameOf(project, locale).split(/\s[—–]\s/);
  return { title, subtitle: rest.join(" — ") };
}

function Frame({ rgb, children }: { rgb: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: COLORS.background,
        backgroundImage: `radial-gradient(circle at 92% 0%, rgba(${rgb},0.30), transparent 48%), radial-gradient(circle at 0% 100%, rgba(${rgb},0.12), transparent 45%)`,
        fontFamily: "Geist",
        color: COLORS.foreground,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {children}
    </div>
  );
}

function Signature({ locale, stacked = false }: { locale: Locale; stacked?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: stacked ? "column" : "row", alignItems: stacked ? "flex-start" : "center", gap: stacked ? 6 : 14, fontSize: 22 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: `rgb(${COLORS.accent})` }} />
        <span style={{ fontWeight: 600 }}>{PERSON.name}</span>
      </div>
      {stacked ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 2, paddingLeft: 24, fontSize: 19, color: COLORS.subtle }}>
          <span>{PERSON.title[locale]}</span>
          <span>{HOST}</span>
        </div>
      ) : (
        <span style={{ color: COLORS.subtle }}>
          {PERSON.title[locale]} · {HOST}
        </span>
      )}
    </div>
  );
}

function Eyebrow({ rgb, children, maxWidth }: { rgb: string; children: React.ReactNode; maxWidth?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 18, letterSpacing: 2, ...(maxWidth ? { maxWidth } : {}), textTransform: "uppercase", color: COLORS.muted }}>
      <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: `rgb(${rgb})` }} />
      {children}
    </div>
  );
}

/** Process steps on a rail: numbered nodes joined by a line, label under each. */
function FlowRail({ steps, rgb }: { steps: string[]; rgb: string }) {
  const column = 100 / steps.length;
  return (
    <div style={{ display: "flex", flexDirection: "column", position: "relative", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: 17,
          left: `${column / 2}%`,
          right: `${column / 2}%`,
          height: 2,
          display: "flex",
          backgroundImage: `linear-gradient(90deg, rgba(${rgb},0.9), rgba(${rgb},0.35))`,
        }}
      />
      <div style={{ display: "flex", width: "100%" }}>
        {steps.map((step, index) => {
          const edge = index === 0 || index === steps.length - 1;
          return (
            <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: `${column}%`, padding: "0 6px" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 600,
                  border: `2px solid rgb(${rgb})`,
                  backgroundColor: edge ? `rgb(${rgb})` : COLORS.background,
                  color: edge ? COLORS.background : COLORS.foreground,
                }}
              >
                {index + 1}
              </div>
              <div style={{ marginTop: 14, fontSize: 19, lineHeight: 1.25, textAlign: "center", color: edge ? COLORS.foreground : COLORS.muted }}>
                {step}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function projectOgImage(project: Project, locale: Locale) {
  const categoryId = project.categories[0];
  const rgb = categoryId ? CATEGORY_ACCENT[categoryId] : COLORS.accent;
  const category = CATEGORIES.find((c) => c.id === categoryId)?.name[locale];
  const { title, subtitle } = splitName(project, locale);
  const shot = project.images.find((img) => img.device === "desktop") ?? project.images[0];
  const eyebrow = [category, project.period].filter(Boolean).join(" · ");

  if (shot) {
    const isMobile = shot.device === "mobile";
    const box = isMobile ? { width: 300, height: 610 } : { width: 600, height: 470 };
    // Desktop shots bleed off the right edge, so keep their top-left corner.
    const src = await publicImage(shot.src, box.width, box.height, isMobile ? "top" : "left top");
    return new ImageResponse(
      (
        <Frame rgb={rgb}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 56px 72px", width: isMobile ? 780 : 520 }}>
            <Eyebrow rgb={rgb}>{category ?? project.period}</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ fontSize: title.length > 18 ? 54 : 66, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05 }}>{title}</div>
              <div style={{ fontSize: 25, lineHeight: 1.4, color: COLORS.muted }}>{clamp(project.tagline[locale], isMobile ? 190 : 120)}</div>
            </div>
            <Signature locale={locale} stacked={!isMobile} />
          </div>
          <div
            style={{
              position: "absolute",
              right: isMobile ? 90 : -24,
              top: isMobile ? 40 : 80,
              display: "flex",
              borderRadius: isMobile ? 36 : 16,
              border: `${isMobile ? 8 : 1}px solid ${isMobile ? "#262626" : COLORS.border}`,
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} width={box.width} height={box.height} alt="" />
          </div>
        </Frame>
      ),
      { ...OG_SIZE, fonts: await fonts() },
    );
  }

  return new ImageResponse(
    (
      <Frame rgb={rgb}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px 56px", width: "100%" }}>
          <Eyebrow rgb={rgb}>{eyebrow}</Eyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -2.5, lineHeight: 1 }}>{title}</div>
            <div style={{ fontSize: 30, lineHeight: 1.3, color: COLORS.muted, maxWidth: 960 }}>
              {subtitle || clamp(project.tagline[locale], 110)}
            </div>
          </div>
          {project.flow?.length ? (
            <FlowRail steps={project.flow.map((step) => step[locale])} rgb={rgb} />
          ) : (
            <div style={{ display: "flex", gap: 12 }}>
              {project.tech.slice(0, 5).map((tech) => (
                <div key={tech} style={{ display: "flex", fontSize: 20, padding: "8px 16px", borderRadius: 999, border: `1px solid ${COLORS.border}`, color: COLORS.muted }}>
                  {tech}
                </div>
              ))}
            </div>
          )}
          <Signature locale={locale} />
        </div>
      </Frame>
    ),
    { ...OG_SIZE, fonts: await fonts() },
  );
}

export async function homeOgImage(locale: Locale) {
  const portrait = await publicImage("/profile/portrait.webp", 400, 500);
  return new ImageResponse(
    (
      <Frame rgb={COLORS.accent}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 0 64px 72px", width: 720 }}>
          <Eyebrow rgb={COLORS.accent} maxWidth={620}>{HERO.eyebrow[locale]}</Eyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ fontSize: 30, fontWeight: 600, color: COLORS.muted }}>{PERSON.name}</div>
            <div style={{ fontSize: 60, fontWeight: 600, letterSpacing: -2, lineHeight: 1.08 }}>{HERO.headline[locale]}</div>
          </div>
          <div style={{ display: "flex", fontSize: 22, color: COLORS.subtle }}>
            {PERSON.location[locale]} · {HOST}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 65,
            display: "flex",
            borderRadius: 32,
            border: `1px solid ${COLORS.border}`,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={portrait} width={400} height={500} alt="" />
        </div>
      </Frame>
    ),
    { ...OG_SIZE, fonts: await fonts() },
  );
}
