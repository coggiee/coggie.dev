import React from "react";
import HeroCard from "./HeroCard";
import { IconCloudDemo } from "./IconCloudDemo";

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-20 w-full h-screen">
      <main className="flex flex-col items-center gap-20 justify-center w-full sm:flex-row">
        <HeroCard />
        <IconCloudDemo />
      </main>
    </section>
  );
}
