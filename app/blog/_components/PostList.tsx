"use client";

import Fallback from "../../_components/common/Fallback";
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from "@/utils/formatTime";
import PostSideCard from "./PostSideCard";
import Link from "next/link";
import { Button, ScrollShadow } from "@nextui-org/react";
import SearchBar from "./SearchBar";
import { useLoadPost } from "@/app/_hooks/useLoadPost";

export default function PostList({
  posts,
  title,
  lastCursor,
  totalPageSize,
}: {
  posts: any;
  title: string;
  lastCursor: string;
  totalPageSize: number;
}) {
  const { postList, isLoading, handleOnClickLoadButton } = useLoadPost({
    initialPosts: posts,
    cursor: lastCursor,
    totalPageSize: totalPageSize,
  });

  return (
    <aside className="space-y-5 flex flex-col">
      <SearchBar />
      <h1 className="text-lg font-semibold dark:text-white min-w-fit">
        {title}
      </h1>
      <ScrollShadow
        size={100}
        className="flex flex-col overflow-y-scroll overscroll-y-none  max-h-[900px]"
      >
        <main className="flex flex-col gap-2">
          {postList.length === 0 && (
            <Fallback title={"아직 포스트가 없습니다."} />
          )}
          {postList.map((post: any) => (
            <Link href={`/blog/${post.id}`} passHref key={post.id}>
              <PostSideCard
                key={post.id}
                date={formatCreatedAt(post.date)}
                time={formatCreatedTime(post.date)}
                title={post.title}
                description={post.description}
                tags={post.tags}
                coverImage={post.coverImage}
                readTimeMinutes={formatReadingMinutes(post.content)}
              />
            </Link>
          ))}
          <footer className="flex justify-center items-center">
            <Button
              onClick={handleOnClickLoadButton}
              isLoading={isLoading}
              className="w-fit"
              color="warning"
              variant="flat"
            >
              Load
            </Button>
          </footer>
        </main>
      </ScrollShadow>
    </aside>
  );
}
