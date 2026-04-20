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
          <div className="content-card panel-pad">
            <div className="eyebrow">Planning Call</div>
            <h2 className="card-title mt-4">
              Share the trip, timing, and work setup you are planning around.
            </h2>
            <p className="body-sm mt-5">
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
                <div key={item} className="comparison-item">
                  <p className="body-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <div className="eyebrow">Elsewhere</div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
                <a href="#" className="hover:text-[var(--text)]">
                  Instagram
                </a>
                <a href="#" className="hover:text-[var(--text)]">
                  LinkedIn
                </a>
                <a href="mailto:hello@remotetogether.com" className="hover:text-[var(--text)]">
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="summary-panel panel-pad">
            <div className="eyebrow">Contact Form</div>
            <h2 className="card-title mt-4">
              Book a Planning Call
            </h2>
            <p className="body-sm mt-5">
              Include the countries you are weighing, your work rhythm, and the kind of
              stay you want to build. The more specific the brief, the sharper the plan.
            </p>
            <p className="body-sm mt-3">
              We usually respond within 48 hours, often sooner on weekdays.
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
