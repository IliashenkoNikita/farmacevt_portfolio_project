import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "@/lib/db/client";

const baseURL =
  process.env.BETTER_AUTH_URL ??
  process.env.AUTH_URL ??
  process.env.NEXT_PUBLIC_APP_URL ??
  "http://localhost:3000";

export const auth = betterAuth({
  appName: "Holos Kyivshchyny BPR Platform",
  baseURL,
  secret: process.env.BETTER_AUTH_SECRET ?? process.env.AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  user: {
    modelName: "User",
    fields: {
      emailVerified: "emailVerified",
      image: "image",
    },
  },
  session: {
    modelName: "Session",
    fields: {
      token: "sessionToken",
      expiresAt: "expires",
    },
  },
  account: {
    modelName: "Account",
    fields: {
      accountId: "providerAccountId",
      providerId: "provider",
    },
  },
  verification: {
    modelName: "Verification",
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  plugins: [nextCookies()],
});
