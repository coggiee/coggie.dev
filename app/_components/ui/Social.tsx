import IconGithub from '@/app/_icons/IconGithub';
import IconGmail from '@/app/_icons/IconGmail';
import IconPrevBlog from '@/app/_icons/IconPrevBlog';
import IconVelog from '@/app/_icons/IconVelog';
import Link from 'next/link';

export const Social = ({ fontSize }: { fontSize: string }) => {
  return (
    <div
      className={`flex items-center gap-2 text-white font-mono ${fontSize} `}
    >
      <div className='tooltip tooltip-bottom' data-tip='github'>
        <button className=' p-2 hover:bg-white text-black hover:text-black dark:hover:text-black dark:text-white '>
          <Link
            href='https://github.com/lunarmoon7'
            passHref
            className='text-[25px]'
          >
            <IconGithub />
          </Link>
        </button>
      </div>
      <div className='tooltip tooltip-bottom' data-tip='previous blog'>
        <button className='p-2 hover:bg-white text-black hover:text-black dark:hover:text-black dark:text-white'>
          <Link
            href='https://velog.io/@49crehbgr'
            passHref
            className='text-[25px]'
          >
            <IconVelog />
          </Link>
        </button>
      </div>
      <div className='tooltip tooltip-bottom' data-tip='mail'>
        <button className='p-2 hover:bg-white text-black hover:text-black dark:hover:text-black dark:text-white'>
          <Link
            href='mailto:zentechie7@gmail.com'
            passHref
            className='text-[25px]'
          >
            <IconGmail />
          </Link>
        </button>
      </div>
    </div>
  );
};
