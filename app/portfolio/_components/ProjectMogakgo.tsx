"use client";

import React from "react";
import { MonitorIcon } from "lucide-react";
import { MogakgoBeam } from "./MogakgoBeam";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const feature = {
  Icon: MonitorIcon,
  name: "MogakGO!",
  description: "친목 부담이 없는 위치 기반 1:1 모각코 매칭 서비스",
  duration: "24.01 ~ 24.03",
  href: "/portfolio/mogakgo",
  cta: "자세히 보기",
  className: "col-span-3 lg:col-span-2",
  background: (
    <MogakgoBeam className="absolute right-2 top-4 h-full w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
  ),
};

export function ProjectMogakgo() {
  return (
    <BentoGrid className="grid-cols-1 auto-rows-[30rem]">
      <BentoCard {...feature} />
    </BentoGrid>
  );
}
