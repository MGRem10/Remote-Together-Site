import Link from "next/link";
import { advisoryCountries } from "@/data/site";

export default function DestinationsPage() {
  return (
    <>
      <section className="section-space pt-8">
        <div className="container">
          <div className="eyebrow">Destinations</div>
          <h1 className="section-title mt-4 max-w-2xl">
            Pick a country and open the guide.
          </h1>
          <p className="lead mt-5 max-w-3xl">
            A direct country index of places we can advise on, with a simple visual
            layout built for scanning quickly.
          </p>
        </div>
      </section>

      <section className="section-space section-block pt-10">
        <div className="container">
          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {advisoryCountries.map((country) => (
              <Link key={country.slug} href={`/destinations/${country.slug}`} className="group block max-w-[13rem]">
                <div className="overflow-hidden rounded-[1.1rem] border border-[var(--border)] bg-[rgba(255,255,255,0.28)] shadow-[var(--shadow)]">
                  <div className="relative aspect-[5/4]">
                    <img
                      src={country.image}
                      alt={country.country}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <h2 className="font-[family-name:var(--font-heading)] text-[1.7rem] tracking-[-0.05em] text-[var(--text)]">
                    {country.country}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{country.region}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
