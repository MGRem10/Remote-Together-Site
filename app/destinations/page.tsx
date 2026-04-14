import Link from "next/link";
import { advisoryCountries } from "@/data/site";

export default function DestinationsPage() {
  return (
    <>
      <section className="section-space pt-8">
        <div className="container">
          <div className="eyebrow">Destinations</div>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="max-w-xl">
              <h1 className="display">Choose a country, then go deeper.</h1>
              <p className="lead mt-6">
                A direct country index of places we can confidently advise on. Each
                guide opens into a dedicated national page with our view on bases,
                stay length, workability, and who the destination suits best.
              </p>
            </div>
            <div className="section-panel rounded-[2rem] p-8">
              <div className="eyebrow">How to use this</div>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                Start with the country that fits your season or instinct. Then read
                the tailored guide to understand the best base, what kind of remote
                work it supports, and where the tradeoffs begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {advisoryCountries.map((country) => (
              <Link
                key={country.slug}
                href={`/destinations/${country.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.34)] shadow-[var(--shadow)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative h-72">
                  <img
                    src={country.image}
                    alt={country.country}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,14,0.68)] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 z-10 p-6 text-white">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/72">
                      {country.region}
                    </div>
                    <h2 className="mt-2 font-[family-name:var(--font-heading)] text-4xl tracking-[-0.06em]">
                      {country.country}
                    </h2>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/88">
                      Best base: {country.base}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-[var(--muted)]">{country.summary}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="text-sm font-medium text-[var(--text)]">{country.bestFor}</div>
                    <div className="rounded-full bg-[rgba(38,67,63,0.1)] px-4 py-2 text-sm font-medium text-[var(--accent-deep)]">
                      {country.score}/100
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
