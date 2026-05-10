"use client";

import { useEffect, useState } from "react";
import { CircleCheckBig } from "lucide-react";

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
  const titleParts = title.split(", ");
  const emphasizedSuffix =
    titleParts.length > 1 ? titleParts[titleParts.length - 1] : null;
  const titlePrefix = emphasizedSuffix
    ? `${titleParts.slice(0, -1).join(", ")},`
    : title;

  return (
    <section id="problem" className="scroll-mt-28 py-6 md:py-8">
      <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
        <div className="grid gap-8 border-t border-border/60 pt-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-start lg:gap-10">
          <header className="space-y-4 lg:pr-6">
            <div aria-hidden="true" className="h-px w-12 bg-primary/45" />
            <h2 className="max-w-[17ch] text-balance text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.025em] md:text-[2.55rem]">
              {titlePrefix}{" "}
              {emphasizedSuffix ? (
                <span className="text-primary">{emphasizedSuffix}</span>
              ) : null}
            </h2>
            <p className="max-w-[32ch] text-[1.08rem] leading-relaxed text-foreground/76 md:text-[1.16rem]">
              {description}
            </p>
          </header>

          <ul className="grid gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-5">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3.5 rounded-2xl border border-border/55 bg-white/42 px-4 py-3.5 text-[1rem] text-foreground/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_18px_32px_-30px_rgba(51,65,85,0.38)] backdrop-blur-[6px] md:bg-transparent md:px-0 md:py-0 md:shadow-none"
              >
                <CircleCheckBig
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-primary"
                />
                <span className="leading-[1.5]">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto max-w-5xl">
          <button
            type="button"
            aria-label={previewOpenLabel}
            onClick={() => setIsPreviewOpen(true)}
            className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/55 shadow-[inset_0_1px_0_hsl(var(--background)/0.45),0_22px_40px_-32px_hsl(var(--foreground)/0.45)] backdrop-blur-[7px] transition-transform hover:scale-[1.01] cursor-zoom-in"
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
