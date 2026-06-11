const allowed = {
  extensions: [
    ".pdf",
    ".ppt",
    ".pptx",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
  ],
  mimeTypes: [
    "application/pdf",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "image/png",
    "image/jpeg",
    "image/webp",
  ],
  maxBytes: 50 * 1024 * 1024,
} as const;
const allowedRecordingHosts = new Set([
  "youtube.com",
  "www.youtube.com",
  "youtu.be",
  "vimeo.com",
  "player.vimeo.com",
  "zoom.us",
]);

export function safeStorageName(originalName: string, now = Date.now()) {
  const base = originalName
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^[-.]+|[-.]+$/g, "");
  return String(now) + "-" + base;
}
export function validateUpload(file: {
  name: string;
  type: string;
  size: number;
}) {
  const lower = file.name.toLowerCase();
  const extensionOk = allowed.extensions.some((ext) => lower.endsWith(ext));
  const mimeOk = (allowed.mimeTypes as readonly string[]).includes(file.type);
  return {
    ok: extensionOk && mimeOk && file.size <= allowed.maxBytes,
    extensionOk,
    mimeOk,
    sizeOk: file.size <= allowed.maxBytes,
    storageName: safeStorageName(file.name),
  };
}
export function validateExternalRecordingUrl(value: string) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    const ok =
      url.protocol === "https:" &&
      (allowedRecordingHosts.has(host) ||
        [...allowedRecordingHosts].some((allowedHost) =>
          host.endsWith("." + allowedHost),
        ));
    return { ok, host, protocol: url.protocol };
  } catch {
    return { ok: false, host: null, protocol: null };
  }
}
