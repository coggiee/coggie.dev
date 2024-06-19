import React from "react";
import MotionVerticalProvider from "@/provider/MotionVerticalProvider";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import HeroCard from "../hero/HeroCard";
import ShineBorder from "../magicui/shine-border";
import { BorderBeam } from "../magicui/border-beam";

export default function InfoSiderbar() {
  return (
    <MotionVerticalProvider
      duration={0.8}
      delay={0.6}
      fromY={100}
      toY={0}
      className={"w-full flex flex-col gap-3 flex-shrink-0"}
    >
      {/* <HeroCard /> */}
      {/* <NeonGradientCard>
        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Neon Gradient Card
        </span>
      </NeonGradientCard> */}
      <ShineBorder
        className="text-center text-2xl font-bold capitalize"
      >
        Shine Border
      </ShineBorder>
    </MotionVerticalProvider>
  );
}
