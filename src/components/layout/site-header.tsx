import Link from "next/link";
import { LocaleSwitcher } from "@/components/common/locale-switcher";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

type SiteHeaderProps = {
  locale: string;
  localeLabel: string;
  themeToggleLabel: string;
  ctaLabel: string;
  navProblemLabel: string;
  navFlowLabel: string;
  navPricingLabel: string;
  navFaqLabel: string;
  navContactLabel: string;
  localeOptions: Array<{
    value: string;
    label: string;
  }>;
};

export function SiteHeader({
  locale,
  localeLabel,
  themeToggleLabel,
  ctaLabel,
  navProblemLabel,
  navFlowLabel,
  navPricingLabel,
  navFaqLabel,
  navContactLabel,
  localeOptions,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="autoslot-container flex h-16 items-center justify-between gap-3">
        <Link
          href={`/${locale}`}
          className="rounded-lg px-1 text-sm font-semibold tracking-[0.14em] uppercase text-foreground/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          AutoSlot
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href={`/${locale}#problem`}
            className="rounded-md px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {navProblemLabel}
          </Link>
          <Link
            href={`/${locale}#solution-flow`}
            className="rounded-md px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {navFlowLabel}
          </Link>
          <Link
            href={`/${locale}#pricing`}
            className="rounded-md px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {navPricingLabel}
          </Link>
          <Link
            href={`/${locale}#faq`}
            className="rounded-md px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {navFaqLabel}
          </Link>
          <Link
            href={`/${locale}#feedback`}
            className="rounded-md px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {navContactLabel}
          </Link>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LocaleSwitcher
            currentLocale={locale}
            triggerLabel={localeLabel}
            options={localeOptions}
          />
          <ThemeToggle label={themeToggleLabel} />
          <Link
            href={`/${locale}?interest=demo#feedback`}
            className={buttonVariants({
              className:
                "hidden rounded-xl px-4 text-sm sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
            })}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      <div className="autoslot-container pb-2 md:hidden">
        <nav className="-mx-1 flex gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link
            href={`/${locale}#problem`}
            className="rounded-lg border border-border/70 bg-secondary/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap hover:bg-secondary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {navProblemLabel}
          </Link>
          <Link
            href={`/${locale}#solution-flow`}
            className="rounded-lg border border-border/70 bg-secondary/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap hover:bg-secondary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {navFlowLabel}
          </Link>
          <Link
            href={`/${locale}#pricing`}
            className="rounded-lg border border-border/70 bg-secondary/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap hover:bg-secondary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {navPricingLabel}
          </Link>
          <Link
            href={`/${locale}#faq`}
            className="rounded-lg border border-border/70 bg-secondary/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap hover:bg-secondary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {navFaqLabel}
          </Link>
          <Link
            href={`/${locale}#feedback`}
            className="rounded-lg border border-border/70 bg-secondary/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap hover:bg-secondary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {navContactLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
