import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ServicesExplorer } from "@/components/services-explorer";
import { primaryCta } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Destination advisory, personalised remote-work travel plans, booking support, and couple travel strategy for longer, work-friendly stays.",
  openGraph: {
    title: "Remote-Work Travel Planning Services",
    description:
      "Explore destination advisory, planning, booking support, and couple travel strategy services for remote-work travel.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero section-space pt-8 md:pt-12">
        <div className="container">
          <Reveal className="services-hero-copy services-hero-copy-solo" delay={20}>
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
            <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Best for remote workers, couples, and longer-stay travellers who want
              practical support before the booking becomes expensive.
            </p>
          </Reveal>
        </div>
      </section>

      <ServicesExplorer />

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
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
