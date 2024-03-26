import React from "react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getSinglePost } from "@/app/_libs/hygraph";

const DynamicEditSection = dynamic(
  () => import("@/app/write/_components/WriteSection"),
  {
    ssr: false,
  },
);

async function getCurrentPost(postId: string) {
  const post = await getSinglePost(postId);
  return {
    post,
  };
}

export default async function WritePage({
  params,
}: {
  params: { id: string };
}) {
  const { post } = await getCurrentPost(params.id);
  return (
    <div className="dark:text-[#fff] w-full mx-auto flex flex-col  md:flex-row gap-5 relative">
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicEditSection post={post} />
      </Suspense>
    </div>
  );
}
