import Link from "next/link";
import { secondaryCta } from "@/data/site";

type NewsletterBlockProps = {
  title?: string;
  body?: string;
};

export function NewsletterBlock({
  title = "Get destination updates before the next guide goes live.",
  body = "Join the list for new destination notes, practical remote-work travel insights, and updates when fresh country guides are published.",
}: NewsletterBlockProps) {
  return (
    <section className="section-space section-block">
      <div className="container">
        <div className="summary-panel panel-pad">
          <div className="eyebrow">Newsletter</div>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-5 text-base leading-8 text-[var(--muted)]">{body}</p>
          <div className="mt-8">
            <Link href={secondaryCta.href} className="button-primary">
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
