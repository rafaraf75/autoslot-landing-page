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
      <Card className="bg-card/85">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        </CardHeader>
        <CardContent>
          <ol className="grid gap-3 md:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-xl border border-border/70 bg-secondary/20 px-3 py-3"
              >
                <p className="text-xs tracking-[0.1em] text-muted-foreground uppercase">
                  {index + 1}
                </p>
                <p className="mt-1 text-sm font-medium">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
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
