import React from "react";
import { Chip } from "@nextui-org/react";

interface TagListProps {
  tagList: string[];
  onClick: (tag: string) => void;
}

export default function TagList({ tagList, onClick }: TagListProps) {
  return (
    <div className="mb-4">
      <ul className="flex flex-wrap justify-start items-center gap-2">
        {tagList.map((tag, index) => (
          <Chip
            key={index}
            variant="solid"
            radius="sm"
            className="cursor-pointer"
            onClose={() => onClick(tag)}
          >
            {tag}
          </Chip>
        ))}
      </ul>
    </div>
  );
}
