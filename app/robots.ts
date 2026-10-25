import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://edunaazpublication.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/terms", "/privacy", "/editorial-ethics"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
