import { Card, CardHeader, CardBody } from "@nextui-org/react";
import SocialGroup from "../common/SocialGroup";
import HeroBio from "./HeroBio";
import HeroCardDetail from "./HeroCardDetail";
import Image from "next/image";

export default function HeroCard() {
  return (
    <Card
      isBlurred
      shadow="md"
      className="w-full flex-grow-0 flex-shrink-0 p-3 rounded-lg dark:bg-item-dark dark:text-white"
    >
      <CardHeader className="flex justify-between">
        <Image
          width={120}
          height={120}
          alt="profile"
          priority={true}
          src={"https://i.ibb.co/2SwpytM/mimoji.png"}
          className="rounded-full border-2"
        />
        <SocialGroup
          fontSize="text-sm"
          display="flex"
          justify="between"
          align="center"
          direction="row"
          gap={2}
        />
      </CardHeader>
      <CardBody className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <HeroCardDetail />
          <HeroBio />
        </div>
      </CardBody>
    </Card>
  );
}
