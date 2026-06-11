import { z } from "zod";
export const emailSchema = z.string().email();
export const phoneSchema = z
  .string()
  .min(7)
  .transform((value) => value.replace(/[^+\d]/g, ""));
export const edrpouSchema = z.string().regex(/^\d{8,10}$/);
export const profileSchema = z.object({
  fullName: z.string().min(2),
  birthDate: z
    .string()
    .refine((value) => !Number.isNaN(Date.parse(value)), "������ ����"),
  email: emailSchema,
  phone: phoneSchema,
  education: z.string().min(2),
  specialty: z.string().min(2),
  workplace: z.string().min(2),
  position: z.string().min(2),
  organizationName: z.string().min(2),
  edrpou: edrpouSchema,
  preferredChannels: z.array(z.enum(["EMAIL", "SMS", "VIBER"])).min(1),
  licenseRenewalDate: z.string().optional(),
  consentDataProcessing: z.literal(true),
});
export const registrationSchema = z.object({
  eventSlug: z.string().min(1),
  fullName: z.string().min(2),
  birthDate: z.string(),
  email: emailSchema,
  phone: phoneSchema,
  education: z.string().min(2),
  specialty: z.string().min(2),
  organizationName: z.string().min(2),
  position: z.string().min(2),
  edrpou: edrpouSchema,
  comment: z.string().max(1000).optional(),
  consent: z.literal(true),
  channel: z.enum(["EMAIL", "SMS", "VIBER"]),
});
export const eventSchema = z.object({
  title: z.string().min(4),
  slug: z.string().min(3),
  category: z.string().min(2),
  date: z.string(),
  startTime: z.string(),
  format: z.string(),
  bprPoints: z.number().int().nonnegative(),
  hours: z.number().positive(),
  price: z.string(),
});
export const testSubmissionSchema = z.object({
  attemptId: z.string().min(1),
  answers: z.array(
    z.object({ questionId: z.string(), optionIds: z.array(z.string()).min(1) }),
  ),
});
