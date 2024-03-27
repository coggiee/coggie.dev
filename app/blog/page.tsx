import React from "react";
import {
  getHotPosts,
  getRecentPosts,
  getTotalPosts,
  getTotalTags,
} from "../_libs/hygraph";
import PostDashboard from "./_components/PostDashboard";

async function getProps() {
  const { edges, aggregate } = (await getTotalPosts()) || [];
  const posts = edges.map((post: any) => post.node);
  const lastPostCursor = posts[posts.length - 1].id;
  const tags = (await getTotalTags()) || [];
  const uniqueTags = Array.from(
    new Set<string>(tags.flatMap((post: any) => post.tags)),
  );
  uniqueTags.unshift("All");

  return {
    props: {
      posts,
      uniqueTags,
      lastPostCursor,
      totalPostsSize: aggregate.count,
    },
  };
}

export default async function BlogPage() {
  const {
    props: { posts, uniqueTags, lastPostCursor, totalPostsSize },
  } = await getProps();

  return (
    <main className="snap-center w-full min-w-[50%] max-w-screen-2xl basis-2/3 rounded-lg flex-col gap-5 flex xl:flex md:snap-none">
      <PostDashboard
        totalPosts={posts}
        lastCursor={lastPostCursor}
        totalPageSize={totalPostsSize}
      />
    </main>
  );
}
