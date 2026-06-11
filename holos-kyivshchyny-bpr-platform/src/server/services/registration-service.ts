import { registrationSchema } from "@/lib/validation/schemas";
const active = new Set<string>();
export function createRegistration(input: unknown, sessionUserId: string) {
  const data = registrationSchema.parse(input);
  const key = sessionUserId + ":" + data.eventSlug;
  if (active.has(key)) throw new Error("Ви вже зареєстровані на цю подію");
  active.add(key);
  return {
    id: "reg_" + Buffer.from(key).toString("base64url"),
    userId: sessionUserId,
    status: "confirmed",
    ...data,
  };
}
export function canAccessMaterial(
  registrationStatus: string,
  visibility: string,
) {
  if (visibility === "ADMIN_ONLY") return false;
  if (visibility === "REGISTERED_USERS")
    return ["confirmed", "attended", "completed"].includes(registrationStatus);
  if (visibility === "ATTENDED_USERS")
    return ["attended", "completed"].includes(registrationStatus);
  return registrationStatus === "completed";
}
