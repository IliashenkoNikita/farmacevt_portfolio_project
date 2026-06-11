import { z } from "zod";
export const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  AUTH_SECRET: z.string().min(12),
  AUTH_URL: z.string().url(),
  APP_URL: z.string().url(),
  FILE_STORAGE_PATH: z.string().min(1),
  CERTIFICATE_SIGNING_SECRET: z.string().min(12),
});
export function readEnv(input: NodeJS.ProcessEnv = process.env) {
  return envSchema.safeParse(input);
}
