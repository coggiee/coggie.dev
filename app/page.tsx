import React from "react";
import {
  getTotalPosts,
  getTotalTags,
} from "../lib/hygraph";
import InfoSiderbar from "../components/sidebar/InfoSiderbar";
import PostDashboard from "@/components/post/PostDashboard";
import { QueryClient } from "@tanstack/react-query";

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
    <main className="w-full min-w-0 flex flex-col gap-10 xl:flex lg:flex-row md:items-baseline max-w-screen-2xl ">
      <aside className="w-full lg:basis-1/3 basis-1/4 lg:max-w-xs lg:min-w-min flex flex-col flex-grow-0 flex-shrink-0 gap-5">
        <InfoSiderbar />
      </aside>
      <PostDashboard />
    </main>
  );
}
