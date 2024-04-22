import SocialGroup from "@/app/_components/common/SocialGroup";
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
          src={"https://i.ibb.co/2SwpytM/mimoji.png"}
          className="rounded-full border-2"
        />
        <aside className="flex flex-col">
          <div className="font-medium font-amaranth text-xl">
            Coggie(Moon Hwisik)
          </div>
          <div className="font-thin font-notosanskr mb-2">
            프론트엔드 개발자
          </div>
          <SocialGroup
            fontSize="text-sm"
            display="flex"
            justify="between"
            align="center"
            direction="row"
            gap={2}
          />
        </aside>
      </div>
    </section>
  );
}
