import Image from "next/image";

type ProductPreviewSectionProps = {
  title: string;
  description: string;
  imageAlt: string;
  points: string[];
};

export function ProductPreviewSection({
  title,
  description,
  imageAlt,
  points,
}: ProductPreviewSectionProps) {
  return (
    <section id="product-preview" className="scroll-mt-28 py-10 md:py-14">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-8 h-px w-20 bg-slate-300/80 dark:bg-white/10" />
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>
      </div>

      <ul className="mx-auto mt-8 grid max-w-5xl gap-3 text-sm text-slate-700 md:grid-cols-3 dark:text-slate-300">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-center justify-center gap-3 rounded-full border border-slate-300/70 bg-slate-100/70 px-5 py-3 text-center shadow-[0_14px_34px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-slate-500 dark:bg-slate-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2rem] border border-slate-300/80 bg-slate-100/80 p-2 shadow-[0_28px_80px_rgba(51,65,85,0.20)] md:rounded-[2.5rem] md:p-3 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(148,163,184,0.26),transparent_48%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(148,163,184,0.12),transparent_52%)]"
        />
        <div className="relative overflow-hidden rounded-[1.55rem] border border-white/70 bg-white/55 dark:border-white/10 dark:bg-black/20">
          <Image
            src="/booking_online_light.png"
            alt={imageAlt}
            width={2048}
            height={931}
            className="block h-auto w-full dark:hidden"
            loading="eager"
          />
          <Image
            src="/booking_online_dark.png"
            alt={imageAlt}
            width={2048}
            height={930}
            className="hidden h-auto w-full dark:block"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
