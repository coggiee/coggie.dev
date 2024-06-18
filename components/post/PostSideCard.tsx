import React from "react";
import { CoverImage } from "@/types/type";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";

interface PostCardProps {
  date?: string;
  time?: string;
  title: string;
  description: string;
  tags: string[];
  coverImage?: CoverImage;
  readTimeMinutes: string;
}

export default function PostSideCard({
  title,
  description,
  tags,
  readTimeMinutes,
}: PostCardProps) {
  return (
    <Card className="border-none overflow-hidden">
      <CardHeader className="flex flex-col justify-between lg:flex-row gap-3 p-0">
        <header className="space-y-1 w-full relative">
          <CardTitle className="text-base">
            <span>{title}</span>
          </CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </header>
        <aside className="flex flex-col lg:items-end gap-1 justify-center">
          <div className="grow flex items-start gap-2">
            {tags.map((tag) => (
              <span key={tag} className="whitespace-nowrap text-xs">
                # {tag}
              </span>
            ))}
          </div>
          <div className="font-medium text-[12px] text-gray-700 flex gap-1 items-center dark:text-white whitespace-nowrap">
            <Clock className="w-3 h-3" />
            <span>{readTimeMinutes} min read</span>
          </div>
        </aside>
      </CardHeader>
    </Card>
  );
}
