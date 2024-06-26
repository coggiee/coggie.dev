"use client";

import ThemeToggle from "./ThemeToggle";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Languages, Menu, Music, NotebookPen, ScanFace } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Nav() {
  const { data: session } = useSession();

  const handleOnLogin = () => {
    signIn();
  };

  const handleOnLogout = () => {
    signOut();
  };

  return (
    <nav className="w-full sticky top-0 border-b border-item-border-light dark:border-item-border-dark z-10 dark:text-white bg-light/50 backdrop-blur-md dark:bg-dark/50">
      <main className="container flex justify-between items-center py-3 w-full">
        <Link href="/" className="font-aritaburi text-2xl">
          coggie.dev
        </Link>
        <div className="flex gap-1">
          <Menubar className="bg-transparent cursor-pointer border-none">
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </MenubarTrigger>
              <MenubarContent className="font-aritaburi">
                <MenubarItem>
                  <Link
                    href="https://music.apple.com/kr/playlist/%EB%A7%9B%EB%8F%84%EB%A6%AC%EC%97%90%EC%9A%94/pl.u-06oxp93CYpLxloY"
                    className="flex items-center gap-2"
                  >
                    <Music className="w-4 h-4" />
                    <span>Playlist</span>
                  </Link>
                </MenubarItem>
                <MenubarItem disabled>
                  <p className="flex items-center gap-2">
                    <Languages className="w-4 h-4" />
                    <span>Language</span>
                  </p>
                </MenubarItem>
                <MenubarSeparator />
                {session && session.user!.email === "zentechie7@gmail.com" && (
                  <MenubarItem>
                    <Link href="/write" className="flex items-center gap-2">
                      <NotebookPen className="w-4 h-4" />
                      <span>Write Post</span>
                    </Link>
                  </MenubarItem>
                )}
                <MenubarItem onClick={session ? handleOnLogout : handleOnLogin}>
                  <p className="flex items-center gap-2">
                    <ScanFace className="w-4 h-4" />
                    <span>{session ? "Logout" : "Login"}</span>
                  </p>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <ThemeToggle />
        </div>
      </main>
    </nav>
  );
}
