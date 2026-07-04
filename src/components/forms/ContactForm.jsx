"use client";

import { useId, useState } from "react";
import { contactReasons } from "@/content/site";
import { pick } from "@/lib/i18n";

const reasons = pick(contactReasons);

// Matches the sector sites' existing pattern of a configurable POST
// endpoint (their VITE_FORM_ENDPOINT). Next.js requires the NEXT_PUBLIC_
// prefix instead of VITE_ for a build-time env var exposed to the browser.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const STATUS = {
  IDLE: "idle",
  SUBMITTING: "submitting",
  SUCCESS: "success",
  ERROR: "error",
};

/**
 * `presetReason` defaults the reason select to a given contactReasons value
 * (e.g. "investor"). `lockReason` additionally hides the select and submits
 * that value via a hidden field -- used by the Contact page's per-audience
 * forms so each one only ever routes to its own reason. Footer's generic
 * usage passes neither prop and keeps the full picker.
 */
export default function ContactForm({ presetReason, lockReason = false }) {
  const [status, setStatus] = useState(STATUS.IDLE);
  const formId = useId();
  const defaultReason = presetReason ?? reasons[0].value;

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (data.get("company")) {
      setStatus(STATUS.SUCCESS);
      return;
    }

    if (!FORM_ENDPOINT) {
      // TODO(AmanorX): set NEXT_PUBLIC_FORM_ENDPOINT (see .env.example).
      console.warn(
        "ContactForm: NEXT_PUBLIC_FORM_ENDPOINT is not configured; submission skipped."
      );
      setStatus(STATUS.ERROR);
      return;
    }

    setStatus(STATUS.SUBMITTING);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          reason: data.get("reason"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`);

      setStatus(STATUS.SUCCESS);
      form.reset();
    } catch (error) {
      console.error("ContactForm submission failed:", error);
      setStatus(STATUS.ERROR);
    }
  }

  if (status === STATUS.SUCCESS) {
    return (
      <p role="status" className="text-sm text-green-400">
        Thanks -- your message has been sent.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot field: hidden from real users via CSS, not `type=hidden`,
          since some bots skip fields with type=hidden. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor={`${formId}-name`} className="block text-sm">
          Name
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition-colors placeholder:text-white/40 focus:border-green-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
        />
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="block text-sm">
          Email
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition-colors placeholder:text-white/40 focus:border-green-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
        />
      </div>

      {lockReason ? (
        <input type="hidden" name="reason" value={defaultReason} />
      ) : (
        <div>
          <label htmlFor={`${formId}-reason`} className="block text-sm">
            Reason
          </label>
          <select
            id={`${formId}-reason`}
            name="reason"
            defaultValue={defaultReason}
            className="mt-1 w-full cursor-pointer rounded-lg border border-white/15 bg-navy-900 px-3 py-2 text-sm text-white transition-colors focus:border-green-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
          >
            {reasons.map((reason) => (
              <option key={reason.value} value={reason.value}>
                {reason.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor={`${formId}-message`} className="block text-sm">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition-colors placeholder:text-white/40 focus:border-green-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
        />
      </div>

      <button
        type="submit"
        disabled={status === STATUS.SUBMITTING}
        className="cursor-pointer rounded-full bg-green-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === STATUS.SUBMITTING ? "Sending..." : "Send message"}
      </button>

      {status === STATUS.ERROR ? (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong. Please try again, or email us directly.
        </p>
      ) : null}
    </form>
  );
}
