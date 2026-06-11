import { betterAuth } from "better-auth";
export const auth = betterAuth({
  emailAndPassword: { enabled: true },
  appName: "Holos Kyivshchyny BPR Platform",
});
