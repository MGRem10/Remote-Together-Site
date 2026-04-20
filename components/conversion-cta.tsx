import Link from "next/link";
import { ctaTrustCopy, primaryCta, secondaryCta } from "@/data/site";

type ConversionCtaProps = {
  align?: "left" | "center";
  className?: string;
  trustCopy?: string;
};

export function ConversionCta({
  align = "left",
  className = "",
  trustCopy = ctaTrustCopy,
}: ConversionCtaProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`.trim()}>
      <div className="flex flex-wrap gap-3">
        <Link href={primaryCta.href} className="button-primary">
          {primaryCta.label}
        </Link>
        <Link href={secondaryCta.href} className="button-secondary">
          {secondaryCta.label}
        </Link>
      </div>
      <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">{trustCopy}</p>
    </div>
  );
}
