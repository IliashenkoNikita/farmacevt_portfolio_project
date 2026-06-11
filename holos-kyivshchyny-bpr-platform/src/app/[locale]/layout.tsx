import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Голос Київщини BPR",
  description: "Професійна освітня платформа БПР/CPD",
  metadataBase: new URL("https://farmacevt-portfolio-project.vercel.app"),
  openGraph: {
    title: "Голос Київщини BPR",
    description: "Професійна освітня платформа БПР/CPD",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>
        <SiteShell locale={locale}>{children}</SiteShell>
      </body>
    </html>
  );
}
