import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";

import "@fontsource-variable/vazirmatn";

import { routing } from "@/i18n/routing";

import { ThemeProvider } from "@/components/providers/theme-provider";

import { CursorFollower } from "@/components/effects/cursor-follower";

import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehran Soufi | Computer Engineer & Web Developer",
  description:
    "Personal portfolio of Mehran Soufi, a Computer Engineer and Web Developer.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <CursorFollower />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
