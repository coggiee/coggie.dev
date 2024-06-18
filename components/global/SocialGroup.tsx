import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Album, Github, Mail } from "lucide-react";
import Link from "next/link";

type Direction = "justify-center" | "justify-start";

interface SocialGroupProps {
  dir?: Direction;
}

const socialItems = [
  { title: "github", link: "https://github.com/coggiee" },
  { title: "mail", link: "mailto:zentechie7@gmail.com" },
];

export default function SocialGroup({ dir }: SocialGroupProps) {
  return (
    <aside className={cn("flex h-fit mt-0 gap-2", dir ?? "justify-center")}>
      {socialItems.map(({ title, link }) => (
        <Button
          key={title}
          asChild
          variant="link"
          className="p-0 after:content-['_↗'] h-fit"
        >
          <Link href={link}>
            {title}
          </Link>
        </Button>
      ))}
    </aside>
  );
}
