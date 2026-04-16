import type { ReactNode } from "react";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
