import AsidePostDashboard from "@/app/_components/section/AsidePostDashboard";
import { getHotPosts } from "@/app/_libs/hygraph";
import React from "react";

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
