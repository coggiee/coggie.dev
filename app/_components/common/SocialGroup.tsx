import IconGithub from '@/app/_icons/IconGithub';
import IconGmail from '@/app/_icons/IconGmail';
import IconPrevBlog from '@/app/_icons/IconPrevBlog';
import IconVelog from '@/app/_icons/IconVelog';
import Link from 'next/link';
import { Tooltip } from './Tooltip';

interface SocialGroupProps {
  fontSize: string;
  display: string;
  justify?: string;
  align?: string;
  direction?: string;
  gap?: number;
}
export const SocialGroup = ({
  fontSize = '14px',
  display = 'flex',
  justify = 'normal',
  align = 'normal',
  direction = 'row',
  gap = 2,
}: SocialGroupProps) => {
  return (
    <div
      className={`${display} flex-${direction} justify-${justify} items-${align} gap-${gap} text-white font-mono ${fontSize} self-start `}
    >
      <Link
        href='https://github.com/lunarmoon7'
        passHref
        className='border bg-sub-light dark:bg-sub-dark  border-item-border-light dark:border-item-border-dark p-2 rounded-full'
      >
        <IconGithub />
      </Link>

      <Link
        href='https://velog.io/@49crehbgr'
        passHref
        className='border bg-sub-light dark:bg-sub-dark  border-item-border-light dark:border-item-border-dark p-2 rounded-full'
      >
        <IconVelog />
      </Link>
      <Link
        href='mailto:zentechie7@gmail.com'
        passHref
        className='border bg-sub-light dark:bg-sub-dark  border-item-border-light dark:border-item-border-dark p-2 rounded-full'
      >
        <IconGmail />
      </Link>
    </div>
  );
};

// border bg-sub-light dark:bg-sub-dark  border-item-border-light dark:border-item-border-dark
