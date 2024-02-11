import React from 'react';
import { TagFilterProps } from '@/types/type';

export default function TagSidebar({ tags, handleOnClickTag }: TagFilterProps) {
  return (
    <aside className='hidden sticky top-[120px] right-0 flex-shrink-0 min-w-[170px] flex-grow-0 h-fit max-w-[170px] px-2 pb-5 md:flex flex-col gap-5 items-center font-sans border-b border-b-[#00000047] dark:border-b-[#5d5d5d] overflow-y-scroll overscroll-none'>
      <div className='w-full flex gap-2 items-center self-start flex-shrink-0'>
        <h1 className='text-3xl font-thin dark:text-white min-w-fit'>Tags</h1>
        <div className='h-[1px] bg-[#00000047] w-full dark:bg-[#5d5d5d]'></div>
      </div>
      <ul className='flex gap-2 flex-wrap flex-shrink-0 h-[200px] overflow-y-scroll overscroll-none scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 pr-2 p-2'>
        {tags.map((tag) => (
          <li
            key={tag}
            className='w-full badge border border-[#f7ab0a] cursor-pointer rounded-lg py-5 dark:bg-[#c1c1c12f] dark:text-white flex justify-start items-center shadow-md hover:shadow-lg hover:scale-105 flex-shrink-0 font-thin font-sans text-lg'
            onClick={handleOnClickTag.bind(null, tag)}
          >
            <span># {tag}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
