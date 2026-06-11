"use server";

import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth/session";

export async function completeCabinetDemoAction(
  formData: FormData,
): Promise<void> {
  await requireSession();
  const intent = String(formData.get("intent") ?? "cabinet-action");
  const redirectTo = String(formData.get("redirectTo") ?? "/uk/cabinet");
  redirect(redirectTo + "?done=" + encodeURIComponent(intent));
}

export async function submitContactAction(formData: FormData): Promise<void> {
  const locale = String(formData.get("locale") ?? "uk");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");
  const status =
    email.includes("@") && message.trim().length > 2 ? "sent" : "invalid";
  redirect("/" + locale + "/contacts?contact=" + status);
}
