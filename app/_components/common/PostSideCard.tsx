import React from 'react';

import Link from 'next/link';
import IconBxCalendarStar from '../../_icons/IconBxCalendarStar';
import IconTimerSand from '../../_icons/IconTimerSand';

interface PostCardProps {
  date: string;
  time: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
  readTimeMinutes: string;
}

export default function PostSideCard({
  date,
  time,
  title,
  description,
  path,
  tags,
  readTimeMinutes,
}: PostCardProps) {
  return (
    <div className='card rounded-none rounded-e-lg font-notosanskr m-2 dark:text-white'>
      <div className='card-body p-3 px-5'>
        <Link
          href={`/blog/${path}`}
          passHref
          className='block'
        >
          <div className='flex flex-col gap-2 basis-40 sm:basis-80'>
            <div className='flex justify-between'>
              <div className='font-medium text-[10px] text-gray-700 flex gap-2 items-center dark:text-white'>
                <IconBxCalendarStar />
                {date}
              </div>
              <div className='font-medium text-[10px] text-gray-700 flex gap-1 items-center dark:text-white'>
                <IconTimerSand />
                {time} - {readTimeMinutes} min read
              </div>
            </div>
            <h2 className='text-sm w-full break-words'>{title}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
