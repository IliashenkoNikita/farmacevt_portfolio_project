import { AdminShell } from "@/components/layout/admin-shell";
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

  if (
    !session ||
    (session.role !== "ADMIN" && session.role !== "SUPER_ADMIN")
  ) {
    redirect("/" + locale + "/auth/sign-in");
  }

  return <AdminShell locale={locale}>{children}</AdminShell>;
}
