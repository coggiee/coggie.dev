import AsidePostDashboard from "@/app/_components/section/AsidePostDashboard";
import { getRecentPosts } from "@/app/_libs/hygraph";
import React from "react";

async function getProps() {
  const recentPosts = (await getRecentPosts()) || [];
  return {
    props: {
      recentPosts,
    },
  };
}
export default async function RecentPostPage() {
  const {
    props: { recentPosts },
  } = await getProps();

  return (
    <main>
      <AsidePostDashboard posts={recentPosts} type="RECENT" />
    </main>
  );
}
