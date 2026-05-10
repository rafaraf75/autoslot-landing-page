import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SolutionFlowSectionProps = {
  title: string;
  titleAccent?: string;
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
  titleAccent,
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
  const accentIndex = titleAccent ? title.indexOf(titleAccent) : -1;
  const titleBeforeAccent = accentIndex >= 0 ? title.slice(0, accentIndex) : title;
  const titleAfterAccent =
    accentIndex >= 0 && titleAccent
      ? title.slice(accentIndex + titleAccent.length)
      : "";

  return (
    <section id="solution-flow" className="scroll-mt-28 py-6 md:py-8">
      <Card className="overflow-hidden border-[#bccbdd]/82 bg-[#edf2f9]/84 shadow-[inset_0_1px_0_hsl(var(--background)/0.54),0_28px_48px_-34px_rgba(66,83,117,0.24)] backdrop-blur-[7px] dark:border-[oklch(0.46_0.016_242/0.52)] dark:bg-[linear-gradient(180deg,oklch(0.19_0.012_256/0.92)_0%,oklch(0.175_0.011_258/0.94)_100%)] dark:shadow-[inset_0_1px_0_oklch(1_0_0/0.06),0_24px_38px_-28px_oklch(0.04_0.018_255/0.72)] dark:ring-white/5 dark:backdrop-blur-none">
        <CardHeader className="items-center space-y-3 text-center">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_14px_28px_-20px_rgba(79,70,229,0.45)]">
            <Sparkles className="size-5" />
          </span>
          <CardTitle className="text-[2rem] font-semibold tracking-[-0.025em] md:text-[2.35rem]">
            {titleBeforeAccent}
            {accentIndex >= 0 && titleAccent ? (
              <span className="text-primary">{titleAccent}</span>
            ) : null}
            {titleAfterAccent}
          </CardTitle>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-foreground/72 md:text-lg">
            {description}
          </p>
        </CardHeader>
        <CardContent className="pt-1">
          <ol className="grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[1.15rem] border border-[#b8c8de]/82 bg-[#e2ebf6]/92 px-4 py-4 shadow-[inset_0_1px_0_hsl(var(--background)/0.46),0_20px_30px_-20px_rgba(65,81,113,0.22)] backdrop-blur-[10px] dark:border-[oklch(0.5_0.024_236/0.56)] dark:bg-[oklch(0.245_0.018_250/0.88)] dark:shadow-[inset_0_1px_0_oklch(1_0_0/0.06),0_18px_28px_-24px_oklch(0.05_0.018_255/0.62)] dark:backdrop-blur-none"
              >
                <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase dark:text-[oklch(0.72_0.035_232/0.82)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1.5 text-base font-semibold">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/72 dark:text-[oklch(0.84_0.01_252/0.82)]">
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
