import IconGithub from '@/app/_icons/IconGithub';
import IconGmail from '@/app/_icons/IconGmail';
import IconPrevBlog from '@/app/_icons/IconPrevBlog';
import IconVelog from '@/app/_icons/IconVelog';
import Link from 'next/link';
import { Tooltip } from './Tooltip';

interface SocialGroupProps {
  fontSize: string;
  justify?: string;
  align?: string;
}
export const SocialGroup = ({ fontSize, justify, align }: SocialGroupProps) => {
  return (
    <div
      className={`flex items-center gap-2 text-white font-mono ${fontSize} self-start`}
    >
      <Tooltip
        dataTip='github'
        style='border bg-sub-light dark:bg-sub-dark border-item-border-light dark:border-item-border-dark '
      >
        <Link href='https://github.com/lunarmoon7' passHref>
          <IconGithub />
        </Link>
      </Tooltip>
      <Tooltip
        dataTip='previous blog'
        style='border bg-sub-light dark:bg-sub-dark  border-item-border-light dark:border-item-border-dark '
      >
        <Link href='https://velog.io/@49crehbgr' passHref>
          <IconVelog />
        </Link>
      </Tooltip>
      <Tooltip
        dataTip='mail'
        style='border bg-sub-light dark:bg-sub-dark  border-item-border-light dark:border-item-border-dark '
      >
        <Link href='mailto:zentechie7@gmail.com' passHref>
          <IconGmail />
        </Link>
      </Tooltip>
    </div>
  );
};
