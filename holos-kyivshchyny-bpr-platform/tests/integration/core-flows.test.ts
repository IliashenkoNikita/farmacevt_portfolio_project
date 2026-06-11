import { describe, expect, it } from "vitest";
import { canAccessUserResource } from "@/lib/auth/permissions";
import { createRegistration } from "@/server/services/registration-service";
import { scoreAttempt } from "@/server/services/test-service";
import {
  certificateNumber,
  isCertificateEligible,
  publicVerification,
} from "@/server/services/certificate-service";
import { participantsWorkbook } from "@/server/services/export-service";
describe("core flows", () => {
  it("creates registration, submits test, generates certificate, verifies public data, and exports", async () => {
    const registration = createRegistration(
      {
        eventSlug: "farmakonagliad-2026",
        fullName: "Марія",
        birthDate: "1990-01-01",
        email: "m@example.com",
        phone: "+380501112233",
        education: "Вища",
        specialty: "Фармація",
        organizationName: "ТОВ",
        position: "Фармацевт",
        edrpou: "12345678",
        consent: true,
        channel: "EMAIL",
      },
      "u1",
    );
    const score = scoreAttempt(
      [{ id: "q1", correctOptionIds: ["a"], points: 10 }],
      [{ questionId: "q1", optionIds: ["a"] }],
      80,
    );
    const eligible = isCertificateEligible({
      registered: true,
      attendedRequired: true,
      attended: true,
      testRequired: true,
      passed: score.passed,
      hasActiveCertificate: false,
    });
    const number = certificateNumber(2026, "PV", 123);
    const verification = publicVerification({
      status: "ACTIVE",
      userName: registration.fullName,
      eventTitle: "Подія",
      eventDate: "2026-01-01",
      points: 10,
      certificateNumber: number,
      issuedAt: "2026-01-02",
      providerName: "Holos Kyivshchyny",
      officialBprEventRegistrationNumber: "BPR-2026-001",
    });
    const exportBuffer = await participantsWorkbook([
      {
        fullName: registration.fullName,
        email: registration.email,
        eventTitle: "Подія",
        status: registration.status,
        points: 10,
      },
    ]);
    expect(canAccessUserResource("u1", registration.userId, "USER")).toBe(true);
    expect(eligible).toBe(true);
    expect(verification.certificateNumber).toBe(number);
    expect(exportBuffer.byteLength).toBeGreaterThan(1000);
  });
});
