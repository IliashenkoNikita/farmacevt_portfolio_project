import { CabinetShell } from "@/components/layout/cabinet-shell";
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CabinetShell locale={locale}>{children}</CabinetShell>;
}
