import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import {
  featuredDestinations,
  guideTopics,
  principles,
  stats,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Remote Together"
        title="Remote-work travel advice from a couple actually living it."
        description="We share destination guides, practical tips, and honest recommendations for people who want to work while exploring the world."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
        primaryCta={{ href: "/destinations", label: "Explore Destinations" }}
        secondaryCta={{ href: "/remote-work-travel", label: "Read the Guides" }}
      />

      <section className="section-space">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="pt-2">
            <div className="eyebrow">Why this exists</div>
            <h2 className="section-title mt-4">
              Choose places that work for both your job and your life.
            </h2>
            <p className="lead mt-5 max-w-md">
              We keep the site focused on what makes a place genuinely livable for
              remote work, not just attractive for a short stay.
            </p>
          </div>
          <div className="card rounded-[2rem] p-8 md:p-10">
            <p className="text-lg leading-8 text-[var(--muted)]">
              Not every beautiful destination is good for remote work. We focus on
              the lived details that matter once the honeymoon phase ends: internet,
              noise, routine, housing, cost, and whether a place still feels generous
              after a full week of calls and deadlines.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-[var(--border)] pt-5">
                  <div className="font-[family-name:var(--font-heading)] text-4xl tracking-[-0.06em]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Featured Destinations</div>
              <h2 className="section-title mt-4">Places we would return to for longer stays.</h2>
            </div>
            <Link href="/destinations" className="button-secondary hidden md:inline-flex">
              See all destinations
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredDestinations.map((destination) => (
              <article key={destination.name} className="card overflow-hidden rounded-[1.8rem]">
                <div className="relative h-80">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(19,12,8,0.72)] to-transparent" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/72">
                      {destination.country}
                    </div>
                    <h3 className="mt-2 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                      {destination.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                    {destination.country}
                  </div>
                  <p className="text-sm leading-7 text-[var(--muted)]">{destination.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[destination.season, destination.wifi, destination.vibe].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="card rounded-[2rem] p-8 md:p-10">
            <div className="eyebrow">Our Lens</div>
            <div className="mt-6 space-y-8">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="image-frame min-h-[520px] border border-[var(--border)] shadow-[var(--shadow)]">
            <img
              src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1400&q=80"
              alt="Travel journal scene"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 z-10 max-w-md p-8 text-white">
              <div className="text-xs uppercase tracking-[0.22em] text-white/70">
                How we travel
              </div>
              <p className="mt-3 text-base leading-7 text-white/88">
                We look for places where work can stay steady and daily life still
                feels textured, calm, and worth returning to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container grid gap-6 lg:grid-cols-3">
          {guideTopics.map((topic) => (
            <article key={topic.title} className="rounded-[1.8rem] border border-[var(--border)] bg-[rgba(255,251,247,0.66)] p-8">
              <div className="eyebrow">Guide</div>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-3xl leading-tight tracking-[-0.05em]">
                {topic.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{topic.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
