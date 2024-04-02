import React from "react";
import { skill } from "@/app/_data/skill";
import { Chip } from "@nextui-org/react";

export default function HeroSkill() {
  return (
    <div className="flex gap-2 flex-wrap mb-5">
      {skill.map((s) => (
        <Chip
          key={s.title}
          variant="solid"
          size="sm"
          radius="sm"
          color="default"
        >
          {s.title}
        </Chip>
      ))}
    </div>
  );
}
