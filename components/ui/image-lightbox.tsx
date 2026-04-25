"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  images: string[];
  title: string;
  galleryLabel?: string;
}

export function ImageLightbox({ images, title, galleryLabel = "Gallery" }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Grid of thumbnails */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => { setCurrent(idx); setOpen(true); }}
            className="group relative overflow-hidden rounded-xl border border-white/10 aspect-video bg-white/5 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`${title} – screenshot ${idx + 1}`}
          >
            <Image
              src={img}
              alt={`${title} – screenshot ${idx + 1}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">
              <ZoomIn className="h-7 w-7 text-white opacity-0 transition duration-300 group-hover:opacity-100 drop-shadow-lg" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox portal */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setOpen(false)}
          >
            {/* Main image container */}
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative max-h-[85vh] max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                style={{ aspectRatio: "16/9" }}>
                <Image
                  src={images[current]}
                  alt={`${title} – screenshot ${current + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
              </div>

              {/* Counter */}
              <div className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white/80 backdrop-blur-sm select-none">
                {current + 1} / {images.length}
              </div>
            </motion.div>

            {/* Close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/80 backdrop-blur-sm transition hover:bg-white/20 hover:text-white"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/80 backdrop-blur-sm transition hover:bg-white/20 hover:text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Next button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/80 backdrop-blur-sm transition hover:bg-white/20 hover:text-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Dot indicators */}
            {images.length > 1 && (
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      idx === current ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70",
                    )}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
