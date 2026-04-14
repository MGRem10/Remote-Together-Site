import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch about destinations, collaborations, or questions."
        description="If you want a recommendation, are planning a remote-work move, or have a thoughtful partnership idea, this is where the conversation starts."
        image="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-space pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="card rounded-[2rem] p-8 md:p-10">
            <div className="eyebrow">Contact</div>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl tracking-[-0.05em]">
              hello@remotetogether.com
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              We read every message and prioritize destination questions, editorial
              collaborations, and brand partnerships that fit the tone of the site.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.56)] p-8 md:p-10">
            <div className="eyebrow">What to include</div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                "The destination or route you are considering.",
                "Your typical work setup and call schedule.",
                "What tradeoffs you are comfortable making.",
                "Whether you are traveling solo or as a couple.",
              ].map((item) => (
                <div key={item} className="rounded-[1.4rem] bg-[var(--background-soft)] p-5">
                  <p className="text-sm leading-7 text-[var(--muted)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
