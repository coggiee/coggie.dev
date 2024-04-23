import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Album, Github, Mail } from "lucide-react";
import Link from "next/link";

type Direction = "justify-center" | "justify-start";

interface SocialGroupProps {
  dir?: Direction;
}

const socialItems = [
  { link: "https://github.com/coggiee", icon: <Github className="w-5 h-5" /> },
  { link: "https://velog.io/@49crehbgr", icon: <Album className="w-5 h-5" /> },
  { link: "mailto:zentechie7@gmail.com", icon: <Mail className="w-5 h-5" /> },
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
