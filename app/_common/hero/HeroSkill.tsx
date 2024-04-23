import React from "react";
import { skill } from "@/app/_data/skill";
import { Badge } from "@/components/ui/badge";

export default function HeroSkill() {
  return (
    <div className="flex gap-2 flex-wrap mb-5">
      {skill.map((s) => (
        <Badge key={s.title} variant="outline">
          {s.title}
        </Badge>
      ))}
    </div>
  );
}
