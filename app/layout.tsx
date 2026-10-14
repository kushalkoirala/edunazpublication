import type { Metadata } from "next";
import { Marcellus, Jost, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://edunaazpublication.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Edunaaz Publication (OPC) Private Limited | Academic Publishing & Research Support",
    template: "%s | Edunaaz Publication",
  },
  description:
    "Expert writing, editing and publication support for scholars, researchers and professionals. Registered under the Ministry of Corporate Affairs, Government of India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${marcellus.variable} ${jost.variable} ${greatVibes.variable}`}
    >
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
