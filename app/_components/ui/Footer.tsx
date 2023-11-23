import IconGithub from '@/app/_icons/IconGithub';
import { Social } from './Social';
import IconPrevBlog from '@/app/_icons/IconPrevBlog';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-full flex flex-col-reverse gap-2 md:flex-row justify-center items-center h-20 md:gap-5 border-t border-t-[#dbdbdb] font-lato dark:text-white dark:border-t-[#c1c1c12f]'>
      <div className='text-sm'>Copyright. 2023 Ⓒ Zentechie(Moon Hwisik)</div>
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
