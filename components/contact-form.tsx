"use client";

import { FormEvent, useState } from "react";

const defaultValues = {
  name: "",
  email: "",
  question: "",
  currentLocation: "",
  travelMode: "",
  monthlyBudget: "",
  message: "",
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
      !values.question.trim() ||
      !values.travelMode.trim() ||
      !values.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please complete the required fields before sending your message.",
      });
      return;
    }

    const lines = [
      `Name: ${values.name || "-"}`,
      `Email: ${values.email || "-"}`,
      `What are you trying to figure out?: ${values.question || "-"}`,
      `Current location: ${values.currentLocation || "-"}`,
      `Travelling solo or as a couple: ${values.travelMode || "-"}`,
      `Approx monthly budget: ${values.monthlyBudget || "-"}`,
      "",
      "Message:",
      values.message || "-",
    ];

    const subject = encodeURIComponent("Remote Together contact inquiry");
    const body = encodeURIComponent(lines.join("\n"));

    setStatus({
      type: "success",
      message:
        "Your message is ready. Your email app should open with everything prefilled.",
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

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-[var(--text)]">
          What are you trying to figure out?
        </span>
        <input
          type="text"
          required
          value={values.question}
          onChange={(event) =>
            setValues((current) => ({ ...current, question: event.target.value }))
          }
          className="form-input"
          placeholder="Example: where to base for two months, how to set up a slower route, how to make the move sustainable"
        />
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Current location
          </span>
          <input
            type="text"
            value={values.currentLocation}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                currentLocation: event.target.value,
              }))
            }
            className="form-input"
            placeholder="Optional"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Travelling solo or as a couple
          </span>
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
            <option value="As a couple">As a couple</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-[var(--text)]">
          Approx monthly budget
        </span>
        <input
          type="text"
          value={values.monthlyBudget}
          onChange={(event) =>
            setValues((current) => ({ ...current, monthlyBudget: event.target.value }))
          }
          className="form-input"
          placeholder="Optional"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-[var(--text)]">Message</span>
        <textarea
          required
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          className="form-input min-h-[180px] resize-y"
          placeholder="Share the context that matters: timeline, shortlist, work rhythm, constraints, or what feels unclear right now."
        />
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

      <div className="flex flex-col gap-4 pt-2">
        <p className="text-sm leading-7 text-[var(--muted)]">
          We usually reply within 48 hours. If your email app does not open automatically,
          send your note directly to hello@remotetogether.com.
        </p>
        <div>
          <button type="submit" className="button-primary">
            Send your message
          </button>
        </div>
      </div>
    </form>
  );
}
