import IconBxCalendarStar from '@/app/_icons/IconBxCalendarStar';
import IconTimerSand from '@/app/_icons/IconTimerSand';
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from '@/utils/formatTime';
import React from 'react';

type Props = {
  date: string;
  content: string;
};

export default function PostTimeBox({ date, content }: Props) {
  return (
    <time
      dateTime={date}
      className='mb-1 text-xs text-black flex flex-col justify-center gap-3'
    >
      <div className='text-xs text-black flex gap-2 items-center dark:text-[#fff]'>
        <IconBxCalendarStar />
        {formatCreatedAt(date)}
      </div>
      <div className='text-xs text-black flex gap-2 items-center dark:text-[#fff]'>
        <IconTimerSand />
        {formatCreatedTime(date)} - {formatReadingMinutes(content)} min read
      </div>
    </time>
  );
}
