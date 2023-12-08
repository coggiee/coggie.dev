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
      <button className='flex cursor-pointer justify-between items-center rounded-lg px-2 py-1 text-xs bg-base-200 transition-colors hover:bg-tertiary dark:bg-[#48484853] dark:text-[white] hover:bg-[#6d6d6d2f] w-full gap-3'>
        <input
          type='text'
          placeholder='Search with title..'
          className='input input-xs input-ghost w-full max-w-full focus:bg-inherit dark:text-white font-thin font-sans focus:outline-none focus:border-none '
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
