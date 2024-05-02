import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import SocialGroup from "../global/SocialGroup";

const socialItems = [
  { title: "github", link: "https://github.com/coggiee" },
  { title: "mail", link: "mailto:zentechie7@gmail.com" },
];

export default function HeroCardDetail() {
  return (
    <main className="flex flex-col gap-3 font-aritaburi">
      <h1 className="text-base leading-tight">
        <p>FE 개발자 문휘식</p>
      </h1>
      <div className="flex flex-col gap-1 text-xs">
        <span>모든 것은 나에 대한 이해로부터 나온다</span>
      </div>
      <SocialGroup dir="justify-start" />
    </main>
  );
}
