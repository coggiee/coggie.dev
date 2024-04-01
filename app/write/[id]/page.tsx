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

export default async function WritePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="dark:text-[#fff] w-full mx-auto flex flex-col  md:flex-row gap-5 relative">
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicEditSection />
      </Suspense>
    </div>
  );
}
