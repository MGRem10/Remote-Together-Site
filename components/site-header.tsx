"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(247,245,239,0.9)] backdrop-blur-xl">
      <div className="container py-4">
        <nav
          aria-label="Primary"
          className="hidden items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.58)] text-sm md:flex"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <nav aria-label="Mobile primary" className="grid grid-cols-2 gap-2 md:hidden">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full border border-[var(--border)] px-4 py-3 text-center text-sm transition-colors ${
                  active
                    ? "bg-[rgba(63,93,86,0.16)] text-[var(--text)]"
                    : "bg-[rgba(255,255,255,0.58)] text-[var(--muted)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
