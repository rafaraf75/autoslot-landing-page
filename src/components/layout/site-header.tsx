import { LocaleSwitcher } from "@/components/common/locale-switcher";
import { TrackedLink } from "@/components/common/tracked-link";
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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur light:border-[#d5e0ee]/85 light:bg-[#eef3fa]/88">
      <div className="autoslot-container flex h-16 items-center justify-between gap-3">
        <TrackedLink
          href={`/${locale}`}
          className="inline-flex items-center gap-1.5 rounded-lg px-1 text-sm font-semibold tracking-[0.14em] uppercase text-foreground/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <span>AutoSlot</span>
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-primary shadow-[0_0_0_3px_rgba(99,102,241,0.12)] light:translate-y-[-1px]"
          />
        </TrackedLink>

        <nav className="hidden items-center gap-4 md:flex">
          <TrackedLink
            href={`/${locale}#problem`}
            className="rounded-md px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:text-slate-700 light:hover:text-[#3248e2]"
          >
            {navProblemLabel}
          </TrackedLink>
          <TrackedLink
            href={`/${locale}#solution-flow`}
            className="rounded-md px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:text-slate-700 light:hover:text-[#3248e2]"
          >
            {navFlowLabel}
          </TrackedLink>
          <TrackedLink
            href={`/${locale}#pricing`}
            className="rounded-md px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:text-slate-700 light:hover:text-[#3248e2]"
          >
            {navPricingLabel}
          </TrackedLink>
          <TrackedLink
            href={`/${locale}#faq`}
            className="rounded-md px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:text-slate-700 light:hover:text-[#3248e2]"
          >
            {navFaqLabel}
          </TrackedLink>
          <TrackedLink
            href={`/${locale}#feedback`}
            className="rounded-md px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:text-slate-700 light:hover:text-[#3248e2]"
          >
            {navContactLabel}
          </TrackedLink>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LocaleSwitcher
            currentLocale={locale}
            triggerLabel={localeLabel}
            options={localeOptions}
          />
          <ThemeToggle label={themeToggleLabel} />
          <TrackedLink
            href={`/${locale}?interest=demo#feedback`}
            eventName="cta_demo_click"
            eventData={{ section: "header" }}
            className={buttonVariants({
              className:
                "hidden rounded-xl px-4 text-sm sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:shadow-[0_10px_24px_-16px_rgba(63,94,248,0.52)]",
            })}
          >
            {ctaLabel}
          </TrackedLink>
        </div>
      </div>

      <div className="autoslot-container pb-2 md:hidden">
        <nav className="-mx-1 flex gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <TrackedLink
            href={`/${locale}#problem`}
            className="rounded-lg border border-border/70 bg-secondary/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap hover:bg-secondary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:border-[#d4deec]/85 light:bg-[#eff4fb]/95 light:text-slate-700 light:hover:bg-[#e3ebf8] light:hover:text-[#3248e2]"
          >
            {navProblemLabel}
          </TrackedLink>
          <TrackedLink
            href={`/${locale}#solution-flow`}
            className="rounded-lg border border-border/70 bg-secondary/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap hover:bg-secondary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:border-[#d4deec]/85 light:bg-[#eff4fb]/95 light:text-slate-700 light:hover:bg-[#e3ebf8] light:hover:text-[#3248e2]"
          >
            {navFlowLabel}
          </TrackedLink>
          <TrackedLink
            href={`/${locale}#pricing`}
            className="rounded-lg border border-border/70 bg-secondary/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap hover:bg-secondary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:border-[#d4deec]/85 light:bg-[#eff4fb]/95 light:text-slate-700 light:hover:bg-[#e3ebf8] light:hover:text-[#3248e2]"
          >
            {navPricingLabel}
          </TrackedLink>
          <TrackedLink
            href={`/${locale}#faq`}
            className="rounded-lg border border-border/70 bg-secondary/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap hover:bg-secondary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:border-[#d4deec]/85 light:bg-[#eff4fb]/95 light:text-slate-700 light:hover:bg-[#e3ebf8] light:hover:text-[#3248e2]"
          >
            {navFaqLabel}
          </TrackedLink>
          <TrackedLink
            href={`/${locale}#feedback`}
            className="rounded-lg border border-border/70 bg-secondary/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap hover:bg-secondary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 light:border-[#d4deec]/85 light:bg-[#eff4fb]/95 light:text-slate-700 light:hover:bg-[#e3ebf8] light:hover:text-[#3248e2]"
          >
            {navContactLabel}
          </TrackedLink>
        </nav>
      </div>
    </header>
  );
}
