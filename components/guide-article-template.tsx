import Link from "next/link";
import { AuthorProfile } from "@/components/author-profile";
import { GuideCard } from "@/components/guide-card";
import { Reveal } from "@/components/reveal";
import type { GuideArticle, GuideHubItem } from "@/data/site";

type GuideArticleTemplateProps = {
  article: GuideArticle;
  relatedGuides: GuideHubItem[];
};

export function GuideArticleTemplate({
  article,
  relatedGuides,
}: GuideArticleTemplateProps) {
  return (
    <>
      <section className="guide-article-hero section-space pt-8 md:pt-12">
        <div className="container">
          <Reveal className="guide-article-hero-copy" delay={20}>
            <div className="eyebrow">Remote Work Guides</div>
            <h1 className="display mt-4">{article.title}</h1>
            <p className="lead mt-5 max-w-2xl">{article.subtitle}</p>
            <div className="guide-article-meta-row mt-7">
              <span className="guide-pill">{article.category}</span>
              {article.readingTime ? <span className="guide-meta">{article.readingTime}</span> : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space guide-article-summary-section pt-0">
        <div className="container">
          <Reveal className="guide-article-summary-card" delay={40}>
            <div className="eyebrow">In short</div>
            <h2 className="section-title mt-4">Key takeaways</h2>
            <div className="guide-article-takeaways">
              {article.keyTakeaways.map((point) => (
                <div key={point} className="guide-article-takeaway-row">
                  <span className="guide-article-takeaway-dot" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space guide-article-body-section pt-0">
        <div className="container">
          <div className="guide-article-layout">
            <Reveal className="guide-article-main" delay={60}>
              <section className="guide-article-intro">
                <div className="eyebrow">Introduction</div>
                <div className="guide-article-prose">
                  {article.introduction.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {article.sections.map((section, index) => (
                <section key={section.title} className="guide-article-section">
                  <div className="eyebrow">Section {index + 1}</div>
                  <h2 className="section-title mt-4">{section.title}</h2>
                  <div className="guide-article-prose">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <div className="guide-article-bullets">
                      {section.bullets.map((bullet) => (
                        <div key={bullet} className="guide-article-bullet-row">
                          <span className="guide-article-bullet-dot" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}

              {article.framework ? (
                <section className="guide-article-framework">
                  <div className="eyebrow">Framework</div>
                  <h2 className="section-title mt-4">{article.framework.title}</h2>
                  <p className="guide-article-framework-intro">{article.framework.intro}</p>
                  <div className="guide-article-framework-grid">
                    {article.framework.steps.map((step, index) => (
                      <article key={step.title} className="guide-article-framework-card">
                        <div className="guide-article-framework-step">Step {index + 1}</div>
                        <h3 className="card-title mt-5">{step.title}</h3>
                        <p className="body-sm mt-4">{step.body}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}

              {article.application ? (
                <section className="guide-article-application">
                  <div className="eyebrow">Practical application</div>
                  <h2 className="section-title mt-4">{article.application.title}</h2>
                  <p className="guide-article-framework-intro">{article.application.intro}</p>
                  <div className="guide-article-application-grid">
                    {article.application.examples.map((example) => (
                      <article key={example.title} className="guide-article-application-card">
                        <h3 className="card-title">{example.title}</h3>
                        <p className="body-sm mt-4">{example.body}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="guide-article-next-steps">
                <div className="eyebrow">Where to go next</div>
                <div className="guide-article-next-links">
                  <Link href="/destinations" className="guides-hub-inline-link">
                    Destinations
                  </Link>
                  <Link href="/services" className="guides-hub-inline-link">
                    View Services
                  </Link>
                  <Link href="/remote-work-guides" className="guides-hub-inline-link">
                    Explore more guides
                  </Link>
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space guide-article-soft-cta">
        <div className="container">
          <Reveal className="guide-article-soft-cta-shell" delay={20}>
            <div className="eyebrow text-[rgba(255,250,241,0.64)]">
              {article.softCta?.eyebrow ?? "Need a clearer next step?"}
            </div>
            <h2 className="section-title mt-4 max-w-3xl text-[var(--paper)]">
              {article.softCta?.title ?? "Prefer not to figure this out yourself?"}
            </h2>
            {article.softCta?.body ? (
              <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,250,241,0.76)]">
                {article.softCta.body}
              </p>
            ) : (
              <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,250,241,0.76)]">
                Use the same thinking in a destination brief, route plan, or booking review
                built around your actual workweek.
              </p>
            )}
            <div className="hero-cta-row mt-8">
              <Link href={article.softCta?.buttonHref ?? "/services"} className="button-primary">
                {article.softCta?.buttonLabel ?? "View Services"}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space guides-hub-all-section">
        <div className="container">
          <Reveal className="section-intro max-w-3xl" delay={20}>
            <div className="eyebrow">Related guides</div>
            <h2 className="section-title mt-4">
              Continue through the guide layer with the next most relevant pieces.
            </h2>
          </Reveal>

          <div className="guides-hub-all-grid mt-10">
            {relatedGuides.map((guide, index) => (
              <Reveal key={guide.slug} delay={90 + index * 60}>
                <GuideCard guide={guide} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AuthorProfile eyebrow="Written by" />
    </>
  );
}
