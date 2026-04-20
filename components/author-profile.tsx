import { authorProfile } from "@/data/site";

type AuthorProfileProps = {
  eyebrow?: string;
};

export function AuthorProfile({ eyebrow = "About the Authors" }: AuthorProfileProps) {
  return (
    <section className="section-space section-block">
      <div className="container">
        <div className="section-panel rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="eyebrow">{eyebrow}</div>
              <h2 className="section-title mt-4">{authorProfile.name}</h2>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                {authorProfile.title}
              </div>
            </div>
            <div>
              <p className="text-base leading-8 text-[var(--muted)]">{authorProfile.bio}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Remote work", value: authorProfile.yearsRemote },
                  { label: "Countries", value: authorProfile.countries },
                  { label: "Cities", value: authorProfile.cities },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.4rem] bg-[rgba(255,255,255,0.46)] p-5">
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                      {item.label}
                    </div>
                    <div className="mt-3 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
