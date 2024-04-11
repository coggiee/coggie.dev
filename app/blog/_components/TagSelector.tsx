import { Chip, cn } from "@nextui-org/react";
import React from "react";

interface TagSelectorProps {
  tagList: string[];
  onSelect: (tag: string) => void;
  selectedTag: string | null;
}

function TagSelector({ tagList, onSelect, selectedTag }: TagSelectorProps) {
  return (
    <section className="text-white font-amaranth">
      <main className="flex gap-2 flex-wrap">
        {tagList.map((tag) => (
          <Chip
            key={tag}
            radius="sm"
            color={selectedTag !== tag ? "default" : "secondary"}
            className="cursor-pointer transition-colors duration-75"
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
