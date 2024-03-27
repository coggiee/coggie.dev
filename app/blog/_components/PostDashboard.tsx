"use client";

import MotionVerticalProvider from "@/app/_provider/MotionVerticalProvider";
import React from "react";
import Introduction from "../../_components/common/Introduction";
import PostList from "./PostList";
import { Divider } from "@nextui-org/react";

interface PostDashboardProps {
  totalPosts: any;
  lastCursor: string;
  totalPageSize: number;
}

export default function PostDashboard({
  totalPosts,
  lastCursor,
  totalPageSize,
}: PostDashboardProps) {
  return (
    <MotionVerticalProvider
      duration={0.7}
      fromY={500}
      toY={0}
      className={"flex flex-col gap-5"}
    >
      <Introduction />
      <Divider />
      <PostList
        posts={totalPosts}
        title={"Total Posts"}
        lastCursor={lastCursor}
        totalPageSize={totalPageSize}
      />
    </MotionVerticalProvider>
  );
}
