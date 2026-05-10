import { CalendarClock, CircleDollarSign, FileText, MessageSquareQuote, ReceiptText, Wrench } from "lucide-react";
import { TrackedLink } from "@/components/common/tracked-link";
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
  flowVisitDescription: string;
  flowEstimate: string;
  flowEstimateDescription: string;
  flowWorkOrder: string;
  flowWorkOrderDescription: string;
  flowInvoice: string;
  flowInvoiceDescription: string;
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
  flowVisitDescription,
  flowEstimate,
  flowEstimateDescription,
  flowWorkOrder,
  flowWorkOrderDescription,
  flowInvoice,
  flowInvoiceDescription,
}: HeroSectionProps) {
  const flowCards = [
    { index: "01", title: flowVisit, icon: CalendarClock, description: flowVisitDescription },
    { index: "02", title: flowEstimate, icon: CircleDollarSign, description: flowEstimateDescription },
    { index: "03", title: flowWorkOrder, icon: Wrench, description: flowWorkOrderDescription },
    { index: "04", title: flowInvoice, icon: ReceiptText, description: flowInvoiceDescription },
  ];

  return (
    <section id="hero" className="scroll-mt-28 pt-3 pb-6 md:pt-5 md:pb-8">
      <div className="hero-shell grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(380px,0.98fr)] lg:items-center">
        <div className="hero-content space-y-7">
          <div className="hero-eyebrow">
            <span aria-hidden="true" className="hero-eyebrow-rule" />
            <p className="hero-kicker hero-eyebrow-text text-[11px] font-medium tracking-[0.14em] uppercase">
              {badge}
            </p>
          </div>
          <div className="space-y-4.5">
            <h1 className="max-w-[16ch] text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-5xl lg:text-[4.1rem]">
              {title}
            </h1>
            <p className="hero-lead max-w-[56ch] text-base leading-relaxed text-muted-foreground md:text-[1.16rem]">
              {description}
            </p>
          </div>
          <div className="hero-cta-row flex flex-wrap items-center gap-3.5">
            <TrackedLink
              href="?interest=demo#feedback"
              eventName="cta_demo_click"
              eventData={{ section: "hero" }}
              className={buttonVariants({ size: "lg", className: "hero-primary-cta px-5" })}
            >
              {ctaPrimary}
            </TrackedLink>
            <TrackedLink
              href="?interest=waitlist#feedback"
              eventName="cta_waitlist_click"
              eventData={{ section: "hero" }}
              className={buttonVariants({ variant: "outline", size: "lg", className: "px-5" })}
            >
              {ctaSecondary}
            </TrackedLink>
            <TrackedLink
              href="?interest=feedback#feedback"
              eventName="cta_feedback_click"
              eventData={{ section: "hero" }}
              className="hero-tertiary-link inline-flex h-10 items-center gap-2 rounded-md px-1.5 text-sm font-medium"
            >
              <MessageSquareQuote className="size-4" />
              {ctaTertiary}
            </TrackedLink>
          </div>
        </div>

        <div className="hero-workflow" aria-label={visualTitle}>
          <div aria-hidden="true" className="hero-flow-ambient" />
          <div className="space-y-2">
            <div className="inline-flex items-center gap-3">
              <span className="hero-workflow-icon">
                <FileText className="size-4" />
              </span>
              <p className="hero-workflow-title text-sm font-medium">{visualTitle}</p>
            </div>
            <p className="max-w-[34ch] text-sm leading-relaxed text-muted-foreground">{visualDescription}</p>
          </div>
          <div className="hero-workflow-map">
            <div aria-hidden="true" className="hero-connector hero-connector-1" />
            <div aria-hidden="true" className="hero-connector hero-connector-2" />
            <div aria-hidden="true" className="hero-connector hero-connector-3" />
            <div aria-hidden="true" className="hero-connector-dot hero-connector-dot-1" />
            <div aria-hidden="true" className="hero-connector-dot hero-connector-dot-2" />

            {flowCards.map((card) => {
              const Icon = card.icon;

              return (
                <article key={card.index} className="hero-node">
                  <div className="flex items-start justify-between gap-3">
                    <span className="hero-node-index">{card.index}</span>
                    <Icon className="hero-node-icon size-4 shrink-0" />
                  </div>
                  <p className="hero-node-title">{card.title}</p>
                  <p className="hero-node-description">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
