import { MetadataRoute } from "next";
import { getTotalPosts } from "../lib/hygraph";

const BASE_URL = "https://coggie.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://coggie.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
