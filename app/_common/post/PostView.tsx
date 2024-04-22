"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from "@/utils/formatTime";
import {
  Button,
  Card,
  CardBody,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";
import SkeletonPostCard from "@/app/_common/skeleton/SkeletonPostCard";

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
    <aside className="space-y-5 flex flex-col">
      <h1 className="text-lg dark:text-white min-w-fit font-amaranth">
        {title}
      </h1>
      {postList.length === 0 ? (
        <Card className="dark:bg-item-dark">
          <CardBody>
            <p className="text-[#929292]">딱히 포스트가 없네요.</p>
          </CardBody>
        </Card>
      ) : (
        <Card>
          <CardBody className="dark:bg-item-dark">
            <ScrollShadow
              size={100}
              className="flex flex-col overflow-y-scroll overscroll-y-none max-h-[900px] scrollbar-hide"
            >
              <main className="flex flex-col gap-2">
                {postList.map((post: any) => (
                  <Link
                    href={`/${post.id}`}
                    passHref
                    key={post.id}
                    className="rounded-lg overflow-hidden space-y-2"
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
                    <Divider />
                  </Link>
                ))}
                <footer className="flex justify-center items-center font-amaranth">
                  <Button
                    onClick={handleLoad}
                    isLoading={isLoading}
                    className="w-fit"
                    variant="flat"
                    isDisabled={isDisabledLoad}
                  >
                    Load
                  </Button>
                </footer>
              </main>
            </ScrollShadow>
          </CardBody>
        </Card>
      )}
    </aside>
  );
}
