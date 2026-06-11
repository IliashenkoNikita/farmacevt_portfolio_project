import { describe, expect, it } from "vitest";
import { canAccessUserResource, hasPermission } from "@/lib/auth/permissions";
describe("authorization", () => {
  it("checks role permissions", () => {
    expect(hasPermission("ADMIN", "event:write")).toBe(true);
    expect(hasPermission("USER", "event:write")).toBe(false);
  });
  it("checks object ownership", () => {
    expect(canAccessUserResource("u1", "u2", "USER")).toBe(false);
    expect(canAccessUserResource("u1", "u2", "ADMIN")).toBe(true);
  });
});
