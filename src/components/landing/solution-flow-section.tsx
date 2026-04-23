import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SolutionFlowSectionProps = {
  title: string;
  description: string;
  visitTitle: string;
  visitDescription: string;
  estimateTitle: string;
  estimateDescription: string;
  workOrderTitle: string;
  workOrderDescription: string;
  invoiceTitle: string;
  invoiceDescription: string;
};

export function SolutionFlowSection({
  title,
  description,
  visitTitle,
  visitDescription,
  estimateTitle,
  estimateDescription,
  workOrderTitle,
  workOrderDescription,
  invoiceTitle,
  invoiceDescription,
}: SolutionFlowSectionProps) {
  const steps = [
    { title: visitTitle, description: visitDescription },
    { title: estimateTitle, description: estimateDescription },
    { title: workOrderTitle, description: workOrderDescription },
    { title: invoiceTitle, description: invoiceDescription },
  ];

  return (
    <section id="solution-flow" className="scroll-mt-28 py-6 md:py-8">
      <Card className="overflow-hidden border-border/75 bg-card/64 shadow-[inset_0_1px_0_hsl(var(--background)/0.5),0_26px_46px_-34px_hsl(var(--foreground)/0.42)] backdrop-blur-[7px] dark:border-[oklch(0.5_0.024_236/0.56)] dark:bg-[linear-gradient(160deg,oklch(0.245_0.018_250/0.64)_0%,oklch(0.21_0.014_254/0.4)_100%)] dark:shadow-[inset_0_1px_0_oklch(1_0_0/0.06),0_20px_30px_-24px_oklch(0.06_0.02_255/0.62)]">
        <CardHeader className="items-center space-y-2.5 text-center">
          <CardTitle className="text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </CardTitle>
          <p className="mx-auto max-w-3xl text-sm text-foreground/72 md:text-base">
            {description}
          </p>
        </CardHeader>
        <CardContent>
          <ol className="grid gap-3 md:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-xl border border-slate-400/45 bg-slate-200/72 px-3 py-3 shadow-[inset_0_1px_0_hsl(var(--background)/0.38),0_18px_30px_-20px_hsl(var(--foreground)/0.5)] backdrop-blur-[10px] dark:border-[oklch(0.54_0.03_232/0.62)] dark:bg-[oklch(0.28_0.018_250/0.64)] dark:shadow-[inset_0_1px_0_oklch(1_0_0/0.09),0_16px_28px_-24px_oklch(0.08_0.02_250/0.62)]"
              >
                <p className="text-xs tracking-[0.14em] text-foreground/56 uppercase dark:text-[oklch(0.72_0.035_232/0.82)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm font-semibold">{step.title}</p>
                <p className="mt-1 text-sm text-foreground/72 dark:text-[oklch(0.84_0.01_252/0.82)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </section>
  );
}
