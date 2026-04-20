import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import {
  destinationMethodology,
  featuredDestinations,
  guideTopics,
  principles,
  primaryCta,
  secondaryCta,
  serviceItems,
  testimonials,
  trustProofPoints,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Remote-Work Travel Guidance",
  description:
    "Remote-work travel guidance for couples and professionals choosing destinations that support focus, routine, and a better long-stay experience.",
  openGraph: {
    title: "Remote-Work Travel Guidance",
    description:
      "Choose better long-stay destinations, avoid booking mistakes, and get practical planning support for remote-work travel.",
  },
};

const audienceCards = [
  {
    badge: "01",
    eyebrow: "Decision clarity",
    title: "You are comparing a few places and want a sharper call.",
    body: "Use a recommendation that weighs internet, housing, pace, and day-to-day practicality before the booking window closes.",
  },
  {
    badge: "02",
    eyebrow: "Work-friendly living",
    title: "You want the trip to support focus, not constantly interrupt it.",
    body: "Plan around neighborhoods, routines, and housing setups that still feel good once the novelty wears off and deadlines start.",
  },
  {
    badge: "03",
    eyebrow: "Longer stays",
    title: "You want practical support before committing time and money.",
    body: "Pressure-test the destination choice early so a month-long stay feels intentional instead of experimental.",
  },
];

const trustAccents = ["Field-tested", "Dual lens", "Workability", "Tradeoffs"];
const methodologyIcons = ["Wi-Fi", "Home", "Walk", "Cost"];
const serviceAccents = ["Atlas", "Route", "Stay", "Review"];
const guideMetadata = ["4 min read", "5 min read", "6 min read"];
const testimonialLabels = [
  "Remote-working couple",
  "Solo remote worker",
  "Long-stay traveller",
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero section-space pt-8 md:pt-12">
        <div className="container">
          <div className="hero-shell">
            <Reveal className="hero-copy" delay={40}>
              <div className="eyebrow">Remote Together</div>
              <h1 className="page-title mt-5">
                Remote-work travel guidance for couples and professionals choosing
                where to live and work next.
              </h1>
              <p className="lead mt-6 max-w-2xl">
                We help you avoid beautiful-but-impractical destinations by showing
                which places actually support focus, routine, good housing choices,
                and a better long-stay experience.
              </p>
              <p className="hero-subline mt-5 max-w-2xl">
                Get clearer destination decisions, fewer booking mistakes, and a plan
                that fits your workload before you commit time and money.
              </p>
              <div className="hero-cta-row mt-8">
                <Link href={primaryCta.href} className="button-primary">
                  {primaryCta.label}
                </Link>
                <Link href={secondaryCta.href} className="button-secondary">
                  {secondaryCta.label}
                </Link>
              </div>
              <div className="hero-trust mt-7">
                <div className="trust-pill">Reply within 48 hours</div>
                <p className="body-sm max-w-xl text-[var(--muted-strong)]">
                  Best for remote workers, couples, and longer-stay travelers who want
                  a destination that performs well after the first week, not just on
                  arrival day.
                </p>
              </div>
            </Reveal>

            <Reveal className="hero-visual" delay={140}>
              <div className="hero-orb hero-orb-one" />
              <div className="hero-orb hero-orb-two" />
              <div className="hero-scorecard summary-panel panel-pad">
                <div className="hero-scorecard-top">
                  <div>
                    <div className="eyebrow">Published destination snapshots</div>
                    <h2 className="hero-visual-title">A better shortlist, before you book.</h2>
                  </div>
                  <div className="hero-score-pill">Live framework</div>
                </div>

                <div className="hero-visual-grid">
                  {featuredDestinations.map((destination, index) => (
                    <article
                      key={destination.name}
                      className={`hero-destination-card hero-destination-card-${index + 1}`}
                    >
                      <div
                        className="hero-destination-image"
                        style={{ backgroundImage: `url(${destination.image})` }}
                      />
                      <div className="hero-destination-copy">
                        <div className="hero-destination-meta">
                          <span>{destination.country}</span>
                          <span>{destination.wifi}</span>
                        </div>
                        <h3>{destination.name}</h3>
                        <p>{destination.summary}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="hero-metrics">
                  <div className="hero-metric">
                    <span className="hero-metric-label">What we rate</span>
                    <strong>Internet, housing, rhythm</strong>
                  </div>
                  <div className="hero-metric">
                    <span className="hero-metric-label">Best for</span>
                    <strong>Workable longer stays</strong>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space home-audience">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">This is for you if...</div>
            <h2 className="section-title mt-4">
              You want practical clarity before your destination becomes an expensive
              guess.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {audienceCards.map((card, index) => (
              <Reveal key={card.title} as="article" className="audience-card" delay={120 + index * 90}>
                <div className="audience-card-top">
                  <span className="audience-badge">{card.badge}</span>
                  <span className="audience-eyebrow">{card.eyebrow}</span>
                </div>
                <h3 className="audience-title">{card.title}</h3>
                <p className="body-sm mt-4">{card.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space home-editorial-band">
        <div className="container">
          <Reveal className="editorial-frame" delay={30}>
            <div className="editorial-quote-mark">“</div>
            <div className="editorial-content">
              <div className="eyebrow">Why this exists</div>
              <h2 className="section-title mt-4 max-w-2xl">
                Choose places that work for both your job and your life.
              </h2>
              <p className="editorial-body mt-6 max-w-3xl">
                Not every beautiful destination is good for remote work. We focus on
                the lived details that matter once the first impression fades:
                internet, housing, daily rhythm, walkability, cost, and whether a
                place still feels generous after a full week of calls and deadlines.
              </p>
            </div>
            <div className="editorial-callout">
              <span className="editorial-callout-label">The working principle</span>
              <p>
                A destination should earn its beauty by remaining workable on Tuesday,
                not just dazzling on arrival.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space home-trust">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Trust Signals</div>
            <h2 className="section-title mt-4">
              Why people use this advice instead of generic destination lists.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustProofPoints.map((point, index) => (
              <Reveal key={point.title} as="article" className="trust-card" delay={100 + index * 80}>
                <div className="trust-card-icon">{trustAccents[index] ?? "Proof"}</div>
                <h3 className="trust-card-title">{point.title}</h3>
                <p className="body-sm mt-3">{point.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space home-principles-band">
        <div className="container">
          <Reveal className="principles-shell" delay={30}>
            <div className="principles-intro">
              <div className="eyebrow text-[rgba(239,231,218,0.72)]">Editorial principle</div>
              <h2 className="section-title mt-4 max-w-xl text-[var(--paper)]">
                A travel brand philosophy shaped around real work, real tradeoffs, and
                real shared decisions.
              </h2>
            </div>

            <div className="principles-grid">
              {principles.map((principle, index) => (
                <Reveal
                  key={principle.title}
                  as="article"
                  className="principle-card"
                  delay={110 + index * 90}
                >
                  <div className="principle-line" />
                  <h3 className="principle-card-title">{principle.title}</h3>
                  <p className="principle-card-body">{principle.body}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space home-methodology">
        <div className="container">
          <Reveal className="methodology-shell" delay={30}>
            <div className="methodology-intro">
              <div className="eyebrow">Methodology</div>
              <h2 className="section-title mt-4">How we rate destinations.</h2>
              <p className="body-md mt-5 max-w-xl">
                This is the destination assessment framework behind the guides: a
                practical scorecard designed for longer stays, work reliability, and
                realistic daily life.
              </p>
            </div>

            <div className="methodology-scorecard">
              {destinationMethodology.slice(0, 4).map((item, index) => (
                <Reveal
                  key={item}
                  as="article"
                  className="methodology-card"
                  delay={120 + index * 90}
                >
                  <div className="methodology-icon">{methodologyIcons[index]}</div>
                  <div>
                    <div className="methodology-label">Criteria {index + 1}</div>
                    <p className="methodology-copy">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space home-services">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Services</div>
            <h2 className="section-title mt-4">
              Advisory and planning for people who want the trip to actually work.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceItems.slice(0, 4).map((service, index) => (
              <Reveal key={service.title} as="article" className="service-preview-card" delay={110 + index * 80}>
                <div className="service-preview-top">
                  <span className="service-icon">{serviceAccents[index]}</span>
                  <span className="service-price">{service.price}</span>
                </div>
                <h3 className="card-title mt-5">{service.title}</h3>
                <p className="body-sm mt-4">{service.body}</p>
                <div className="service-card-footer">
                  <span>{service.turnaround}</span>
                  <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-[var(--base-deep)]">
                    Learn more
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space home-guides">
        <div className="container">
          <Reveal className="guides-head" delay={20}>
            <div>
              <div className="eyebrow">Guides</div>
              <h2 className="section-title mt-4 max-w-2xl">
                Advice for choosing well, not just going somewhere.
              </h2>
            </div>
            <Link href="/remote-work-guides" className="button-secondary">
              Read all guides
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {guideTopics.map((topic, index) => (
              <Reveal key={topic.title} as="article" className="guide-preview-card" delay={110 + index * 90}>
                <div className="guide-card-top">
                  <span className="guide-pill">
                    {index === 0 ? "Planning framework" : index === 1 ? "Couples" : "Methodology"}
                  </span>
                  <span className="guide-meta">{guideMetadata[index]}</span>
                </div>
                <h3 className="guide-card-title">{topic.title}</h3>
                <p className="body-sm mt-4">{topic.body}</p>
                <Link href="/remote-work-guides" className="guide-link">
                  Read the guide preview
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space home-testimonials">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Testimonials</div>
            <h2 className="section-title mt-4">
              What this kind of guidance should feel like.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.quote} as="article" className="testimonial-card" delay={120 + index * 90}>
                <div className="testimonial-quote-mark">“”</div>
                <p className="testimonial-copy">{testimonial.quote}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-name">{testimonial.name === "Placeholder Client" ? testimonialLabels[index] : testimonial.name}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
