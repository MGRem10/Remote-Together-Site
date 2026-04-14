import { PageHero } from "@/components/page-hero";
import { featuredDestinations } from "@/data/site";

const destinationNotes = [
  {
    title: "What we pay attention to",
    body: "We rate destinations on work rhythm, housing friction, internet resilience, and whether the town still feels livable after the highlight reel wears off.",
  },
  {
    title: "Who these guides help",
    body: "Remote workers, couples, and slow travelers who need a practical read on daily life, not just a list of pretty spots and coffee shops.",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Destination guides built around real workdays."
        description="Every place here is filtered through routine, bandwidth, walkability, housing comfort, and the emotional texture of living there for more than a few days."
        image="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-space pt-0">
        <div className="container grid gap-6 md:grid-cols-2">
          {destinationNotes.map((note) => (
            <div key={note.title} className="card rounded-[1.8rem] p-8">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                {note.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{note.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container space-y-8">
          {featuredDestinations.map((destination, index) => (
            <article
              key={destination.name}
              className="grid gap-0 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[rgba(255,251,247,0.72)] lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className={`relative min-h-[360px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="eyebrow">{destination.country}</div>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl tracking-[-0.06em]">
                  {destination.name}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
                  {destination.summary}
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[1.4rem] bg-[var(--panel-strong)] p-5">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                      Stay Strategy
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{destination.season}</p>
                  </div>
                  <div className="rounded-[1.4rem] bg-[var(--panel-strong)] p-5">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                      Internet
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{destination.wifi}</p>
                  </div>
                  <div className="rounded-[1.4rem] bg-[var(--panel-strong)] p-5">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                      Atmosphere
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{destination.vibe}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
