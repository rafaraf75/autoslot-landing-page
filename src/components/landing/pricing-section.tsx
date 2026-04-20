import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PricingSectionProps = {
  title: string;
  description: string;
  badge: string;
  cardTitle: string;
  cardDescription: string;
  pricingModel: string;
  pricingDetails: string;
  includedTitle: string;
  includedItems: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  noteTitle: string;
  noteDescription: string;
};

export function PricingSection({
  title,
  description,
  badge,
  cardTitle,
  cardDescription,
  pricingModel,
  pricingDetails,
  includedTitle,
  includedItems,
  ctaPrimary,
  ctaSecondary,
  noteTitle,
  noteDescription,
}: PricingSectionProps) {
  return (
    <section id="pricing" className="scroll-mt-28 py-6 md:py-8">
      <Card className="bg-card/85">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-2xl border border-border/70 bg-secondary/20 p-3 md:p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-medium">{cardTitle}</p>
              <Badge variant="outline">{badge}</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{cardDescription}</p>

            <div className="mt-3 rounded-xl border border-border/70 bg-background/35 px-3 py-3">
              <p className="text-sm font-medium">{pricingModel}</p>
              <p className="mt-1 text-sm text-muted-foreground">{pricingDetails}</p>
            </div>

            <div className="mt-3 rounded-xl border border-border/70 bg-background/35 px-3 py-3">
              <p className="text-sm font-medium">{includedTitle}</p>
              <ul className="mt-2 space-y-2">
                {includedItems.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <Link href="?interest=demo#feedback" className={buttonVariants()}>
                {ctaPrimary}
              </Link>
              <Link
                href="?interest=waitlist#feedback"
                className={buttonVariants({ variant: "outline" })}
              >
                {ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-border/70 bg-secondary/15 px-3 py-3">
            <p className="text-sm font-medium">{noteTitle}</p>
            <p className="mt-1 text-sm text-muted-foreground">{noteDescription}</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
