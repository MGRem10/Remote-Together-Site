import { advisoryCountries, destinationFilters } from "@/data/site";

export default function DestinationsPage() {
  return (
    <>
      <section className="section-space pt-8">
        <div className="container">
          <div className="eyebrow">Destinations</div>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="max-w-xl">
              <h1 className="display">A short list of places we would actually recommend.</h1>
              <p className="lead mt-6">
                Built to scan like a travel-search result, but filtered through lived
                experience: where we would base ourselves, for how long, and for what
                kind of working life.
              </p>
            </div>
            <div className="section-panel rounded-[2rem] p-6 md:p-7">
              <div className="rounded-[1.4rem] border border-[var(--border)] bg-[rgba(255,255,255,0.72)] p-4">
                <div className="grid gap-3 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
                  <div className="rounded-[1rem] border border-[var(--border)] bg-[var(--background-soft)] px-4 py-3 text-sm text-[var(--text)]">
                    Search destination or region
                  </div>
                  <div className="rounded-[1rem] border border-[var(--border)] bg-[var(--background-soft)] px-4 py-3 text-sm text-[var(--text)]">
                    Any season
                  </div>
                  <div className="rounded-[1rem] bg-[#26433f] px-4 py-3 text-center text-sm font-medium text-white">
                    Scan guides
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {destinationFilters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.46)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="section-panel overflow-hidden rounded-[2rem]">
            <div className="hidden border-b border-[var(--border)] px-6 py-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)] lg:block">
              <div className="result-row">
                <div>Destination</div>
                <div>Why We Recommend It</div>
                <div>Wi-Fi</div>
                <div>Cost</div>
                <div>Stay</div>
                <div>Score</div>
              </div>
            </div>
            <div className="divide-y divide-[var(--border)]">
              {advisoryCountries.map((country) => (
                <article key={country.country} className="px-6 py-6 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.32)]">
                  <div className="result-row">
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-24 overflow-hidden rounded-[1rem] border border-[var(--border)]">
                        <img
                          src={country.image}
                          alt={country.country}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                          {country.region}
                        </div>
                        <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                          {country.country}
                        </h2>
                        <p className="mt-1 text-sm text-[var(--muted)]">Base yourself in {country.base}</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--text)]">{country.bestFor}</div>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{country.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {country.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[rgba(94,125,117,0.1)] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[var(--accent-deep)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-[var(--muted)]">
                      <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)] lg:hidden">Wi-Fi</div>
                      <div className="mt-1 font-medium text-[var(--text)]">{country.internet}</div>
                    </div>
                    <div className="text-sm text-[var(--muted)]">
                      <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)] lg:hidden">Cost</div>
                      <div className="mt-1 font-medium text-[var(--text)]">{country.cost}</div>
                    </div>
                    <div className="text-sm text-[var(--muted)]">
                      <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)] lg:hidden">Stay</div>
                      <div className="mt-1 font-medium text-[var(--text)]">{country.stay}</div>
                    </div>
                    <div className="flex items-center lg:justify-end">
                      <div className="rounded-full bg-[rgba(38,67,63,0.1)] px-4 py-2 text-sm font-medium text-[var(--accent-deep)]">
                        {country.score}/100
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <div className="eyebrow">How to use this page</div>
            <h2 className="section-title mt-4 max-w-md">
              Compare countries the way you would compare flight options.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Scan quickly",
                body: "Use the score, cost band, and internet rating to eliminate weak fits fast.",
              },
              {
                title: "Read the nuance",
                body: "The summary tells you where a place shines and where it starts asking for compromise.",
              },
              {
                title: "Choose for your season",
                body: "Not every country works for every workload. Match the place to the month and the type of work you have ahead.",
              },
            ].map((item) => (
              <article key={item.title} className="section-panel rounded-[1.7rem] p-7">
                <h3 className="font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="image-frame min-h-[420px] border border-[var(--border)] shadow-[var(--shadow-lg)]">
            <img
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1400&q=80"
              alt="Travel planning landscape"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="section-panel rounded-[2rem] p-8 md:p-10">
            <div className="eyebrow">Selection logic</div>
            <h2 className="section-title mt-4">
              We prioritize living quality over pure novelty.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              That means fewer flashy picks and more destinations that can carry a
              demanding work month. If a place is stunning but awkward to live from,
              we say so plainly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
