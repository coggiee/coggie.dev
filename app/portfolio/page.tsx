import React from "react";
import ProjectSection from "./_components/ProjectSection";
import HeroSection from "./_components/HeroSection";
import ActivitySection from "./_components/ActivitySection";
import { DockDemo } from "./_components/DockDemo";
import RetroGrid from "@/components/magicui/retro-grid";
import LandingSection from "./_components/LandingSection";

export const dynamic = "force-static";

export default function LandingPage() {
  return (
    <div className="grow flex flex-col justify-center items-center gap-30 relative pb-10">
      <div className="flex flex-col justify-center items-center gap-30 max-w-7xl">
        <LandingSection />
        <HeroSection />
        <ActivitySection />
        <ProjectSection />
        <DockDemo />
        <RetroGrid />
      </div>
    </div>
  );
}
