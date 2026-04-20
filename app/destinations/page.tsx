import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { DestinationBrowser } from "@/components/destination-browser";
import { browseDestinations, continents } from "@/data/site";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Browse remote-work destination guides by continent, compare published countries, and discover upcoming destinations in the research pipeline.",
  openGraph: {
    title: "Browse Remote-Work Destinations",
    description:
      "Browse remote-work destination guides by continent and compare countries by fit, budget, and workability.",
  },
};

const regionHighlights = [
  {
    title: "Best regions for longer stays",
    body: "Europe and parts of Asia stay strongest when you want routine, logistics, and easier month-long planning.",
  },
  {
    title: "Best for couples",
    body: "Portugal, Spain, Mexico, and the calmer island or city bases tend to handle shared routines best.",
  },
  {
    title: "Best for easier logistics",
    body: "Choose regions with cleaner housing, stronger transport, and more predictable internet when work pressure is high.",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <section className="destinations-hero section-space pt-8 md:pt-12">
        <div className="container">
          <div className="destinations-hero-shell">
            <Reveal className="destinations-hero-copy" delay={20}>
              <div className="eyebrow">Destinations</div>
              <h1 className="page-title mt-5 max-w-4xl">
                Browse by continent, then move into the countries that actually fit the trip.
              </h1>
              <p className="lead mt-6 max-w-2xl">
                A continent-first discovery experience for remote-work travel, built to
                help you compare regions before you narrow down to a country, base, and
                longer-stay plan.
              </p>
              <div className="destinations-hero-metrics mt-8">
                <div className="destinations-hero-stat">
                  <strong>{continents.length}</strong>
                  <span>regions curated</span>
                </div>
                <div className="destinations-hero-stat">
                  <strong>{browseDestinations.filter((item) => item.status === "published").length}</strong>
                  <span>published country guides</span>
                </div>
                <div className="destinations-hero-stat">
                  <strong>{browseDestinations.length}</strong>
                  <span>countries in the browse</span>
                </div>
              </div>
              <div className="hero-cta-row mt-8">
                <Link href="#continents" className="button-primary">
                  Explore Continents
                </Link>
                <Link href="#destination-browser" className="button-secondary">
                  Filter Published Guides
                </Link>
              </div>
            </Reveal>

            <Reveal className="destinations-hero-panel" delay={130}>
              <div className="destinations-hero-panel-glow" />
              <div className="destinations-hero-panel-card">
                <div className="eyebrow text-[rgba(255,250,241,0.64)]">Destination frame</div>
                <h2 className="destinations-hero-panel-title">
                  Start wide, then tighten the shortlist.
                </h2>
                <div className="destinations-badge-strip">
                  {["Long stays", "Couples", "Deep work", "Budget realism"].map((badge) => (
                    <span key={badge} className="destinations-badge">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="destinations-mini-map">
                  {continents.map((continent) => (
                    <div key={continent.slug} className="destinations-mini-map-row">
                      <span>{continent.name}</span>
                      <span>{continent.countries.length} countries</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space destinations-highlight-band">
        <div className="container">
          <div className="grid gap-5 lg:grid-cols-3">
            {regionHighlights.map((item, index) => (
              <Reveal key={item.title} as="article" className="destinations-highlight-card" delay={80 + index * 70}>
                <div className="eyebrow">Browse insight</div>
                <h2 className="card-title mt-4">{item.title}</h2>
                <p className="body-sm mt-4">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="destination-browser" className="section-space destinations-browser-section">
        <div className="container max-w-6xl">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Quick browse</div>
            <h2 className="section-title mt-4">
              Filter the current destination library before you dive into a region.
            </h2>
          </Reveal>

          <div className="mt-10">
            <DestinationBrowser items={browseDestinations} showContinentFilter />
          </div>
        </div>
      </section>

      <section id="continents" className="section-space destinations-continent-section">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Continents</div>
            <h2 className="section-title mt-4">
              Choose a region first, then open a curated country view for that part of the world.
            </h2>
          </Reveal>

          <div className="destinations-continent-grid mt-10">
            {continents.map((continent, index) => {
              const publishedCount = browseDestinations.filter(
                (item) => item.continentSlug === continent.slug && item.status === "published",
              ).length;

              return (
                <Reveal
                  key={continent.slug}
                  as="article"
                  className={`continent-spotlight-card ${index % 3 === 0 ? "continent-spotlight-card-wide" : ""}`}
                  delay={90 + index * 70}
                >
                  <Link href={`/destinations/continents/${continent.slug}`} className="continent-spotlight-link">
                    <div className="continent-spotlight-image-shell">
                      <div
                        className="continent-spotlight-image"
                        style={{ backgroundImage: `url(${continent.image})` }}
                      />
                      <div className="continent-spotlight-overlay" />
                      <div className="continent-spotlight-top">
                        <span className="continent-spotlight-kicker">{continent.kicker}</span>
                        <span className="continent-spotlight-count">{continent.countries.length} countries</span>
                      </div>
                      <div className="continent-spotlight-bottom">
                        <h3 className="continent-spotlight-title">{continent.name}</h3>
                        <p className="continent-spotlight-accent">{continent.accent}</p>
                      </div>
                    </div>
                    <div className="continent-spotlight-body">
                      <p className="continent-spotlight-copy">{continent.description}</p>
                      <div className="continent-spotlight-footer">
                        <div className="continent-spotlight-tags">
                          {continent.highlights.map((highlight) => (
                            <span key={highlight} className="continent-spotlight-tag">
                              {highlight}
                            </span>
                          ))}
                        </div>
                        <div className="continent-spotlight-meta">
                          <span>{publishedCount} published guides</span>
                          <span className="continent-spotlight-arrow" aria-hidden="true">
                            Explore region →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
