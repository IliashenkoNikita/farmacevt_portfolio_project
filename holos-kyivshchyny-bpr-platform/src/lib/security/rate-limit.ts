import { RateLimiterMemory } from "rate-limiter-flexible";
export const authLimiter = new RateLimiterMemory({ points: 10, duration: 60 });
export const certificateLimiter = new RateLimiterMemory({
  points: 30,
  duration: 60,
});
export async function consumeLimiter(
  key: string,
  type: "auth" | "certificate" = "auth",
) {
  const limiter = type === "auth" ? authLimiter : certificateLimiter;
  await limiter.consume(key);
}
