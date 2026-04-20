import Link from "next/link";
import { ConversionCta } from "@/components/conversion-cta";
import {
  destinationMethodology,
  guideTopics,
  principles,
  serviceItems,
  stats,
  testimonials,
  trustProofPoints,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="section-space pb-10 pt-10">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <div className="eyebrow">Remote Together</div>
            <h1 className="page-title mt-5">
              Remote-work travel guidance for couples and professionals choosing where to live and work next.
            </h1>
            <p className="lead mx-auto mt-7 max-w-2xl">
              We help you avoid beautiful-but-impractical destinations by showing which
              places actually support focus, routine, good housing choices, and a better
              long-stay experience.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[var(--text)]">
              Get clearer destination decisions, fewer booking mistakes, and a plan that
              fits your workload before you commit time and money.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact#contact-form" className="button-primary">
                Book a Planning Call
              </Link>
              <Link href="/destinations" className="button-secondary">
                Browse Published Guides
              </Link>
            </div>
            <ConversionCta
              align="center"
              className="mt-5"
              trustCopy="For remote workers, couples, and longer-stay travelers who need a destination that works in real life, not just on paper."
            />
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              "You are deciding between a few destinations and need a sharper recommendation.",
              "You want to work remotely without sacrificing housing quality, routine, or daily ease.",
              "You want practical planning support before booking a longer stay or shared trip.",
            ].map((item, index) => (
              <article key={item} className="content-card card-pad text-left">
                <div className="icon-row">
                  <span className="icon-badge">{index + 1}</span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                      This is for you if...
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="content-card card-pad text-left"
              >
                <div className="rounded-[1.4rem] bg-[#26433f] px-5 py-5 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-[family-name:var(--font-heading)] leading-none tracking-[-0.06em]">
                    <span className="text-6xl md:text-7xl">{stat.value}</span>
                    <span className="text-2xl md:text-3xl">{stat.label}</span>
                  </div>
                </div>
                <p className="mt-5 px-1 text-lg font-semibold leading-8 text-[var(--text)] md:text-xl">
                  {stat.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="eyebrow">Why this exists</div>
            <h2 className="section-title mt-4 max-w-md">
              Choose places that work for both your job and your life.
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-lg leading-9 text-[var(--muted)]">
              Not every beautiful destination is good for remote work. We focus on the
              lived details that matter once the first impression fades: internet,
              housing, daily rhythm, walkability, cost, and whether a place still feels
              generous after a full week of calls and deadlines.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">Trust Signals</div>
            <h2 className="section-title mt-4">
              Why people use this advice instead of generic destination lists.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {trustProofPoints.map((point) => (
              <article key={point.title} className="content-card p-8">
                <h3 className="font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block section-alt">
        <div className="container grid gap-6 lg:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.title} className="content-card card-pad">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-deep)]">
                Editorial principle
              </div>
              <h3 className="card-title mt-4">
                {principle.title}
              </h3>
              <p className="body-sm mt-4">
                {principle.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">Methodology</div>
            <h2 className="section-title mt-4">How we rate destinations.</h2>
          </div>
          <div className="grid gap-4">
            {destinationMethodology.slice(0, 4).map((item) => (
              <div key={item} className="comparison-item">
                <p className="text-sm leading-7 text-[var(--muted)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="section-intro">
            <div className="eyebrow">Services</div>
            <h2 className="section-title mt-4 max-w-md">
              Advisory and planning for people who want the trip to actually work.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {serviceItems.slice(0, 4).map((service) => (
              <article key={service.title} className="content-card card-pad">
                <h3 className="card-title">
                  {service.title}
                </h3>
                <p className="body-sm mt-4">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block section-alt">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Guides</div>
              <h2 className="section-title mt-4 max-w-2xl">
                Advice for choosing well, not just going somewhere.
              </h2>
            </div>
            <Link href="/remote-work-travel" className="button-secondary hidden md:inline-flex">
              Read all guides
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {guideTopics.map((topic) => (
              <article key={topic.title} className="content-card card-pad">
                <h3 className="card-title">
                  {topic.title}
                </h3>
                <p className="body-sm mt-4">{topic.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">Testimonials</div>
            <h2 className="section-title mt-4">What this kind of guidance should feel like.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.quote} className="content-card card-pad">
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
