type BenefitItem = {
  title: string;
  description: string;
};

type BenefitsSectionProps = {
  title: string;
  description: string;
  items: BenefitItem[];
};

export function BenefitsSection({
  title,
  description,
  items,
}: BenefitsSectionProps) {
  return (
    <section id="benefits" className="scroll-mt-28 py-6 md:py-8">
      <div className="space-y-6 md:space-y-7">
        <header className="mx-auto flex max-w-4xl flex-col items-center space-y-3 text-center">
          <div aria-hidden="true" className="h-px w-12 bg-border/70" />
          <h2 className="max-w-[26ch] text-balance text-3xl font-semibold leading-[1.12] tracking-[-0.02em] md:text-[2.35rem]">
            {title}
          </h2>
          <p className="max-w-[58ch] text-[1.05rem] leading-relaxed text-foreground/70 md:text-[1.15rem]">
            {description}
          </p>
        </header>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-400/45 bg-slate-200/72 px-4 py-4 shadow-[inset_0_1px_0_hsl(var(--background)/0.36),0_16px_30px_-22px_hsl(var(--foreground)/0.42)] backdrop-blur-[8px] dark:border-[oklch(0.54_0.03_232/0.62)] dark:bg-[oklch(0.28_0.018_250/0.64)] dark:shadow-[inset_0_1px_0_oklch(1_0_0/0.09),0_16px_28px_-24px_oklch(0.08_0.02_250/0.62)]"
            >
              <p className="text-base font-semibold leading-snug">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70 dark:text-[oklch(0.84_0.01_252/0.82)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
