import { AuthorProfile } from "@/components/author-profile";
import { PageHero } from "@/components/page-hero";
import { destinationMethodology } from "@/data/site";

const guideSections = [
  {
    title: "Before you book",
    body: "Shortlist neighborhoods, ask for internet speed screenshots, check desk setup photos, and make sure your workday hours fit the destination’s rhythm.",
  },
  {
    title: "Once you arrive",
    body: "Treat the first two days like setup time. Test calls, locate backup cafés, and build a reliable daily loop before you start sightseeing heavily.",
  },
  {
    title: "If you are traveling as a couple",
    body: "Make expectations explicit around focus hours, social energy, budget, and how often each person needs space. Friction usually comes from assumptions, not logistics.",
  },
];

export default function RemoteWorkTravelPage() {
  return (
    <>
      <PageHero
        eyebrow="Remote Work Travel"
        title="Practical guidance for working while you move."
        description="A calmer approach to remote travel: systems for choosing places, protecting deep work, and making constant movement sustainable for two people with real schedules."
        image="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-space pt-0">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--border)] p-8 md:p-10">
            <div className="eyebrow">Field Notes</div>
            <h2 className="section-title mt-4">
              Remote travel works better when your systems are more thoughtful than your itinerary.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
              The most durable trips are rarely the most packed ones. We optimize for
              good apartments, repeatable morning routines, reliable internet, and a
              sense that daily life is still pleasurable after deadlines land.
            </p>
          </div>
          <div className="card rounded-[2rem] p-8">
            <div className="eyebrow">What we cover</div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
              <li>Choosing destinations around real workloads and time zones.</li>
              <li>Apartment filters that prevent expensive productivity mistakes.</li>
              <li>How to maintain focus while still letting travel feel expansive.</li>
              <li>Shared routines for couples who work differently.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container grid gap-6 md:grid-cols-3">
          {guideSections.map((section) => (
            <article key={section.title} className="card rounded-[1.8rem] p-8">
              <h3 className="font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                {section.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <div className="eyebrow">Methodology</div>
            <h2 className="section-title mt-4">The filters behind every recommendation.</h2>
          </div>
          <div className="grid gap-4">
            {destinationMethodology.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.34)] p-6"
              >
                <p className="text-sm leading-7 text-[var(--muted)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AuthorProfile eyebrow="Written By" />
    </>
  );
}
