"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { UI, t } from "@/lib/content/ui";
import type { Locale, ProjectImage } from "@/types/content";

/** Horizontal offset (in container widths, cqw) for slides 0, 1, 2… steps away from the active one. */
const OFFSET_X = [0, 30, 48];
/** Slides further than this from the active one are hidden. */
const VISIBLE = OFFSET_X.length - 1;

function slideTransform(d: number) {
  const step = Math.min(Math.abs(d), VISIBLE + 1);
  const x = Math.sign(d) * (OFFSET_X[Math.min(step, VISIBLE)] + (step > VISIBLE ? 12 : 0));
  return `translate(-50%, -50%) translateX(${x}cqw) translateZ(${-step * 160}px) rotateY(${-Math.sign(d) * Math.min(step, 1) * 38}deg)`;
}

/** 3D coverflow of project images: the active one faces the viewer, the others recede to the sides. */
export function ImageCarousel({ images, locale }: { images: ProjectImage[]; locale: Locale }) {
  const [active, setActive] = useState(0);
  const pointerX = useRef<number | null>(null);
  const last = images.length - 1;
  const go = (index: number) => setActive(Math.max(0, Math.min(last, index)));
  const current = images[active];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={t(locale, UI.project.carousel)}
      className="[container-type:inline-size]"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(active - 1);
        else if (event.key === "ArrowRight") go(active + 1);
        else return;
        event.preventDefault();
      }}
    >
      <div
        className="relative touch-pan-y select-none overflow-hidden [perspective:1400px] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        style={{ height: "clamp(14rem, 52cqw, 30rem)" }}
        onPointerDown={(event) => {
          pointerX.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (pointerX.current === null) return;
          const dx = event.clientX - pointerX.current;
          pointerX.current = null;
          if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
        }}
      >
        <ul className="absolute inset-0 [transform-style:preserve-3d]">
          {images.map((image, index) => {
            const d = index - active;
            const isActive = d === 0;
            const ratio = image.width / image.height;
            const label = t(locale, UI.project.slide)
              .replace("{n}", String(index + 1))
              .replace("{total}", String(images.length));
            const picture = (
              <Image
                src={image.src}
                alt={image.alt[locale]}
                width={image.width}
                height={image.height}
                draggable={false}
                priority={index === 0}
                sizes="(min-width: 1024px) 50rem, 80vw"
                className="h-full w-full object-cover"
              />
            );
            return (
              <li
                key={image.src}
                role="group"
                aria-roledescription="slide"
                aria-label={label}
                aria-hidden={!isActive}
                className="absolute left-1/2 top-1/2 motion-safe:transition-[transform,opacity,filter] motion-safe:duration-500 motion-safe:ease-out"
                style={{
                  width: `min(72cqw, calc(clamp(14rem, 52cqw, 30rem) * ${ratio.toFixed(4)}))`,
                  aspectRatio: `${image.width} / ${image.height}`,
                  transform: slideTransform(d),
                  opacity: Math.abs(d) > VISIBLE ? 0 : 1,
                  filter: isActive ? "none" : "brightness(0.55)",
                  pointerEvents: Math.abs(d) > VISIBLE ? "none" : undefined,
                }}
              >
                {isActive ? (
                  <a
                    href={image.src}
                    className="block h-full overflow-hidden rounded-xl border border-border bg-surface-2 shadow-2xl transition-colors hover:border-border-strong"
                  >
                    {picture}
                    <span className="sr-only">{t(locale, UI.project.openImage)}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => go(index)}
                    className="block h-full w-full overflow-hidden rounded-xl border border-border bg-surface-2"
                  >
                    {picture}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <p className="min-h-[2.5rem] text-xs text-subtle" aria-live="polite">
          <span className="font-mono">
            {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>{" "}
          — {current.alt[locale]}
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => go(active - 1)}
            disabled={active === 0}
            aria-label={t(locale, UI.project.prevImage)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground disabled:opacity-40 disabled:hover:border-border disabled:hover:text-muted"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            disabled={active === last}
            aria-label={t(locale, UI.project.nextImage)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground disabled:opacity-40 disabled:hover:border-border disabled:hover:text-muted"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
