import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { navItems } from "@/data/site";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Reveal className="site-footer-shell" delay={20}>
          <div className="site-footer-grid">
            <div className="site-footer-column site-footer-brand">
              <div className="site-footer-title">Remote Together</div>
              <p className="site-footer-copy">
                Built for remote workers, couples, and longer-stay travellers choosing
                places that still feel good once the real week begins.
              </p>
            </div>

            <div className="site-footer-column">
              <div className="site-footer-heading">Navigation</div>
              <nav className="site-footer-link-list" aria-label="Footer navigation">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="site-footer-link">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="site-footer-column">
              <div className="site-footer-heading">Contact</div>
              <div className="site-footer-link-list">
                <a href="mailto:hello@remotetogether.com" className="site-footer-link">
                  hello@remotetogether.com
                </a>
              </div>

              <div className="site-footer-subsection">
                <div className="site-footer-heading">Social</div>
                <div className="site-footer-link-list">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} className="site-footer-link">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
