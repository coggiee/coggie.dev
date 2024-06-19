import { PROJECT } from "@/constants/project";
import React from "react";
import ProjectItem from "./ProjectItem";
import { MagicContainer } from "../magicui/magic-card";

export default function ProjectList() {
  return (
    <MagicContainer className="flex flex-col gap-3">
      {PROJECT.map((item) => (
        <ProjectItem
          key={item.title}
          projectTitle={item.title}
          projectDescription={item.description}
          projectGithubLink={item.githubLink}
          projectDemoLink={item.demoLink}
        />
      ))}
    </MagicContainer>
  );
}
