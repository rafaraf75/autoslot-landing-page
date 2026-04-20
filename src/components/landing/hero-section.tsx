import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type HeroSectionProps = {
  badge: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTertiary: string;
  visualTitle: string;
  visualDescription: string;
  flowVisit: string;
  flowEstimate: string;
  flowWorkOrder: string;
  flowInvoice: string;
};

export function HeroSection({
  badge,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  ctaTertiary,
  visualTitle,
  visualDescription,
  flowVisit,
  flowEstimate,
  flowWorkOrder,
  flowInvoice,
}: HeroSectionProps) {
  return (
    <section id="hero" className="scroll-mt-28 py-6 md:py-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center">
        <div className="space-y-5">
          <Badge variant="outline" className="rounded-xl">
            {badge}
          </Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="?interest=demo#feedback" className={buttonVariants()}>
              {ctaPrimary}
            </Link>
            <Link
              href="?interest=waitlist#feedback"
              className={buttonVariants({ variant: "outline" })}
            >
              {ctaSecondary}
            </Link>
            <Link
              href="?interest=feedback#feedback"
              className={buttonVariants({ variant: "ghost" })}
            >
              {ctaTertiary}
            </Link>
          </div>
        </div>

        <Card className="bg-card/85">
          <CardHeader className="space-y-2">
            <CardTitle>{visualTitle}</CardTitle>
            <p className="text-sm text-muted-foreground">{visualDescription}</p>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="rounded-xl border border-border/70 bg-secondary/25 px-3 py-2 text-sm">
              1. {flowVisit}
            </div>
            <div className="rounded-xl border border-border/70 bg-secondary/25 px-3 py-2 text-sm">
              2. {flowEstimate}
            </div>
            <div className="rounded-xl border border-border/70 bg-secondary/25 px-3 py-2 text-sm">
              3. {flowWorkOrder}
            </div>
            <div className="rounded-xl border border-border/70 bg-secondary/25 px-3 py-2 text-sm">
              4. {flowInvoice}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
