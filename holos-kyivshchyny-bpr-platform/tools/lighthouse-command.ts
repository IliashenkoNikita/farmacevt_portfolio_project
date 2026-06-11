const target = process.env.STAGING_URL ?? process.env.APP_URL;

if (!target) {
  console.error("Set STAGING_URL or APP_URL before running Lighthouse.");
  process.exit(1);
}

console.log(
  [
    "Run Lighthouse CI with:",
    `pnpm dlx @lhci/cli@0.14.x autorun --collect.url=${target}`,
    "",
    "This script avoids adding Lighthouse as a heavy local dependency.",
  ].join("\n"),
);
