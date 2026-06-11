import { CabinetShell } from "@/components/layout/cabinet-shell";
import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const session = await getSession();

  if (!session) {
    redirect("/" + locale + "/auth/sign-in");
  }

  return <CabinetShell locale={locale}>{children}</CabinetShell>;
}
