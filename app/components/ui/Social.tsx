import IconGithub from '@/app/Icons/IconGithub';
import IconPrevBlog from '@/app/Icons/IconPrevBlog';

export const Social = ({ fontSize }: { fontSize: string }) => {
  return (
    <div
      className={`flex items-center gap-5 text-white font-mono ${fontSize}`}
    >
      <div className='tooltip tooltip-bottom' data-tip='github'>
        <button className='border-[1px] border-black p-3 bg-black rounded-full hover:bg-white hover:text-black'>
          <IconGithub />
        </button>
      </div>
      <div className='tooltip tooltip-bottom' data-tip='previous blog'>
        <button className='border-[1px] border-black p-3 bg-black rounded-full hover:bg-white hover:text-black'>
          <IconPrevBlog />
        </button>
      </div>
    </div>
  );
};
