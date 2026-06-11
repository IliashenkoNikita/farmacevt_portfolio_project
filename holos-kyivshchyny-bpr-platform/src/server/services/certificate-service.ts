import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";
export function certificateNumber(
  year: number,
  eventCode: string,
  sequence: number,
) {
  return (
    "GK-BPR-" +
    year +
    "-" +
    eventCode.toUpperCase() +
    "-" +
    String(sequence).padStart(6, "0")
  );
}
export function verificationCode(seed = crypto.randomUUID()) {
  return Buffer.from(seed + ":" + crypto.randomUUID())
    .toString("base64url")
    .slice(0, 32);
}
export function isCertificateEligible(input: {
  registered: boolean;
  attendedRequired: boolean;
  attended: boolean;
  testRequired: boolean;
  passed: boolean;
  hasActiveCertificate: boolean;
}) {
  if (!input.registered || input.hasActiveCertificate) return false;
  if (input.attendedRequired && !input.attended) return false;
  if (input.testRequired && !input.passed) return false;
  return true;
}
export function canCreateActiveCertificate(existingStatuses: string[]) {
  return !existingStatuses.some((status) => status === "ACTIVE");
}
export function isPubliclyVerifiableCertificate(status: string) {
  return status === "ACTIVE" || status === "REVOKED";
}
export async function qrDataUrl(url: string) {
  return QRCode.toDataURL(url, { margin: 1, width: 180 });
}
export async function createCertificatePdf(input: {
  fullName: string;
  eventTitle: string;
  eventDate: string;
  hours: number;
  points: number;
  certificateNumber: string;
  issueDate: string;
  providerName: string;
  verificationUrl: string;
  demo: boolean;
}) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([842, 595]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  page.drawRectangle({
    x: 32,
    y: 32,
    width: 778,
    height: 531,
    borderColor: rgb(0.05, 0.33, 0.28),
    borderWidth: 2,
  });
  page.drawText("BPR/CPD Certificate", {
    x: 72,
    y: 500,
    size: 32,
    font,
    color: rgb(0.05, 0.33, 0.28),
  });
  page.drawText(input.providerName, { x: 72, y: 465, size: 14, font });
  page.drawText(input.fullName, { x: 72, y: 410, size: 26, font });
  page.drawText(input.eventTitle, { x: 72, y: 365, size: 18, font });
  page.drawText(
    "Date: " +
      input.eventDate +
      "  Hours: " +
      input.hours +
      "  BPR points: " +
      input.points,
    { x: 72, y: 325, size: 14, font },
  );
  page.drawText("Certificate: " + input.certificateNumber, {
    x: 72,
    y: 292,
    size: 12,
    font,
  });
  page.drawText("Verify: " + input.verificationUrl, {
    x: 72,
    y: 265,
    size: 11,
    font,
  });
  if (input.demo)
    page.drawText(
      "Demo version. Legal verification is required before production.",
      { x: 72, y: 72, size: 10, font, color: rgb(0.65, 0.22, 0.16) },
    );
  return pdf.save();
}
export function publicVerification(record: {
  status: string;
  userName: string;
  eventTitle: string;
  eventDate: string;
  points: number;
  certificateNumber: string;
  issuedAt: string;
  providerName: string;
  officialBprEventRegistrationNumber?: string | null;
}) {
  return {
    status: record.status,
    participantFullName: record.userName,
    eventTitle: record.eventTitle,
    eventDate: record.eventDate,
    bprPoints: record.points,
    certificateNumber: record.certificateNumber,
    issueDate: record.issuedAt,
    providerName: record.providerName,
    officialBprEventRegistrationNumber:
      record.officialBprEventRegistrationNumber ?? null,
  };
}
