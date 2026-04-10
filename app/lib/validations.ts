// ─── Form validation ─────────────────────────────────────────────────────────

export interface BookingFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}

export interface ValidationResult {
  success: boolean;
  errors: Record<string, string>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s\-()]{7,20}$/;

export function validateBookingForm(data: BookingFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Name
  if (!data.name?.trim()) {
    errors.name = "Name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  // Email
  if (!data.email?.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Phone (optional)
  if (data.phone?.trim() && !PHONE_RE.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  // Project type
  if (!data.projectType?.trim()) {
    errors.projectType = "Please select a project type.";
  }

  // Message
  if (!data.message?.trim()) {
    errors.message = "Please tell us about your project.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Please provide more detail (at least 20 characters).";
  }

  return { success: Object.keys(errors).length === 0, errors };
}
