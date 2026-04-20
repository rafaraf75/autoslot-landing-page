import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

type RootLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale?: string }>;
};

export const metadata: Metadata = {
  applicationName: "AutoSlot",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const htmlLang = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;

  return (
    <html
      lang={htmlLang}
      suppressHydrationWarning
      className={cn("h-full antialiased", "font-sans", geist.variable)}
    >
      <body className="min-h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
