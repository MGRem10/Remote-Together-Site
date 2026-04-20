import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch if you are trying to choose where to go, how to set up remote life abroad, or how to make the whole thing more sustainable.",
  openGraph: {
    title: "Contact Remote Together",
    description:
      "Reach out about destination choices, setup questions, and making remote work and travel actually work.",
  },
};

const nextSteps = [
  "We review your situation.",
  "We reply within 48 hours.",
  "If it makes sense, we suggest the best way to help.",
];

export default function ContactPage() {
  return (
    <>
      <section className="section-space pt-8 md:pt-12">
        <div className="container">
          <Reveal className="max-w-3xl">
            <div className="eyebrow">Contact</div>
            <h1 className="display mt-4">Contact</h1>
            <p className="lead mt-6 text-[var(--muted-strong)]">
              Not sure where to start? That&apos;s usually the right place.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space section-block pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          <div className="grid gap-6 self-start">
            <Reveal className="content-card panel-pad" delay={20}>
              <div className="eyebrow">Start Here</div>
              <p className="body-md mt-5">
                We work with people who want to make remote work and travel actually
                work.
              </p>
              <p className="body-md mt-4">
                If you&apos;re trying to figure out where to go, how to set things up, or
                how to make it sustainable, send us a message.
              </p>
            </Reveal>

            <Reveal className="summary-panel px-7 py-8 md:px-8 md:py-9" delay={90}>
              <div className="eyebrow">What Happens Next</div>
              <div className="bullet-list mt-6">
                {nextSteps.map((item) => (
                  <div key={item} className="bullet-row">
                    <span className="bullet-dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="content-card panel-pad" delay={160}>
              <div className="eyebrow">Personal Note</div>
              <p className="body-md mt-5">
                We read every message ourselves. No automation, no outsourcing.
              </p>
              <div className="mt-7 border-t border-[var(--border)] pt-6">
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                  Secondary Contact
                </div>
                <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
                  <a href="mailto:hello@remotetogether.com" className="transition-colors duration-200 hover:text-[var(--text)]">
                    hello@remotetogether.com
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-[var(--text)]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="summary-panel panel-pad" delay={60}>
            <div className="eyebrow">Send A Message</div>
            <h2 className="card-title mt-4">Tell us what you&apos;re trying to figure out.</h2>
            <p className="body-sm mt-5 max-w-2xl">
              Keep it simple. A rough situation is enough. We can usually tell quite
              quickly whether you need destination help, setup guidance, or a better
              structure for the next step.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
