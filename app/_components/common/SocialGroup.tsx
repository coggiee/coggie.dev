import IconGithub from "@/app/_icons/IconGithub";
import IconGmail from "@/app/_icons/IconGmail";
import IconVelog from "@/app/_icons/IconVelog";
import { SocialGroupProps } from "@/types/type";
import { Button, ButtonGroup, Link } from "@nextui-org/react";

export default function SocialGroup({
  fontSize = "14px",
  display = "flex",
  justify = "normal",
  align = "normal",
  direction = "row",
}: SocialGroupProps) {
  return (
    <ButtonGroup
      className={`${display} flex-${direction} justify-${justify} items-${align} text-[${fontSize}] self-start `}
    >
      <Button
        href="https://github.com/coggiee"
        as={Link}
        variant="flat"
        radius="full"
        size="md"
        isIconOnly
        aria-label="github"
      >
        <IconGithub />
      </Button>
      <Button
        href="https://velog.io/@49crehbgr"
        as={Link}
        variant="flat"
        radius="full"
        size="md"
        isIconOnly
        aria-label="velog"
      >
        <IconVelog />
      </Button>
      <Button
        href="mailto:zentechie7@gmail.com"
        as={Link}
        variant="flat"
        radius="full"
        size="md"
        isIconOnly
        aria-label="gmail"
      >
        <IconGmail />
      </Button>
    </ButtonGroup>
  );
}
