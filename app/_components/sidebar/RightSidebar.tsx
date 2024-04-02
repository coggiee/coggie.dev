"use client";

import React from "react";
import ProjectList from "../project/ProjectList";
import MotionVerticalProvider from "@/app/_provider/MotionVerticalProvider";

export default function RightSidebar() {
  return (
    <MotionVerticalProvider
      duration={0.8}
      delay={0.6}
      fromY={100}
      toY={0}
      className={
        "w-full flex-col gap-5 snap-start hidden min-w-0 lg:flex lg:flex-col self-start flex-grow-0 flex-shrink-0 md:snap-none"
      }
    >
      <ProjectList />
    </MotionVerticalProvider>
  );
}
