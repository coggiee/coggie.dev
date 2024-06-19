"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  MonitorIcon,
  PresentationIcon,
  TrophyIcon,
  GraduationCapIcon,
} from "lucide-react";

const features = [
  {
    Icon: TrophyIcon,
    name: "프로그래머스 FE 데브코스 5기 개발 우수상",
    description:
      "데브코스 백엔드 협업 최종 프로젝트에서 개발 우수상을 수상했습니다.",
    duration: "~ 24.03",
    href: "https://youtu.be/v37lEi4NNNA?si=8sb6MQ_hWE29YQyX",
    cta: "youtube",
    background: <div />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GraduationCapIcon,
    name: "해경 생체신호 센싱, 모니터링 시스템 개발",
    description:
      "해양경찰청 연구 과제로 해경 생체신호 실시간 중계 및 행위와 상태 모니터링 시스템 개발에 참여했습니다.",
    duration: "22.10 ~ 23.06",
    href: "https://phrygian-fedora-759.notion.site/2023-40a0e79bd0a5435f9d575f473795119b",
    cta: "notion",
    background: <div />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: MonitorIcon,
    name: "프로그래머스 FE 데브코스 5기",
    description: "프로그래머스 FE 데브코스 과정을 참여하고 수료했습니다.",
    duration: "23.09 ~ 24.03",
    href: "https://github.com/prgrms-fe-devcourse",
    cta: "github",
    background: <div />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: PresentationIcon,
    name: "코더랜드(엘리스) 코치",
    description: "파이썬 초 ∙ 중급 / 스크래치 강의를 진행했습니다.",
    duration: "23.05 ~ 23.11",
    href: "#",
    cta: "None",
    background: <div />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-3",
  },
];

export async function BentoGridDemo() {
  return (
    <BentoGrid className="lg:grid-rows-2 z-5">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
