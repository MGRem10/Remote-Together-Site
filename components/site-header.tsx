"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(247,245,239,0.9)] backdrop-blur-xl">
      <div className="container py-4">
        <Link href="/" className="block text-center">
          <div className="font-['Palatino_Linotype','Book_Antiqua',Georgia,serif] text-[2.2rem] font-bold leading-none tracking-[-0.06em] text-[var(--text)] md:text-[2.8rem]">
            Remote Together
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
            Work well. Travel deeply.
          </div>
        </Link>
        <nav className="mt-4 hidden items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.58)] text-sm md:flex">
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
