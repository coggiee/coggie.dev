import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/write"],
    },
    sitemap: "https://coggie.dev/sitemap.xml",
  };
}
