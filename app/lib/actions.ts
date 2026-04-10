"use server";

// ─── Server Action: Submit Booking Form ──────────────────────────────────────
// Structure is ready for extension:
//   • Email → add Resend / Nodemailer
//   • Database → add Prisma / Supabase
//   • Scheduling → add Calendly / Cal.com

import {
  validateBookingForm,
  BookingFormData,
} from "@/app/lib/validations";

export type ActionResult =
  | { success: true; message: string }
  | { success: false; errors: Record<string, string>; message?: string };

export async function submitBookingForm(
  data: BookingFormData
): Promise<ActionResult> {
  // ── 1. Validate ──────────────────────────────────────────────────────────
  const validation = validateBookingForm(data);
  if (!validation.success) {
    return { success: false, errors: validation.errors };
  }

  // ── 2. Sanitize ──────────────────────────────────────────────────────────
  const payload = {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone?.trim() ?? null,
    projectType: data.projectType.trim(),
    message: data.message.trim(),
    submittedAt: new Date().toISOString(),
  };

  // ── 3. Process ───────────────────────────────────────────────────────────
  // TODO: await sendEmail(payload)        — e.g. Resend
  // TODO: await db.booking.create(...)    — e.g. Prisma
  // TODO: await triggerCalendly(payload)  — for scheduling
  console.log("[BOOKING SUBMISSION]", payload);

  // Simulate realistic async delay
  await new Promise((resolve) => setTimeout(resolve, 900));

  // ── 4. Return ────────────────────────────────────────────────────────────
  return {
    success: true,
    message:
      "Thanks! We'll reach out within 24 hours to schedule your call.",
  };
}
