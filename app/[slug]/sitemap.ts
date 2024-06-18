import { getTotalPosts } from "@/lib/hygraph";
import { MetadataRoute } from "next";

const BASE_URL = "https://coggie.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { edges } = await getTotalPosts(50);
  const posts = edges.map((post: any) => post.node);

  return posts.map((post: any) => ({
    url: `${BASE_URL}/${post.id}`,
    lastModified: post.date,
    priority: 0.8,
  }));
}
