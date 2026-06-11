const blocked = new Set([
  "token",
  "secret",
  "birthDate",
  "phone",
  "email",
  "rawAnswers",
]);
export function sanitizeAuditMetadata(meta: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(meta).filter(([key]) => !blocked.has(key)),
  );
}
export function writeAudit(
  action: string,
  actorId: string | null,
  entityType: string,
  entityId: string | null,
  metadata: Record<string, unknown> = {},
) {
  return {
    action,
    actorId,
    entityType,
    entityId,
    metadata: sanitizeAuditMetadata(metadata),
    createdAt: new Date().toISOString(),
  };
}
