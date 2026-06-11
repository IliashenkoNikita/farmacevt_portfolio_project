export type Question = {
  id: string;
  correctOptionIds: string[];
  optionIds?: string[];
  points: number;
};

export type Answer = { questionId: string; optionIds: string[] };
export type AnswerValidationResult = { ok: boolean; errors: string[] };

export function scoreAttempt(
  questions: Question[],
  answers: Answer[],
  passThreshold: number,
) {
  const total = questions.reduce((sum, q) => sum + q.points, 0);
  const earned = questions.reduce((sum, q) => {
    const answer = answers.find((item) => item.questionId === q.id);
    const expected = [...q.correctOptionIds].sort().join("|");
    const actual = [...(answer?.optionIds ?? [])].sort().join("|");
    return sum + (expected === actual ? q.points : 0);
  }, 0);
  const percent = total === 0 ? 0 : Math.round((earned / total) * 100);
  return { total, earned, percent, passed: percent >= passThreshold };
}

export function validateSubmittedAnswers(
  questions: Question[],
  answers: Answer[],
): AnswerValidationResult {
  const errors: string[] = [];
  const questionIds = new Set(questions.map((question) => question.id));
  const allowedOptions = new Map(
    questions.map((question) => [
      question.id,
      new Set(question.optionIds ?? question.correctOptionIds),
    ]),
  );

  for (const answer of answers) {
    if (!questionIds.has(answer.questionId)) {
      errors.push(`Unknown question: ${answer.questionId}`);
      continue;
    }

    const seen = new Set<string>();
    const options = allowedOptions.get(answer.questionId);
    for (const optionId of answer.optionIds) {
      if (seen.has(optionId)) {
        errors.push(`Duplicate option: ${answer.questionId}/${optionId}`);
      }
      seen.add(optionId);
      if (!options?.has(optionId)) {
        errors.push(`Unknown option: ${answer.questionId}/${optionId}`);
      }
    }
  }

  return { ok: errors.length === 0, errors };
}

export function publicQuestion<
  T extends {
    correctOptionIds?: string[];
    options: Array<Record<string, unknown>>;
  },
>(question: T) {
  const { correctOptionIds: _correct, ...safe } = question;
  return safe;
}

export function canStartAttempt({
  registered,
  attemptsUsed,
  maxAttempts,
  published = true,
  now = new Date(),
  availableFrom,
  availableUntil,
}: {
  registered: boolean;
  attemptsUsed: number;
  maxAttempts: number;
  published?: boolean;
  now?: Date;
  availableFrom?: Date | null;
  availableUntil?: Date | null;
}) {
  if (!registered || !published || attemptsUsed >= maxAttempts) return false;
  if (availableFrom && now < availableFrom) return false;
  if (availableUntil && now > availableUntil) return false;
  return true;
}

export function canSubmitAttempt({
  attemptUserId,
  sessionUserId,
  status,
  startedAt,
  timeLimitMinutes,
  now = new Date(),
}: {
  attemptUserId: string;
  sessionUserId: string;
  status: string;
  startedAt: Date;
  timeLimitMinutes?: number | null;
  now?: Date;
}) {
  if (attemptUserId !== sessionUserId) return false;
  if (status !== "STARTED") return false;
  if (!timeLimitMinutes) return true;
  return now.getTime() - startedAt.getTime() <= timeLimitMinutes * 60_000;
}
