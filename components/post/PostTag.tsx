import React from "react";
import { Badge } from "@/components/ui/badge";

interface PostTagProps {
  tags: string[];
}

export default function PostTag({ tags }: PostTagProps) {
  return (
    <div className="flex justify-start items-center gap-2 mb-5 flex-wrap">
      {tags.map((tag: string) => (
        <Badge key={tag} variant="secondary" className="dark:bg-item-dark border dark:border-item-border-dark dark:hover:bg-hover-light">
          <span># {tag}</span>
        </Badge>
      ))}
    </div>
  );
}
