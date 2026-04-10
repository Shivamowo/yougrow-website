"use client";

import { useState, useTransition } from "react";
import { submitBookingForm } from "@/app/lib/actions";
import { PROJECT_TYPES } from "@/app/lib/data";
import type { BookingFormData } from "@/app/lib/validations";

type FieldErrors = Partial<Record<keyof BookingFormData, string>>;

const FIELD_STYLE: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(240,237,232,0.12)",
  borderRadius: 0,
  color: "var(--fg)",
  padding: "0.9rem 1.1rem",
  fontSize: "0.9rem",
  fontFamily: "var(--font-inter), sans-serif",
  outline: "none",
  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
};

function Field({
  label,
  id,
  error,
  required = false,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
      <label
        htmlFor={id}
        className="font-sans"
        style={{
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(240,237,232,0.6)",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#FF4D1C", marginLeft: "2px" }}>*</span>
        )}
      </label>
      {children}
      {error && (
        <span
          className="font-sans"
          style={{ fontSize: "0.75rem", color: "#FF4D1C", marginTop: "2px" }}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default function BookingForm() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [form, setForm] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);

    startTransition(async () => {
      const res = await submitBookingForm(form);
      if (res.success) {
        setResult({ success: true, message: res.message });
        setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
        setErrors({});
      } else {
        setErrors(res.errors as FieldErrors);
        setResult({
          success: false,
          message: res.message ?? "Please fix the errors above.",
        });
      }
    });
  };

  const inputFocusStyle = `
    .bd-input:focus {
      border-color: #FF4D1C !important;
      box-shadow: 0 0 0 2px rgba(255,77,28,0.12) !important;
    }
    .bd-input::placeholder { color: rgba(240,237,232,0.25); }
    .bd-select option { background: #181818; color: #f0ede8; }
  `;

  if (result?.success) {
    return (
      <div
        style={{
          padding: "4rem 3rem",
          border: "1px solid rgba(255,77,28,0.3)",
          background: "rgba(255,77,28,0.04)",
          textAlign: "center",
        }}
      >
        {/* Checkmark */}
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            border: "2px solid #FF4D1C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M4 11l5 5 9-9"
              stroke="#FF4D1C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3
          className="font-serif"
          style={{
            fontSize: "1.8rem",
            fontWeight: 900,
            marginBottom: "1rem",
            color: "var(--fg)",
          }}
        >
          We&apos;ve got your message.
        </h3>
        <p
          className="font-sans"
          style={{
            color: "rgba(240,237,232,0.65)",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          {result.message}
        </p>
        <button
          className="btn-primary font-sans"
          onClick={() => setResult(null)}
          style={{ fontSize: "0.8rem", padding: "0.8rem 2rem" }}
        >
          SEND ANOTHER MESSAGE
        </button>
      </div>
    );
  }

  return (
    <>
      <style>{inputFocusStyle}</style>
      <form
        onSubmit={handleSubmit}
        noValidate
        style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}
        aria-label="Book a call form"
      >
        {/* Row: Name + Email */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.6rem",
          }}
        >
          <Field label="Full Name" id="name" error={errors.name} required>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Smith"
              value={form.name}
              onChange={handleChange}
              disabled={isPending}
              className="bd-input"
              style={{
                ...FIELD_STYLE,
                borderColor: errors.name ? "#FF4D1C" : "rgba(240,237,232,0.12)",
              }}
            />
          </Field>

          <Field label="Email Address" id="email" error={errors.email} required>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
              value={form.email}
              onChange={handleChange}
              disabled={isPending}
              className="bd-input"
              style={{
                ...FIELD_STYLE,
                borderColor: errors.email ? "#FF4D1C" : "rgba(240,237,232,0.12)",
              }}
            />
          </Field>
        </div>

        {/* Row: Phone + Project Type */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.6rem",
          }}
        >
          <Field label="Phone (optional)" id="phone" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 555 000 0000"
              value={form.phone}
              onChange={handleChange}
              disabled={isPending}
              className="bd-input"
              style={{
                ...FIELD_STYLE,
                borderColor: errors.phone ? "#FF4D1C" : "rgba(240,237,232,0.12)",
              }}
            />
          </Field>

          <Field
            label="Project Type"
            id="projectType"
            error={errors.projectType}
            required
          >
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              disabled={isPending}
              className="bd-input bd-select"
              style={{
                ...FIELD_STYLE,
                cursor: "pointer",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23f0ede8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                paddingRight: "2.5rem",
                color: form.projectType
                  ? "var(--fg)"
                  : "rgba(240,237,232,0.25)",
                borderColor: errors.projectType
                  ? "#FF4D1C"
                  : "rgba(240,237,232,0.12)",
              }}
            >
              <option value="" disabled hidden>
                Select a service…
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Message */}
        <Field label="Tell us about your project" id="message" error={errors.message} required>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Describe your project, goals, timeline, and any relevant details…"
            value={form.message}
            onChange={handleChange}
            disabled={isPending}
            className="bd-input"
            style={{
              ...FIELD_STYLE,
              resize: "vertical",
              minHeight: "130px",
              borderColor: errors.message ? "#FF4D1C" : "rgba(240,237,232,0.12)",
            }}
          />
        </Field>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary font-sans"
          style={{
            fontSize: "0.82rem",
            padding: "1.1rem",
            letterSpacing: "0.15em",
            width: "100%",
            justifyContent: "center",
            opacity: isPending ? 0.7 : 1,
            cursor: isPending ? "wait" : "pointer",
          }}
          aria-busy={isPending}
        >
          {isPending ? (
            <>
              <span
                style={{
                  display: "inline-block",
                  width: "14px",
                  height: "14px",
                  border: "2px solid rgba(255,255,255,0.3)",
                  borderTopColor: "#fff",
                  borderRadius: "50%",
                  animation: "spin 0.7s linear infinite",
                  marginRight: "0.6rem",
                }}
              />
              SENDING…
            </>
          ) : (
            "BOOK YOUR CALL →"
          )}
        </button>

        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

        {/* Generic error message */}
        {result && !result.success && (
          <p
            role="alert"
            className="font-sans"
            style={{
              color: "#FF4D1C",
              fontSize: "0.8rem",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            {result.message}
          </p>
        )}
      </form>
    </>
  );
}
