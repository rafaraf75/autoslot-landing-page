import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

type PricingSectionProps = {
  title: string;
  description: string;
  badge: string;
  cardTitle: string;
  cardDescription: string;
  pricingModel: string;
  pricingDetails: string;
  includedTitle: string;
  includedItems: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  noteTitle: string;
  noteDescription: string;
};

export function PricingSection({
  title,
  description,
  badge,
  cardTitle,
  cardDescription,
  pricingModel,
  pricingDetails,
  includedTitle,
  includedItems,
  ctaPrimary,
  ctaSecondary,
  noteTitle,
  noteDescription,
}: PricingSectionProps) {
  return (
    <section id="pricing" className="scroll-mt-28 py-10 md:py-14">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-8 h-px w-20 bg-slate-300/80 dark:bg-white/10" />
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>
      </div>

      <div className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2rem] border border-slate-300/80 bg-slate-100/80 shadow-[0_30px_80px_rgba(51,65,85,0.16)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.18),transparent_36%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.10),transparent_36%)]"
        />

        <div className="relative grid gap-8 p-6 md:grid-cols-[0.92fr_1.08fr] md:gap-10 md:p-10">
          <div className="flex flex-col justify-between">
            <div>
              <Badge
                variant="outline"
                className="rounded-full border-slate-300/80 bg-white/65 px-4 py-1 text-[0.7rem] tracking-[0.16em] text-slate-700 uppercase dark:border-[oklch(0.54_0.03_232/0.52)] dark:bg-[oklch(0.28_0.018_250/0.38)] dark:text-[oklch(0.78_0.02_238/0.92)]"
              >
                {badge}
              </Badge>

              <p className="mt-6 text-sm font-medium tracking-[0.08em] text-slate-600 uppercase dark:text-slate-400">
                {cardTitle}
              </p>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {cardDescription}
              </p>

              <div className="mt-8 rounded-[1.6rem] border border-slate-300/80 bg-white/65 p-6 shadow-[0_20px_45px_rgba(51,65,85,0.10)] dark:border-[oklch(0.54_0.03_232/0.62)] dark:bg-[oklch(0.28_0.018_250/0.64)] dark:shadow-[inset_0_1px_0_oklch(1_0_0/0.09),0_16px_28px_-24px_oklch(0.08_0.02_250/0.62)]">
                <p className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  {pricingModel}
                </p>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                  {pricingDetails}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="?interest=demo#feedback" className={buttonVariants({ size: "lg" })}>
                {ctaPrimary}
              </Link>
              <Link
                href="?interest=waitlist#feedback"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                {ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-slate-300/80 bg-white/58 p-6 shadow-[0_22px_52px_rgba(51,65,85,0.08)] dark:border-[oklch(0.54_0.03_232/0.62)] dark:bg-[oklch(0.28_0.018_250/0.64)] dark:shadow-[inset_0_1px_0_oklch(1_0_0/0.09),0_16px_28px_-24px_oklch(0.08_0.02_250/0.62)]">
            <p className="text-sm font-medium tracking-[0.08em] text-slate-600 uppercase dark:text-slate-400">
              {includedTitle}
            </p>

            <ul className="mt-5 space-y-4">
              {includedItems.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-start gap-4 ${
                    index !== 0
                      ? "border-t border-slate-200/80 pt-4 dark:border-white/10"
                      : ""
                  }`}
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-500 dark:bg-slate-400" />
                  <span className="text-base leading-relaxed text-slate-700 md:text-lg dark:text-slate-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative border-t border-slate-200/80 px-6 py-5 md:px-10 dark:border-white/10">
          <p className="text-sm font-medium tracking-[0.08em] text-slate-600 uppercase dark:text-slate-400">
            {noteTitle}
          </p>
          <p className="mt-2 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {noteDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
