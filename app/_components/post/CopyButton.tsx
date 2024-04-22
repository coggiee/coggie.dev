import IconLink from "@/app/_icons/IconLink";
import { Button, Tooltip } from "@nextui-org/react";
import React from "react";

interface CopyButtonProps {
  onCopy: () => void;
}

export default function CopyButton({ onCopy }: CopyButtonProps) {
  return (
    <Tooltip showArrow={true} placement="bottom" content="링크 복사">
      <Button
        size="sm"
        variant="flat"
        radius="md"
        isIconOnly
        className="rounded-full bg-[dodgerblue]/70"
        onClick={onCopy}
      >
        <IconLink />
      </Button>
    </Tooltip>
  );
}
