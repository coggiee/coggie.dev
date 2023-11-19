import IconGithub from '@/app/Icons/IconGithub';
import IconPrevBlog from '@/app/Icons/IconPrevBlog';
import Link from 'next/link';

export const Social = ({ fontSize }: { fontSize: string }) => {
  return (
    <div className={`flex items-center gap-5 text-white font-mono ${fontSize} `}>
      <div className='tooltip tooltip-bottom' data-tip='github'>
        <button className='rounded-2xl p-2 hover:bg-white text-black hover:text-black dark:hover:text-black dark:bg-[#ffffff] drop-shadow-md shadow-md'>
          <Link href='https://github.com/lunarmoon7' passHref className='text-[25px]'>
            <IconGithub />
          </Link>
        </button>
      </div>
      <div className='tooltip tooltip-bottom' data-tip='previous blog'>
        <button className='rounded-2xl p-2 hover:bg-white text-black hover:text-black dark:hover:text-black dark:bg-white drop-shadow-md shadow-md'>
          <Link href='https://velog.io/@49crehbgr' passHref className='text-[25px]'>
            <IconPrevBlog />
          </Link>
        </button>
      </div>
    </div>
  );
};
