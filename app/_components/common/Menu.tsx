"use client";

import IconApplemusic from "@/app/_icons/IconAppleMusic";
import IconGithub from "@/app/_icons/IconGithub";
import IconGlobe from "@/app/_icons/IconGlobe";
import IconMenu from "@/app/_icons/IconMenu";
import React from "react";
import { DropDownProps } from "@/types/type";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  cn,
} from "@nextui-org/react";
import { IconEdit } from "@/app/_icons/IconEdit";

export default function Menu({ handleOnLogin, session }: DropDownProps) {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" variant="flat" isIconOnly>
          <IconMenu fontSize={18} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownItem
          key="music"
          shortcut="⌘N"
          description="Code with music"
          startContent={<IconApplemusic className={iconClasses} />}
          href="https://music.apple.com/kr/playlist/%EB%A7%9B%EB%8F%84%EB%A6%AC%EC%97%90%EC%9A%94/pl.u-06oxp93CYpLxloY"
        >
          Playlist
        </DropdownItem>
        <DropdownItem
          key="lang"
          shortcut="⌘C"
          description="Change your language"
          startContent={<IconGlobe className={iconClasses} />}
        >
          Language Switcher
        </DropdownItem>
        {!session && (
          <DropdownItem
            key="login"
            shortcut="⌘⇧E"
            showDivider
            description="Login with Github"
            startContent={<IconGithub className={iconClasses} />}
            onPress={handleOnLogin}
          >
            Login
          </DropdownItem>
        )}
        {session && session.user!.email === "zentechie7@gmail.com" && (
          <DropdownItem
            key="write"
            className="text-danger"
            color="danger"
            shortcut="⌘⇧D"
            description="Allows you to write post"
            startContent={
              <IconEdit className={cn(iconClasses, "text-danger")} />
            }
            href="/write"
          >
            Write Post
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
