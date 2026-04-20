import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { primaryCta, secondaryCta } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what kind of remote-work trip you are planning."
        description="Use the form below if you want help choosing a destination, shaping a longer stay, or turning a rough idea into a plan that actually works."
        image="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1400&q=80"
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <section className="section-space pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="card rounded-[2rem] p-8 md:p-10">
            <div className="eyebrow">Planning Call</div>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl tracking-[-0.05em]">
              Share the trip, timing, and work setup you are planning around.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              This service is strongest for remote workers, couples, and longer stays
              where destination choice affects focus, comfort, and how the trip feels
              after the first few days.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Reply within 48 hours.",
                "Best for destination selection, route shaping, and remote-work planning.",
                "You can also opt into destination updates from the same form.",
              ].map((item) => (
                <div key={item} className="rounded-[1.4rem] bg-[var(--background-soft)] px-5 py-4">
                  <p className="text-sm leading-7 text-[var(--muted)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.56)] p-8 md:p-10">
            <div className="eyebrow">Contact Form</div>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl tracking-[-0.05em]">
              Book a Planning Call
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              Include the countries you are weighing, your work rhythm, and the kind of
              stay you want to build. The more specific the brief, the sharper the plan.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
