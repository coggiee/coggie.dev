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
                <MenubarItem className="cursor-pointer" disabled>
                  <p className="flex items-center gap-2">
                    <Languages className="w-4 h-4" />
                    <span>Language</span>
                  </p>
                </MenubarItem>
                <MenubarSeparator />
                {session && session.user!.email === "zentechie7@gmail.com" && (
                  <MenubarItem className="cursor-pointer">
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
