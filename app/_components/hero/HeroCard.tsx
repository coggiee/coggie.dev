import { Avatar, Card, CardHeader, CardBody } from "@nextui-org/react";
import SocialGroup from "../common/SocialGroup";
import HeroBio from "./HeroBio";
import HeroCardDetail from "./HeroCardDetail";

type HeroCardProps = {
  src: string;
};

export default function HeroCard({ src }: HeroCardProps) {
  return (
    <Card
      isBlurred
      shadow="md"
      className="w-full flex-grow-0 flex-shrink-0 p-3 rounded-lg dark:bg-item-dark dark:text-white"
    >
      <CardHeader className="flex justify-between">
        <Avatar
          color="success"
          name="coggie"
          isBordered
          src={src}
          className="w-28 h-28 text-large bg-transparent"
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
