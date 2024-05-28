"use client";

import React from "react";
import dynamic from "next/dynamic";
import MotionVerticalProvider from "@/provider/MotionVerticalProvider";

const HomeButton = dynamic(() => import("./HomeButton"));
const PostDetail = dynamic(() =>
  import("./PostDetail").then((mod) => mod.PostDetail),
);
interface PostViewDashboardProps {
  currentPost: any;
  mdx: any;
}

export default function PostViewDashboard({
  currentPost,
  mdx,
}: PostViewDashboardProps) {
  return (
    <MotionVerticalProvider
      duration={0.8}
      delay={0.6}
      fromY={100}
      toY={0}
      className={"flex flex-col gap-5"}
    >
      <div className="sticky top-16 p-3 shrink-0 w-full flex gap-3 justify-between items-center border border-item-border-light rounded-lg dark:border-item-border-dark backdrop-blur-md z-[50]">
        <HomeButton />
      </div>
      <PostDetail post={currentPost!} mdx={mdx!} />
    </MotionVerticalProvider>
  );
}
