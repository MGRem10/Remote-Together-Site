import Link from "next/link";
import { ConversionCta } from "@/components/conversion-cta";
import { primaryCta, serviceFaqs, serviceItems, serviceProcess } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <section className="section-space pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="section-intro">
            <div className="eyebrow">Services</div>
            <h1 className="display mt-4">
              Remote-work travel planning you can actually act on.
            </h1>
            <p className="lead mt-6">
              Choose the right destination, shape the trip properly, and book with more
              confidence. Each service is designed to solve a specific planning problem,
              not just describe the idea of traveling better.
            </p>
          </div>
          <div className="summary-panel panel-pad">
            <div className="eyebrow">Who this is for</div>
            <p className="section-copy mt-5 text-base leading-8 text-[var(--muted)]">
              Best for remote workers, couples, and longer-stay travelers who want a
              destination or route that supports both productivity and daily life.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Reply within 48 hours",
                "Clear scope before any work starts",
                "Starting-from pricing shown upfront",
                "Advisory support built around real workweeks",
              ].map((item) => (
                <div key={item} className="icon-row content-card card-pad">
                  <span className="icon-badge">+</span>
                  <span className="text-sm font-medium text-[var(--text)]">{item}</span>
                </div>
              ))}
            </div>
            <ConversionCta className="mt-8" />
          </div>
        </div>
      </section>

      <section className="section-space section-block section-alt">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">Services</div>
            <h2 className="section-title mt-4">Choose the level of planning support you need.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {serviceItems.map((service, index) => (
              <article key={service.title} className="content-card panel-pad">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                      Package {index + 1}
                    </div>
                    <h3 className="card-title">
                      {service.title}
                    </h3>
                  </div>
                  <div className="rounded-full bg-[#26433f] px-4 py-3 text-sm font-semibold text-white">
                    {service.price}
                  </div>
                </div>

                <p className="section-copy body-sm mt-5">{service.body}</p>

                <div className="comparison-block mt-8 md:grid-cols-2 md:grid">
                  <div className="comparison-item">
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                      Who It Is For
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {service.forWho}
                    </p>
                  </div>
                  <div className="comparison-item">
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                      Turnaround Time
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-7 text-[var(--text)]">
                      {service.turnaround}
                    </p>
                  </div>
                </div>

                <div className="comparison-item mt-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                    What Is Included
                  </div>
                  <div className="bullet-list mt-4">
                    {service.includes.map((item) => (
                      <div key={item} className="bullet-row text-sm">
                        <span className="bullet-dot" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="comparison-item mt-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                    What You Receive
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.deliverable}</p>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
                    Best when you want a sharper decision before booking or changing
                    plans.
                  </p>
                  <Link href={primaryCta.href} className="button-primary">
                    {primaryCta.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">Process</div>
            <h2 className="section-title mt-4">A simple 3-step process from brief to booking.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceProcess.map((step, index) => (
              <article key={step.title} className="content-card panel-pad">
                <div className="icon-row">
                  <span className="icon-badge">{index + 1}</span>
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-deep)]">
                    Step {index + 1}
                  </div>
                </div>
                <h3 className="card-title mt-4">
                  {step.title}
                </h3>
                <p className="body-sm mt-4">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block section-alt">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="section-intro">
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title mt-4">Questions people usually ask before starting.</h2>
          </div>
          <div className="space-y-4">
            {serviceFaqs.map((faq) => (
              <article key={faq.question} className="content-card card-pad">
                <h3 className="card-title">
                  {faq.question}
                </h3>
                <p className="body-sm mt-4">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="summary-panel panel-pad">
            <div className="eyebrow">Next Step</div>
            <h2 className="section-title mt-4">Book a planning call and get the brief moving.</h2>
            <p className="section-copy mt-5 text-base leading-8 text-[var(--muted)]">
              If you already know the question you need answered, the fastest next step
              is to send the trip details through the contact form. We will reply with
              the best-fit service, scope, and next step.
            </p>
            <ConversionCta className="mt-8" />
          </div>
        </div>
      </section>
    </>
  );
}
