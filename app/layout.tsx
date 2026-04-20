import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://remotetogether.com"),
  title: {
    default: "Remote Together",
    template: "%s | Remote Together",
  },
  description:
    "Editorial destination guides and remote-work travel advice for couples, digital nomads, and people who want places that support both work and life.",
  openGraph: {
    title: "Remote Together",
    description:
      "Editorial destination guides and remote-work travel advice for couples, digital nomads, and people who want places that support both work and life.",
    siteName: "Remote Together",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
