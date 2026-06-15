import { z } from "zod";
export const envSchema = z
  .object({
    DATABASE_URL: z.string().min(1),
    AUTH_SECRET: z.string().min(12).optional(),
    AUTH_URL: z.string().url().optional(),
    BETTER_AUTH_SECRET: z.string().min(32).optional(),
    BETTER_AUTH_URL: z.string().url().optional(),
    APP_URL: z.string().url(),
    FILE_STORAGE_PATH: z.string().min(1),
    CERTIFICATE_SIGNING_SECRET: z.string().min(12),
  })
  .refine((env) => env.AUTH_SECRET || env.BETTER_AUTH_SECRET, {
    message: "AUTH_SECRET or BETTER_AUTH_SECRET is required",
    path: ["BETTER_AUTH_SECRET"],
  })
  .refine((env) => env.AUTH_URL || env.BETTER_AUTH_URL, {
    message: "AUTH_URL or BETTER_AUTH_URL is required",
    path: ["BETTER_AUTH_URL"],
  });
export function readEnv(input: NodeJS.ProcessEnv = process.env) {
  return envSchema.safeParse(input);
}
