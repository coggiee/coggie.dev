'use client';

import { navLinks } from '@/app/data/navlinks';
import Link from 'next/link';
import { Avatar } from './Avatar';
import IconSearch from '../../Icons/IconSearch';
import IconApplemusic from '../../Icons/IconAppleMusic';
import IconGlobe from '../../Icons/IconGlobe';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Tooltip } from './Tooltip';
import IconWrite from '@/app/Icons/IconWrite';
import { signIn, useSession } from 'next-auth/react';
import IconGithub from '@/app/Icons/IconGithub';
import GithubLogin from './GithubLogin';

export const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const handleOnLogin = () => {
    signIn();
  };
  return (
    <nav className='sticky top-0 left-0 h-24 px-10 text-lg flex justify-between items-center backdrop-blur-md mb-10 z-10 flex-shrink-0 w-full shadow-md'>
      <div className='flex justify-between items-center gap-10'>
        <Avatar />
        <div className='flex items-center gap-5 font-notosanskr'>
          {navLinks.map((nav) => (
            <Link
              href={nav.link}
              key={nav.title}
              className={`${
                pathname === nav.link ? 'before:w-full' : ''
              }  dark:text-[#fff] text-lg relative before:absolute before:h-1 before:bg-[#f7ab0a] before:w-[0%] before:-bottom-2 before:left-1/2 before:translate-x-[-50%] hover:before:w-full before:transition-all`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='hidden md:flex gap-5 text-[30px]'>
        {!session && <GithubLogin handleOnLogin={handleOnLogin} />}
        {session && (
          <Tooltip dataTip='write'>
            <button onClick={() => router.push('/write')}>
              <IconWrite className='transition-colors hover:text-[#5c3f27] dark:text-[#fff] dark:hover:text-[#ff5474] font-bold' />
            </button>
          </Tooltip>
        )}
        <Tooltip dataTip='search'>
          <button className=' btn-disabled'>
            <IconSearch className='dark:text-white hover:text-[#66b558] dark:hover:text-[#66b558]' />
          </button>
        </Tooltip>
        <Tooltip dataTip='playlist'>
          <button className=' btn-disabled'>
            <IconApplemusic className='transition-colors hover:text-[#ff5474] dark:text-[#fff] dark:hover:text-[#ff5474]' />
          </button>
        </Tooltip>
        <Tooltip dataTip='language'>
          <button className=' btn-disabled'>
            <IconGlobe className='transition-colors hover:text-[#4860ff] dark:text-white dark:hover:text-[#4860ff]' />
          </button>
        </Tooltip>
        <ThemeSwitcher />
      </div>
      <div className='flex items-center gap-3 text-[30px] md:hidden'>
        {!session && <GithubLogin handleOnLogin={handleOnLogin} />}
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
