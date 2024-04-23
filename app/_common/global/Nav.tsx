"use client";

import ThemeToggle from "./ThemeToggle";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Languages, Menu, Music, NotebookPen, ScanFace } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  const { data: session } = useSession();

  const handleOnLogin = () => {
    signIn("github");
  };

  const handleOnLogout = () => {
    signOut();
  };

  return (
    <nav className="w-full sticky top-0 border-b z-10 bg-white">
      <main className="container flex justify-between items-center py-3 w-full">
        <Link href="/" className="font-aritaburi text-2xl">
          Coggie.dev
        </Link>
        <div className="flex gap-3">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="p-1 cursor-pointer">
                <Menu />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link
                    href="https://music.apple.com/kr/playlist/%EB%A7%9B%EB%8F%84%EB%A6%AC%EC%97%90%EC%9A%94/pl.u-06oxp93CYpLxloY"
                    className="flex items-center gap-3"
                  >
                    <Music className="w-4 h-4" />
                    <span>Playlist</span>
                  </Link>
                </MenubarItem>
                <MenubarItem className="cursor-pointer">
                  <p className="flex items-center gap-2">
                    <Languages className="w-4 h-4" />
                    Language
                  </p>
                  <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                {session && session.user!.email === "zentechie7@gmail.com" && (
                  <MenubarItem className="cursor-pointer">
                    <Link href="/write" className="flex items-center gap-3">
                      <NotebookPen />
                      <span>Write Post</span>
                    </Link>
                  </MenubarItem>
                )}
                <MenubarItem onClick={session ? handleOnLogout : handleOnLogin}>
                  <p className="flex items-center gap-2">
                    <ScanFace className="w-4 h-4" />{" "}
                    {session ? "Logout" : "Login"}
                  </p>
                  <MenubarShortcut>⌘⇧L</MenubarShortcut>
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
