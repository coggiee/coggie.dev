import React from 'react';

type Props = {
  tags: string[];
  handleOnClickTag: (tag: string) => void;
  selectedTag: string;
};

export default function TagFilter({ tags, handleOnClickTag, selectedTag }: Props) {
  return (
    <div className='w-full mb-5 flex flex-col'>
      <div className='w-full flex gap-2 items-center self-start flex-shrink-0 mb-3'>
        <h1 className='text-3xl font-thin font-sans dark:text-white min-w-fit'>
          Tags
        </h1>
        <div className='h-[1px] bg-[#00000047] w-full dark:bg-[#5d5d5d]'></div>
      </div>
      <ul className='flex flex-grow items-center gap-2 flex-shrink-0 flex-wrap md:flex-nowrap md:overflow-x-scroll md:overscroll-none md:scrollbar-thin md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#f7ab0a]/80 p-3'>
        {tags.map((tag) => (
          <li
            key={tag}
            className={`badge border border-[#f7ab0a] cursor-pointer rounded-lg py-5 dark:bg-[#dfd1d12f] dark:text-white shadow-md hover:shadow-lg flex-shrink-0 font-thin font-sans text-lg hover:bg-[#f7ab0a] hover:text-white transition-all ease-in-out dark:hover:bg-[#f7ab0a] dark:hover:text-white ${selectedTag === tag? 'bg-[#f7ab0a] text-white' : ''}}`}
            onClick={handleOnClickTag.bind(null, tag)}
          >
            <span># {tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
