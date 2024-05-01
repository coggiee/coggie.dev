import React from "react";
import dynamic from "next/dynamic";

const WriteSection = dynamic(
  () => import("@/app/write/_components/WriteSection"),
  {
    ssr: false,
  },
);

export default function page() {
  return <WriteSection />;
}
