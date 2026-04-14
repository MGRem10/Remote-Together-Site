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
  image,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="section-space pb-12 pt-8">
      <div className="container grid items-center gap-8 lg:grid-cols-[1.08fr_0.72fr]">
        <div className="max-w-xl">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="display mt-4">{title}</h1>
          <p className="lead mt-5 max-w-lg">{description}</p>
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
        <div className="image-frame min-h-[170px] border border-[var(--border)] shadow-[var(--shadow)] lg:min-h-[210px]">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-6 p-3 text-white">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-white/70">
                From lived experience
              </div>
              <p className="mt-1.5 max-w-[13rem] text-xs leading-5 text-white/88">
                Honest notes on workability, routine, and whether a place still feels good after the postcard moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
