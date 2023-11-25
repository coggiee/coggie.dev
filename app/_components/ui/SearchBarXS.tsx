import React, { ChangeEvent } from 'react';

type Props = {
  handleOnSearch: (e: ChangeEvent) => void;
  handleOnPressEnter: (e: any) => void;
};

export default function SearchBarXS({
  handleOnSearch,
  handleOnPressEnter,
}: Props) {
  return (
    <div>
      <button className='flex cursor-pointer justify-between items-center rounded-lg p-2 text-xs bg-base-200 transition-colors hover:bg-tertiary dark:bg-[#48484853] dark:text-[white] hover:bg-[#6d6d6d2f] w-full gap-3 mb-5'>
        <input
          type='text'
          placeholder='Search with title..'
          className='input input-md input-ghost w-full max-w-full focus:bg-inherit dark:text-white font-thin font-sans'
          onChange={handleOnSearch}
          onKeyDown={handleOnPressEnter}
        />
        <kbd className='kbd kbd-md dark:bg-[#212121] min-w-max'>⌘ K</kbd>
      </button>
    </div>
  );
}
