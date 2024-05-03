import React from "react";
import {
  getHotPosts,
  getRecentPosts,
  getTotalPosts,
  getTotalTags,
} from "../lib/hygraph";
import InfoSiderbar from "../components/sidebar/InfoSiderbar";
import RightSidebar from "../components/sidebar/RightSidebar";
import AsidePostDashboard from "@/components/section/AsidePostDashboard";
import PostDashboard from "@/components/post/PostDashboard";

async function getProps() {
  const { edges, aggregate } = (await getTotalPosts()) || [];
  const recentPosts = (await getRecentPosts()) || [];
  const hotPosts = (await getHotPosts()) || [];

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
      recentPosts,
      hotPosts,
    },
  };
}

export default async function BlogPage() {
  const {
    props: {
      posts,
      uniqueTags: tagList,
      lastPostCursor,
      totalPostsSize,
      recentPosts,
      hotPosts,
    },
  } = await getProps();
  return (
    <main className="w-full min-w-0 flex flex-col gap-10 xl:flex lg:flex-row md:items-baseline max-w-screen-2xl ">
      <aside className="w-full lg:basis-1/3 basis-1/4 lg:max-w-xs lg:min-w-min flex flex-col flex-grow-0 flex-shrink-0 gap-5">
        <InfoSiderbar />
        <RightSidebar />
      </aside>
      <PostDashboard
        totalPostList={posts}
        lastCursor={lastPostCursor}
        tagList={tagList}
        totalPageSize={totalPostsSize}
      />
      <aside className="hidden w-full min-w-0 basis-1/5 2xl:flex 2xl:flex-col 2xl:gap-5 self-start flex-grow-0 flex-shrink-0">
        <AsidePostDashboard posts={recentPosts} type="RECENT" />
        <AsidePostDashboard posts={hotPosts} type="PINNED" />
      </aside>
    </main>
  );
}
