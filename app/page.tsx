import React from "react";
import dynamic from "next/dynamic";
import { getTotalPosts, getTotalTags } from "./_libs/hygraph";

const PostDashboard = dynamic(
  () => import("@/app/_common/post/PostDashboard"),
);

async function getProps() {
  const { edges, aggregate } = (await getTotalPosts()) || [];
  const posts = edges.map((post: any) => post.node);
  const lastPostCursor = posts[posts.length - 1].id;
  const tags = (await getTotalTags()) || [];
  const uniqueTags = tags.map((tag: any) => tag.tag);

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
    props: { posts, uniqueTags: tagList, lastPostCursor, totalPostsSize },
  } = await getProps();

  return (
    <main className="snap-center w-full min-w-[50%] max-w-screen-2xl basis-2/3 rounded-lg flex-col gap-5 flex xl:flex md:snap-none">
      <PostDashboard
        totalPostList={posts}
        lastCursor={lastPostCursor}
        tagList={tagList}
        totalPageSize={totalPostsSize}
      />
    </main>
  );
}
