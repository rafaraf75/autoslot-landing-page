import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

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
      <div className="hero-shell grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(380px,0.98fr)] lg:items-center">
        <div className="hero-content space-y-6">
          <div className="hero-eyebrow">
            <span aria-hidden="true" className="hero-eyebrow-rule" />
            <p className="hero-kicker hero-eyebrow-text text-[11px] font-medium tracking-[0.14em] uppercase">
              {badge}
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="max-w-[18ch] text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="hero-lead max-w-[60ch] text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          </div>
          <div className="hero-cta-row flex flex-wrap items-center gap-3">
            <Link
              href="?interest=demo#feedback"
              className={buttonVariants({ className: "hero-primary-cta" })}
            >
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
              className="hero-tertiary-link inline-flex h-10 items-center rounded-md px-1.5 text-sm font-medium"
            >
              {ctaTertiary}
            </Link>
          </div>
        </div>

        <div className="hero-workflow" aria-label={visualTitle}>
          <div aria-hidden="true" className="hero-flow-ambient" />
          <div className="space-y-1.5">
            <p className="hero-workflow-title text-sm font-medium">{visualTitle}</p>
            <p className="text-sm text-muted-foreground">{visualDescription}</p>
          </div>
          <div className="hero-workflow-map">
            <div aria-hidden="true" className="hero-connector hero-connector-1" />
            <div aria-hidden="true" className="hero-connector hero-connector-2" />
            <div aria-hidden="true" className="hero-connector hero-connector-3" />
            <div aria-hidden="true" className="hero-connector-dot hero-connector-dot-1" />
            <div aria-hidden="true" className="hero-connector-dot hero-connector-dot-2" />

            <article className="hero-node">
              <span className="hero-node-index">01</span>
              <p className="hero-node-title">{flowVisit}</p>
            </article>
            <article className="hero-node">
              <span className="hero-node-index">02</span>
              <p className="hero-node-title">{flowEstimate}</p>
            </article>
            <article className="hero-node">
              <span className="hero-node-index">03</span>
              <p className="hero-node-title">{flowWorkOrder}</p>
            </article>
            <article className="hero-node">
              <span className="hero-node-index">04</span>
              <p className="hero-node-title">{flowInvoice}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
