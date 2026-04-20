import Link from "next/link";
import { DestinationBrowser } from "@/components/destination-browser";
import { browseDestinations, continents } from "@/data/site";

export default function DestinationsPage() {
  return (
    <>
      <section className="section-space pt-8">
        <div className="container section-intro">
          <div className="eyebrow">Destinations</div>
          <h1 className="section-title mt-4 max-w-3xl">
            Browse by continent, then narrow down by country.
          </h1>
          <p className="lead mt-5 max-w-3xl">
            A continent-first browse experience inspired by the structure of major
            destination platforms, but tailored to remote-work travel and long-stay
            decision making.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
            Published guides are shown first by default. Turn on upcoming destinations
            only when you want to browse the research pipeline as well.
          </p>
        </div>
      </section>

      <section className="section-space section-block pt-10">
        <div className="container max-w-6xl">
          <DestinationBrowser items={browseDestinations} showContinentFilter />
        </div>
      </section>

      <section className="section-space section-block pt-10">
        <div className="container max-w-6xl space-y-6">
          {continents.map((continent) => (
            <article
              key={continent.slug}
              className="mx-auto max-w-[760px] content-card card-pad"
            >
              <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:text-left">
                <div className="relative h-[120px] w-[180px] shrink-0 overflow-hidden rounded-[1.4rem] md:h-[140px] md:w-[210px]">
                  <img
                    src={continent.image}
                    alt={continent.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <h2 className="card-title">
                      {continent.name}
                    </h2>
                    <p className="body-md mt-3">
                      {continent.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                        {continent.kicker}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-[var(--text)]">
                        {
                          browseDestinations.filter(
                            (item) => item.continentSlug === continent.slug && item.status === "published",
                          ).length
                        }{" "}
                        published guides
                      </div>
                    </div>
                    <Link
                      href={`/destinations/continents/${continent.slug}`}
                      className="button-primary"
                    >
                      Explore {continent.name}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
