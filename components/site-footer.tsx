import Link from "next/link";
import { navItems } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(255,248,242,0.72)]">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div className="max-w-md">
          <div className="font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em]">
            Remote Together
          </div>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Travel advice for remote workers and couples choosing places that support
            focus, routine, and a richer way to move through the world.
          </p>
        </div>
        <div>
          <div className="eyebrow">Explore</div>
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
            <p>hello@remotetogether.com</p>
            <p>Stories, destination notes, and practical guidance for working abroad.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
