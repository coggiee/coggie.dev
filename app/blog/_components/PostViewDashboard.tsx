"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import MotionVerticalProvider from "@/app/_provider/MotionVerticalProvider";
import { Card, CardBody } from "@nextui-org/react";

const HomeButton = dynamic(() => import("./HomeButton"));
const Breadcrumb = dynamic(() => import("./Breadcrumb"));
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
  const postDetailRef = useRef<HTMLDivElement>(null); // Ref 추가
  const pathname = usePathname().split("/")[1];

  return (
    <MotionVerticalProvider
      duration={0.8}
      delay={0.6}
      fromY={100}
      toY={0}
      className={"flex flex-col gap-5"}
    >
      <div className="sticky top-16 p-3 shrink-0 w-full flex gap-3 justify-between items-center border border-item-border-light rounded-lg dark:border-item-border-dark dark:text-white backdrop-blur-md z-[50]">
        <HomeButton />
        <Breadcrumb pathname={pathname} title={currentPost.title} />
      </div>

      <Card
        isBlurred
        radius="lg"
        className="dark:text-white w-full"
        shadow="md"
        ref={postDetailRef}
      >
        <CardBody className="p-0 w-full">
          <PostDetail post={currentPost!} mdx={mdx!} />
        </CardBody>
      </Card>
    </MotionVerticalProvider>
  );
}
