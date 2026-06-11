import { cookies } from "next/headers";
import type { Role } from "@/types";
import { demoData } from "@/lib/constants/demo-data";
export async function getSession() {
  const store = await cookies();
  const email = store.get("holos-session")?.value;
  if (!email) return null;
  const user = demoData.users.find((item) => item.email === email);
  if (!user) return null;
  return {
    userId: user.id,
    email: user.email,
    name: user.name,
    role: user.role as Role,
  };
}
export async function requireSession() {
  const session = await getSession();
  if (!session) throw new Error("Unauthenticated");
  return session;
}
