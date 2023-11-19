import IconGithub from '@/app/Icons/IconGithub';
import IconPrevBlog from '@/app/Icons/IconPrevBlog';
import Link from 'next/link';

export const Social = ({ fontSize }: { fontSize: string }) => {
  return (
    <div className={`flex items-center gap-5 text-white font-mono ${fontSize} `}>
      <div className='tooltip tooltip-bottom' data-tip='github'>
        <button className='border-[1px] border-black p-3 bg-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black'>
          <Link href='https://github.com/lunarmoon7' passHref>
            <IconGithub />
          </Link>
        </button>
      </div>
      <div className='tooltip tooltip-bottom' data-tip='previous blog'>
        <button className='border-[1px] border-black p-3 bg-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black'>
          <Link href='https://velog.io/@49crehbgr' passHref>
            <IconPrevBlog />
          </Link>
        </button>
      </div>
    </div>
  );
};
