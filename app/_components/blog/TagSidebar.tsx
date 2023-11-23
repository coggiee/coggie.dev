import React from 'react';
import { Tag } from '../post/Tag';

type Props = {
  tags: string[];
  handleOnClickTag: (tag: string) => void;
};

export default function TagSidebar({ tags, handleOnClickTag }: Props) {
  return (
    <div className='hidden sticky top-[120px] right-0 flex-grow-0 flex-shrink-0 w-auto h-fit basis-1/4 pb-5 md:flex flex-col gap-5 items-center font-sans border-b border-b-[#00000047] dark:border-b-[#5d5d5d]'>
      <div className='w-full flex gap-2 items-center self-start'>
        <h1 className='text-3xl font-thin dark:text-white min-w-fit'>Tags</h1>
        <div className='h-[1px] bg-[#00000047] w-full dark:bg-[#5d5d5d]'></div>
      </div>
      <div className='flex gap-2 flex-wrap'>
        {tags.map((tag) => (
          <div
            key={tag}
            className='badge border border-[#b9b9b9a8] cursor-pointer rounded-lg py-3 dark:bg-[#c1c1c12f] dark:text-white flex items-center shadow-md hover:shadow-lg hover:scale-105'
            onClick={handleOnClickTag.bind(null, tag)}
          >
            <span># {tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
