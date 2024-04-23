"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from "@/utils/formatTime";
import SkeletonPostCard from "@/app/_common/skeleton/SkeletonPostCard";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const PostSideCard = dynamic(() => import("./PostSideCard"), {
  loading: () => <SkeletonPostCard />,
});
interface PostViewProps {
  postList: any;
  title: string;
  handleLoad: () => void;
  isLoading: boolean;
  isDisabledLoad: boolean;
}

export default function PostView({
  postList,
  title,
  handleLoad,
  isLoading,
  isDisabledLoad,
}: PostViewProps) {
  return (
    <main className="space-y-5 flex flex-col font-aritaburi">
      <h1 className="text-lg dark:text-white min-w-fit">
        {title}
      </h1>
      {postList.length === 0 ? (
        <Card>
          <CardHeader>
            <p className="text-[#929292]">딱히 포스트가 없네요.</p>
          </CardHeader>
        </Card>
      ) : (
        <>
          <main className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 grid-flow-row-dense auto-rows-fr">
            {postList.map((post: any) => (
              <Link
                href={`/${post.id}`}
                passHref
                key={post.id}
                className="rounded-lg overflow-hidden space-y-2 transform transition-transform duration-150 hover:-translate-y-3"
              >
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
          </main>
          <footer className="flex justify-center items-center font-amaranth">
            <Button onClick={handleLoad} className="w-fit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wait...
                </>
              ) : (
                <>Load</>
              )}
            </Button>
          </footer>
        </>
      )}
    </main>
  );
}
