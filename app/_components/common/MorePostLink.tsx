import IconWrite from '@/app/_icons/IconWrite';
import Link from 'next/link';
import React from 'react';

const MorePostLink = () => {
  return (
    <Link href='/blog'>
      <div className='flex gap-2 items-center p-2 text-[10px] font-bold rounded-lg transition-all duration-200 ease-in-out border border-item-border-light bg-sub-light dark:bg-sub-dark dark:border-item-border-dark dark:text-white hover:scale-105 hover:bg-hover-light dark:hover:bg-hover-dark hover:animate-bounce'>
        <span>More Posts</span>
        <IconWrite className='font-bold' />
      </div>
    </Link>
  );
}

export default MorePostLink;