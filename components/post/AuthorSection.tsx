import SocialGroup from "@/components/global/SocialGroup";
import Image from "next/image";
import React from "react";

export default function AuthorSection() {
  return (
    <section className="w-full flex justify-center items-center min-h-fit mb-10">
      <div className="flex items-center gap-10">
        <Image
          width={120}
          height={120}
          alt="profile"
          priority={true}
          src={"https://avatars.githubusercontent.com/u/101445377?v=4"}
          className="rounded-full"
        />
        <aside className="flex flex-col font-aritaburi">
          <div className="font-semibold text-xl">문휘식</div>
          <div className="mb-2">FE Engineer</div>
          <SocialGroup dir="justify-start" />
        </aside>
      </div>
    </section>
  );
}
