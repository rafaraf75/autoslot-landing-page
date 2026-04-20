import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  messageLabel: string;
  messagePlaceholder: string;
  submitCta: string;
  helperNote: string;
};

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
  messageLabel,
  messagePlaceholder,
  submitCta,
  helperNote,
}: FeedbackSectionProps) {
  const captureEmail = process.env.NEXT_PUBLIC_FEEDBACK_EMAIL ?? "hello@autoslot.app";

  return (
    <section id="feedback" className="scroll-mt-28 py-6 md:py-8">
      <Card className="bg-card/85">
        <CardHeader className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
            <Badge variant="outline">{badge}</Badge>
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        </CardHeader>
        <CardContent>
          <div className="rounded-2xl border border-border/70 bg-secondary/20 p-3 md:p-4">
            <form
              action={`mailto:${captureEmail}`}
              method="post"
              encType="text/plain"
              className="space-y-3"
            >
              <p className="text-sm font-medium">{formTitle}</p>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="workshopName" className="text-xs text-muted-foreground">
                    {workshopNameLabel}
                  </label>
                  <Input
                    id="workshopName"
                    name="workshopName"
                    placeholder={workshopNamePlaceholder}
                    autoComplete="organization"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contactName" className="text-xs text-muted-foreground">
                    {contactNameLabel}
                  </label>
                  <Input
                    id="contactName"
                    name="contactName"
                    placeholder={contactNamePlaceholder}
                    autoComplete="name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs text-muted-foreground">
                    {emailLabel}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={emailPlaceholder}
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="marketOrLanguage" className="text-xs text-muted-foreground">
                    {marketLabel}
                  </label>
                  <Input
                    id="marketOrLanguage"
                    name="marketOrLanguage"
                    placeholder={marketPlaceholder}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="interestType" className="text-xs text-muted-foreground">
                  {interestTypeLabel}
                </label>
                <select
                  id="interestType"
                  name="interestType"
                  defaultValue="demo"
                  className="flex h-10 w-full rounded-lg border border-border/70 bg-background/50 px-3 text-sm outline-none ring-offset-background transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                >
                  <option value="demo">{interestTypeDemo}</option>
                  <option value="waitlist">{interestTypeWaitlist}</option>
                  <option value="feedback">{interestTypeFeedback}</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs text-muted-foreground">
                  {messageLabel}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={messagePlaceholder}
                  rows={4}
                />
              </div>

              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p className="text-xs text-muted-foreground">{helperNote}</p>
                <Button type="submit">{submitCta}</Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
