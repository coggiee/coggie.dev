"use client";

import React from "react";
import { MonitorIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import BlogBeam from "./BlogBeam";

const feature = {
  Icon: MonitorIcon,
  name: "Dev Blog",
  description: "재빌드와 재배포 프로세스를 생략한 온 포스팅 기술 블로그",
  duration: "23.11 ~ now",
  href: "/portfolio/devblog",
  cta: "자세히 보기",
  className: "col-span-3 lg:col-span-2",
  background: (
    <BlogBeam className="absolute right-2 top-4 h-full w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
  ),
};

export function ProjectBlog() {
  return (
    <BentoGrid className="grid-cols-1 auto-rows-[30rem]">
      <BentoCard {...feature} />
    </BentoGrid>
  );
}
