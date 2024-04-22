import React from "react";
import dynamic from "next/dynamic";
import { getHotPosts } from "@/app/_libs/hygraph";

const AsidePostDashboard = dynamic(
  () => import("@/app/_common/section/AsidePostDashboard"),
);

async function getProps() {
  const pinnedPosts = (await getHotPosts()) || [];

  return {
    props: {
      pinnedPosts,
    },
  };
}

export default async function PinnedPostPage() {
  const {
    props: { pinnedPosts },
  } = await getProps();

  return (
    <main>
      <AsidePostDashboard posts={pinnedPosts} type="PINNED" />
    </main>
  );
}
