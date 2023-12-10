import React, { ChangeEvent } from 'react';

type Props = {
  handleOnSearch?: (e: ChangeEvent) => void;
  handleOnPressEnter?: (e: any) => void;
};

export default function SearchBarXS({
  handleOnSearch,
  handleOnPressEnter,
}: Props) {
  return (
    <div>
      <button className='hidden md:flex cursor-pointer justify-between items-center rounded-lg px-2 py-1 text-xs bg-item-light transition-colors hover:bg-tertiary dark:bg-[#48484853] dark:text-[white] hover:bg-hover-light w-full gap-3'>
        <input
          type='text'
          placeholder='Search with title..'
          className='input input-md input-ghost w-full max-w-full focus:bg-inherit dark:text-white font-thin font-sans focus:outline-none focus:border-none bg-inherit'
          onChange={handleOnSearch}
          onKeyDown={handleOnPressEnter}
        />
        <kbd className='kbd kbd-xs px-2 py-1 dark:bg-[#212121] min-w-max'>
          ⌘ K
        </kbd>
      </button>
    </div>
  );
}
