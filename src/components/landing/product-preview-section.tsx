import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type ProductPreviewSectionProps = {
  title: string;
  description: string;
  panelTitle: string;
  panelStatus: string;
  panelMeta: string;
  calendarTitle: string;
  calendarLine1: string;
  calendarLine2: string;
  estimateTitle: string;
  estimateLine1: string;
  estimateLine2: string;
  workOrderTitle: string;
  workOrderLine1: string;
  workOrderLine2: string;
  invoiceTitle: string;
  invoiceLine1: string;
  invoiceLine2: string;
};

export function ProductPreviewSection({
  title,
  description,
  panelTitle,
  panelStatus,
  panelMeta,
  calendarTitle,
  calendarLine1,
  calendarLine2,
  estimateTitle,
  estimateLine1,
  estimateLine2,
  workOrderTitle,
  workOrderLine1,
  workOrderLine2,
  invoiceTitle,
  invoiceLine1,
  invoiceLine2,
}: ProductPreviewSectionProps) {
  return (
    <section id="product-preview" className="scroll-mt-28 py-6 md:py-8">
      <Card className="bg-card/85">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        </CardHeader>
        <CardContent>
          <div className="rounded-2xl border border-border/70 bg-background/35 p-3 md:p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-medium">{panelTitle}</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{panelStatus}</Badge>
                <span className="text-xs text-muted-foreground">{panelMeta}</span>
              </div>
            </div>

            <Separator className="my-3" />

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-secondary/20 px-3 py-3">
                <p className="text-xs tracking-[0.1em] text-muted-foreground uppercase">
                  {calendarTitle}
                </p>
                <p className="mt-1 text-sm">{calendarLine1}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {calendarLine2}
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-secondary/20 px-3 py-3">
                <p className="text-xs tracking-[0.1em] text-muted-foreground uppercase">
                  {estimateTitle}
                </p>
                <p className="mt-1 text-sm">{estimateLine1}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {estimateLine2}
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-secondary/20 px-3 py-3">
                <p className="text-xs tracking-[0.1em] text-muted-foreground uppercase">
                  {workOrderTitle}
                </p>
                <p className="mt-1 text-sm">{workOrderLine1}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {workOrderLine2}
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-secondary/20 px-3 py-3">
                <p className="text-xs tracking-[0.1em] text-muted-foreground uppercase">
                  {invoiceTitle}
                </p>
                <p className="mt-1 text-sm">{invoiceLine1}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {invoiceLine2}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
