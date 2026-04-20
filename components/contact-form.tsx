"use client";

import { FormEvent, useState } from "react";

const defaultValues = {
  name: "",
  email: "",
  travelStyle: "",
  timeline: "",
  message: "",
  newsletter: false,
};

export function ContactForm() {
  const [values, setValues] = useState(defaultValues);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lines = [
      `Name: ${values.name || "-"}`,
      `Email: ${values.email || "-"}`,
      `Travel style: ${values.travelStyle || "-"}`,
      `Timeline: ${values.timeline || "-"}`,
      `Interested in destination updates: ${values.newsletter ? "Yes" : "No"}`,
      "",
      "Trip details:",
      values.message || "-",
    ];

    const subject = encodeURIComponent("Remote Together planning inquiry");
    const body = encodeURIComponent(lines.join("\n"));

    window.location.href = `mailto:hello@remotetogether.com?subject=${subject}&body=${body}`;
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">Name</span>
          <input
            type="text"
            required
            value={values.name}
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
            className="form-input"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">Email</span>
          <input
            type="email"
            required
            value={values.email}
            onChange={(event) =>
              setValues((current) => ({ ...current, email: event.target.value }))
            }
            className="form-input"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">Travel style</span>
          <select
            value={values.travelStyle}
            onChange={(event) =>
              setValues((current) => ({ ...current, travelStyle: event.target.value }))
            }
            className="form-input"
          >
            <option value="">Select one</option>
            <option value="Solo remote worker">Solo remote worker</option>
            <option value="Couple planning together">Couple planning together</option>
            <option value="Team or extended stay">Team or extended stay</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">Timing</span>
          <input
            type="text"
            value={values.timeline}
            onChange={(event) =>
              setValues((current) => ({ ...current, timeline: event.target.value }))
            }
            className="form-input"
            placeholder="Example: September for 6 weeks"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-[var(--text)]">What are you planning?</span>
        <textarea
          required
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          className="form-input min-h-[180px] resize-y"
          placeholder="Tell us the destinations you are considering, your work schedule, and the tradeoffs you want help with."
        />
      </label>

      <label id="newsletter" className="flex items-start gap-3 rounded-[1.2rem] bg-[rgba(255,255,255,0.44)] px-4 py-4">
        <input
          type="checkbox"
          checked={values.newsletter}
          onChange={(event) =>
            setValues((current) => ({ ...current, newsletter: event.target.checked }))
          }
          className="mt-1 h-4 w-4 accent-[#26433f]"
        />
        <span className="text-sm leading-7 text-[var(--muted)]">
          Also sign me up for destination updates and new remote-work travel notes.
        </span>
      </label>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
          This opens a structured email draft to `hello@remotetogether.com` with your
          details included. Expect a reply within 48 hours.
        </p>
        <button type="submit" className="button-primary">
          Book a Planning Call
        </button>
      </div>
    </form>
  );
}
