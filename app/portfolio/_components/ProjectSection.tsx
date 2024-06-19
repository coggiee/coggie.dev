import React from "react";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { ProjectMogakgo } from "./ProjectMogakgo";
import { ProjectUket } from "./ProjectUket";
import { ProjectBlog } from "./ProjectBlog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-20 h-screen">
      <GradualSpacing
        className="font-display text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] text-center"
        text="Project"
      />
      <main className="flex flex-col gap-10 justify-center items-center">
        <Carousel className="max-w-6xl z-10 px-5">
          <CarouselContent className="p-5">
            <CarouselItem>
              <div className="p-1">
                <ProjectUket />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <ProjectMogakgo />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <ProjectBlog />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
    </section>
  );
}
