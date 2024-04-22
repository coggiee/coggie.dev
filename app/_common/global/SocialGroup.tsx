import IconGithub from "@/app/_icons/IconGithub";
import IconGmail from "@/app/_icons/IconGmail";
import IconVelog from "@/app/_icons/IconVelog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Direction = "justify-center" | "justify-start";

interface SocialGroupProps {
  dir?: Direction;
}

const socialItems = [
  { link: "https://github.com/coggiee", icon: <IconGithub /> },
  { link: "https://velog.io/@49crehbgr", icon: <IconVelog /> },
  { link: "mailto:zentechie7@gmail.com", icon: <IconGmail /> },
];

export default function SocialGroup({ dir }: SocialGroupProps) {
  return (
    <aside className={cn("flex h-fit gap-1", dir ?? "justify-center")}>
      {socialItems.map(({ link, icon }) => (
        <Button asChild variant="ghost" key={link} size="icon">
          <Link key={link} href={link}>
            {icon}
          </Link>
        </Button>
      ))}
    </aside>
  );
}
