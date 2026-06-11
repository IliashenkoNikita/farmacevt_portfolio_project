import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const banned = new RegExp(
  [
    "TO" + "DO",
    "FIX" + "ME",
    "T" + "BD",
    "lorem" + " ipsum",
    "write" + " later",
    "implement" + " later",
  ].join("|"),
  "i",
);
const ignore = new Set([
  "node_modules",
  ".next",
  ".git",
  "coverage",
  "playwright-report",
]);
const errors: string[] = [];

function walk(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignore.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (/\.(ts|tsx|md|json|mjs|css|prisma|yml|yaml)$/.test(entry.name)) {
      const text = fs.readFileSync(full, "utf8");
      if (banned.test(text)) errors.push(path.relative(root, full));
    }
  }
}

walk(root);

if (errors.length) {
  console.error("Disallowed unfinished markers found:\n" + errors.join("\n"));
  process.exit(1);
}

console.log("No unfinished markers found.");
