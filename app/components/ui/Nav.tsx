'use client';

import { navLinks } from '@/app/data/navlinks';
import Link from 'next/link';
import { Avatar } from './Avatar';
import IconSearch from '../../Icons/IconSearch';
import IconApplemusic from '../../Icons/IconAppleMusic';
import IconGlobe from '../../Icons/IconGlobe';
import { usePathname } from 'next/navigation';
import IconSun from '@/app/Icons/IconSun';
import IconMoon from '@/app/Icons/IconMoon';

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='sticky top-0 left-0 h-24 px-10 text-lg flex justify-between items-center border-b border-white-400 backdrop-blur-md mb-10 z-10 flex-shrink-0 w-full'>
      <div className='flex justify-between items-center gap-10'>
        <Avatar />
        <div className='flex items-center gap-5 font-notosanskr'>
          {navLinks.map((nav) => (
            <Link
              href={nav.link}
              key={nav.title}
              className={`${
                pathname === nav.link ? 'before:w-full' : ''
              } text-lg relative before:absolute before:h-1 before:bg-[#f7ab0a] before:w-[0%] before:bottom-0 before:left-1/2 before:translate-x-[-50%] hover:before:w-full before:transition-all`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='hidden md:flex gap-5 text-[30px]'>
        <div
          className='tooltip tooltip-bottom cursor-pointer p-2 rounded-xl shadow-md drop-shadow-md'
          data-tip='search'
        >
          <IconSearch />
        </div>
        <div
          className='tooltip tooltip-bottom cursor-pointer p-2 rounded-xl shadow-md drop-shadow-md'
          data-tip='playlist'
        >
          <IconApplemusic className='transition-colors hover:text-[#ff5474]' />
        </div>
        <div
          className='tooltip tooltip-bottom cursor-pointer p-2 rounded-xl shadow-md drop-shadow-md'
          data-tip='language'
        >
          <IconGlobe className='transition-colors hover:text-[#4860ff]' />
        </div>
        <div className='flex justify-center items-center'>
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input
              type='checkbox'
              className='theme-controller'
              value='synthwave'
            />
            <IconSun className='swap-on fill-current text-[#ffde49]'/>
            <IconMoon className='swap-off fill-current text-[#8046ff]'/>
          </label>
        </div>
      </div>
    </nav>
  );
};
