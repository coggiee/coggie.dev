import HeroBio from "./HeroBio";
import HeroCardDetail from "./HeroCardDetail";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function HeroCard() {
  return (
    <Card className="w-full flex-grow-0 flex-shrink-0 rounded-lg dark:bg-item-dark dark:text-white">
      <CardHeader className="flex flex-row justify-between">
        <Image
          width={120}
          height={120}
          alt="profile"
          priority={true}
          src={"https://i.ibb.co/2SwpytM/mimoji.png"}
          className="rounded-full"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <HeroCardDetail />
          <HeroBio />
        </div>
      </CardContent>
    </Card>
  );
}
