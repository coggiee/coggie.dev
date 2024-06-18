import React from "react";
import Link from "next/link";
import { ProjectItemProps } from "@/types/type";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, GlobeIcon } from "lucide-react";

export default function ProjectItem({
  projectTitle,
  projectDescription,
  projectGithubLink,
  projectDemoLink,
}: ProjectItemProps) {
  return (
    <Card className="w-full min-w-0 grow flex-shrink-0 cursor-pointer font-aritaburi">
      <CardHeader>
        <CardTitle>{projectTitle}</CardTitle>
        <CardDescription>{projectDescription}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-row gap-2 p-0 px-2 py-1">
        <Button variant="ghost" size="icon" asChild>
          <Link href={projectGithubLink}>
            <Github className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href={projectDemoLink}>
            <GlobeIcon className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
