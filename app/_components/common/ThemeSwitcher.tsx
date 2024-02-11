"use client";

import IconMoon from "@/app/_icons/IconMoon";
import IconSun from "@/app/_icons/IconSun";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: [
            "w-8 h-8 mr-0",
            "flex items-center justify-center",
            "rounded-lg text-white bg-[#8046ff] hover:bg-[#6644b2]",
          ],
          color: "warning",
        })}
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      >
        {isSelected ? <IconSun /> : <IconMoon />}
      </div>
    </Component>
  );
}
