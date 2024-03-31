"use client";

import MotionVerticalProvider from "@/app/_provider/MotionVerticalProvider";
import React from "react";
import Introduction from "../../_components/common/Introduction";
import PostView from "./PostView";
import { Divider } from "@nextui-org/react";
import { useSearch } from "@/app/_hooks/useSearch";
import SearchBar from "./SearchBar";
import { useLoadPost } from "@/app/_hooks/useLoadPost";

interface PostDashboardProps {
  totalPostList: any;
  lastCursor: string;
  totalPageSize: number;
}

export default function PostDashboard({
  totalPostList,
  lastCursor,
  totalPageSize,
}: PostDashboardProps) {
  const {
    postList: searchedPostList,
    searchQuery,
    cursor,
    pageSize,
    handleClearQuery,
    handleOnSearch,
    handleOnPressEnter,
  } = useSearch();

  const { postList, isLoading, handleOnClickLoadButton } = useLoadPost({
    initialPosts: searchedPostList ?? totalPostList,
    cursor: cursor ?? lastCursor,
    totalPageSize: pageSize ?? totalPageSize,
  });

  return (
    <MotionVerticalProvider
      duration={0.7}
      fromY={500}
      toY={0}
      className={"flex flex-col gap-5"}
    >
      <Introduction />
      <Divider />
      <SearchBar
        handleOnPressEnter={handleOnPressEnter}
        handleOnSearch={handleOnSearch}
        handleClearQuery={handleClearQuery}
        query={searchQuery}
      />
      <PostView
        postList={postList}
        title={"Total Posts"}
        handleLoad={handleOnClickLoadButton}
        isLoading={isLoading}
      />
    </MotionVerticalProvider>
  );
}
