import { describe, expect, it } from "vitest";
import {
  canSubmitAttempt,
  canStartAttempt,
  publicQuestion,
  scoreAttempt,
  validateSubmittedAnswers,
} from "@/server/services/test-service";
describe("test service", () => {
  it("scores server-side", () => {
    const result = scoreAttempt(
      [{ id: "q1", correctOptionIds: ["a"], points: 10 }],
      [{ questionId: "q1", optionIds: ["a"] }],
      80,
    );
    expect(result.passed).toBe(true);
  });
  it("strips correct answers", () => {
    expect(
      publicQuestion({ correctOptionIds: ["a"], options: [{ id: "a" }] }),
    ).not.toHaveProperty("correctOptionIds");
  });
  it("limits attempts", () => {
    expect(
      canStartAttempt({ registered: true, attemptsUsed: 1, maxAttempts: 2 }),
    ).toBe(true);
  });
  it("rejects tampered question and option identifiers", () => {
    const result = validateSubmittedAnswers(
      [
        {
          id: "q1",
          correctOptionIds: ["a"],
          optionIds: ["a", "b"],
          points: 10,
        },
      ],
      [
        { questionId: "q1", optionIds: ["a", "evil"] },
        { questionId: "q2", optionIds: ["a"] },
      ],
    );
    expect(result.ok).toBe(false);
    expect(result.errors).toEqual(
      expect.arrayContaining([
        "Unknown option: q1/evil",
        "Unknown question: q2",
      ]),
    );
  });
  it("enforces availability windows and submission ownership", () => {
    const now = new Date("2026-06-10T12:00:00.000Z");
    expect(
      canStartAttempt({
        registered: true,
        attemptsUsed: 0,
        maxAttempts: 2,
        now,
        availableFrom: new Date("2026-06-10T13:00:00.000Z"),
      }),
    ).toBe(false);
    expect(
      canSubmitAttempt({
        attemptUserId: "u1",
        sessionUserId: "u2",
        status: "STARTED",
        startedAt: now,
        timeLimitMinutes: 30,
        now,
      }),
    ).toBe(false);
  });
});
