"use client";

import { FormEvent, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trackUmamiEvent } from "@/lib/umami";

type FeedbackSectionProps = {
  title: string;
  description: string;
  badge: string;
  formTitle: string;
  workshopNameLabel: string;
  workshopNamePlaceholder: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  marketLabel: string;
  marketPlaceholder: string;
  interestTypeLabel: string;
  interestTypeDemo: string;
  interestTypeWaitlist: string;
  interestTypeFeedback: string;
  interestTypeDemoDescription: string;
  interestTypeWaitlistDescription: string;
  interestTypeFeedbackDescription: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitCta: string;
  submitCtaLoading: string;
  helperNote: string;
  successMessage: string;
  errorMessage: string;
};

type InterestType = "demo" | "waitlist" | "feedback";

export function FeedbackSection({
  title,
  description,
  badge,
  formTitle,
  workshopNameLabel,
  workshopNamePlaceholder,
  contactNameLabel,
  contactNamePlaceholder,
  emailLabel,
  emailPlaceholder,
  marketLabel,
  marketPlaceholder,
  interestTypeLabel,
  interestTypeDemo,
  interestTypeWaitlist,
  interestTypeFeedback,
  interestTypeDemoDescription,
  interestTypeWaitlistDescription,
  interestTypeFeedbackDescription,
  messageLabel,
  messagePlaceholder,
  submitCta,
  submitCtaLoading,
  helperNote,
  successMessage,
  errorMessage,
}: FeedbackSectionProps) {
  const [interestType, setInterestType] = useState<InterestType>("demo");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    kind: "idle" | "success" | "error";
    message: string;
  }>({ kind: "idle", message: "" });

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get("interest");
    if (interest === "demo" || interest === "waitlist" || interest === "feedback") {
      setInterestType(interest);
    }
  }, []);

  const interestCards = [
    {
      value: "demo" as const,
      title: interestTypeDemo,
      description: interestTypeDemoDescription,
    },
    {
      value: "waitlist" as const,
      title: interestTypeWaitlist,
      description: interestTypeWaitlistDescription,
    },
    {
      value: "feedback" as const,
      title: interestTypeFeedback,
      description: interestTypeFeedbackDescription,
    },
  ];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ kind: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      workshopName: String(formData.get("workshopName") ?? ""),
      contactName: String(formData.get("contactName") ?? ""),
      email: String(formData.get("email") ?? ""),
      marketOrLanguage: String(formData.get("marketOrLanguage") ?? ""),
      interestType,
      message: String(formData.get("message") ?? ""),
      companyWebsite: String(formData.get("companyWebsite") ?? ""),
    };

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Feedback request failed");
      }

      form.reset();
      trackUmamiEvent("contact_form_submit", {
        section: "contact",
        interest_type: interestType,
      });
      setInterestType("demo");
      setSubmitState({ kind: "success", message: successMessage });
    } catch {
      setSubmitState({ kind: "error", message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="feedback" className="scroll-mt-28 py-10 md:py-14">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-8 h-px w-20 bg-slate-300/80 dark:bg-white/10" />
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="rounded-full border-slate-300/80 bg-white/65 px-4 py-1 text-[0.7rem] tracking-[0.16em] text-slate-700 uppercase dark:border-[oklch(0.54_0.03_232/0.52)] dark:bg-[oklch(0.28_0.018_250/0.38)] dark:text-[oklch(0.78_0.02_238/0.92)]"
          >
            {badge}
          </Badge>
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>
      </div>

      <div className="mx-auto mt-9 grid max-w-6xl gap-3 md:grid-cols-3">
        {interestCards.map((card) => {
          const isActive = interestType === card.value;

          return (
            <button
              key={card.value}
              type="button"
              onClick={() => {
                setInterestType(card.value);
                trackUmamiEvent(
                  card.value === "demo"
                    ? "cta_demo_click"
                    : card.value === "waitlist"
                      ? "cta_waitlist_click"
                      : "cta_feedback_click",
                  { section: "contact" },
                );
              }}
              className={`flex h-full appearance-none flex-col items-start justify-start rounded-[1.5rem] border p-5 text-left transition-colors ${
                isActive
                  ? "border-slate-400/70 bg-slate-100/85 shadow-[0_18px_40px_rgba(51,65,85,0.12)] dark:border-[oklch(0.54_0.03_232/0.72)] dark:bg-[oklch(0.28_0.018_250/0.72)] dark:shadow-[inset_0_1px_0_oklch(1_0_0/0.09),0_16px_28px_-24px_oklch(0.08_0.02_250/0.62)]"
                  : "border-slate-300/80 bg-white/52 hover:border-slate-400/70 hover:bg-white/72 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[oklch(0.54_0.03_232/0.52)] dark:hover:bg-[oklch(0.28_0.018_250/0.48)]"
              }`}
            >
              <p className="min-h-[1.3rem] text-sm leading-none font-semibold tracking-[0.08em] text-slate-700 uppercase md:whitespace-nowrap md:text-[0.96rem] dark:text-slate-200">
                {card.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                {card.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto mt-8 max-w-6xl overflow-hidden rounded-[2rem] border border-slate-300/80 bg-slate-100/80 shadow-[0_30px_80px_rgba(51,65,85,0.16)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.18),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.10),transparent_34%)]"
        />

        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col gap-4 border-b border-slate-200/80 px-6 py-6 md:flex-row md:items-end md:justify-between md:px-8 dark:border-white/10">
            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-slate-600 uppercase dark:text-slate-400">
                {formTitle}
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                {interestCards.find((card) => card.value === interestType)?.description}
              </p>
            </div>
            <Badge
              variant="outline"
              className="w-fit rounded-full border-slate-300/80 bg-white/65 px-4 py-1 text-[0.7rem] tracking-[0.16em] text-slate-700 uppercase dark:border-[oklch(0.54_0.03_232/0.52)] dark:bg-[oklch(0.28_0.018_250/0.38)] dark:text-[oklch(0.78_0.02_238/0.92)]"
            >
              {interestCards.find((card) => card.value === interestType)?.title}
            </Badge>
          </div>

          <div className="grid gap-6 px-6 py-6 md:px-8 md:py-8">
            <input
              type="text"
              name="companyWebsite"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="workshopName" className="text-sm text-muted-foreground">
                  {workshopNameLabel}
                </label>
                <Input
                  id="workshopName"
                  name="workshopName"
                  placeholder={workshopNamePlaceholder}
                  autoComplete="organization"
                  required
                  className="h-12 rounded-2xl border-slate-300/80 bg-white/60 dark:border-[oklch(0.54_0.03_232/0.44)] dark:bg-[oklch(0.25_0.012_250/0.72)]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contactName" className="text-sm text-muted-foreground">
                  {contactNameLabel}
                </label>
                <Input
                  id="contactName"
                  name="contactName"
                  placeholder={contactNamePlaceholder}
                  autoComplete="name"
                  required
                  className="h-12 rounded-2xl border-slate-300/80 bg-white/60 dark:border-[oklch(0.54_0.03_232/0.44)] dark:bg-[oklch(0.25_0.012_250/0.72)]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-muted-foreground">
                  {emailLabel}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={emailPlaceholder}
                  autoComplete="email"
                  required
                  className="h-12 rounded-2xl border-slate-300/80 bg-white/60 dark:border-[oklch(0.54_0.03_232/0.44)] dark:bg-[oklch(0.25_0.012_250/0.72)]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="marketOrLanguage" className="text-sm text-muted-foreground">
                  {marketLabel}
                </label>
                <Input
                  id="marketOrLanguage"
                  name="marketOrLanguage"
                  placeholder={marketPlaceholder}
                  className="h-12 rounded-2xl border-slate-300/80 bg-white/60 dark:border-[oklch(0.54_0.03_232/0.44)] dark:bg-[oklch(0.25_0.012_250/0.72)]"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
              <div className="space-y-2">
                <label htmlFor="interestType" className="text-sm text-muted-foreground">
                  {interestTypeLabel}
                </label>
                <select
                  id="interestType"
                  name="interestType"
                  value={interestType}
                  onChange={(event) => setInterestType(event.target.value as InterestType)}
                  className="flex h-12 w-full rounded-2xl border border-slate-300/80 bg-white/60 px-4 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 dark:border-[oklch(0.54_0.03_232/0.44)] dark:bg-[oklch(0.25_0.012_250/0.72)]"
                >
                  <option value="demo">{interestTypeDemo}</option>
                  <option value="waitlist">{interestTypeWaitlist}</option>
                  <option value="feedback">{interestTypeFeedback}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-muted-foreground">
                  {messageLabel}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={messagePlaceholder}
                  rows={5}
                  className="min-h-[160px] rounded-[1.5rem] border-slate-300/80 bg-white/60 px-4 py-3 dark:border-[oklch(0.54_0.03_232/0.44)] dark:bg-[oklch(0.25_0.012_250/0.72)]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-200/80 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8 dark:border-white/10">
            <div className="max-w-3xl space-y-2">
              <p className="text-sm leading-relaxed text-muted-foreground">{helperNote}</p>
              {submitState.kind !== "idle" ? (
                <p
                  className={`text-sm ${
                    submitState.kind === "success"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-rose-600 dark:text-rose-400"
                  }`}
                >
                  {submitState.message}
                </p>
              ) : null}
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="self-start md:self-auto"
            >
              {isSubmitting ? submitCtaLoading : submitCta}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
