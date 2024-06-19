import React from "react";
import Link from "next/link";
import { ProjectItemProps } from "@/types/type";

import { GithubIcon, GlobeIcon } from "lucide-react";
import { MagicCard } from "../magicui/magic-card";
import ShimmerButton from "../magicui/shimmer-button";

export default function ProjectItem({
  projectTitle,
  projectDescription,
  projectGithubLink,
  projectDemoLink,
}: ProjectItemProps) {
  return (
    <MagicCard className="flex flex-col gap-2 overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] shadow-2xl">
      <header>
        <p className="font-bold text-xl">{projectTitle}</p>
        <p>{projectDescription}</p>
      </header>
      <section className="flex gap-2">
        <Link href={projectGithubLink}>
          <ShimmerButton className="p-2">
            <GithubIcon className="h-4 w-4 dark:text-white" />
          </ShimmerButton>
        </Link>
        <Link href={projectGithubLink}>
          <ShimmerButton className="p-2">
            <GlobeIcon className="h-4 w-4 dark:text-white" />
          </ShimmerButton>
        </Link>
      </section>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
    </MagicCard>
  );
}
