import fs from "node:fs";
import path from "node:path";

const production = process.env.NODE_ENV === "production";

function loadLocalEnvFile() {
  if (production) return;
  for (const file of [".env", ".env.example"]) {
    const full = path.join(process.cwd(), file);
    if (!fs.existsSync(full)) continue;
    const lines = fs.readFileSync(full, "utf8").split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
        continue;
      }
      const [key, ...valueParts] = trimmed.split("=");
      if (process.env[key]) continue;
      process.env[key] = valueParts.join("=").replace(/^"|"$/g, "");
    }
    return;
  }
}

loadLocalEnvFile();

const requiredAlways = [
  "DATABASE_URL",
  "AUTH_SECRET",
  "APP_URL",
  "CERTIFICATE_SIGNING_SECRET",
] as const;

const requiredProduction = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_FROM",
  "FILE_STORAGE_PROVIDER",
  "RATE_LIMIT_SECRET",
] as const;

const publicKeys = ["NEXT_PUBLIC_APP_URL"] as const;

const weakValues = new Set([
  "",
  "change-me-minimum-32-characters",
  "change-me-certificate-secret-32-chars",
  "change-me-rate-limit-secret-32-chars",
]);

function hasValue(key: string) {
  return Boolean(process.env[key] && process.env[key]?.trim());
}

const errors: string[] = [];
const warnings: string[] = [];

for (const key of requiredAlways) {
  if (!hasValue(key)) errors.push(`${key} is required`);
}

if (production) {
  for (const key of requiredProduction) {
    if (!hasValue(key)) errors.push(`${key} is required in production`);
  }
}

for (const key of [...requiredAlways, ...requiredProduction]) {
  const value = process.env[key];
  if (production && value && weakValues.has(value)) {
    errors.push(`${key} must be changed before production`);
  }
}

for (const key of publicKeys) {
  if (!hasValue(key)) warnings.push(`${key} is recommended for deployed links`);
}

for (const key of Object.keys(process.env)) {
  if (key.startsWith("NEXT_PUBLIC_") && /SECRET|PASSWORD|TOKEN|KEY/.test(key)) {
    errors.push(`${key} looks like a secret but is public`);
  }
}

if (warnings.length) {
  console.warn("Environment warnings:\n" + warnings.join("\n"));
}

if (errors.length) {
  console.error("Environment validation failed:\n" + errors.join("\n"));
  process.exit(1);
}

console.log(
  production
    ? "Production environment validation passed."
    : "Local environment validation passed.",
);
