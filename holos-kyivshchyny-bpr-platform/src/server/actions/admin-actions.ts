"use server";

import { requirePermission } from "@/lib/auth/permissions";
import { requireSession } from "@/lib/auth/session";
import { writeAudit } from "@/server/services/audit-service";
import { participantsWorkbook } from "@/server/services/export-service";
import { redirect } from "next/navigation";

export async function createAdminEventAction(): Promise<void> {
  const session = await requireSession();
  requirePermission(session.role, "event:write");
  writeAudit("EVENT_CREATE", session.userId, "Event", "demo-event", {
    title: "���� ����",
  });
}

export async function exportParticipantsAction(): Promise<void> {
  const session = await requireSession();
  requirePermission(session.role, "export:write");
  const buffer = await participantsWorkbook([
    {
      fullName: "���� ��������",
      email: "user1@holos.example",
      eventTitle: "�������������",
      status: "confirmed",
      points: 10,
    },
  ]);
  writeAudit("EXCEL_EXPORT", session.userId, "Registration", null, {
    rows: 1,
    bytes: buffer.byteLength,
  });
}

export async function completeAdminDemoAction(
  formData: FormData,
): Promise<void> {
  const session = await requireSession();
  requirePermission(session.role, "admin:read");
  const intent = String(formData.get("intent") ?? "admin-save");
  const redirectTo = String(formData.get("redirectTo") ?? "/uk/admin");
  writeAudit("SETTINGS_CHANGE", session.userId, "AdminDemoAction", intent, {
    intent,
  });
  redirect(redirectTo + "?saved=" + encodeURIComponent(intent));
}

export async function exportParticipantsFormAction(
  formData: FormData,
): Promise<void> {
  await exportParticipantsAction();
  const redirectTo = String(formData.get("redirectTo") ?? "/uk/admin/exports");
  redirect(redirectTo + "?exported=participants");
}
