"use client";

import ThemeToggle from "./ThemeToggle";
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
    <Navbar
      isBlurred
      className="bg-transparent grow w-full flex-shrink-0"
      isBordered
    >
      <NavbarBrand>
        <p className="font-amaranth text-4xl dark:text-white">Coggie.dev</p>
      </NavbarBrand>
      <NavbarContent justify="end" className="flex items-center">
        <NavbarItem>
          <Menu
            session={session}
            handleOnLogin={handleOnLogin}
            handleOnLogout={handleOnLogout}
          />
        </NavbarItem>
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
