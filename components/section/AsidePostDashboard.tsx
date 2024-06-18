import MotionVerticalProvider from "@/provider/MotionVerticalProvider";
import React from "react";
import AsidePostList from "./AsidePostList";

type PostType = "PINNED" | "RECENT";

interface PostDashboardProps {
  type: PostType;
  posts: any;
}

export default function AsidePostDashboard({
  type,
  posts,
}: PostDashboardProps) {
  const title = type === "PINNED" ? "Pinned Posts" : "Recent Posts";

  return (
    <MotionVerticalProvider
      duration={0.7}
      fromY={500}
      toY={0}
      className={"flex flex-col gap-5"}
    >
      <AsidePostList posts={posts} title={title} />
    </MotionVerticalProvider>
  );
}
