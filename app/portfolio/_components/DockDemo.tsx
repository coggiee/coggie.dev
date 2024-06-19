import { Dock, DockIcon } from "@/components/magicui/dock";
import React from "react";
import { Icons } from "./Icons";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="sticky bottom-10 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg z-50">
      <Dock className="backdrop-blur-md backdrop-filter">
        <DockIcon>
          <Link href="https://github.com/coggiee">
            <Icons.gitHub className="h-6 w-6" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="https://www.linkedin.com/feed/">
            <Icons.linkedin className="h-6 w-6" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="mailto:zentechie7@gmail.com">
            <Icons.gmail className="h-6 w-6" />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
