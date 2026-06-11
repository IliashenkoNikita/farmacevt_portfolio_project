import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const ignored = new Set(["node_modules", ".next", "test-results"]);

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (ignored.has(entry.name)) return [];
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return /\.(tsx|ts)$/.test(entry.name) ? [full] : [];
  });
}

describe("button contract", () => {
  it("does not leave active source buttons without submit, disabled, or click behavior", () => {
    const offenders = walk(path.join(root, "src"))
      .filter(
        (file) => !file.endsWith(path.join("components", "ui", "button.tsx")),
      )
      .flatMap((file) => {
        const text = fs.readFileSync(file, "utf8");
        const matches = text.match(/<button[\s\S]*?>/g) ?? [];
        return matches
          .filter((tag) => !/type="submit"/.test(tag))
          .filter((tag) => !/disabled=/.test(tag))
          .filter((tag) => !/onClick=/.test(tag))
          .map((tag) => `${path.relative(root, file)}: ${tag}`);
      });

    expect(offenders).toEqual([]);
  });
});
