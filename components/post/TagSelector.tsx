import { Badge } from "@/components/ui/badge";
import React from "react";

interface TagSelectorProps {
  tagList: string[];
  onSelect: (tag: string) => void;
  selectedTag: string | null;
}

function TagSelector({ tagList, onSelect, selectedTag }: TagSelectorProps) {
  return (
    <section className="text-white ">
      <main className="flex gap-2 flex-wrap">
        {tagList.map((tag) => (
          <Badge
            key={tag}
            variant={`${selectedTag === tag ? "default" : "outline"}`}
            className="cursor-pointer transition-colors duration-75  font-aritaburi dark:border-item-border-dark"
            onClick={() => onSelect(tag)}
          >
            {tag}
          </Badge>
        ))}
      </main>
    </section>
  );
}

export default TagSelector;
