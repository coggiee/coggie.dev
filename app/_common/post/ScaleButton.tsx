import IconScale from "@/app/_icons/IconScale";
import { Button, Link } from "@nextui-org/react";
import React from "react";

interface ScaleButtonProps {
  postId: string;
}

export default function ScaleButton({ postId }: ScaleButtonProps) {
  return (
    <Button
      href={`/post-detail/${postId}`}
      as={Link}
      variant="flat"
      radius="full"
      size="sm"
      isIconOnly
      className="dark:text-white"
      isDisabled
    >
      <IconScale className="text-sm" />
    </Button>
  );
}
