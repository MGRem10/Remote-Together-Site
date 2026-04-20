import type { Metadata } from "next";
import Link from "next/link";
import { ConversionCta } from "@/components/conversion-cta";
import { NewsletterBlock } from "@/components/newsletter-block";
import { RelatedContent } from "@/components/related-content";
import { Reveal } from "@/components/reveal";
import { ServicesExplorer } from "@/components/services-explorer";
import { primaryCta, secondaryCta, serviceProcess } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Destination advisory, personalized remote-work travel plans, booking support, and couples travel strategy for longer, work-friendly stays.",
  openGraph: {
    title: "Remote-Work Travel Planning Services",
    description:
      "Explore destination advisory, planning, booking support, and couples strategy services for remote-work travel.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero section-space pt-8 md:pt-12">
        <div className="container">
          <div className="services-hero-shell">
            <Reveal className="services-hero-copy" delay={20}>
              <div className="eyebrow">Services</div>
              <h1 className="display mt-4">
                Remote-work travel planning you can actually act on.
              </h1>
              <p className="lead mt-6 max-w-2xl">
                Choose the right destination, shape the trip properly, and book with more
                confidence. Each service is designed to solve a specific planning problem,
                not just describe the idea of traveling better.
              </p>
              <div className="hero-cta-row mt-8">
                <Link href="#service-shortlist" className="button-primary">
                  Explore Services
                </Link>
                <Link href={primaryCta.href} className="button-secondary">
                  {primaryCta.label}
                </Link>
              </div>
            </Reveal>

            <Reveal className="services-hero-panel" delay={120}>
              <div className="services-hero-panel-card">
                <div className="eyebrow text-[rgba(255,250,241,0.66)]">Planning lens</div>
                <h2 className="services-hero-panel-title">
                  A calmer way to move from vague trip idea to clear booking decision.
                </h2>
                <div className="services-hero-panel-grid">
                  {[
                    "Destination fit before money is committed",
                    "Planning built around real workweeks",
                    "Clear scope and starting-from pricing",
                    "Reply within 48 hours",
                  ].map((item) => (
                    <div key={item} className="services-hero-panel-item">
                      {item}
                    </div>
                  ))}
                </div>
                <ConversionCta
                  className="mt-7"
                  trustCopy="Best for remote workers, couples, and longer-stay travelers who want practical support before the booking becomes expensive."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space services-process-band">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">What to expect</div>
            <h2 className="section-title mt-4">
              A clear path from brief to recommendation, without unnecessary complexity.
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

      <div id="service-shortlist">
        <ServicesExplorer />
      </div>

      <section className="section-space services-cta-band">
        <div className="container">
          <Reveal className="services-cta-shell" delay={20}>
            <div className="eyebrow text-[rgba(255,250,241,0.64)]">Next step</div>
            <h2 className="section-title mt-4 max-w-3xl text-[var(--paper)]">
              If the destination decision already feels urgent, move straight into the enquiry.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,250,241,0.76)]">
              Send the trip details through the contact form and we will reply with the
              best-fit service, likely scope, and the fastest next step.
            </p>
            <div className="hero-cta-row mt-8">
              <Link href={primaryCta.href} className="button-primary">
                {primaryCta.label}
              </Link>
              <Link href={secondaryCta.href} className="button-secondary">
                {secondaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedContent
        eyebrow="Keep Exploring"
        title="Use the rest of the site to sharpen the brief."
        items={[
          {
            title: "Browse destinations",
            description:
              "Review published destination guides and see which countries already match your work style, budget, and travel rhythm.",
            href: "/destinations",
            meta: "Destinations",
          },
          {
            title: "Read remote-work guidance",
            description:
              "Use the guide layer to pressure-test apartments, routines, and destination choices before you book.",
            href: "/remote-work-travel",
            meta: "Guides",
          },
          {
            title: "Book a planning call",
            description:
              "If the decision already feels urgent, move straight to a tailored recommendation.",
            href: "/contact#contact-form",
            meta: "Contact",
          },
        ]}
      />

      <NewsletterBlock title="Get destination updates while you narrow the shortlist." />
    </>
  );
}
