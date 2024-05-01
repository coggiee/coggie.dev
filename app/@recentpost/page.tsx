import React from "react";
import dynamic from "next/dynamic";
import { getRecentPosts } from "@/lib/hygraph";

const AsidePostDashboard = dynamic(
  () => import("@/components/section/AsidePostDashboard"),
);

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
