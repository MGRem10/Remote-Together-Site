import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Remote Together, what it helps solve, and how Matteo and Alexandra think about remote work, place, and quality of life abroad.",
  openGraph: {
    title: "About Remote Together",
    description:
      "Learn who is behind Remote Together and how the site approaches remote life with a practical and human lens.",
  },
};

const whatWeDo = [
  "Remote Together is a planning and editorial layer for people trying to make remote life work well abroad, not just look good online.",
  "It helps cut through vague destination advice by focusing on workability, housing quality, daily routine, and how a place actually feels once you are living in it.",
  "It is for remote workers, couples, and longer-stay travellers who want better decisions before they book the wrong place for the right reasons.",
];

const matteoPoints = [
  "Background across digital assets, economics, and fintech.",
  "Thinks in systems, tradeoffs, and decision quality.",
  "Focused on sustainability, structure, and practical outcomes that hold up after the first week.",
];

const alexandraPoints = [
  "Creative background with a strong design and visual lens.",
  "Brings an experiential perspective to how a place feels day to day.",
  "Focused on quality of life, atmosphere, and whether the environment actually supports the life you want to live.",
];

export default function AboutPage() {
  return (
    <>
      <section className="section-space pt-8 md:pt-12">
        <div className="container">
          <Reveal className="max-w-3xl">
            <div className="eyebrow">About</div>
            <h1 className="display mt-4">About</h1>
            <p className="lead mt-6 text-[var(--muted-strong)]">
              We didn&apos;t start this to travel. We started this to make it work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space section-block pt-0">
        <div className="container">
          <Reveal className="summary-panel max-w-4xl px-7 py-8 md:px-10 md:py-10" delay={30}>
            <div className="eyebrow">The Story</div>
            <div className="mt-5 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
              <h2 className="section-title">A very unplanned start.</h2>
              <div className="space-y-4">
                <p className="body-md">
                  We met in South America, at a breakfast.
                </p>
                <p className="body-md">
                  The only reason we were both there is because a tour got cancelled
                  without notice.
                </p>
                <p className="body-md">
                  Remote Together came much later, but the core idea is the same:
                  plans change, reality is messier than the brochure, and the setup
                  matters more than people think.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="max-w-xl" delay={20}>
            <div className="eyebrow">What We Do</div>
            <h2 className="section-title mt-4">
              A cleaner way to choose places that support real life.
            </h2>
            <p className="body-md mt-5">
              Most remote-work advice is still written like travel content. It tells
              you what is exciting, photogenic, or cheap. It says much less about
              whether the place is actually workable.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {whatWeDo.map((item, index) => (
              <Reveal
                key={item}
                as="article"
                className="content-card panel-pad"
                delay={90 + index * 70}
              >
                <div className="icon-row">
                  <span className="icon-badge">{index + 1}</span>
                  <p className="body-md">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-block section-alt">
        <div className="container">
          <Reveal className="max-w-3xl" delay={20}>
            <div className="eyebrow">The People</div>
            <h2 className="section-title mt-4">
              Two different lenses, one shared standard.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal as="article" className="content-card panel-pad" delay={80}>
              <div className="eyebrow">Matteo</div>
              <h3 className="card-title mt-4">Structured, practical, sustainability-first.</h3>
              <p className="body-md mt-5">
                Matteo comes from digital assets, economics, and fintech. His lens is
                analytical: what are the tradeoffs, what compounds over time, and what
                actually holds up in practice.
              </p>
              <div className="bullet-list mt-6">
                {matteoPoints.map((point) => (
                  <div key={point} className="bullet-row">
                    <span className="bullet-dot" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal as="article" className="content-card panel-pad" delay={150}>
              <div className="eyebrow">Alexandra</div>
              <h3 className="card-title mt-4">Creative, visual, quality-of-life driven.</h3>
              <p className="body-md mt-5">
                Alexandra brings the design and experiential perspective. Her focus is
                not just whether a place functions, but whether it feels good enough to
                live in with some grace.
              </p>
              <div className="bullet-list mt-6">
                {alexandraPoints.map((point) => (
                  <div key={point} className="bullet-row">
                    <span className="bullet-dot" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal delay={20}>
            <div className="eyebrow">Image</div>
            <div className="content-card mt-5 overflow-hidden">
              <div className="relative aspect-[4/5] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(21,46,54,0.2)),linear-gradient(135deg,rgba(226,201,173,0.84),rgba(109,151,164,0.34))]">
                <div className="absolute inset-0 flex items-end p-6 md:p-8">
                  <div className="max-w-sm rounded-[1.25rem] border border-[rgba(255,250,241,0.24)] bg-[rgba(20,43,50,0.52)] px-5 py-4 text-[var(--paper)] backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.18em] text-[rgba(255,250,241,0.7)]">
                      Portrait Slot
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[rgba(255,250,241,0.86)]">
                      Single image supported now. This block is designed to expand into
                      a dual portrait layout later without changing the page structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="max-w-xl" delay={100}>
            <div className="eyebrow">Why This Exists</div>
            <h2 className="section-title mt-4">
              Remote life works better when the decision is grounded before the booking.
            </h2>
            <p className="body-md mt-5">
              That is the standard behind the site. Not bigger lists. Not louder claims.
              Just better judgment about where you can work, live, recover, and keep the
              whole thing sustainable.
            </p>
            <p className="body-md mt-5">
              The image area is intentionally simple so it can carry one portrait now and
              transition cleanly to both of you later.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container">
          <Reveal className="summary-panel px-7 py-9 md:px-10 md:py-11" delay={30}>
            <div className="max-w-3xl">
              <div className="eyebrow">Closing</div>
              <h2 className="section-title mt-4">
                We&apos;re not trying to show you the best places. We&apos;re trying to
                help you build something that actually works.
              </h2>
              <div className="hero-cta-row mt-8">
                <Link href="/services" className="button-primary">
                  Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
