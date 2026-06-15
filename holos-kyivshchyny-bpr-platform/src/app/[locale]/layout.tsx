import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/site-shell";
import { getMessages, isLocale, locales } from "@/lib/i18n/config";
import "@/styles/globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    metadataBase: new URL("https://farmacevt-portfolio-project.vercel.app"),
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      type: "website",
      locale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body>
        <SiteShell locale={locale}>{children}</SiteShell>
      </body>
    </html>
  );
}
