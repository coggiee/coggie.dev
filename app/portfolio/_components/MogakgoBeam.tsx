"use client";

import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { Icons } from "./Icons";
import { Circle } from "./Circle";
import { cn } from "@/lib/utils";

export function MogakgoBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row-reverse items-center justify-between gap-60">
        <div className="flex flex-col items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.nextjs className="h-6 w-6" />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.reactQuery className="h-6 w-6" />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.tailwindcss className="h-6 w-6" />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.pwa className="h-6 w-6" />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.firebase className="h-6 w-6" />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.typescript className="h-6 w-6" />
          </Circle>
          <Circle ref={div8Ref}>
            <Icons.websocket className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-col items-center justify-between">
          <Circle ref={div4Ref}>
            <Icons.user className="h-6 w-6 dark:text-black" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        reverse
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        reverse
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
        curvature={75}
        reverse
        endYOffset={10}
      />
    </div>
  );
}
