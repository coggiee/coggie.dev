import IconGithub from '@/app/Icons/IconGithub';
import { Social } from './Social';
import IconPrevBlog from '@/app/Icons/IconPrevBlog';

export const Footer = () => {
  return (
    <footer className='w-full flex flex-col-reverse gap-2 md:flex-row justify-center items-center h-20 md:gap-5 border-t-[1px] border-t-[#dbdbdb] font-lato'>
      <div className='text-sm'>Copyright. 2023 Ⓒ Zentechie(Moon Hwisik)</div>
      <div className='flex items-center gap-5 text-black'>
        <button className='rounded-full text-2xl'>
          <IconGithub />
        </button>
      </div>
    </footer>
  );
};
