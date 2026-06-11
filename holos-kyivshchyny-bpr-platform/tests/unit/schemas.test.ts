import { describe, expect, it } from "vitest";
import { profileSchema, registrationSchema } from "@/lib/validation/schemas";
describe("schemas", () => {
  it("validates profile", () => {
    expect(
      profileSchema.parse({
        fullName: "Марія",
        birthDate: "1990-01-01",
        email: "m@example.com",
        phone: "+38 050 111 22 33",
        education: "Вища",
        specialty: "Фармація",
        workplace: "Аптека",
        position: "Фармацевт",
        organizationName: "ТОВ",
        edrpou: "12345678",
        preferredChannels: ["EMAIL"],
        consentDataProcessing: true,
      }).phone,
    ).toBe("+380501112233");
  });
  it("validates registration", () => {
    expect(
      registrationSchema.parse({
        eventSlug: "pv",
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
      }).eventSlug,
    ).toBe("pv");
  });
});
