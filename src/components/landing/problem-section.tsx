"use client";

import { useEffect, useState } from "react";

type ProblemSectionProps = {
  title: string;
  description: string;
  painPointAppointments: string;
  painPointStatus: string;
  painPointCommunication: string;
  painPointEstimates: string;
  painPointAdmin: string;
  previewOpenLabel: string;
  previewImageAlt: string;
  previewCloseLabel: string;
  previewHintLabel: string;
};

export function ProblemSection({
  title,
  description,
  painPointAppointments,
  painPointStatus,
  painPointCommunication,
  painPointEstimates,
  painPointAdmin,
  previewOpenLabel,
  previewImageAlt,
  previewCloseLabel,
  previewHintLabel,
}: ProblemSectionProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen]);

  const points = [
    painPointAppointments,
    painPointStatus,
    painPointCommunication,
    painPointEstimates,
    painPointAdmin,
  ];

  return (
    <section id="problem" className="scroll-mt-28 py-6 md:py-8">
      <div className="space-y-6 md:space-y-7">
        <header className="mx-auto flex max-w-5xl flex-col items-center space-y-3.5 text-center md:space-y-4">
          <div aria-hidden="true" className="h-px w-12 bg-border/70" />
          <h2 className="max-w-[28ch] text-balance text-[2.1rem] font-semibold leading-[1.12] tracking-[-0.02em] md:max-w-[26ch] md:text-[2.35rem] lg:max-w-[28ch] lg:text-[2.55rem]">
            {title}
          </h2>
          <p className="max-w-[56ch] text-[1.08rem] leading-relaxed text-foreground/72 md:text-[1.2rem]">
            {description}
          </p>
        </header>

        <div className="mx-auto grid max-w-5xl gap-6 border-t border-border/55 pt-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] lg:items-center">
          <ul className="grid gap-y-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3.5 text-[1.02rem] text-foreground/84 md:text-[1.03rem]">
                <span
                  aria-hidden="true"
                  className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"
                />
                <span className="leading-[1.45]">{point}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={previewOpenLabel}
            onClick={() => setIsPreviewOpen(true)}
            className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/55 shadow-[inset_0_1px_0_hsl(var(--background)/0.45),0_22px_40px_-32px_hsl(var(--foreground)/0.45)] backdrop-blur-[7px] transition-transform hover:scale-[1.01] cursor-zoom-in"
          >
            <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs font-medium tracking-[0.08em] text-white/85 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {previewHintLabel}
            </span>
            <img
              src="/calendar_light.png"
              alt={previewImageAlt}
              className="block w-full transition-transform duration-300 group-hover:scale-[1.03] dark:hidden"
            />
            <img
              src="/calendar_dark.png"
              alt={previewImageAlt}
              className="hidden w-full transition-transform duration-300 group-hover:scale-[1.03] dark:block"
            />
          </button>
        </div>
      </div>

      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label={previewCloseLabel}
              onClick={() => setIsPreviewOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xl leading-none text-white/85 transition-colors hover:bg-black/70"
            >
              ×
            </button>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/35 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              <img
                src="/calendar_light.png"
                alt={previewImageAlt}
                className="block max-h-[85vh] w-full object-contain dark:hidden"
              />
              <img
                src="/calendar_dark.png"
                alt={previewImageAlt}
                className="hidden max-h-[85vh] w-full object-contain dark:block"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
