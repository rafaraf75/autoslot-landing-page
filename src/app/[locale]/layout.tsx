import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { routing } from "@/i18n/routing";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const fallbackBaseUrl = "http://localhost:3000";
const normalizedBaseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || fallbackBaseUrl;

const metadataByLocale: Record<
  string,
  { title: string; description: string; ogLocale: string }
> = {
  es: {
    title: "AutoSlot | Software para talleres con flujo de visita a factura",
    description:
      "AutoSlot ayuda a talleres pequenos y medianos a ordenar visitas, presupuestos, ordenes de reparacion y documentos finales.",
    ogLocale: "es_ES",
  },
  pl: {
    title: "AutoSlot | Oprogramowanie dla warsztatow od wizyty do faktury",
    description:
      "AutoSlot pomaga malym i srednim warsztatom uporzadkowac wizyty, wyceny, zlecenia napraw i dokumenty koncowe.",
    ogLocale: "pl_PL",
  },
  en: {
    title: "AutoSlot | Workshop software from visit to invoice",
    description:
      "AutoSlot helps small and mid-sized workshops structure visits, estimates, repair orders and final documents in one flow.",
    ogLocale: "en_US",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const localized = metadataByLocale[currentLocale];
  const canonical = `${normalizedBaseUrl}/${currentLocale}`;
  const localeAlternates = {
    es: `${normalizedBaseUrl}/es`,
    pl: `${normalizedBaseUrl}/pl`,
    en: `${normalizedBaseUrl}/en`,
    "x-default": `${normalizedBaseUrl}/es`,
  };

  return {
    title: localized.title,
    description: localized.description,
    metadataBase: new URL(normalizedBaseUrl),
    alternates: {
      canonical,
      languages: localeAlternates,
    },
    openGraph: {
      type: "website",
      title: localized.title,
      description: localized.description,
      url: canonical,
      locale: localized.ogLocale,
      alternateLocale: ["es_ES", "pl_PL", "en_US"].filter(
        (item) => item !== localized.ogLocale
      ),
    },
    twitter: {
      card: "summary_large_image",
      title: localized.title,
      description: localized.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const tHeader = await getTranslations("Header");
  const tFooter = await getTranslations("Footer");

  return (
    <NextIntlClientProvider>
      <div className="min-h-screen">
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="b96a776d-1bb5-4b98-9e0a-4e3d471fb9bb"
          strategy="afterInteractive"
        />
        <SiteHeader
          locale={locale}
          localeLabel={tHeader("language")}
          themeToggleLabel={tHeader("theme")}
          ctaLabel={tHeader("cta")}
          navProblemLabel={tHeader("navProblem")}
          navFlowLabel={tHeader("navFlow")}
          navPricingLabel={tHeader("navPricing")}
          navFaqLabel={tHeader("navFaq")}
          navContactLabel={tHeader("navContact")}
          localeOptions={[
            { value: "es", label: "ES" },
            { value: "pl", label: "PL" },
            { value: "en", label: "EN" },
          ]}
        />
        <main className="bg-[#cbd4e0] pt-6 md:pt-10 dark:bg-background">{children}</main>
        <SiteFooter
          locale={locale}
          title={tFooter("title")}
          quickLinksLabel={tFooter("quickLinks")}
          problemLabel={tFooter("problem")}
          flowLabel={tFooter("flow")}
          pricingLabel={tFooter("pricing")}
          faqLabel={tFooter("faq")}
          contactLabel={tFooter("contact")}
          ctaLabel={tFooter("cta")}
          legalLabel={tFooter("legal")}
          privacyLabel={tFooter("privacy")}
          contactCueLabel={tFooter("contactCue")}
        />
      </div>
    </NextIntlClientProvider>
  );
}
