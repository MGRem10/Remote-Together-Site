import Link from "next/link";
import { notFound } from "next/navigation";
import { advisoryCountries, continents } from "@/data/site";

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
              Countries with full destination guides are clickable. The rest are part of
              the browse structure and can be expanded with full guides later.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {continent.countries.map((countryName) => {
              const guide = advisoryCountries.find((item) => item.country === countryName);

              if (guide) {
                return (
                  <Link
                    key={countryName}
                    href={`/destinations/${guide.slug}`}
                    className="group rounded-[1.6rem] border border-[var(--border)] bg-[rgba(255,255,255,0.46)] p-7 shadow-[var(--shadow)] transition-transform duration-200 hover:-translate-y-1"
                  >
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                      Full guide available
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em] text-[var(--text)]">
                      {countryName}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                      Open the full country guide for our recommended base, workability
                      read, and key tradeoffs.
                    </p>
                  </Link>
                );
              }

              return (
                <article
                  key={countryName}
                  className="rounded-[1.6rem] border border-[var(--border)] bg-[rgba(255,255,255,0.32)] p-7"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                    Coming soon
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em] text-[var(--text)]">
                    {countryName}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    Included in the regional browse now, with room to add a full guide as
                    the editorial library expands.
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
