import { DestinationBrowser } from "@/components/destination-browser";
import Link from "next/link";
import { notFound } from "next/navigation";
import { browseDestinations, continents } from "@/data/site";

type ContinentPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return continents.map((continent) => ({ slug: continent.slug }));
}

export default function ContinentPage({ params }: ContinentPageProps) {
  const continent = continents.find((item) => item.slug === params.slug);

  if (!continent) {
    notFound();
  }

  const items = browseDestinations.filter(
    (item) => item.continentSlug === continent.slug,
  );

  return (
    <>
      <section className="section-space pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-xl">
            <div className="eyebrow">Destinations / {continent.name}</div>
            <h1 className="display mt-4">{continent.name}</h1>
            <p className="lead mt-6">{continent.description}</p>
            <div className="mt-8">
              <Link href="/destinations" className="button-secondary">
                Back to Continents
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.28)]">
            <div className="relative aspect-[16/10]">
              <img
                src={continent.image}
                alt={continent.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow">Countries</div>
              <h2 className="section-title mt-4">Choose a country in {continent.name}.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
              Published guides appear first by default. You can include upcoming
              destinations when you want to see what is currently in research.
            </p>
          </div>

          <div className="mt-10">
            <DestinationBrowser items={items} />
          </div>
        </div>
      </section>
    </>
  );
}
