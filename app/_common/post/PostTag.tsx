import React from "react";
import { Badge } from "@/components/ui/badge";

interface PostTagProps {
  tags: string[];
}

export default function PostTag({ tags }: PostTagProps) {
  return (
    <div className="flex justify-start items-center gap-2 mb-5 flex-wrap">
      {tags.map((tag: string) => (
        <Badge key={tag} variant="secondary">
          # {tag}
        </Badge>
      ))}
    </div>
  );
}
