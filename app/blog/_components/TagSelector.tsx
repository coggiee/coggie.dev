import { Chip, cn } from "@nextui-org/react";
import React from "react";

interface TagSelectorProps {
  tagList: string[];
  onSelect: (tag: string) => void;
  selectedTag: string | null;
}

function TagSelector({ tagList, onSelect, selectedTag }: TagSelectorProps) {
  return (
    <section className="text-white">
      <main className="flex gap-2">
        {tagList.map((tag) => (
          <Chip
            key={tag}
            variant="dot"
            radius="lg"
            color={selectedTag !== tag ? "default" : "primary"}
            className="cursor-pointer"
            onClick={() => onSelect(tag)}
          >
            {tag}
          </Chip>
        ))}
      </main>
    </section>
  );
}

export default TagSelector;
