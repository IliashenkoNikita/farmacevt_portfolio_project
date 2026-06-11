"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { demoData } from "@/lib/constants/demo-data";
export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const locale = String(formData.get("locale") ?? "uk");
  const user = demoData.users.find((item) => item.email === email);
  if (!user) redirect("/" + locale + "/auth/sign-in?error=invalid");
  const store = await cookies();
  store.set("holos-session", user.email, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  store.set("holos-role", user.role, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  redirect(
    user.role === "USER" ? "/" + locale + "/cabinet" : "/" + locale + "/admin",
  );
}
export async function signOutAction(locale = "uk") {
  const store = await cookies();
  store.delete("holos-session");
  store.delete("holos-role");
  redirect("/" + locale);
}
