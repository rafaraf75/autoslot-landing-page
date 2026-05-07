import { TrackedLink } from "@/components/common/tracked-link";

type SiteFooterProps = {
  locale: string;
  title: string;
  quickLinksLabel: string;
  problemLabel: string;
  flowLabel: string;
  pricingLabel: string;
  faqLabel: string;
  contactLabel: string;
  ctaLabel: string;
  legalLabel: string;
  privacyLabel: string;
  contactCueLabel: string;
};

export function SiteFooter({
  locale,
  title,
  quickLinksLabel,
  problemLabel,
  flowLabel,
  pricingLabel,
  faqLabel,
  contactLabel,
  ctaLabel,
  legalLabel,
  privacyLabel,
  contactCueLabel,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-border/70 bg-background/70">
      <div className="autoslot-container py-6 md:py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-1">
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-xs text-muted-foreground">{contactCueLabel}</p>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              {quickLinksLabel}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
              <TrackedLink href={`/${locale}#problem`} className="text-muted-foreground hover:text-foreground">
                {problemLabel}
              </TrackedLink>
              <TrackedLink href={`/${locale}#solution-flow`} className="text-muted-foreground hover:text-foreground">
                {flowLabel}
              </TrackedLink>
              <TrackedLink href={`/${locale}#pricing`} className="text-muted-foreground hover:text-foreground">
                {pricingLabel}
              </TrackedLink>
              <TrackedLink href={`/${locale}#faq`} className="text-muted-foreground hover:text-foreground">
                {faqLabel}
              </TrackedLink>
              <TrackedLink href={`/${locale}#feedback`} className="text-muted-foreground hover:text-foreground">
                {contactLabel}
              </TrackedLink>
            </div>
          </div>

          <div className="space-y-2 md:text-right">
            <TrackedLink
              href={`/${locale}?interest=demo#feedback`}
              eventName="cta_demo_click"
              eventData={{ section: "footer" }}
              className="inline-flex rounded-lg border border-border/70 bg-secondary/30 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary/45"
            >
              {ctaLabel}
            </TrackedLink>
            <div className="flex gap-3 text-xs text-muted-foreground md:justify-end">
              <span>{legalLabel}</span>
              <span>{privacyLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
