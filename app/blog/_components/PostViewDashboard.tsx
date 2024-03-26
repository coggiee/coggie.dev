"use client";

import IconBackToHome from "@/app/_icons/IconBackToHome";
import IconScale from "@/app/_icons/IconScale";
import MotionVerticalProvider from "@/app/_provider/MotionVerticalProvider";
import React, { useRef } from "react";
import { PostDetail } from "./PostDetail";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Link,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  postId: string;
  currentPost: any;
  mdx: any;
  parsedToc: any;
};

export default function PostViewDashboard({
  postId,
  currentPost,
  mdx,
  parsedToc,
}: Props) {
  const postDetailRef = useRef<HTMLDivElement>(null); // Ref 추가
  const pathname = usePathname().split("/")[1];
  const router = useRouter();

  return (
    <MotionVerticalProvider
      duration={0.8}
      delay={0.6}
      fromY={100}
      toY={0}
      className={"flex flex-col gap-5"}
    >
      <div className="sticky top-16 p-3 shrink-0 w-full flex gap-3 justify-between items-center border border-item-border-light rounded-lg dark:border-item-border-dark dark:text-white backdrop-blur-md z-[50]">
        <Button
          variant="flat"
          radius="full"
          size="sm"
          isIconOnly
          className="dark:text-white"
          onPress={() => router.back()}
        >
          <IconBackToHome className="text-sm" />
        </Button>
        <Breadcrumbs size="sm" variant="light" className="grow">
          <BreadcrumbItem>{pathname}</BreadcrumbItem>
          <BreadcrumbItem id="breadcrumb-title">
            {currentPost.title}
          </BreadcrumbItem>
        </Breadcrumbs>
        <Button
          href={`/post-detail/${postId}`}
          as={Link}
          variant="flat"
          radius="full"
          size="sm"
          isIconOnly
          className="dark:text-white"
        >
          <IconScale className="text-sm" />
        </Button>
      </div>

      <Card
        isBlurred
        radius="lg"
        className="dark:text-white w-full"
        shadow="md"
        ref={postDetailRef}
      >
        <CardBody className="p-0 w-full">
          <PostDetail
            post={currentPost!}
            mdx={mdx!}
            toc={parsedToc}
            isFullSize={false}
          />
        </CardBody>
      </Card>
    </MotionVerticalProvider>
  );
}
