import { describe, expect, it } from "vitest";
import {
  validateExternalRecordingUrl,
  validateUpload,
} from "@/lib/security/upload-policy";
describe("upload validation", () => {
  it("accepts safe pdf", () => {
    expect(
      validateUpload({ name: "doc.pdf", type: "application/pdf", size: 1000 })
        .ok,
    ).toBe(true);
  });
  it("rejects scripts", () => {
    expect(
      validateUpload({
        name: "../hack.exe",
        type: "application/x-msdownload",
        size: 1000,
      }).ok,
    ).toBe(false);
  });
  it("accepts safe webp images", () => {
    expect(
      validateUpload({ name: "banner.webp", type: "image/webp", size: 1000 })
        .ok,
    ).toBe(true);
  });
  it("allows only trusted https recording URLs", () => {
    expect(validateExternalRecordingUrl("https://youtu.be/demo").ok).toBe(true);
    expect(validateExternalRecordingUrl("http://youtu.be/demo").ok).toBe(false);
    expect(validateExternalRecordingUrl("https://evil.example/demo").ok).toBe(
      false,
    );
  });
});
