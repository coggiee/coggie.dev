"use client";

import MotionVerticalProvider from "@/provider/MotionVerticalProvider";
import React, { useEffect } from "react";
import Introduction from "../global/Introduction";
import { useSearch } from "@/hooks/useSearch";
import { useLoadPost } from "@/hooks/useLoadPost";
import { useSelectTag } from "@/hooks/useSelectTag";
import { usePostStore } from "@/store/usePostStore";
import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";

const PostView = dynamic(() => import("./PostView"));
const SearchBar = dynamic(() => import("./SearchBar"));
const TagSelector = dynamic(() => import("./TagSelector"));
interface PostDashboardProps {
  totalPostList: any;
  tagList: string[];
  lastCursor: string;
  totalPageSize: number;
}

export default function PostDashboard({
  totalPostList,
  tagList,
  lastCursor,
  totalPageSize,
}: PostDashboardProps) {
  const { postState, setPost } = usePostStore();
  const { searchQuery, handleClearQuery, handleOnSearch, handleOnPressEnter } =
    useSearch();
  const { isLoading, handleOnClickLoadButton } = useLoadPost();
  const { selectedTag, handleOnSelect } = useSelectTag();

  useEffect(() => {
    setPost({
      postList: totalPostList,
      cursor: lastCursor,
      pageSize: totalPageSize,
    });
  }, [lastCursor, totalPostList, totalPageSize]);

  return (
    <MotionVerticalProvider
      duration={0.7}
      fromY={500}
      toY={0}
      className={"flex flex-col gap-5"}
    >
      <Introduction />
      <Separator />
      <SearchBar
        handleOnPressEnter={handleOnPressEnter}
        handleOnSearch={handleOnSearch}
        handleClearQuery={handleClearQuery}
        query={searchQuery}
      />
      <TagSelector
        tagList={tagList}
        onSelect={handleOnSelect}
        selectedTag={selectedTag}
      />
      <Separator />
      <PostView
        postList={postState.postList ?? []}
        title={"Total Posts"}
        handleLoad={handleOnClickLoadButton}
        isLoading={isLoading}
        isDisabledLoad={
          postState.postList && postState.postList.length === postState.pageSize
        }
      />
    </MotionVerticalProvider>
  );
}
