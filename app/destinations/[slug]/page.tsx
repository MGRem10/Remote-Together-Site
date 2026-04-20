import { AuthorProfile } from "@/components/author-profile";
import { notFound } from "next/navigation";
import { ConversionCta } from "@/components/conversion-cta";
import { advisoryCountries, destinationMethodology } from "@/data/site";

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
        <div className="container grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="section-intro">
            <div className="eyebrow">{country.region}</div>
            <h1 className="display mt-4">{country.country}</h1>
            <p className="lead mt-6">
              A decision-first guide to {country.country}: where to base yourself, who it
              suits best, what usually goes wrong, and whether it works for the kind of
              remote life you actually want.
            </p>
            <ConversionCta
              className="mt-8"
              trustCopy={`Reply within 48 hours. Best for people deciding whether ${country.country} fits their workload, rhythm, and travel style.`}
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Best base", value: country.base },
                { label: "Best for", value: country.bestFor },
                { label: "Realistic budget", value: country.realisticBudget },
                { label: "Stay range", value: country.stay },
              ].map((item) => (
                <div key={item.label} className="content-card p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                    {item.label}
                  </div>
                  <div className="mt-3 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="summary-panel p-8 md:p-9">
              <div className="eyebrow">Quick Decision Summary</div>
              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                Score {country.score}/100
              </div>
              <p className="section-copy mt-4 text-base leading-8 text-[var(--muted)]">{country.summary}</p>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Internet", value: country.internet },
                  { label: "Cost level", value: country.cost },
                  { label: "Ideal timing", value: country.idealTiming },
                  { label: "Avoid if", value: country.avoidIf },
                ].map((item) => (
                  <div key={item.label} className="comparison-item">
                    <div className="text-xs uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm leading-7 text-[var(--text)]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-space section-block section-alt">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-intro">
            <div className="eyebrow">Decision Fit</div>
            <h2 className="section-title mt-4">Who this destination is actually for.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="content-card p-8">
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                Best for
              </div>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{country.bestFor}</p>
            </article>
            <article className="content-card p-8">
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                Who should avoid it
              </div>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{country.avoidIf}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="section-intro">
            <div className="eyebrow">Our Read</div>
            <h2 className="section-title mt-4">What makes {country.country} work in practice.</h2>
          </div>
          <div className="summary-panel p-8 md:p-10">
            <p className="section-copy text-base leading-8 text-[var(--muted)]">{country.whyItWorks}</p>
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

      <section className="section-space section-block section-alt">
        <div className="container grid gap-6 lg:grid-cols-3">
          <article className="content-card p-8">
            <div className="eyebrow">Top Base Areas</div>
            <div className="mt-5 space-y-3">
              {country.topAreas.map((area) => (
                <div key={area} className="comparison-item text-base text-[var(--text)]">
                  {area}
                </div>
              ))}
            </div>
          </article>
          <article className="content-card p-8">
            <div className="eyebrow">Internet and Coworking</div>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{country.internetNotes}</p>
          </article>
          <article className="content-card p-8">
            <div className="eyebrow">Housing Advice</div>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{country.housingAdvice}</p>
          </article>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="content-card p-8">
            <div className="eyebrow">Couples</div>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
              Couple suitability
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{country.coupleNotes}</p>
          </article>
          <article className="content-card p-8">
            <div className="eyebrow">Common Mistakes</div>
            <div className="bullet-list mt-5">
              {country.commonMistakes.map((item) => (
                <div key={item} className="bullet-row text-sm">
                  <span className="bullet-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-space section-block section-alt">
        <div className="container grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="section-intro">
            <div className="eyebrow">Recommended Stay Length</div>
            <h2 className="section-title mt-4">How long this destination makes sense for.</h2>
          </div>
          <div className="grid gap-4">
            {country.stayByTraveler.map((item) => (
              <div
                key={item.traveler}
                className="comparison-item md:grid md:grid-cols-[1fr_auto] md:items-center"
              >
                <div className="text-base text-[var(--text)]">{item.traveler}</div>
                <div className="mt-3 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em] md:mt-0">
                  {item.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-6 md:grid-cols-2">
          <article className="content-card p-8">
            <div className="eyebrow">When To Go</div>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
              {country.idealTiming}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              This is the timing that gives the best balance between atmosphere,
              climate, and a workable day-to-day setup.
            </p>
          </article>
          <article className="content-card p-8">
            <div className="eyebrow">What To Watch</div>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{country.watchOutFor}</p>
          </article>
        </div>
      </section>

      <section className="section-space section-block section-alt">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="section-intro">
            <div className="eyebrow">How We Rate</div>
            <h2 className="section-title mt-4">The methodology behind this destination score.</h2>
          </div>
          <div className="grid gap-4">
            {destinationMethodology.map((item) => (
              <div
                key={item}
                className="comparison-item"
              >
                <p className="text-sm leading-7 text-[var(--muted)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <div className="summary-panel p-8 md:p-10">
            <div className="eyebrow">Need Something More Specific?</div>
            <h2 className="section-title mt-4">Want a custom recommendation instead?</h2>
            <p className="section-copy mt-5 text-base leading-8 text-[var(--muted)]">
              If your decision depends on your exact work schedule, budget, partner
              dynamic, or route timing, the strongest next step is a tailored planning
              recommendation rather than a general guide.
            </p>
            <ConversionCta className="mt-8" />
          </div>
        </div>
      </section>

      <AuthorProfile eyebrow="Guide Authors" />
    </>
  );
}
