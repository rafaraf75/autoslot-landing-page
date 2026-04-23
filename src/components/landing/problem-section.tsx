type ProblemSectionProps = {
  title: string;
  description: string;
  painPointAppointments: string;
  painPointStatus: string;
  painPointCommunication: string;
  painPointEstimates: string;
  painPointAdmin: string;
};

export function ProblemSection({
  title,
  description,
  painPointAppointments,
  painPointStatus,
  painPointCommunication,
  painPointEstimates,
  painPointAdmin,
}: ProblemSectionProps) {
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

          <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/55 shadow-[inset_0_1px_0_hsl(var(--background)/0.45),0_22px_40px_-32px_hsl(var(--foreground)/0.45)] backdrop-blur-[7px]">
            <img
              src="/calendar_light.png"
              alt=""
              aria-hidden="true"
              className="block w-full dark:hidden"
            />
            <img
              src="/calendar_dark.png"
              alt=""
              aria-hidden="true"
              className="hidden w-full dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
