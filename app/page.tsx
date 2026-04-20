import Link from "next/link";
import { guideTopics, principles, serviceItems, stats } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="section-space pb-10 pt-10">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="eyebrow">Remote Together</div>
            <h1 className="display mt-5">
              Remote-work travel advice from a couple actually living it.
            </h1>
            <p className="lead mx-auto mt-7 max-w-2xl">
              We share destination guides, practical advice, and honest recommendations
              for people who want to work while exploring the world without sacrificing
              routine, focus, or quality of life.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/destinations" className="button-primary">
                Explore Destinations
              </Link>
              <Link href="/services" className="button-secondary">
                See Services
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[1.75rem] border border-[rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.46)] p-4 text-left shadow-[0_18px_40px_rgba(31,28,24,0.08)]"
              >
                <div className="rounded-[1.4rem] bg-[#111111] px-5 py-6 text-white">
                  <div className="font-[family-name:var(--font-heading)] text-6xl leading-none tracking-[-0.07em] md:text-7xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-base font-semibold leading-snug md:text-lg">
                    {stat.label}
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
        <div className="container grid gap-6 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <article key={principle.title} className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.34)] p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-deep)]">
                0{index + 1}
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {principle.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="eyebrow">Services</div>
            <h2 className="section-title mt-4 max-w-md">
              Advisory and planning for people who want the trip to actually work.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {serviceItems.slice(0, 4).map((service) => (
              <article key={service.title} className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.3)] p-7">
                <h3 className="font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
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
              <article key={topic.title} className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.3)] p-8">
                <div className="eyebrow">Guide</div>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-3xl leading-tight tracking-[-0.05em]">
                  {topic.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{topic.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
