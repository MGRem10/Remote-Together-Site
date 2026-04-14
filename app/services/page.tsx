import { serviceItems } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <section className="section-space pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="max-w-xl">
            <div className="eyebrow">Services</div>
            <h1 className="display mt-4">Travel planning built for people who need the trip to actually work.</h1>
            <p className="lead mt-6">
              Remote Together is not just editorial. We can advise on destinations,
              shape a personalized remote-work plan, and help you move from vague idea
              to workable itinerary.
            </p>
          </div>
          <div className="section-panel rounded-[2rem] p-8 md:p-10">
            <div className="eyebrow">What we do</div>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              We bring together destination taste, remote-work practicality, and
              booking judgment. The goal is simple: help you choose well, plan well,
              and avoid expensive mistakes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-6 md:grid-cols-2">
          {serviceItems.map((service) => (
            <article key={service.title} className="section-panel rounded-[1.9rem] p-8">
              <div className="eyebrow">Service</div>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl tracking-[-0.05em]">
                {service.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space section-block">
        <div className="container grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="image-frame min-h-[180px] border border-[var(--border)] shadow-[var(--shadow-lg)] lg:min-h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80"
              alt="Travel advisory planning"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="section-panel rounded-[2rem] p-8 md:p-10">
            <div className="eyebrow">Example support</div>
            <h2 className="section-title mt-4">From “we want to go somewhere” to a real plan.</h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              We can help narrow the destination, define the route, recommend the best
              base, and flag the practical issues that affect comfort and productivity
              once you arrive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
