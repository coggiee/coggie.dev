import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from "@/utils/formatTime";
import { Calendar, Clock } from "lucide-react";
import React from "react";

type Props = {
  date: string;
  content: string;
};

export default function PostTimeBox({ date, content }: Props) {
  return (
    <time
      dateTime={date}
      className="mb-1 text-xs text-black flex flex-col justify-center gap-3"
    >
      <div className="text-xs text-black flex gap-2 items-center dark:text-[#fff]">
        <Calendar className="w-4 h-4" />
        <span>{formatCreatedAt(date)}</span>
      </div>
      <div className="text-xs text-black flex gap-2 items-center dark:text-[#fff]">
        <Clock className="w-4 h-4" />
        <span>
          {formatCreatedTime(date)} - {formatReadingMinutes(content)} min read
        </span>
      </div>
    </time>
  );
}
