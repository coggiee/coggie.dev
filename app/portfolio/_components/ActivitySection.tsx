import React from "react";
import { BentoGridDemo } from "./BentoGridDemo";
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function ActivitySection() {
  return (
    <section className="flex flex-col justify-center items-center gap-20 h-screen">
      <GradualSpacing
        className="font-display text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] text-center"
        text="Activity"
      />
      <BentoGridDemo />
    </section>
  );
}
