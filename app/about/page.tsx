import type { Metadata } from "next";
import {
  aboutStats,
  authorProfile,
  destinationMethodology,
  testimonials,
  trustProofPoints,
} from "@/data/site";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn who is behind Remote Together, how the destinations are evaluated, and why the site focuses on workability, routine, and long-stay quality of life.",
  openGraph: {
    title: "About Remote Together",
    description:
      "Meet the team behind Remote Together and see how the destination evaluation process works.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A travel brand shaped by two people actually doing the work."
        description="Remote Together is built by a couple who have spent years working while moving across countries and cities, tracking what genuinely supports a productive, enjoyable life abroad."
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-space pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="content-card panel-pad">
            <div className="eyebrow">Who We Are</div>
            <h2 className="card-title mt-4">
              {authorProfile.name}
            </h2>
            <p className="body-md mt-5">
              We are the team behind Remote Together, and the perspective is practical:
              we have spent more than {authorProfile.yearsRemote.toLowerCase()} working
              while traveling, testing how destinations perform once the novelty fades
              and the actual workweek begins.
            </p>
            <p className="body-md mt-5">
              That includes {authorProfile.countries.toLowerCase()} and{" "}
              {authorProfile.cities.toLowerCase()} experienced through real routines,
              shared decision-making, and the kinds of tradeoffs that matter when a trip
              has to support both output and quality of life.
            </p>
          </div>
          <div className="grid gap-6">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="content-card panel-pad"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                  {stat.label}
                </div>
                <div className="card-title mt-4">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">What We Evaluate</div>
            <h2 className="section-title mt-4">
              We rate destinations through lived workability, not just first impressions.
            </h2>
          </div>
          <div className="grid gap-4">
            {destinationMethodology.map((item) => (
              <div key={item} className="comparison-item">
                <p className="body-md">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">Why Trust Us</div>
            <h2 className="section-title mt-4">What makes the perspective credible.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {trustProofPoints.map((point) => (
              <article key={point.title} className="content-card panel-pad">
                <h3 className="card-title">
                  {point.title}
                </h3>
                <p className="body-sm mt-4">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">Testimonials</div>
            <h2 className="section-title mt-4">Early client-style feedback and proof placeholders.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.quote} className="content-card panel-pad">
                <p className="body-md">“{testimonial.quote}”</p>
                <div className="mt-6 border-t border-[var(--border)] pt-5">
                  <div className="font-semibold text-[var(--text)]">{testimonial.name}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{testimonial.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
