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
        <p>FE 엔지니어 문휘식입니다.</p>
      </h1>
      <div className="flex flex-col gap-1 text-xs">
        <span>내 뜻대로 돌아가지 않는 세상, 내 뜻대로 돌아가게 만들겠다.</span>
      </div>
      <SocialGroup dir="justify-start" />
    </main>
  );
}
