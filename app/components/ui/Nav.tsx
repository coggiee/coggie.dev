import { navLinks } from '@/app/data/navlinks';
import Link from 'next/link';
import { Logo } from './Logo';
import IconSearch from '../../Icons/IconSearch';
import IconApplemusic from '../../Icons/IconAppleMusic';
import IconGlobe from '../../Icons/IconGlobe';

export const Nav = () => {
  return (
    <nav className='sticky top-0 left-0 h-24 px-10 text-lg flex justify-between items-center border-b border-white-400 backdrop-blur-md mb-10 z-10 flex-shrink-0 w-full'>
      <div className='flex justify-between items-center gap-5'>
        <Logo />
        <div className='flex items-center gap-5 font-blackHanSans'>
          {navLinks.map((nav) => (
            <Link href={nav.link} key={nav.title} className='text-2xl'>
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='hidden md:flex gap-5 text-[30px]'>
        <div className='cursor-pointer p-2 rounded-xl shadow-md drop-shadow-md'>
          <IconSearch />
        </div>
        <div
          className='cursor-pointer p-2 rounded-xl shadow-md drop-shadow-md'
          aria-label='playlist'
        >
          <IconApplemusic className='transition-colors hover:text-[#ff5474]' />
        </div>
        <div className='cursor-pointer p-2 rounded-xl shadow-md drop-shadow-md'>
          <IconGlobe className='transition-colors hover:text-[#4860ff]' />
        </div>
      </div>
    </nav>
  );
};
