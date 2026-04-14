import { PageHero } from "@/components/page-hero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A travel brand shaped by two people actually doing the work."
        description="Remote Together began as a way to keep track of what destinations were truly compatible with a working life, not just an aspirational escape."
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-space pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card rounded-[2rem] p-8 md:p-10">
            <div className="eyebrow">Our Story</div>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              We kept seeing the same problem in travel content: stunning photography,
              almost no clarity on what daily life felt like, and very little guidance
              for couples balancing different work styles. Remote Together exists to
              fill that gap with something more observant, more honest, and more useful.
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              The perspective is simple. A destination should support concentrated work,
              good rest, and the kind of curiosity that makes slow travel worthwhile.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[1.8rem] border border-[var(--border)] p-8">
              <div className="eyebrow">What makes us different</div>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl tracking-[-0.05em]">
                We document what it is like after the arrival high wears off.
              </h2>
            </div>
            <div className="rounded-[1.8rem] border border-[var(--border)] bg-[rgba(255,255,255,0.52)] p-8">
              <p className="text-sm leading-7 text-[var(--muted)]">
                That means notes on housing comfort, recurring costs, sound levels,
                weather patterns, transit friction, and whether a place supports a
                satisfying life between work blocks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
