import Link from "next/link";
import { navItems } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[rgba(247,245,239,0.84)]">
      <div className="container py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.9fr] md:items-start">
          <div className="max-w-md">
            <div className="card-title">
              Remote Together
            </div>
            <p className="body-sm mt-4">
              Remote-work travel advice for people who want places that support focus,
              routine, and a richer day-to-day life abroad.
            </p>
          </div>

          <div>
            <div className="eyebrow">Navigation</div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-[var(--text)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <a href="mailto:hello@remotetogether.com" className="hover:text-[var(--text)]">
                hello@remotetogether.com
              </a>
              <p>Planning support, destination notes, and remote-work travel guidance.</p>
            </div>
            <div className="mt-6">
              <div className="eyebrow">Follow</div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
                <a href="#" className="hover:text-[var(--text)]">
                  Instagram
                </a>
                <a href="#" className="hover:text-[var(--text)]">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
          <p>
            Remote Together
            <span className="mx-2">·</span>
            Built for remote workers and couples choosing places that actually work.
          </p>
        </div>
      </div>
    </footer>
  );
}
