import { authorProfile } from "@/data/site";

type AuthorProfileProps = {
  eyebrow?: string;
};

export function AuthorProfile({ eyebrow = "About the Authors" }: AuthorProfileProps) {
  return (
    <section className="section-space section-block">
      <div className="container">
        <div className="summary-panel panel-pad">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="eyebrow">{eyebrow}</div>
              <h2 className="section-title mt-4">{authorProfile.name}</h2>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                {authorProfile.title}
              </div>
            </div>
            <div>
              <p className="body-md">{authorProfile.bio}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Remote work", value: authorProfile.yearsRemote },
                  { label: "Countries", value: authorProfile.countries },
                  { label: "Cities", value: authorProfile.cities },
                ].map((item) => (
                  <div key={item.label} className="comparison-item">
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-deep)]">
                      {item.label}
                    </div>
                    <div className="card-title mt-3">
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
