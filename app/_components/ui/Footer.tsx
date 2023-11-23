import IconGithub from '@/app/_icons/IconGithub';
import { Social } from './Social';
import IconPrevBlog from '@/app/_icons/IconPrevBlog';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-full flex flex-col-reverse gap-2 md:flex-row justify-center items-center h-20 md:gap-5 border-t border-t-[#dbdbdb] dark:text-white dark:border-t-[#d6d6d613]'>
      <div className='text-sm font-thin'>Copyright. 2023 Ⓒ Coggie(Moon Hwisik)</div>
      <div className='flex items-center gap-5 text-black'>
        <button className='rounded-full text-2xl dark:text-white'>
          <Link href='https://github.com/lunarmoon7' passHref>
            <IconGithub />
          </Link>
        </button>
      </div>
    </footer>
  );
};
