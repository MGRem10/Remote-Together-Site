import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { DestinationBrowser } from "@/components/destination-browser";
import { browseDestinations, continents } from "@/data/site";

type ContinentPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return continents.map((continent) => ({ slug: continent.slug }));
}

export function generateMetadata({ params }: ContinentPageProps): Metadata {
  const continent = continents.find((item) => item.slug === params.slug);

  if (!continent) {
    return {};
  }

  return {
    title: `${continent.name} Destinations`,
    description: `Browse ${continent.name} remote-work destinations, compare published guides, and see which countries are currently in research.`,
    openGraph: {
      title: `${continent.name} Destinations`,
      description: `Browse ${continent.name} remote-work destinations, compare published guides, and see which countries are currently in research.`,
      images: [{ url: continent.image }],
    },
  };
}

export default function ContinentPage({ params }: ContinentPageProps) {
  const continent = continents.find((item) => item.slug === params.slug);

  if (!continent) {
    notFound();
  }

  const items = browseDestinations.filter((item) => item.continentSlug === continent.slug);
  const featuredItems = items.slice(0, 3);
  const publishedCount = items.filter((item) => item.status === "published").length;

  return (
    <>
      <section className="continent-page-hero section-space pt-8 md:pt-12">
        <div className="container">
          <div className="continent-page-hero-shell">
            <Reveal className="continent-page-hero-copy" delay={20}>
              <div className="eyebrow">Destinations / {continent.name}</div>
              <h1 className="display mt-4">{continent.name}</h1>
              <p className="lead mt-6 max-w-2xl">{continent.description}</p>
              <p className="body-md mt-5 max-w-2xl text-[var(--muted-strong)]">
                {continent.featuredLabel}
              </p>

              <div className="continent-page-stats mt-8">
                <div className="continent-page-stat">
                  <strong>{continent.countries.length}</strong>
                  <span>countries in this region</span>
                </div>
                <div className="continent-page-stat">
                  <strong>{publishedCount}</strong>
                  <span>published guides now</span>
                </div>
              </div>

              <div className="hero-cta-row mt-8">
                <Link href="#countries" className="button-primary">
                  Browse Countries
                </Link>
                <Link href="/destinations" className="button-secondary">
                  Back to Continents
                </Link>
              </div>
            </Reveal>

            <Reveal className="continent-page-hero-visual" delay={120}>
              <div className="continent-page-image-frame">
                <div
                  className="continent-page-image"
                  style={{ backgroundImage: `url(${continent.image})` }}
                />
                <div className="continent-page-image-overlay" />
                <div className="continent-page-image-copy">
                  <div className="eyebrow text-[rgba(255,250,241,0.68)]">Region profile</div>
                  <h2>{continent.accent}</h2>
                  <div className="continent-page-tag-row">
                    {continent.highlights.map((highlight) => (
                      <span key={highlight} className="continent-page-tag">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space continent-featured-section">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Featured picks</div>
            <h2 className="section-title mt-4">
              A curated first look at some of the most relevant countries in {continent.name}.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredItems.map((item, index) => (
              <Reveal key={item.name} as="article" className="continent-feature-card" delay={90 + index * 70}>
                <div className="continent-feature-image-shell">
                  <div
                    className="continent-feature-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="continent-feature-overlay" />
                  <div className="continent-feature-status">
                    {item.status === "published" ? "Published" : "Research queue"}
                  </div>
                </div>
                <div className="continent-feature-body">
                  <div className="continent-feature-topline">
                    <span>{item.stayStyle}</span>
                    <span>{item.workability}</span>
                  </div>
                  <h3 className="card-title mt-4">{item.name}</h3>
                  <p className="body-sm mt-4">{item.positioning}</p>
                  <div className="destination-tag-row mt-5">
                    {item.bestForCouples ? <span className="destination-tag">Best for couples</span> : null}
                    {item.bestForDeepWork ? <span className="destination-tag">Best for deep work</span> : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="countries" className="section-space continent-browser-section">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Countries</div>
            <h2 className="section-title mt-4">
              Choose a country in {continent.name}, then move into the guide or subscribe for updates.
            </h2>
          </Reveal>

          <div className="mt-10">
            <DestinationBrowser items={items} />
          </div>
        </div>
      </section>
    </>
  );
}
