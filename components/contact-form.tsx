"use client";

import { FormEvent, useState } from "react";

const defaultValues = {
  name: "",
  email: "",
  trip: "",
  budget: "",
  travelStyle: "",
  travelMode: "",
  message: "",
  newsletter: false,
};

export function ContactForm() {
  const [values, setValues] = useState(defaultValues);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !values.name.trim() ||
      !values.email.trim() ||
      !values.trip.trim() ||
      !values.budget.trim() ||
      !values.travelStyle.trim() ||
      !values.travelMode.trim() ||
      !values.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please complete all required fields before sending your inquiry.",
      });
      return;
    }

    const lines = [
      `Name: ${values.name || "-"}`,
      `Email: ${values.email || "-"}`,
      `Trip or destination: ${values.trip || "-"}`,
      `Budget: ${values.budget || "-"}`,
      `Travel style: ${values.travelStyle || "-"}`,
      `Solo or couple: ${values.travelMode || "-"}`,
      `Interested in destination updates: ${values.newsletter ? "Yes" : "No"}`,
      "",
      "Trip details:",
      values.message || "-",
    ];

    const subject = encodeURIComponent("Remote Together planning inquiry");
    const body = encodeURIComponent(lines.join("\n"));

    setStatus({
      type: "success",
      message:
        "Your inquiry is ready. Your email app should open with the form details prefilled.",
    });
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
          <span className="text-sm font-semibold text-[var(--text)]">Trip or destination</span>
          <input
            type="text"
            required
            value={values.trip}
            onChange={(event) =>
              setValues((current) => ({ ...current, trip: event.target.value }))
            }
            className="form-input"
            placeholder="Example: Portugal, Spain, or a 2-month Europe stay"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">Budget</span>
          <select
            required
            value={values.budget}
            onChange={(event) =>
              setValues((current) => ({ ...current, budget: event.target.value }))
            }
            className="form-input"
          >
            <option value="">Select one</option>
            <option value="Under $2,000 / month">Under $2,000 / month</option>
            <option value="$2,000 to $4,000 / month">$2,000 to $4,000 / month</option>
            <option value="$4,000+ / month">$4,000+ / month</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">Travel style</span>
          <select
            required
            value={values.travelStyle}
            onChange={(event) =>
              setValues((current) => ({ ...current, travelStyle: event.target.value }))
            }
            className="form-input"
          >
            <option value="">Select one</option>
            <option value="City-based remote work">City-based remote work</option>
            <option value="Slow travel">Slow travel</option>
            <option value="Work-and-explore balance">Work-and-explore balance</option>
            <option value="Deep-work focused">Deep-work focused</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">Solo or couple</span>
          <select
            required
            value={values.travelMode}
            onChange={(event) =>
              setValues((current) => ({ ...current, travelMode: event.target.value }))
            }
            className="form-input"
          >
            <option value="">Select one</option>
            <option value="Solo">Solo</option>
            <option value="Couple">Couple</option>
          </select>
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-[var(--text)]">Message</span>
        <textarea
          required
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          className="form-input min-h-[180px] resize-y"
          placeholder="Tell us your destination shortlist, work schedule, timing, and what kind of recommendation you need."
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

      {status.type !== "idle" ? (
        <div
          className={`rounded-[1.2rem] px-4 py-4 text-sm leading-7 ${
            status.type === "success"
              ? "bg-[rgba(38,67,63,0.1)] text-[var(--text)]"
              : "bg-[rgba(133,50,46,0.1)] text-[var(--text)]"
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
          Expect a reply within 48 hours. If your email app does not open automatically,
          send your request directly to `hello@remotetogether.com`.
        </p>
        <button type="submit" className="button-primary">
          Book a Planning Call
        </button>
      </div>
    </form>
  );
}
