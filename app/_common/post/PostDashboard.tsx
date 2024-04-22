"use client";

import MotionVerticalProvider from "@/app/_provider/MotionVerticalProvider";
import React, { useEffect } from "react";
import Introduction from "../global/Introduction";
import { Divider } from "@nextui-org/react";
import { useSearch } from "@/app/_hooks/useSearch";
import { useLoadPost } from "@/app/_hooks/useLoadPost";
import { useSelectTag } from "@/app/_hooks/useSelectTag";
import { usePostStore } from "@/app/_store/usePostStore";
import dynamic from "next/dynamic";

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
      <Divider />
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
      <Divider />
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
