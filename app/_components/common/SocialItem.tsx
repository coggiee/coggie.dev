import React from "react";
import { Button, Link } from "@nextui-org/react";

interface SocialItemProps {
  link: string;
  icon: React.ReactNode;
}

export default function SocialItem({ link, icon }: SocialItemProps) {
  return (
    <Button
      href={link}
      as={Link}
      variant="flat"
      radius="full"
      size="md"
      isIconOnly
      aria-label="github"
    >
      {icon}
    </Button>
  );
}
