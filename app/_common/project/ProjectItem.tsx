import IconGithub from "@/app/_icons/IconGithub";
import React from "react";
import Link from "next/link";
import IconDemo from "@/app/_icons/IconDemo";
import { ProjectItemProps } from "@/types/type";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProjectItem({
  projectTitle,
  projectDescription,
  projectGithubLink,
  projectDemoLink,
}: ProjectItemProps) {
  return (
    <Card className="w-full min-w-0 grow flex-shrink-0 cursor-pointer border border-item-border-light dark:border-item-border-dark dark:bg-item-dark">
      <CardHeader></CardHeader>
      <CardContent></CardContent>
    </Card>
    // <Card
    //   isFooterBlurred
    //   isBlurred
    //   isHoverable
    //   shadow="lg"
    //   radius="lg"
    //   className="w-full min-w-0 grow flex-shrink-0 cursor-pointer border border-item-border-light dark:border-item-border-dark dark:bg-item-dark"
    // >
    //   <CardHeader className="flex flex-col gap-2 items-start">
    //     <div className="w-full text-xl font-semibold text-left font-sans">
    //       {projectTitle}
    //     </div>
    //     <div className="text-xs">{projectDescription}</div>
    //   </CardHeader>
    //   <Divider />
    //   <CardBody className="flex flex-row gap-2 p-0 px-2 py-1">
    //     <Button
    //       as={Link}
    //       href={`${projectGithubLink}`}
    //       variant="light"
    //       radius="full"
    //       isIconOnly
    //       aria-label="github"
    //       className="border-none"
    //     >
    //       <IconGithub />
    //     </Button>
    //     <Button
    //       as={Link}
    //       href={`${projectDemoLink}`}
    //       variant="light"
    //       radius="full"
    //       isIconOnly
    //       aria-label="demo"
    //       className="border-none"
    //     >
    //       <IconDemo />
    //     </Button>
    //   </CardBody>
    // </Card>
  );
}
