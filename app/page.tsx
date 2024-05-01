import React from "react";
import dynamic from "next/dynamic";
import { getTotalPosts, getTotalTags } from "../lib/hygraph";
import InfoSiderbar from "../components/sidebar/InfoSiderbar";
import RightSidebar from "../components/sidebar/RightSidebar";

const PostDashboard = dynamic(() => import("@/components/post/PostDashboard"));

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
    <main className="snap-center w-full max-w-screen-2xl rounded-lg flex-col gap-5 flex xl:flex md:snap-none lg:flex-row md:items-baseline">
      <aside className="snap-start w-full min-w-0 lg:basis-1/2 basis-1/3 lg:max-w-sm lg:min-w-min flex flex-col flex-grow-0 flex-shrink-0 gap-5 md:snap-none">
        <InfoSiderbar />
        <RightSidebar />
      </aside>
      <PostDashboard
        totalPostList={posts}
        lastCursor={lastPostCursor}
        tagList={tagList}
        totalPageSize={totalPostsSize}
      />
    </main>
  );
}
