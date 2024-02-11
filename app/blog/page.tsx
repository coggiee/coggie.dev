import React from "react";
import { getHotPosts, getRecentPosts } from "../_libs/hygraph";
import PostDashboard from "./_components/PostDashboard";

async function getProps() {
  const hotPosts = (await getHotPosts()) || [];
  const recentPosts = (await getRecentPosts()) || [];

  return {
    props: {
      hotPosts,
      recentPosts,
    },
    revalidate: 60,
  };
}

export default async function BlogPage() {
  const {
    props: { hotPosts, recentPosts },
  } = await getProps();
  return (
    <main className="snap-center w-full min-w-[50%] max-w-screen-2xl basis-2/3 rounded-lg flex-col gap-5 flex xl:flex md:snap-none">
      <PostDashboard hotPosts={hotPosts} recentPosts={recentPosts} />
    </main>
  );
}
