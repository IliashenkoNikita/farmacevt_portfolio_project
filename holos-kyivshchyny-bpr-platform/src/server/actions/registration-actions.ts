"use server";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth/session";
import { createRegistration } from "@/server/services/registration-service";
export async function registerForEventAction(formData: FormData) {
  const session = await requireSession();
  const locale = String(formData.get("locale") ?? "uk");
  const eventSlug = String(formData.get("eventSlug") ?? "");
  createRegistration(
    {
      eventSlug,
      fullName: String(formData.get("fullName") ?? session.name),
      birthDate: String(formData.get("birthDate") ?? "1990-01-01"),
      email: session.email,
      phone: String(formData.get("phone") ?? "+380501112233"),
      education: String(formData.get("education") ?? "���� �������������"),
      specialty: String(formData.get("specialty") ?? "��������"),
      organizationName: String(
        formData.get("organizationName") ?? "���� ����������",
      ),
      position: String(formData.get("position") ?? "���������"),
      edrpou: String(formData.get("edrpou") ?? "12345678"),
      comment: String(formData.get("comment") ?? ""),
      consent: formData.get("consent") === "on",
      channel: String(formData.get("channel") ?? "EMAIL"),
    },
    session.userId,
  );
  redirect("/" + locale + "/cabinet/events?registered=" + eventSlug);
}
