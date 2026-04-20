import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card className="bg-card/85">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-xl border border-border/70 bg-secondary/20 px-3 py-2 text-sm"
            >
              {point}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
