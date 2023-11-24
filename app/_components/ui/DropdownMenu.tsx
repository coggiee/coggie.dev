import IconApplemusic from '@/app/_icons/IconAppleMusic';
import IconGithub from '@/app/_icons/IconGithub';
import IconGlobe from '@/app/_icons/IconGlobe';
import IconMenu from '@/app/_icons/IconMenu';
import React from 'react';

type Props = {
  handleOnLogin: () => void;
};

export default function DropdownMenu({ handleOnLogin }: Props) {
  return (
    <details className='dropdown dropdown-bottom dropdown-end'>
      <summary className='btn p-3 m-1 bg-[white] border-none rounded-xl shadow-md hover:bg-[#c1c1c12f] dark:bg-inherit dark:text-[white]'>
        <IconMenu className='text-xl'/>
      </summary>
      <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
        {/* 플레이리스트, 언어 스위쳐, 깃허브 로그인 */}
        <li>
          <button>
            <span>Playlist</span>
            <IconApplemusic className='transition-colors hover:text-[#ff5474] dark:text-black dark:hover:text-[#ff5474]' />
          </button>
        </li>
        <li>
          <button>
            <span>Lang Switcher</span>
            <IconGlobe className='transition-colors hover:text-[#4860ff] dark:text-black dark:hover:text-[#4860ff]' />
          </button>
        </li>
        <li>
          <button onClick={handleOnLogin} className='flex items-center gap-2'>
            <span>Github Login</span>
            <IconGithub className='transition-colors hover:text-[#6945a8] dark:text-black dark:hover:text-[#6945a8]' />
          </button>
        </li>
      </ul>
    </details>
  );
}
