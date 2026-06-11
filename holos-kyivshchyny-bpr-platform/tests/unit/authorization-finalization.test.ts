import { describe, expect, it } from "vitest";
import {
  assertAdmin,
  assertAuthenticated,
  assertOwnsResource,
  assertSuperAdmin,
  canAccessMaterial,
  canDownloadCertificate,
  canTakeTest,
  canVerifyCertificatePublic,
} from "@/lib/auth/authorization";

describe("final authorization helpers", () => {
  it("guards authentication and admin-only routes", () => {
    expect(() => assertAuthenticated(null)).toThrow("Authentication required");
    expect(() => assertAdmin({ userId: "u1", role: "USER" })).toThrow(
      "Admin access required",
    );
    expect(() => assertSuperAdmin({ userId: "u1", role: "ADMIN" })).toThrow(
      "Super admin access required",
    );
  });

  it("allows owners and admins to access owned resources", () => {
    expect(() =>
      assertOwnsResource({ userId: "u1", role: "USER" }, "u1"),
    ).not.toThrow();
    expect(() =>
      assertOwnsResource({ userId: "u1", role: "USER" }, "u2"),
    ).toThrow("Resource owner access required");
  });

  it("enforces material visibility tiers", () => {
    expect(
      canAccessMaterial({
        session: { userId: "u1", role: "USER" },
        visibility: "ATTENDED_USERS",
        registered: true,
        attended: false,
        certificateEligible: false,
      }),
    ).toBe(false);
    expect(
      canAccessMaterial({
        session: { userId: "admin", role: "ADMIN" },
        visibility: "ADMIN_ONLY",
        registered: false,
        attended: false,
        certificateEligible: false,
      }),
    ).toBe(true);
  });

  it("checks test, certificate download, and public verification permissions", () => {
    expect(
      canTakeTest({
        session: { userId: "u1", role: "USER" },
        registered: true,
        attemptsUsed: 0,
        maxAttempts: 1,
      }),
    ).toBe(true);
    expect(
      canDownloadCertificate({
        session: { userId: "u1", role: "USER" },
        certificateUserId: "u2",
        certificateStatus: "ACTIVE",
      }),
    ).toBe(false);
    expect(canVerifyCertificatePublic("ACTIVE")).toBe(true);
    expect(canVerifyCertificatePublic("PENDING")).toBe(false);
  });
});
