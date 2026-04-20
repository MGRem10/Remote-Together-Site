import { notFound } from "next/navigation";
import { ConversionCta } from "@/components/conversion-cta";
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
        <div className="container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-xl">
            <div className="eyebrow">{country.region}</div>
            <h1 className="display mt-4">{country.country}</h1>
            <p className="lead mt-6">
              Our tailored guide to {country.country}: where we would base ourselves,
              how long we would stay, and what kind of remote life it supports best.
            </p>
            <ConversionCta
              className="mt-8"
              trustCopy={`Reply within 48 hours. Best for people deciding whether ${country.country} fits their workload, rhythm, and travel style.`}
            />
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

          <div className="section-panel rounded-[2rem] p-8 md:p-10">
            <div className="eyebrow">Country overview</div>
            <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
              Score {country.score}/100
            </div>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{country.summary}</p>
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
            <p className="text-base leading-8 text-[var(--muted)]">{country.whyItWorks}</p>
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

      <section className="section-space section-block">
        <div className="container grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-[var(--border)] bg-[rgba(255,255,255,0.28)] p-8">
            <div className="eyebrow">When To Go</div>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
              {country.idealTiming}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              This is the timing that gives the best balance between atmosphere,
              climate, and a workable day-to-day setup.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-[var(--border)] bg-[rgba(255,255,255,0.28)] p-8">
            <div className="eyebrow">What To Watch</div>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{country.watchOutFor}</p>
          </article>
        </div>
      </section>
    </>
  );
}
