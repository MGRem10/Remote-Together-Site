import type { Metadata } from "next";
import Link from "next/link";
import { AuthorProfile } from "@/components/author-profile";
import { GuideCard } from "@/components/guide-card";
import { Reveal } from "@/components/reveal";
import { guideHubAll, guideHubCategories, guideHubFeatured, primaryCta } from "@/data/site";

export const metadata: Metadata = {
  title: "Remote Work Guides",
  description:
    "Practical, real-world guidance for working and living abroad, built for remote workers, couples, and longer-stay travelers.",
  openGraph: {
    title: "Remote Work Guides",
    description:
      "A curated knowledge hub for choosing destinations, setting up daily life abroad, and making remote work travel more sustainable.",
  },
};

export default function RemoteWorkGuidesPage() {
  return (
    <>
      <section className="guides-hub-hero section-space pt-8 md:pt-12">
        <div className="container">
          <Reveal className="guides-hub-hero-copy" delay={20}>
            <div className="eyebrow">Remote Work Guides</div>
            <h1 className="display mt-4">Remote Work Guides</h1>
            <p className="lead mt-5 max-w-2xl">
              Practical, real-world guidance for working and living abroad.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space guides-hub-intro-section pt-0">
        <div className="container">
          <Reveal className="guides-hub-intro-card" delay={40}>
            <p className="guides-hub-intro-copy">
              This hub is built for remote workers, couples, and longer-stay travellers
              who need practical guidance rather than generic travel advice. The focus is
              on real workloads, better housing choices, calmer routines, and the
              day-to-day details that decide whether a destination actually works.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space guides-hub-featured-section">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Featured guides</div>
            <h2 className="section-title mt-4">
              Start with the pieces that shape the biggest decisions first.
            </h2>
          </Reveal>

          <div className="guides-hub-featured-grid mt-10">
            {guideHubFeatured.map((guide, index) => (
              <Reveal key={guide.slug} delay={90 + index * 70}>
                <GuideCard guide={guide} variant="featured" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space guides-hub-categories-section">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Categories</div>
            <h2 className="section-title mt-4">
              A clearer way to explore the questions behind remote work and longer stays abroad.
            </h2>
          </Reveal>

          <div className="guides-hub-categories-grid mt-10">
            {guideHubCategories.map((category, index) => (
              <Reveal key={category.title} as="article" className="guides-hub-category-card" delay={90 + index * 60}>
                <h3 className="card-title">{category.title}</h3>
                <p className="body-sm mt-4">{category.description}</p>
                <div className="guides-hub-link-list">
                  {category.guides.map((slug) => {
                    const guide = guideHubAll.find((item) => item.slug === slug);
                    if (!guide) return null;

                    return (
                      <Link
                        key={guide.slug}
                        href={`/remote-work-guides/${guide.slug}`}
                        className="guides-hub-link-row"
                      >
                        <span className="guides-hub-link-dot" />
                        <span>{guide.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space guides-hub-links-section pt-0">
        <div className="container">
          <div className="guides-hub-link-band">
            <Link href="/destinations" className="guides-hub-inline-link">
              See where these principles apply
            </Link>
            <Link href="/services" className="guides-hub-inline-link">
              Prefer personalised advice?
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space guides-hub-all-section">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">All guides</div>
            <h2 className="section-title mt-4">
              The full guide library, organised to be scanned quickly and revisited easily.
            </h2>
          </Reveal>

          <div className="guides-hub-all-grid mt-10">
            {guideHubAll.map((guide, index) => (
              <Reveal key={guide.slug} delay={80 + index * 35}>
                <GuideCard guide={guide} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space guides-hub-cta-section">
        <div className="container">
          <Reveal className="guides-hub-cta-shell" delay={20}>
            <div className="eyebrow text-[rgba(255,250,241,0.64)]">Need planning help?</div>
            <h2 className="section-title mt-4 max-w-3xl text-[var(--paper)]">
              Want help planning instead of figuring it out yourself?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,250,241,0.76)]">
              Move from principles to a decision brief, route, or booking recommendation
              with tailored planning support.
            </p>
            <div className="hero-cta-row mt-8">
              <Link href="/services" className="button-primary">
                View Services
              </Link>
              <Link href={primaryCta.href} className="button-secondary">
                Book a Planning Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <AuthorProfile eyebrow="Written by" />
    </>
  );
}
