import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";
import {
  escapeExcelFormula,
  participantsWorkbook,
} from "@/server/services/export-service";

describe("participant export", () => {
  it("escapes formula-like values before writing spreadsheets", () => {
    expect(escapeExcelFormula("=cmd|' /C calc'!A0")).toBe(
      "'=cmd|' /C calc'!A0",
    );
    expect(escapeExcelFormula("+SUM(1,2)")).toBe("'+SUM(1,2)");
    expect(escapeExcelFormula("Normal name")).toBe("Normal name");
  });

  it("includes export metadata and safe participant rows", async () => {
    const buffer = await participantsWorkbook(
      [
        {
          fullName: "=Injected",
          email: "user@example.com",
          eventTitle: "Event",
          status: "COMPLETED",
          points: 10,
        },
      ],
      {
        generatedAt: "2026-06-10T12:00:00.000Z",
        generatedBy: "admin@example.com",
        filters: "status=COMPLETED",
      },
    );
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
    expect(workbook.getWorksheet("Export metadata")?.getCell("B2").value).toBe(
      "2026-06-10T12:00:00.000Z",
    );
    expect(workbook.getWorksheet("Participants")?.getCell("A2").value).toBe(
      "'=Injected",
    );
  }, 20_000);
});
