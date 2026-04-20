import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card className="bg-card/85">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-border/70 bg-secondary/20 px-3 py-3">
              <p className="text-sm font-medium">{forTitle}</p>
              <ul className="mt-2 space-y-2">
                {forItems.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border/70 bg-secondary/20 px-3 py-3">
              <p className="text-sm font-medium">{notForTitle}</p>
              <ul className="mt-2 space-y-2">
                {notForItems.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
