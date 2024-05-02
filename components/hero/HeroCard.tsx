import HeroBio from "./HeroBio";
import HeroCardDetail from "./HeroCardDetail";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function HeroCard() {
  return (
    <Card className="w-full flex-grow-0 flex-shrink-0 rounded-lg dark:bg-item-dark dark:text-white">
      <CardHeader className="flex flex-row justify-between">
        <Image
          width={150}
          height={150}
          alt="profile"
          priority={true}
          src={"https://avatars.githubusercontent.com/u/101445377?v=4"}
          className="rounded-md"
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
