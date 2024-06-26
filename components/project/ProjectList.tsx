import { PROJECT } from "@/constants/project";
import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  return (
    <div className="w-full min-w-0 flex flex-col justify-center gap-3 font-inter flex-shrink-0 rounded-lg">
      <div className="ml-2 text-2xl font-aritaburi">Featured Projects</div>
      <div className="space-y-2">
        {PROJECT.map((item) => (
          <ProjectItem
            key={item.title}
            projectTitle={item.title}
            projectDescription={item.description}
            projectGithubLink={item.githubLink}
            projectDemoLink={item.demoLink}
          />
        ))}
      </div>
    </div>
  );
}
