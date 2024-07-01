import React from "react";
import {
  getHotPosts,
  getRecentPosts,
  getTotalPosts,
  getTotalTags,
} from "../lib/hygraph";
import InfoSiderbar from "../components/sidebar/InfoSiderbar";
import RightSidebar from "../components/sidebar/RightSidebar";
import PostDashboard from "@/components/post/PostDashboard";
import { QueryClient } from "@tanstack/react-query";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function prefetchQueries() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["total-posts"],
    queryFn: () => getTotalPosts({ after: null }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["total-tags"],
    queryFn: () => getTotalTags(),
  });

  const tags: any = queryClient.getQueryData(["total-tags"]);

  await Promise.all(
    tags.map(
      async ({ tag }: { tag: any }) =>
        await queryClient.prefetchQuery({
          queryKey: ["tag-posts", tag],
          queryFn: () => getTotalPosts({ after: null, tag: tag }),
        }),
    ),
  );
}

export default async function BlogPage() {
  await prefetchQueries();

  return (
    <main className="w-full min-w-0 flex flex-col gap-10 max-w-screen-2xl relative">
      <header className="sticky top-0 bg-[#ff9634] p-3 text-sm flex gap-3 items-center rounded-lg">
        <span className="font-black">⚠️ 블로그 임시 이전</span>
        <Link href="https://medium.com/@coggiee" className="underline">
          Go to
        </Link>
      </header>
      <PostDashboard />
    </main>
  );
}
