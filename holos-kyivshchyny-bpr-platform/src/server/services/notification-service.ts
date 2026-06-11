export type NotificationInput = {
  userId?: string;
  eventId?: string;
  type: string;
  channel: "EMAIL" | "SMS" | "VIBER";
  scheduledAt: Date;
  payload: Record<string, unknown>;
};
export function scheduleNotification(input: NotificationInput) {
  return {
    id: "notification_" + input.type + "_" + input.channel,
    status: "SCHEDULED",
    ...input,
    scheduledAt: input.scheduledAt.toISOString(),
  };
}
export async function sendDevNotification(input: NotificationInput) {
  console.info("dev notification", {
    type: input.type,
    channel: input.channel,
    scheduledAt: input.scheduledAt.toISOString(),
  });
  return { status: "SENT", sentAt: new Date().toISOString() };
}
export function reminderSchedule(eventDate: Date) {
  return [
    new Date(eventDate.getTime() - 24 * 60 * 60 * 1000),
    new Date(eventDate.getTime() - 30 * 60 * 1000),
  ];
}
