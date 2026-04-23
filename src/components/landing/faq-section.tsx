type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  description: string;
  items: FAQItem[];
};

export function FAQSection({ title, description, items }: FAQSectionProps) {
  return (
    <section id="faq" className="scroll-mt-28 py-10 md:py-14">
      <div className="space-y-8">
        <header className="mx-auto flex max-w-5xl flex-col items-center space-y-3 text-center">
          <div aria-hidden="true" className="h-px w-20 bg-slate-300/80 dark:bg-white/10" />
          <h2 className="max-w-[22ch] text-balance text-3xl font-semibold leading-[1.12] tracking-[-0.02em] md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[60ch] text-lg leading-relaxed text-foreground/70 md:text-xl">
            {description}
          </p>
        </header>

        <div className="grid items-start gap-4 md:grid-cols-2">
          {items.map((item) => (
            <details
              key={item.question}
              className="group self-start rounded-[1.5rem] border border-slate-300/80 bg-slate-100/70 px-5 py-4 shadow-[0_18px_40px_rgba(51,65,85,0.10)] open:bg-slate-100/88 dark:border-[oklch(0.54_0.03_232/0.62)] dark:bg-[oklch(0.28_0.018_250/0.64)] dark:shadow-[inset_0_1px_0_oklch(1_0_0/0.09),0_16px_28px_-24px_oklch(0.08_0.02_250/0.62)] dark:open:bg-[oklch(0.28_0.018_250/0.74)]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-semibold leading-snug text-foreground md:text-[1.15rem]">
                  {item.question}
                </span>
                <span className="mt-0.5 shrink-0 text-xl leading-none text-slate-500 transition-transform group-open:rotate-45 dark:text-slate-400">
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-slate-200/80 pt-4 text-base leading-relaxed text-foreground/72 dark:border-white/10 dark:text-[oklch(0.84_0.01_252/0.82)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
