import React from "react";
import dynamic from "next/dynamic";

const WriteSection = dynamic(
  () => import("@/app/write/_components/WriteSection"),
  {
    ssr: false,
  },
);

export default function page() {
  return (
    <div className="dark:text-[#fff] w-full mx-auto flex flex-col  md:flex-row gap-5 relative">
      <WriteSection />
    </div>
  );
}
