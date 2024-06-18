import { Badge } from "@/components/ui/badge";
import useQueryTotalTags from "@/hooks/query/useQueryTotalTags";
import { useSelectTag } from "@/hooks/useSelectTag";
import React from "react";

export default function  TagSelector() {
  const { tag: currentTag, handleOnSelect } = useSelectTag();

  const { data: tagList } = useQueryTotalTags();

  return (
    <section className="text-white ">
      <main className="flex gap-2 flex-wrap">
        {tagList.map((tag: any) => (
          <Badge
            key={tag}
            variant={`${currentTag === tag ? "default" : "outline"}`}
            className="cursor-pointer transition-colors duration-75  font-aritaburi dark:border-item-border-dark"
            onClick={() => handleOnSelect(tag)}
          >
            {tag}
          </Badge>
        ))}
      </main>
    </section>
  );
}
