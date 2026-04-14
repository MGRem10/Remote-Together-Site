import Link from "next/link";
import {
  advisoryCountries,
  guideTopics,
  highlightNotes,
  principles,
  stats,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="section-space pb-8 pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex max-w-xl flex-col justify-center fade-in-up">
            <div className="eyebrow">Remote Together</div>
            <h1 className="display mt-4">
              Remote-work travel advice from a couple actually living it.
            </h1>
            <p className="lead mt-6 max-w-lg">
              We share destination guides, practical tips, and honest recommendations
              for people who want to work while exploring the world.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/destinations" className="button-primary">
                Explore Destinations
              </Link>
              <Link href="/remote-work-travel" className="button-secondary">
                Read the Guides
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlightNotes.map((note, index) => (
                <div
                  key={note}
                  className={`rounded-[1.25rem] border border-[var(--border)] bg-[rgba(255,255,255,0.48)] p-4 text-sm leading-6 text-[var(--muted)] fade-in-up delay-${index + 1}`}
                >
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.52fr]">
            <div className="image-frame min-h-[320px] border border-[var(--border)] shadow-[var(--shadow-lg)] fade-in-up delay-1 lg:min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
                alt="Remote Together hero destination"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">
                <div className="text-xs uppercase tracking-[0.22em] text-white/70">
                  Editorial destination notes
                </div>
                <p className="mt-3 max-w-md text-base leading-7 text-white/90">
                  Places that are beautiful, yes, but also stable enough for calls,
                  deadlines, routines, and real shared travel.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="section-panel rounded-[1.8rem] p-5 fade-in-up delay-2">
                <div className="eyebrow">What we measure</div>
                <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                  <p>Internet quality</p>
                  <p>Housing comfort</p>
                  <p>Noise and rhythm</p>
                  <p>Daily-life fit</p>
                </div>
              </div>
              <div className="image-frame min-h-[160px] border border-[var(--border)] shadow-[var(--shadow)] fade-in-up delay-3 lg:min-h-[180px]">
                <img
                  src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1000&q=80"
                  alt="Travel notebook"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <div className="eyebrow">Why this exists</div>
            <h2 className="section-title mt-4 max-w-md">
              Choose places that work for both your job and your life.
            </h2>
            <p className="lead mt-5 max-w-md">
              We keep the site focused on what makes a place genuinely livable for
              remote work, not just attractive for a short stay.
            </p>
          </div>
          <div className="section-panel rounded-[2rem] p-8 md:p-10">
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

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">How we evaluate</div>
            <h2 className="section-title mt-4 max-w-md">
              Clear criteria, so every recommendation feels usable.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article key={principle.title} className="section-panel rounded-[1.7rem] p-7">
                <div className="font-[family-name:var(--font-heading)] text-5xl leading-none text-[var(--accent-deep)]">
                  0{index + 1}
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="image-frame min-h-[300px] border border-[var(--border)] shadow-[var(--shadow-lg)] lg:min-h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80"
              alt="Remote work setup while traveling"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 z-10 max-w-md p-8 text-white">
              <div className="text-xs uppercase tracking-[0.22em] text-white/72">
                From the road
              </div>
              <p className="mt-3 text-base leading-7 text-white/90">
                The best destination is not the one with the loudest promise. It is
                the one that still feels right on an ordinary Wednesday.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div className="section-panel rounded-[2rem] p-8 md:p-10">
              <div className="eyebrow">Popular right now</div>
              <h2 className="section-title mt-4">
                A sharper destination shortlist, not an endless feed.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                We use the same lens across every recommendation, then keep the list
                concise enough to stay useful. Better sorting, fewer filler picks.
              </p>
            </div>
            <div className="grid gap-4">
              {advisoryCountries.slice(0, 3).map((country) => (
                <div key={country.country} className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.52)] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="eyebrow">{country.region}</div>
                      <h3 className="mt-2 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                        {country.country}
                      </h3>
                    </div>
                    <div className="rounded-full bg-[rgba(63,93,86,0.12)] px-4 py-2 text-sm font-medium text-[var(--accent-deep)]">
                      Score {country.score}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{country.bestFor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Guides</div>
              <h2 className="section-title mt-4">
                Advice for choosing well, not just going somewhere.
              </h2>
            </div>
            <Link href="/remote-work-travel" className="button-secondary hidden md:inline-flex">
              Explore travel guides
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {guideTopics.map((topic) => (
              <article key={topic.title} className="section-panel rounded-[1.8rem] p-8">
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
