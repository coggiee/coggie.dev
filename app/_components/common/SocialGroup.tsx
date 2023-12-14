import IconGithub from '@/app/_icons/IconGithub';
import IconGmail from '@/app/_icons/IconGmail';
import IconVelog from '@/app/_icons/IconVelog';
import Link from 'next/link';

interface SocialGroupProps {
  fontSize: string;
  display: string;
  justify?: string;
  align?: string;
  direction?: string;
  gap?: number;
  isGroup: boolean;
}

const customProps =
  'border border-item-border-light p-2 rounded-full bg-sub-light text-black dark:text-white dark:bg-sub-dark  dark:border-item-border-dark';

export const SocialGroup = ({
  fontSize = '14px',
  display = 'flex',
  justify = 'normal',
  align = 'normal',
  direction = 'row',
  gap = 2,
  isGroup = false,
}: SocialGroupProps) => {
  return (
    <div
      className={`${display} flex-${direction} justify-${justify} items-${align} gap-${gap} text-black dark:text-white font-mono text-[${fontSize}] self-start `}
    >
      <Link
        href='https://github.com/lunarmoon7'
        passHref
        className={`${isGroup ? customProps : ''}`}
      >
        <IconGithub />
      </Link>

      <Link
        href='https://velog.io/@49crehbgr'
        passHref
        className={`${isGroup ? customProps : ''}`}
      >
        <IconVelog />
      </Link>
      <Link
        href='mailto:zentechie7@gmail.com'
        passHref
        className={`${isGroup ? customProps : ''}`}
      >
        <IconGmail />
      </Link>
    </div>
  );
};
