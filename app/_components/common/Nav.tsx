"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Menu from "./Menu";

export default function Nav() {
  const { data: session } = useSession();

  const handleOnLogin = () => {
    signIn("github");
  };

  const handleOnLogout = () => {
    signOut();
  };

  return (
    <Navbar isBlurred className="bg-transparent grow w-full flex-shrink-0">
      <NavbarBrand>
        <Link
          href="/blog"
          className="font-indieFlower text-4xl dark:text-[dodgerblue]"
        >
          Coggie
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end" className="flex items-center">
        <NavbarItem>
          <Menu session={session} handleOnLogin={handleOnLogin} handleOnLogout={handleOnLogout} />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
