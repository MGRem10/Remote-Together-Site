"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(247,245,239,0.9)] backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.72)] font-[family-name:var(--font-heading)] text-base">
            RT
          </div>
          <div>
            <div className="font-[family-name:var(--font-heading)] text-[1.7rem] leading-none tracking-[-0.05em]">
              Remote Together
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
              Work well. Travel deeply.
            </div>
          </div>
        </Link>
        <nav className="hidden items-center overflow-hidden rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.44)] text-sm md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
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
      </div>
    </header>
  );
}
