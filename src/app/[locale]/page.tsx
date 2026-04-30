import { getTranslations, setRequestLocale } from "next-intl/server";
import Script from "next/script";
import { AudienceSection } from "@/components/landing/audience-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { FeedbackSection } from "@/components/landing/feedback-section";
import { FAQSection } from "@/components/landing/faq-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { ProductPreviewSection } from "@/components/landing/product-preview-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { SolutionFlowSection } from "@/components/landing/solution-flow-section";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
  const pageUrl = `${baseUrl}/${locale}`;

  const tHero = await getTranslations("Hero");
  const tProblem = await getTranslations("Problem");
  const tFlow = await getTranslations("SolutionFlow");
  const tBenefits = await getTranslations("Benefits");
  const tAudience = await getTranslations("Audience");
  const tPreview = await getTranslations("ProductPreview");
  const tPricing = await getTranslations("Pricing");
  const tFeedback = await getTranslations("Feedback");
  const tFaq = await getTranslations("FAQ");
  const faqItems = [1, 2, 3, 4, 5, 6, 7].map((index) => ({
    "@type": "Question",
    name: tFaq(`items.item${index}.question`),
    acceptedAnswer: {
      "@type": "Answer",
      text: tFaq(`items.item${index}.answer`),
    },
  }));
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    url: pageUrl,
    mainEntity: faqItems,
  };

  return (
    <div className="landing-page-shell relative isolate">
      <div
        aria-hidden="true"
        className="landing-page-bg pointer-events-none absolute inset-x-0 top-0 h-[820px] md:h-[980px]"
      />
      <div
        aria-hidden="true"
        className="landing-page-fade pointer-events-none absolute inset-x-0 top-0 h-[900px] md:h-[1060px]"
      />
      <div className="autoslot-container relative z-10 pt-6 md:pt-10">
        <Script
          id="faq-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <HeroSection
          badge={tHero("badge")}
          title={tHero("title")}
          description={tHero("description")}
          ctaPrimary={tHero("ctaPrimary")}
          ctaSecondary={tHero("ctaSecondary")}
          ctaTertiary={tHero("ctaTertiary")}
          visualTitle={tHero("visualTitle")}
          visualDescription={tHero("visualDescription")}
          flowVisit={tHero("flowVisit")}
          flowEstimate={tHero("flowEstimate")}
          flowWorkOrder={tHero("flowWorkOrder")}
          flowInvoice={tHero("flowInvoice")}
        />
        <ProblemSection
          title={tProblem("title")}
          description={tProblem("description")}
          painPointAppointments={tProblem("painPointAppointments")}
          painPointStatus={tProblem("painPointStatus")}
          painPointCommunication={tProblem("painPointCommunication")}
          painPointEstimates={tProblem("painPointEstimates")}
          painPointAdmin={tProblem("painPointAdmin")}
          previewOpenLabel={tProblem("previewOpenLabel")}
          previewImageAlt={tProblem("previewImageAlt")}
          previewCloseLabel={tProblem("previewCloseLabel")}
          previewHintLabel={tProblem("previewHintLabel")}
        />
        <SolutionFlowSection
          title={tFlow("title")}
          description={tFlow("description")}
          visitTitle={tFlow("visitTitle")}
          visitDescription={tFlow("visitDescription")}
          estimateTitle={tFlow("estimateTitle")}
          estimateDescription={tFlow("estimateDescription")}
          workOrderTitle={tFlow("workOrderTitle")}
          workOrderDescription={tFlow("workOrderDescription")}
          invoiceTitle={tFlow("invoiceTitle")}
          invoiceDescription={tFlow("invoiceDescription")}
        />
        <BenefitsSection
          title={tBenefits("title")}
          description={tBenefits("description")}
          items={[
            {
              title: tBenefits("items.lessChaos.title"),
              description: tBenefits("items.lessChaos.description"),
            },
            {
              title: tBenefits("items.fasterFlow.title"),
              description: tBenefits("items.fasterFlow.description"),
            },
            {
              title: tBenefits("items.teamCommunication.title"),
              description: tBenefits("items.teamCommunication.description"),
            },
            {
              title: tBenefits("items.repairStatus.title"),
              description: tBenefits("items.repairStatus.description"),
            },
            {
              title: tBenefits("items.lessAdmin.title"),
              description: tBenefits("items.lessAdmin.description"),
            },
            {
              title: tBenefits("items.clientHandling.title"),
              description: tBenefits("items.clientHandling.description"),
            },
          ]}
        />
        <AudienceSection
          title={tAudience("title")}
          description={tAudience("description")}
          forTitle={tAudience("forTitle")}
          forItems={[
            tAudience("forItems.item1"),
            tAudience("forItems.item2"),
            tAudience("forItems.item3"),
            tAudience("forItems.item4"),
            tAudience("forItems.item5"),
          ]}
          notForTitle={tAudience("notForTitle")}
          notForItems={[
            tAudience("notForItems.item1"),
            tAudience("notForItems.item2"),
            tAudience("notForItems.item3"),
            tAudience("notForItems.item4"),
          ]}
        />
        <ProductPreviewSection
          title={tPreview("title")}
          description={tPreview("description")}
          imageAlt={tPreview("imageAlt")}
          points={[
            tPreview("points.booking"),
            tPreview("points.time"),
            tPreview("points.data"),
          ]}
        />
        <PricingSection
          title={tPricing("title")}
          description={tPricing("description")}
          badge={tPricing("badge")}
          cardTitle={tPricing("cardTitle")}
          cardDescription={tPricing("cardDescription")}
          pricingModel={tPricing("pricingModel")}
          pricingDetails={tPricing("pricingDetails")}
          includedTitle={tPricing("includedTitle")}
          includedItems={[
            tPricing("includedItems.item1"),
            tPricing("includedItems.item2"),
            tPricing("includedItems.item3"),
            tPricing("includedItems.item4"),
            tPricing("includedItems.item5"),
          ]}
          ctaPrimary={tPricing("ctaPrimary")}
          ctaSecondary={tPricing("ctaSecondary")}
          noteTitle={tPricing("noteTitle")}
          noteDescription={tPricing("noteDescription")}
        />
        <FeedbackSection
          title={tFeedback("title")}
          description={tFeedback("description")}
          badge={tFeedback("badge")}
          formTitle={tFeedback("formTitle")}
          workshopNameLabel={tFeedback("workshopNameLabel")}
          workshopNamePlaceholder={tFeedback("workshopNamePlaceholder")}
          contactNameLabel={tFeedback("contactNameLabel")}
          contactNamePlaceholder={tFeedback("contactNamePlaceholder")}
          emailLabel={tFeedback("emailLabel")}
          emailPlaceholder={tFeedback("emailPlaceholder")}
          marketLabel={tFeedback("marketLabel")}
          marketPlaceholder={tFeedback("marketPlaceholder")}
          interestTypeLabel={tFeedback("interestTypeLabel")}
          interestTypeDemo={tFeedback("interestTypeDemo")}
          interestTypeWaitlist={tFeedback("interestTypeWaitlist")}
          interestTypeFeedback={tFeedback("interestTypeFeedback")}
          interestTypeDemoDescription={tFeedback("interestTypeDemoDescription")}
          interestTypeWaitlistDescription={tFeedback("interestTypeWaitlistDescription")}
          interestTypeFeedbackDescription={tFeedback("interestTypeFeedbackDescription")}
          messageLabel={tFeedback("messageLabel")}
          messagePlaceholder={tFeedback("messagePlaceholder")}
          submitCta={tFeedback("submitCta")}
          submitCtaLoading={tFeedback("submitCtaLoading")}
          helperNote={tFeedback("helperNote")}
          successMessage={tFeedback("successMessage")}
          errorMessage={tFeedback("errorMessage")}
        />
        <FAQSection
          title={tFaq("title")}
          description={tFaq("description")}
          items={[
            { question: tFaq("items.item1.question"), answer: tFaq("items.item1.answer") },
            { question: tFaq("items.item2.question"), answer: tFaq("items.item2.answer") },
            { question: tFaq("items.item3.question"), answer: tFaq("items.item3.answer") },
            { question: tFaq("items.item4.question"), answer: tFaq("items.item4.answer") },
            { question: tFaq("items.item5.question"), answer: tFaq("items.item5.answer") },
            { question: tFaq("items.item6.question"), answer: tFaq("items.item6.answer") },
            { question: tFaq("items.item7.question"), answer: tFaq("items.item7.answer") },
          ]}
        />
      </div>
    </div>
  );
}
