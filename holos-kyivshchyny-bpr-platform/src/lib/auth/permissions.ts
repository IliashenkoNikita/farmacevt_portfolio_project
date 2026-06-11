import type { Role } from "@/types";
const permissions: Record<Role, string[]> = {
  USER: ["cabinet:read", "profile:write"],
  ADMIN: [
    "cabinet:read",
    "profile:write",
    "admin:read",
    "event:write",
    "export:write",
    "certificate:write",
  ],
  SUPER_ADMIN: ["*"],
  MANAGER: ["admin:read", "event:write"],
  CONTENT_EDITOR: ["admin:read", "event:write"],
  SUPPORT: ["admin:read"],
};
export function hasPermission(role: Role, permission: string) {
  return (
    permissions[role]?.includes("*") ||
    permissions[role]?.includes(permission) ||
    false
  );
}
export function requirePermission(role: Role, permission: string) {
  if (!hasPermission(role, permission)) throw new Error("Forbidden");
}
export function canAccessUserResource(
  sessionUserId: string,
  resourceUserId: string,
  role: Role,
) {
  return (
    role === "SUPER_ADMIN" ||
    role === "ADMIN" ||
    sessionUserId === resourceUserId
  );
}
