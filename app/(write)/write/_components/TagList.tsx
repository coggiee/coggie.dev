import React from "react";
import { Badge } from "@/components/ui/badge";

interface TagListProps {
  tagList: string[];
  onClick: (tag: string) => void;
}

export default function TagList({ tagList, onClick }: TagListProps) {
  return (
    <div className="mb-4">
      <ul className="flex flex-wrap justify-start items-center gap-2">
        {tagList.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="cursor-pointer h-8 text-lg p-4 text-[#2f90ff]"
            onClick={() => onClick(tag)}
          >
            {tag}
          </Badge>
        ))}
      </ul>
    </div>
  );
}
