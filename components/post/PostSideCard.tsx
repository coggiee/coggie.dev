import React from "react";
import { CoverImage } from "@/types/type";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Clock } from "lucide-react";

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
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative w-full h-52 flex-shrink-0 overflow-hidden">
          {coverImage && (
            <Image
              src={coverImage.url}
              width={100}
              height={100}
              quality={50}
              priority={true}
              alt={coverImage.fileName}
              className="w-full h-full absolute object-cover"
            />
          )}
          <Badge
            className="absolute right-3 top-3 font-medium text-[12px] text-white flex gap-2 items-center dark:text-white font-aritaburi bg-[#232323]"
            variant="default"
          >
            <span>{date}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-5 space-y-5 font-aritaburi">
        <div className="flex flex-col gap-10 grow w-full min-w-0">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl w-full truncate">{title}</h2>
            <p className="text-sm w-full truncate">{description}</p>
          </div>
          <div className="grow flex items-end gap-2 flex-wrap">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                # {tag}
              </Badge>
            ))}
          </div>
        </div>
        <CardFooter className="p-0">
          <div className="font-medium text-[12px] text-gray-700 flex gap-1 items-center dark:text-white">
            <Clock className="w-3 h-3" />
            <span>
              {time} - {readTimeMinutes} min read
            </span>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
