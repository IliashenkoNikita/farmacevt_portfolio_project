import { describe, expect, it } from "vitest";
import { canAccessMaterial } from "@/server/services/registration-service";
describe("registration rules", () => {
  it("allows registered users to registered materials", () => {
    expect(canAccessMaterial("confirmed", "REGISTERED_USERS")).toBe(true);
    expect(canAccessMaterial("confirmed", "ATTENDED_USERS")).toBe(false);
  });
});
