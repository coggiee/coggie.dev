import IconGithub from '@/app/Icons/IconGithub';
import { Social } from './Social';
import IconPrevBlog from '@/app/Icons/IconPrevBlog';

export const Footer = () => {
  return (
    <footer className='w-full flex flex-col md:flex-row justify-center items-center h-20 gap-5 border-[1px] border-t-[#dbdbdb]'>
      <div className='text-sm font-mono'>
        Copyright. 2023 Ⓒ Zentechie(Moon Hwisik)
      </div>
      <div className='flex items-center gap-5 text-black'>
        <button className='rounded-full text-2xl'>
          <IconGithub />
        </button>
      </div>
    </footer>
  );
};
