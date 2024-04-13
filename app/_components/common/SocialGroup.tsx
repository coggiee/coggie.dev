import IconGithub from "@/app/_icons/IconGithub";
import IconGmail from "@/app/_icons/IconGmail";
import IconVelog from "@/app/_icons/IconVelog";
import { SocialGroupProps } from "@/types/type";
import { ButtonGroup } from "@nextui-org/react";
import SocialItem from "./SocialItem";

const socialItems = [
  { link: "https://github.com/coggiee", icon: <IconGithub /> },
  { link: "https://velog.io/@49crehbgr", icon: <IconVelog /> },
  { link: "mailto:zentechie7@gmail.com", icon: <IconGmail /> },
];

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
      {socialItems.map(({ link, icon }) => (
        <SocialItem key={link} link={link} icon={icon} />
      ))}
    </ButtonGroup>
  );
}
