import React from 'react';

type Props = {};

export default function SearchBarXS({}: Props) {
  return (
    <div>
      <button className='flex cursor-pointer justify-between sm:justify-normal items-center rounded-lg p-2 text-xs bg-base-200 transition-colors hover:bg-tertiary dark:bg-[#48484853] dark:text-[white] hover:bg-[#6d6d6d2f] w-full'>
        <input
          type='text'
          autoFocus
          placeholder='Search with title..'
          className='input input-md input-ghost w-full max-w-xs sm:max-w-sm focus:bg-inherit dark:text-white font-thin font-sans'
        />
        <kbd className='kbd kbd-md dark:bg-[#212121]'>⌘ K</kbd>
      </button>
    </div>
  );
}
