'use client';

import React, { ChangeEvent } from 'react';

type Props = {
  handleOnSearch: (e: ChangeEvent) => void;
  handleOnPressEnter: (e: any) => void;
};

export default function SearchBar({
  handleOnSearch,
  handleOnPressEnter,
}: Props) {
  return (
    <div>
      <button
        className='flex cursor-pointer justify-between sm:justify-normal items-center rounded-lg p-2 text-xs bg-base-200 transition-colors hover:bg-tertiary dark:bg-[#48484853] dark:text-[white] hover:bg-[#6d6d6d2f] w-full'
        onClick={() => document.getElementById('search_modal')!.showModal()}
      >
        <span className='px-3'>Search...</span>
        <kbd className='kbd dark:bg-[#212121]'>⌘ K</kbd>
      </button>
      <dialog id='search_modal' className='modal'>
        <div className='modal-box flex flex-col items-center justify-center'>
          <div className='form-control w-full flex flex-row justify-center items-center gap-3'>
            {/* <label className='label'>
              <span className='label-text'>Search post..</span>
            </label> */}
            <input
              type='text'
              placeholder='Search with title..'
              className='input input-md input-ghost w-full max-w-xs sm:max-w-sm'
            />
            <kbd className='kbd'>Enter</kbd>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop backdrop-blur-sm'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
