import React from "react";
import IconCheck from "@/app/_icons/IconCheck";
import { Chip } from "@nextui-org/react";

interface PostTagProps {
  tags: string[];
}

export default function PostTag({ tags }: PostTagProps) {
  return (
    <div className="flex justify-start items-center gap-2 mb-5 flex-wrap">
      {tags.map((tag: string) => (
        <Chip
          startContent={<IconCheck fontSize={18} className="mr-1" />}
          key={tag}
          size="sm"
          radius="sm"
          variant="flat"
        >
          {tag}
        </Chip>
      ))}
    </div>
  );
}
