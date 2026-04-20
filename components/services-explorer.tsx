"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { primaryCta, serviceFaqs, serviceItems, serviceProcess } from "@/data/site";

const serviceIcons = ["Compass", "Route", "Stay", "Together"];

const serviceMoments: Record<string, string> = {
  "Destination Advisory": "Choose this when the destination decision is still open and you want a sharper call before booking anything.",
  "Personalised Remote Plan": "Choose this when the destination is roughly right but the route, pacing, and stay structure still need to be built.",
  "Booking Support": "Choose this when the destination is decided and you want help pressure-testing apartments, neighborhoods, and arrival flow.",
  "Couple travel strategy": "Choose this when two work rhythms and two expectations need one shared travel plan that still feels enjoyable.",
};

const serviceProblems: Record<string, string> = {
  "Destination Advisory": "It solves the uncertainty between a few plausible destinations before time and money are committed.",
  "Personalised Remote Plan": "It solves the problem of having a trip idea but no practical route, pace, or base logic behind it.",
  "Booking Support": "It solves the final-mile friction of choosing stays, judging tradeoffs, and avoiding bad-fit bookings.",
  "Couple travel strategy": "It solves the tension between two work styles, two energy levels, and one shared destination decision.",
};

const expectItems = [
  {
    title: "Replies within 48 hours",
    body: "The process starts quickly, with a clear reply on likely scope, next step, and the best-fit service.",
    icon: "48h",
  },
  {
    title: "Thoughtful recommendations",
    body: "Advice is shaped by tradeoffs, not generic lists. The goal is a better decision, not just more options.",
    icon: "Depth",
  },
  {
    title: "Practical-first advice",
    body: "Internet, housing, routing, and daily rhythm are treated as real planning variables from the start.",
    icon: "Fit",
  },
  {
    title: "Built around real workweeks",
    body: "Recommendations are designed around calls, deadlines, shared routines, and how the stay actually performs.",
    icon: "Week",
  },
];

const exampleSupportItems = [
  {
    title: "Sharper destination shortlists",
    body: "Clear recommendations on which country, city, or base fits your workload, budget, and timing best.",
  },
  {
    title: "Apartment and neighborhood pressure tests",
    body: "Feedback on whether a shortlist of stays actually supports focus, calls, comfort, and daily ease.",
  },
  {
    title: "Trip structure that feels workable",
    body: "Support on pacing, transition days, and route logic so the trip works operationally, not just emotionally.",
  },
];

export function ServicesExplorer() {
  const [openService, setOpenService] = useState<string | null>(serviceItems[0].title);
  const [openFaq, setOpenFaq] = useState(serviceFaqs[0].question);

  return (
    <>
      <section className="section-space services-shortlist-section" id="service-shortlist">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Service shortlist</div>
            <h2 className="section-title mt-4">
              Open the service that best matches the planning problem you need solved.
            </h2>
          </Reveal>

          <div className="services-accordion-stack mt-10">
            {serviceItems.map((service, index) => {
              const active = openService === service.title;

              return (
                <Reveal key={service.title} as="article" className="service-accordion-item" delay={80 + index * 60}>
                  <button
                    type="button"
                    className={`service-accordion-trigger ${active ? "service-accordion-trigger-active" : ""}`}
                    onClick={() => setOpenService(active ? null : service.title)}
                    aria-expanded={active}
                  >
                    <div className="service-accordion-trigger-main">
                      <span className="service-accordion-icon">{serviceIcons[index]}</span>
                      <div className="service-accordion-copy">
                        <h3 className="service-accordion-title">{service.title}</h3>
                        <p className="service-accordion-summary">{service.body}</p>
                      </div>
                    </div>
                    <div className="service-accordion-trigger-side">
                      <span className="service-accordion-price">{service.price}</span>
                      <span className={`service-accordion-toggle ${active ? "service-accordion-toggle-open" : ""}`}>
                        +
                      </span>
                    </div>
                  </button>

                  <div className={`service-accordion-panel ${active ? "service-accordion-panel-open" : ""}`}>
                    <div className="service-accordion-panel-inner">
                      <div className="service-detail-grid">
                        <InfoCard label="Who it is for" body={service.forWho} />
                        <InfoCard label="What problem it solves" body={serviceProblems[service.title]} />
                        <InfoCard label="What you receive" body={service.deliverable} />
                        <InfoCard label="When to choose this" body={serviceMoments[service.title]} />
                      </div>

                      <div className="service-includes-panel">
                        <div className="eyebrow">What is included</div>
                        <div className="bullet-list mt-4">
                          {service.includes.map((item) => (
                            <div key={item} className="bullet-row text-sm">
                              <span className="bullet-dot" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="service-detail-actions">
                        <div className="service-detail-meta">
                          <span>{service.turnaround}</span>
                          <span>{service.price}</span>
                        </div>
                        <Link
                          href={`${primaryCta.href}?service=${encodeURIComponent(service.title)}`}
                          className="button-primary"
                        >
                          Enquire about this service
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space services-expect-section">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">What to expect</div>
            <h2 className="section-title mt-4">
              A trust-building layer designed to make the service feel clear, thoughtful, and usable.
            </h2>
          </Reveal>

          <div className="services-expect-grid mt-10">
            {expectItems.map((item, index) => (
              <Reveal key={item.title} as="article" className="services-expect-card" delay={90 + index * 70}>
                <div className="services-expect-icon">{item.icon}</div>
                <h3 className="card-title mt-5">{item.title}</h3>
                <p className="body-sm mt-4">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space services-example-section">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Example support</div>
            <h2 className="section-title mt-4">
              What the work actually looks like once the brief becomes specific.
            </h2>
          </Reveal>

          <div className="services-example-grid mt-10">
            {exampleSupportItems.map((item, index) => (
              <Reveal key={item.title} as="article" className="services-example-card" delay={90 + index * 70}>
                <h3 className="card-title">{item.title}</h3>
                <p className="body-sm mt-4">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space services-process-band">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Process</div>
            <h2 className="section-title mt-4">
              A simple service journey from brief to confident booking.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {serviceProcess.map((step, index) => (
              <Reveal key={step.title} as="article" className="services-process-card" delay={90 + index * 70}>
                <div className="services-process-step">Step {index + 1}</div>
                <h3 className="card-title mt-5">{step.title}</h3>
                <p className="body-sm mt-4">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space services-faq-section">
        <div className="container grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="section-intro max-w-xl" delay={20}>
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title mt-4">
              Questions people usually ask before they start.
            </h2>
          </Reveal>

          <div className="services-faq-stack">
            {serviceFaqs.map((faq, index) => {
              const active = openFaq === faq.question;

              return (
                <Reveal key={faq.question} as="article" className="services-faq-item" delay={90 + index * 60}>
                  <button
                    type="button"
                    className="services-faq-trigger"
                    onClick={() => setOpenFaq(active ? "" : faq.question)}
                    aria-expanded={active}
                  >
                    <span className="services-faq-question">{faq.question}</span>
                    <span className={`services-faq-toggle ${active ? "services-faq-toggle-open" : ""}`}>+</span>
                  </button>
                  <div className={`services-faq-answer ${active ? "services-faq-answer-open" : ""}`}>
                    <p>{faq.answer}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ label, body }: { label: string; body: string }) {
  return (
    <article className="service-info-card">
      <div className="eyebrow">{label}</div>
      <p className="body-sm mt-4">{body}</p>
    </article>
  );
}
