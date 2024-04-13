import React from "react";
import IconBxCalendarStar from "../../_icons/IconBxCalendarStar";
import IconTimerSand from "../../_icons/IconTimerSand";
import { CoverImage } from "@/types/type";
import IconNoImage from "@/app/_icons/IconNoImage";
import { Card, CardBody, Chip } from "@nextui-org/react";
import IconCheck from "@/app/_icons/IconCheck";
import Image from "next/image";

interface PostCardProps {
  date: string;
  time: string;
  title: string;
  description: string;
  tags: string[];
  coverImage?: CoverImage;
  readTimeMinutes: string;
}

export default function PostSideCard({
  date,
  time,
  title,
  description,
  tags,
  coverImage,
  readTimeMinutes,
}: PostCardProps) {
  return (
    <Card
      isHoverable
      shadow="none"
      className="font-notosanskr cursor-pointer rounded-lg"
    >
      <CardBody className="p-2 dark:bg-item-dark dark:hover:bg-item-dark/30">
        <div className="flex flex-row gap-5">
          <div className="relative w-32 h-32 flex-shrink-0 rounded-lg">
            {coverImage && (
              <Image
                src={coverImage.url}
                width={300}
                height={300}
                quality={30}
                priority={true}
                alt={coverImage.fileName}
                className="h-32 object-cover absolute rounded-lg"
              />
            )}
            {!coverImage && (
              <IconNoImage className="rounded-lg w-full h-full text-[#9c9c9c] dark:text-[#7b7b7b]" />
            )}
          </div>
          <div className="flex flex-col gap-2 grow w-full min-w-0">
            <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between">
              <div className="font-medium text-[12px] text-gray-700 flex gap-2 items-center dark:text-white">
                <IconBxCalendarStar />
                {date}
              </div>
              <div className="font-medium text-[12px] text-gray-700 flex gap-1 items-center dark:text-white">
                <IconTimerSand />
                {time} - {readTimeMinutes} min read
              </div>
            </div>
            <div className="flex flex-col gap-3 font-notosanskr">
              <h2 className="font-semibold text-sm w-full truncate">{title}</h2>
              <p className="text-xs w-full truncate">{description}</p>
            </div>
            <div className="grow flex items-end gap-2 ">
              {tags.map((tag) => (
                <Chip
                  startContent={<IconCheck fontSize={18} className="mr-1" />}
                  key={tag}
                  size="sm"
                  radius="sm"
                  variant="flat"
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
