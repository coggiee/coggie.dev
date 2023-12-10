import Link from 'next/link';
import React from 'react';

type Props = {};

export default function MorePostLink({}: Props) {
  return (
    <Link href='/blog'>
      <div className='p-2 text-xs rounded-lg transition-all duration-200 ease-in-out drop-shadow-lg border border-item-border-light bg-sub-light dark:bg-sub-dark dark:border-item-border-dark dark:text-white hover:scale-105 hover:bg-hover-light dark:hover:bg-hover-dark hover:animate-bounce'>
        More Posts
      </div>
    </Link>
  );
}
