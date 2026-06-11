import { describe, expect, it } from "vitest";
import {
  canCreateActiveCertificate,
  certificateNumber,
  isCertificateEligible,
  isPubliclyVerifiableCertificate,
  publicVerification,
  verificationCode,
} from "@/server/services/certificate-service";
describe("certificates", () => {
  it("uses required number format", () => {
    expect(certificateNumber(2026, "PV", 123)).toBe("GK-BPR-2026-PV-000123");
  });
  it("generates non-trivial verification code", () => {
    expect(verificationCode("seed").length).toBeGreaterThan(20);
  });
  it("checks eligibility", () => {
    expect(
      isCertificateEligible({
        registered: true,
        attendedRequired: true,
        attended: true,
        testRequired: true,
        passed: true,
        hasActiveCertificate: false,
      }),
    ).toBe(true);
  });
  it("minimizes public data", () => {
    const data = publicVerification({
      status: "ACTIVE",
      userName: "Марія",
      eventTitle: "Подія",
      eventDate: "2026-01-01",
      points: 10,
      certificateNumber: "GK",
      issuedAt: "2026-01-02",
      providerName: "Holos Kyivshchyny",
      officialBprEventRegistrationNumber: "BPR-2026-001",
    });
    expect(data).not.toHaveProperty("email");
    expect(data).toMatchObject({
      providerName: "Holos Kyivshchyny",
      officialBprEventRegistrationNumber: "BPR-2026-001",
    });
  });
  it("prevents duplicate active certificates", () => {
    expect(canCreateActiveCertificate(["REVOKED"])).toBe(true);
    expect(canCreateActiveCertificate(["ACTIVE"])).toBe(false);
  });
  it("keeps revoked certificates publicly checkable", () => {
    expect(isPubliclyVerifiableCertificate("REVOKED")).toBe(true);
    expect(isPubliclyVerifiableCertificate("DRAFT")).toBe(false);
  });
});
