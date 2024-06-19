"use client";

import React from "react";
import { MonitorIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { UketBeam } from "./UketBeam";

const feature = {
  Icon: MonitorIcon,
  name: "Uket!",
  description: "사전 티켓팅을 통해 대학 축제 및 공연의 웨이팅을 줄이는 QR코드 기반 티켓팅 서비스",
  duration: "24.04 ~ now",
  href: "/portfolio/uket",
  cta: "자세히 보기",
  className: "col-span-3 lg:col-span-2",
  background: (
    <UketBeam className="absolute right-2 top-4 h-full w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
  ),
};

export function ProjectUket() {
  return (
    <BentoGrid className="grid-cols-1 auto-rows-[30rem]">
      <BentoCard {...feature} />
    </BentoGrid>
  );
}
