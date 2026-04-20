import Link from "next/link";

type RelatedItem = {
  title: string;
  description: string;
  href: string;
  meta?: string;
};

type RelatedContentProps = {
  eyebrow: string;
  title: string;
  items: RelatedItem[];
};

export function RelatedContent({ eyebrow, title, items }: RelatedContentProps) {
  return (
    <section className="section-space section-block section-alt">
      <div className="container">
        <div className="section-intro">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="section-title mt-4">{title}</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="content-card card-pad transition-transform duration-200 hover:-translate-y-1"
            >
              {item.meta ? (
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                  {item.meta}
                </div>
              ) : null}
              <h3 className="card-title mt-4">{item.title}</h3>
              <p className="body-sm mt-4">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
