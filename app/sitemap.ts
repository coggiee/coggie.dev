import { MetadataRoute } from "next";
import { getTotalPosts } from "./_libs/hygraph";

const BASE_URL = "https://coggie.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { edges } = await getTotalPosts(50);
  const posts = edges.map((post: any) => post.node);

  const post_routes = posts.map((post: any) => ({
    url: `${BASE_URL}/${post.id}`,
    lastModified: post.date,
    priority: 0.8,
  }));

  const routes = [""].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...post_routes];
}
