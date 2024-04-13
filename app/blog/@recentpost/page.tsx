import React from "react";
import dynamic from "next/dynamic";
import { getRecentPosts } from "@/app/_libs/hygraph";

const AsidePostDashboard = dynamic(
  () => import("@/app/_components/section/AsidePostDashboard"),
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
