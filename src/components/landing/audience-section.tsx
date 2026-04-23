type AudienceSectionProps = {
  title: string;
  description: string;
  forTitle: string;
  forItems: string[];
  notForTitle: string;
  notForItems: string[];
};

export function AudienceSection({
  title,
  description,
  forTitle,
  forItems,
  notForTitle,
  notForItems,
}: AudienceSectionProps) {
  return (
    <section id="audience" className="scroll-mt-28 py-6 md:py-8">
      <div className="space-y-6 md:space-y-7">
        <header className="mx-auto flex max-w-5xl flex-col items-center space-y-3.5 text-center md:space-y-4">
          <div aria-hidden="true" className="h-px w-12 bg-border/70" />
          <h2 className="max-w-[28ch] text-balance text-[2.1rem] font-semibold leading-[1.12] tracking-[-0.02em] md:max-w-[26ch] md:text-[2.35rem] lg:max-w-[28ch] lg:text-[2.55rem]">
            {title}
          </h2>
          <p className="max-w-[58ch] text-[1.08rem] leading-relaxed text-foreground/72 md:text-[1.2rem]">
            {description}
          </p>
        </header>

        <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-6 border-t border-border/55 pt-5 md:grid-cols-2">
          <div>
            <p className="text-lg font-semibold leading-snug md:text-xl">{forTitle}</p>
            <ul className="mt-3 space-y-2.5">
              {forItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/72 dark:text-[oklch(0.84_0.01_252/0.82)]">
                  <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold leading-snug md:text-xl">{notForTitle}</p>
            <ul className="mt-3 space-y-2.5">
              {notForItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/72 dark:text-[oklch(0.84_0.01_252/0.82)]">
                  <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
