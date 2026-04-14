import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="section-space pb-12 pt-8">
      <div className="container max-w-3xl">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="display mt-4">{title}</h1>
        <p className="lead mt-5 max-w-2xl">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-7 flex flex-wrap gap-3">
            {primaryCta ? (
              <Link href={primaryCta.href} className="button-primary">
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link href={secondaryCta.href} className="button-secondary">
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
