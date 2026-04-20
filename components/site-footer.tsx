import Link from "next/link";
import { navItems } from "@/data/site";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[rgba(255,250,241,0.08)] bg-[linear-gradient(180deg,#10262b_0%,#0c1d21_100%)] text-[var(--paper)]">
      <div className="container py-14 md:py-16">
        <div className="rounded-[2rem] border border-[rgba(255,250,241,0.1)] bg-[rgba(255,250,241,0.04)] px-6 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.16)] md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.75fr_0.75fr]">
            <div className="max-w-md">
              <h2 className="font-[family-name:var(--font-heading)] text-[2.2rem] leading-[0.98] tracking-[-0.04em]">
                Remote Together
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[rgba(255,250,241,0.7)]">
                Remote-work travel guidance for couples and professionals choosing places
                with stronger internet, better routines, and more sustainable day-to-day
                living.
              </p>
              <div className="mt-6">
                <Link href="/contact#newsletter" className="button-primary">
                  Get Destination Updates
                </Link>
              </div>
            </div>

            <div>
              <div className="eyebrow text-[rgba(255,250,241,0.58)]">Navigation</div>
              <nav className="mt-5 grid gap-3 text-sm text-[rgba(255,250,241,0.72)]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors duration-200 hover:text-[var(--paper)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <div className="eyebrow text-[rgba(255,250,241,0.58)]">Contact</div>
              <div className="mt-5 grid gap-5">
                <a
                  href="mailto:hello@remotetogether.com"
                  className="text-sm font-semibold text-[var(--paper)] transition-colors duration-200 hover:text-[var(--sand)]"
                >
                  hello@remotetogether.com
                </a>

                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-[rgba(255,250,241,0.52)]">
                    Social
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex min-h-[2.6rem] items-center rounded-full border border-[rgba(255,250,241,0.12)] bg-[rgba(255,250,241,0.04)] px-4 text-sm text-[rgba(255,250,241,0.76)] transition-all duration-200 hover:-translate-y-[1px] hover:border-[rgba(255,250,241,0.22)] hover:text-[var(--paper)]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[rgba(255,250,241,0.08)] pt-5 text-sm text-[rgba(255,250,241,0.52)]">
            Built for remote workers, couples, and longer-stay travelers choosing places
            that still feel good once the real week begins.
          </div>
        </div>
      </div>
    </footer>
  );
}
