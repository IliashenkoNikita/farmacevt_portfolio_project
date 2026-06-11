import type { Role } from "@/types";

export type SessionIdentity = {
  userId: string;
  role: Role;
} | null;

export type MaterialAccessInput = {
  session: SessionIdentity;
  visibility:
    | "ADMIN_ONLY"
    | "REGISTERED_USERS"
    | "ATTENDED_USERS"
    | "CERTIFICATE_ELIGIBLE_USERS";
  registered: boolean;
  attended: boolean;
  certificateEligible: boolean;
};

const adminRoles: Role[] = [
  "ADMIN",
  "SUPER_ADMIN",
  "MANAGER",
  "CONTENT_EDITOR",
];

export function isAdminRole(role: Role) {
  return adminRoles.includes(role);
}

export function assertAuthenticated(
  session: SessionIdentity,
): asserts session is Exclude<SessionIdentity, null> {
  if (!session) throw new Error("Authentication required");
}

export function assertAdmin(session: SessionIdentity) {
  assertAuthenticated(session);
  if (!isAdminRole(session.role)) throw new Error("Admin access required");
}

export function assertSuperAdmin(session: SessionIdentity) {
  assertAuthenticated(session);
  if (session.role !== "SUPER_ADMIN") {
    throw new Error("Super admin access required");
  }
}

export function assertOwnsResource(
  session: SessionIdentity,
  resourceUserId: string,
) {
  assertAuthenticated(session);
  if (!isAdminRole(session.role) && session.userId !== resourceUserId) {
    throw new Error("Resource owner access required");
  }
}

export function canAccessMaterial(input: MaterialAccessInput) {
  const { session, visibility } = input;
  if (!session) return false;
  if (isAdminRole(session.role)) return true;
  if (visibility === "ADMIN_ONLY") return false;
  if (visibility === "REGISTERED_USERS") return input.registered;
  if (visibility === "ATTENDED_USERS") return input.attended;
  return input.certificateEligible;
}

export function canTakeTest(input: {
  session: SessionIdentity;
  registered: boolean;
  attemptsUsed: number;
  maxAttempts: number;
}) {
  return Boolean(
    input.session && input.registered && input.attemptsUsed < input.maxAttempts,
  );
}

export function canDownloadCertificate(input: {
  session: SessionIdentity;
  certificateUserId: string;
  certificateStatus: string;
}) {
  if (!input.session || input.certificateStatus !== "ACTIVE") return false;
  return (
    isAdminRole(input.session.role) ||
    input.session.userId === input.certificateUserId
  );
}

export function canVerifyCertificatePublic(status: string) {
  return status === "ACTIVE" || status === "REVOKED";
}
