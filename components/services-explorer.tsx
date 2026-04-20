"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { ServiceItem, primaryCta, serviceFaqs, serviceItems } from "@/data/site";

const serviceIcons = ["Compass", "Route", "Stay", "Together"];

const serviceMoments: Record<string, string> = {
  "Destination Advisory": "Choose this when the destination decision is still open.",
  "Personalized Remote Plan": "Choose this when the country is roughly right, but the trip still needs structure.",
  "Booking Support": "Choose this when you already know the base and need help pressure-testing the bookings.",
  "Couples Travel Strategy": "Choose this when two schedules and two expectations need one coherent plan.",
};

const serviceProblems: Record<string, string> = {
  "Destination Advisory": "It solves the uncertainty between a few plausible destinations before money is committed.",
  "Personalized Remote Plan": "It solves the problem of having ideas for the trip but no practical sequence, pacing, or base logic.",
  "Booking Support": "It solves the final-mile friction of choosing stays, judging neighborhoods, and avoiding bad-fit bookings.",
  "Couples Travel Strategy": "It solves the tension between two work styles, two energy levels, and one shared destination choice.",
};

const expectItems = [
  {
    title: "Replies within 48 hours",
    body: "The process starts quickly, with a clear reply on scope, next step, and the best-fit service.",
    icon: "48h",
  },
  {
    title: "Thoughtful recommendations",
    body: "Advice is shaped by tradeoffs, not generic lists. The goal is a better decision, not just more options.",
    icon: "Depth",
  },
  {
    title: "Practical-first planning",
    body: "Internet, housing, routing, and daily rhythm are treated as real planning variables from the start.",
    icon: "Fit",
  },
  {
    title: "Built around real workweeks",
    body: "Every recommendation is designed around calls, deadlines, shared routines, and how the stay actually performs.",
    icon: "Week",
  },
];

export function ServicesExplorer() {
  const [openService, setOpenService] = useState(serviceItems[0].title);
  const [openFaq, setOpenFaq] = useState(serviceFaqs[0].question);

  return (
    <>
      <section className="section-space services-shortlist-section">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Service shortlist</div>
            <h2 className="section-title mt-4">
              Scan the four offers quickly, then open the one that matches the planning problem.
            </h2>
          </Reveal>

          <div className="services-shortlist-grid mt-10">
            {serviceItems.map((service, index) => {
              const active = openService === service.title;

              return (
                <Reveal key={service.title} as="article" className="service-short-card" delay={90 + index * 70}>
                  <button
                    type="button"
                    onClick={() => setOpenService(service.title)}
                    className={`service-short-card-button ${active ? "service-short-card-button-active" : ""}`}
                    aria-expanded={active}
                  >
                    <div className="service-short-top">
                      <span className="service-short-icon">{serviceIcons[index]}</span>
                      <span className="service-short-price">{service.price}</span>
                    </div>
                    <h3 className="service-short-title">{service.title}</h3>
                    <p className="service-short-body">{service.body}</p>
                    <div className="service-short-footer">
                      <span>Open service details</span>
                      <span className={`service-short-arrow ${active ? "service-short-arrow-open" : ""}`}>
                        ↓
                      </span>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <div className="services-detail-stack mt-8">
            {serviceItems.map((service, index) => {
              const active = openService === service.title;

              return (
                <Reveal key={service.title} as="article" className="service-detail-panel" delay={120 + index * 40}>
                  <button
                    type="button"
                    onClick={() => setOpenService(active ? "" : service.title)}
                    className="service-detail-trigger"
                    aria-expanded={active}
                  >
                    <div>
                      <div className="eyebrow">Service details</div>
                      <h3 className="service-detail-title">{service.title}</h3>
                    </div>
                    <span className={`service-detail-toggle ${active ? "service-detail-toggle-open" : ""}`}>
                      +
                    </span>
                  </button>

                  <div className={`service-detail-content ${active ? "service-detail-content-open" : ""}`}>
                    <div className="service-detail-inner">
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
                        <Link href={`${primaryCta.href}?service=${encodeURIComponent(service.title)}`} className="button-primary">
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
              The service is built to feel thoughtful, practical, and easy to act on.
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
