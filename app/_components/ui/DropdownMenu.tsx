'use client';

import IconApplemusic from '@/app/_icons/IconAppleMusic';
import IconGithub from '@/app/_icons/IconGithub';
import IconGlobe from '@/app/_icons/IconGlobe';
import IconMenu from '@/app/_icons/IconMenu';
import IconWrite from '@/app/_icons/IconWrite';
import React from 'react';
import Link from 'next/link';

type Props = {
  handleOnLogin: () => void;
  session: any;
};

export default function DropdownMenu({ handleOnLogin, session }: Props) {
  return (
    <details className='dropdown dropdown-bottom dropdown-end'>
      <summary className='btn p-3 m-1 bg-[white] border-none rounded-xl shadow-md hover:bg-[#c1c1c12f] dark:bg-inherit dark:text-[white]'>
        <IconMenu className='text-xl' />
      </summary>
      <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-lg font-thin font-sans'>
        {/* 플레이리스트, 언어 스위쳐, 깃허브 로그인, 글쓰기*/}
        <li>
          <button>
            <Link
              href='https://music.apple.com/kr/playlist/%EB%A7%9B%EB%8F%84%EB%A6%AC%EC%97%90%EC%9A%94/pl.u-06oxp93CYpLxloY'
              target='_blank'
              className='flex items-center gap-2'
            >
              <span>Playlist</span>
              <IconApplemusic className='transition-colors hover:text-[#ff5474] dark:text-black dark:hover:text-[#ff5474]' />
            </Link>
          </button>
        </li>
        <li>
          <button>
            <span>Lang Switcher</span>
            <IconGlobe className='transition-colors hover:text-[#4860ff] dark:text-black dark:hover:text-[#4860ff]' />
          </button>
        </li>
        {!session && (
          <li>
            <button onClick={handleOnLogin} className='flex items-center gap-2'>
              <span>Github Login</span>
              <IconGithub className='transition-colors hover:text-[#6945a8] dark:text-black dark:hover:text-[#6945a8]' />
            </button>
          </li>
        )}
        {session && session.user!.email === 'zentechie7@gmail.com' && (
          <li>
            <button>
              <Link href='/write' className='flex items-center gap-2'>
                <span>Write Post</span>
                <IconWrite className='transition-colors hover:text-[#5c3f27] dark:text-[black] dark:hover:text-[#5c3f27] font-bold' />
              </Link>
            </button>
          </li>
        )}
      </ul>
    </details>
  );
}
