import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import ShineBorder from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";
import { GithubIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = React.forwardRef<HTMLDivElement, ProjectItemProps>(
  ({ project }, ref) => {
    return (
      <div ref={ref} className="max-w-[300px]">
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <div className="flex flex-col gap-3">
            <header>
              <p className="text-lg font-bold">{project.title}</p>
              <p className="text-sm">{project.duration}</p>
              <p className="text-sm dark:text-[#d4d4d4]">
                {project.description}
              </p>
            </header>
            <footer className="flex gap-2 items-center">
              <Link
                href={project.demoLink}
                className="flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <GlobeIcon className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  <span className="ml-2">Website</span>
                </AnimatedShinyText>
              </Link>

              <Link
                href={project.githubLink}
                className="flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <GithubIcon className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  <span className="ml-2">Github</span>
                </AnimatedShinyText>
              </Link>
            </footer>
          </div>
        </ShineBorder>
      </div>
    );
  },
);

ProjectItem.displayName = "ProjectItem";

export default ProjectItem;
