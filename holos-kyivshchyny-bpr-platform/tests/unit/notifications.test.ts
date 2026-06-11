import { describe, expect, it } from "vitest";
import {
  reminderSchedule,
  scheduleNotification,
} from "@/server/services/notification-service";
describe("notifications", () => {
  it("schedules reminders", () => {
    expect(reminderSchedule(new Date("2026-01-02T10:00:00Z"))).toHaveLength(2);
  });
  it("creates scheduled notification", () => {
    expect(
      scheduleNotification({
        type: "certificate_issued",
        channel: "EMAIL",
        scheduledAt: new Date("2026-01-01"),
        payload: {},
      }).status,
    ).toBe("SCHEDULED");
  });
});
