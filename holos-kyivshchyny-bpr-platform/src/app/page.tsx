import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { detectLocale, localizePath } from "@/lib/i18n/config";

export default async function RootPage() {
  const requestHeaders = await headers();
  const locale = detectLocale(requestHeaders.get("accept-language"));

  redirect(localizePath(locale));
}
