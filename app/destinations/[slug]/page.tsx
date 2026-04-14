import { notFound } from "next/navigation";
import { advisoryCountries } from "@/data/site";

type CountryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return advisoryCountries.map((country) => ({ slug: country.slug }));
}

export default function CountryGuidePage({ params }: CountryPageProps) {
  const country = advisoryCountries.find((item) => item.slug === params.slug);

  if (!country) {
    notFound();
  }

  return (
    <>
      <section className="section-space pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="max-w-xl">
            <div className="eyebrow">{country.region}</div>
            <h1 className="display mt-4">{country.country}</h1>
            <p className="lead mt-6">
              Our tailored guide to {country.country}: where we would base ourselves,
              how long we would stay, and what kind of remote life it supports best.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="section-panel rounded-[1.5rem] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                  Best Base
                </div>
                <div className="mt-3 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                  {country.base}
                </div>
              </div>
              <div className="section-panel rounded-[1.5rem] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                  Best For
                </div>
                <div className="mt-3 text-base font-medium text-[var(--text)]">
                  {country.bestFor}
                </div>
              </div>
            </div>
          </div>

          <div className="image-frame min-h-[460px] border border-[var(--border)] shadow-[var(--shadow-lg)]">
            <img
              src={country.image}
              alt={country.country}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 z-10 max-w-md p-8 text-white">
              <div className="text-xs uppercase tracking-[0.2em] text-white/72">
                Score {country.score}/100
              </div>
              <p className="mt-3 text-base leading-7 text-white/88">{country.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-6 md:grid-cols-4">
          {[
            { label: "Internet", value: country.internet },
            { label: "Cost", value: country.cost },
            { label: "Stay", value: country.stay },
            { label: "Best Fit", value: country.bestFor },
          ].map((item) => (
            <div key={item.label} className="section-panel rounded-[1.6rem] p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                {item.label}
              </div>
              <div className="mt-4 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <div className="eyebrow">Our read</div>
            <h2 className="section-title mt-4">What makes {country.country} work.</h2>
          </div>
          <div className="section-panel rounded-[2rem] p-8 md:p-10">
            <p className="text-base leading-8 text-[var(--muted)]">{country.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {country.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[rgba(94,125,117,0.1)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--accent-deep)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
